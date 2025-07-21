 // Dữ liệu ứng dụng
        const appData = {
            activeTab: 'home',
            daysTogether: 0,
            musicPlaying: false,
            currentSongIndex: 0,
            songs: [
                {
                    title: "Chúng Ta Của Hiện Tại", ///// tên bài hát
                    artist: "Sơn Tùng M-TP",     //// nghệ sĩ
                    src: "./music/chungtacuahientay.mp3",   
                    cover: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
                },
                {
                    title: "Có Chắc Yêu Là Đây",
                    artist: "Sơn Tùng M-TP",
                    src: "./music/cochacyeuladay.mp3",
                    cover: "https://i.scdn.co/image/ab67616d00001e02663e3c7b4c3347e610b0a5a0"
                },
                {
                    title: "Nơi Này Có Anh",
                    artist: "Sơn Tùng M-TP",
                    src: "./music/noinaycoanh.mp3",
                    cover: "https://i.scdn.co/image/ab67616d00001e02a48964b5d9a3d6968ae3e0de"
                },
                {
                    title: "Anh Là Của Em",
                    artist: "Karik",
                    src: "./music/anhlacuaem.mp3",
                    cover: "https://i.scdn.co/image/ab67616d00001e02a48964b5d9a3d6968ae3e0de"
                }
            ],
            memories: [
                {
                    id: 1,
                    title: "Ngày đầu tiên gặp nhau",
                    date: "29/09/2024",
                    image: "./img/10.png",
                    description: "Ngày đầu tiên chúng ta gặp nhau tại trường tặng cho sửa cho em."
                },
                {
                    id: 2,
                    title: "Đi chơi cùng nhau",
                    date: "",
                    image: "./img/3.jpg",
                    description: "Kỷ niệm chuyến du lịch đầu tiên của hai đứa. Cảnh đẹp, người đẹp, mọi thứ thật hoàn hảo..."
                },
                {
                    id: 3,
                    title: "Đi chụp hình nè",
                    date: "30/7/2025",
                    image: "./img/9.jpg",
                    description: "Những tấm ảnh tự chụp cùng nhau<3"
                }
            ],
            importantDates: [
                { name: "Sinh nhật anh", date: "22/11/", countdown: "Còn 120 ngày" },
                { name: "Sinh nhật em", date: "09/11/", countdown: "Còn 40 ngày" },
                { name: "Ngày kỷ niệm", date: "08/10/", countdown: "Còn 85 ngày" },
                { name: "Valentine", date: "14/2/", countdown: "Còn 215 ngày" }
            ],
            letters: [
                {
                    id: 1,
                    title: "Thư đầu tiên gửi em",
                    date: "2024-10-08",
                    content: "Em yêu, từ ngày đầu tiên gặp em, anh đã biết rằng em chính là người mà anh đã tìm kiếm suốt cuộc đời này. Mỗi ngày bên em là một ngày hạnh phúc, mỗi nụ cười của em làm trái tim anh rung động. Anh yêu em rất nhiều! ❤️"
                },
                {
                    id: 2,
                    title: "Những lời yêu thương",
                    date: "2024-11-15",
                    content: "Em có biết không, mỗi khi nhìn thấy em, anh cảm thấy như cả thế giới đều dừng lại. Em là ánh sáng trong cuộc đời anh, là niềm vui mỗi sáng thức dậy. Anh mong rằng chúng ta sẽ mãi mãi bên nhau, cùng nhau xây dựng một tương lai tươi đẹp. Yêu em! 💕"
                },
                {
                    id: 3,
                    title: "Lời hứa của anh",
                    date: "2024-12-20",
                    content: "Em yêu, anh hứa sẽ luôn yêu thương, chăm sóc và bảo vệ em. Anh sẽ làm tất cả để em luôn được hạnh phúc. Dù có khó khăn gì, anh sẽ luôn ở bên em, cùng em vượt qua mọi thử thách. Anh yêu em vô cùng! 🌹"
                }
            ]
        };

        // Khởi tạo ứng dụng
        document.addEventListener('DOMContentLoaded', function() {
            // Nếu có hash #main thì bỏ qua màn hình khóa
            if (window.location.hash === '#main') {
                const lockScreen = document.getElementById('lock-screen');
                const mainApp = document.getElementById('main-app');
                if (lockScreen && mainApp) {
                    lockScreen.classList.add('hidden');
                    mainApp.classList.remove('hidden');
                }
                // Xóa hash để không ảnh hưởng lần sau
                history.replaceState(null, '', window.location.pathname);
            }
            // Thêm sự kiện cho nút Vòng quay (menu desktop)
            const roundaboutBtn = document.getElementById('roundabout-menu-btn');
            if (roundaboutBtn) {
                roundaboutBtn.addEventListener('click', function() {
                    window.location.href = 'vongquay.html';
                });
            }
            // Thêm sự kiện cho nút Vòng quay (menu mobile)
            const roundaboutBtnMobile = document.getElementById('roundabout-menu-btn-mobile');
            if (roundaboutBtnMobile) {
                roundaboutBtnMobile.addEventListener('click', function() {
                    window.location.href = 'vongquay.html';
                });
            }
            // Tính số ngày yêu nhau
            calculateLoveDays();
            
            // Cài đặt trình phát nhạc
            setupMusicPlayer();
            
            // Hiển thị tab mặc định
            showTab(appData.activeTab);
            
            // Thêm sự kiện cho các nút tab
            document.querySelectorAll('.tab-button').forEach(button => {
                button.addEventListener('click', function() {
                    const tab = this.getAttribute('data-tab');
                    showTab(tab);
                });
            });
            
            // Xử lý menu mobile
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const closeMobileMenuButton = document.getElementById('close-mobile-menu');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuOverlay = document.getElementById('menu-overlay');

            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.add('show');
                menuOverlay.classList.add('show');
                document.body.style.overflow = 'hidden';
            });

            closeMobileMenuButton.addEventListener('click', closeMobileMenu);
            
            menuOverlay.addEventListener('click', closeMobileMenu);

            function closeMobileMenu() {
                mobileMenu.classList.remove('show');
                menuOverlay.classList.remove('show');
                document.body.style.overflow = '';
            }

            // Đóng menu khi chọn một tab trên mobile
            document.querySelectorAll('#mobile-menu .tab-button').forEach(button => {
                button.addEventListener('click', function() {
                    closeMobileMenu();
                    const tab = this.getAttribute('data-tab');
                    showTab(tab);
                });
            });

            // Màn hình khóa
            const lockScreen = document.getElementById('lock-screen');
            const mainApp = document.getElementById('main-app');
            const passcodeDots = [];
            for (let i = 1; i <= 8; i++) passcodeDots.push(document.getElementById(`dot-${i}`));
            const numButtons = lockScreen.querySelectorAll('.num-btn[data-number]');
            const deleteBtn = document.getElementById('delete-btn');
            const passcodeError = document.getElementById('passcode-error');
            let enteredPasscode = '';
            const correctPasscode = '09112009'; // Đổi mật khẩu tại đây
            function updateDots() {
                passcodeDots.forEach((dot, idx) => {
                    if (idx < enteredPasscode.length) dot.classList.add('bg-white', 'shadow-lg');
                    else dot.classList.remove('bg-white', 'shadow-lg');
                });
            }
            numButtons.forEach(btn => btn.addEventListener('click', function() {
                if (enteredPasscode.length < 8) {
                    enteredPasscode += this.getAttribute('data-number');
                    updateDots();
                    if (enteredPasscode.length === 8) {
                        if (enteredPasscode === correctPasscode) {
                            lockScreen.classList.add('hidden');
                            mainApp.classList.remove('hidden');
                        } else {
                            passcodeError.classList.remove('hidden');
                            setTimeout(() => {
                                enteredPasscode = '';
                                updateDots();
                                passcodeError.classList.add('hidden');
                            }, 800);
                        }
                    }
                }
            }));
            deleteBtn.addEventListener('click', function() {
                if (enteredPasscode.length > 0) {
                    enteredPasscode = enteredPasscode.slice(0, -1);
                    updateDots();
                }
            });
            updateDots();

            // Thêm sự kiện cho nút 'Xem tất cả kỷ niệm' ở Home
            document.body.addEventListener('click', function(e) {
                if (e.target.closest('button') && e.target.textContent.includes('Xem tất cả kỷ niệm')) {
                    showTab('album');
                }
            });
        });

        // Tính số ngày yêu nhau
        function calculateLoveDays() {
            const startDate = new Date("2024-10-08");
            const today = new Date();
            const diffTime = Math.abs(today - startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            appData.daysTogether = diffDays;
            
            // Cập nhật hiển thị nếu tab countdown đang hiển thị
            if (appData.activeTab === 'countdown') {
                document.getElementById('days-together').textContent = diffDays.toLocaleString();
            }
        }

        // Hiển thị tab được chọn
        function showTab(tabName) {
            appData.activeTab = tabName;
            
            // Cập nhật trạng thái active của các nút tab
            document.querySelectorAll('.tab-button').forEach(button => {
                if (button.getAttribute('data-tab') === tabName) {
                    button.classList.add('text-pink-600');
                    button.classList.remove('text-gray-600');
                } else {
                    button.classList.remove('text-pink-600');
                    button.classList.add('text-gray-600');
                }
            });
            
            // Lấy template tương ứng
            const template = document.getElementById(`${tabName}-template`);
            const content = template.content.cloneNode(true);
            
            // Xóa nội dung hiện tại và thêm nội dung mới
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = '';
            mainContent.appendChild(content);
            
            // Tải dữ liệu cụ thể cho tab
            switch(tabName) {
                case 'memories':
                    loadMemories();
                    break;
                case 'music':
                    loadMusicPlayer();
                    // Thêm sự kiện cho các nút điều khiển nhạc
                    document.getElementById('play-button').addEventListener('click', togglePlay);
                    document.getElementById('prev-song').addEventListener('click', prevSong);
                    document.getElementById('next-song').addEventListener('click', nextSong);
                    break;
                case 'countdown':
                    updateLoveTime();
                    if (window.loveInterval) clearInterval(window.loveInterval);
                    window.loveInterval = setInterval(updateLoveTime, 1000);
                    updateImportantDates();
                    break;
                case 'quiz':
                    // Không cần tải dữ liệu cụ thể cho quiz, chỉ hiển thị giao diện
                    break;
                case 'plan':
                    document.body.classList.add('plan-tab');
                    break;
                case 'album':
                    // Thêm script Swiper nếu chưa có
                    if (!document.getElementById('swiper-script')) {
                        const s = document.createElement('script');
                        s.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
                        s.id = 'swiper-script';
                        document.body.appendChild(s);
                        s.onload = renderAlbum;
                    } else {
                        renderAlbum();
                    }
                    break;
                case 'letter':
                    loadLetters();
                    break;
                case 'mistake':
                    document.body.classList.add('mistake-tab');
                    showMistakeTab();
                    break;
                default:
                    document.body.classList.remove('plan-tab');
                    document.body.classList.remove('mistake-tab');
                    break;
            }
        }

        // Tải danh sách kỷ niệm
        function loadMemories() {
            const container = document.getElementById('memories-container');
            container.innerHTML = '';
            
            appData.memories.forEach(memory => {
                const memoryElement = document.createElement('div');
                memoryElement.className = 'bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:shadow-2xl hover:-translate-y-1 memory-card';
                memoryElement.innerHTML = `
                    <img src="${memory.image}" alt="${memory.title}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-2 text-pink-600">${memory.title}</h3>
                        <p class="text-gray-600 text-sm">${memory.date} - ${memory.description}</p>
                        <div class="mt-3 flex justify-between text-sm text-gray-500">
                            <span>📷 Hình ảnh</span>
                            <span>❤️ Thêm vào yêu thích</span>
                        </div>
                    </div>
                `;
                container.appendChild(memoryElement);
            });
        }

        // Cài đặt trình phát nhạc
        function setupMusicPlayer() {
            const audio = document.getElementById('music-player');
            let progressInterval;
            
            // Sự kiện khi metadata của bài hát được tải
            audio.addEventListener('loadedmetadata', function() {
                document.getElementById('duration').textContent = formatTime(audio.duration);
            });
            
            // Sự kiện khi bài hát kết thúc
            audio.addEventListener('ended', function() {
                nextSong();
            });
            
            // Sự kiện khi thời gian phát thay đổi
            audio.addEventListener('timeupdate', function() {
                const progress = (audio.currentTime / audio.duration) * 100;
                document.getElementById('progress-bar').style.width = `${progress}%`;
                document.getElementById('current-time').textContent = formatTime(audio.currentTime);
            });
        }

        // Tải trình phát nhạc
        function loadMusicPlayer() {
            const audio = document.getElementById('music-player');
            
            // Cập nhật thông tin bài hát hiện tại
            updateCurrentSong();
            
            // Tải danh sách phát
            const playlist = document.getElementById('playlist');
            playlist.innerHTML = '';
            
            appData.songs.forEach((song, index) => {
                const li = document.createElement('li');
                li.className = `p-2 rounded cursor-pointer transition-colors playlist-item ${index === appData.currentSongIndex ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`;
                li.setAttribute('data-index', index);
                li.innerHTML = `
                    <div class="flex justify-between items-center">
                        <span class="font-medium">${song.title}</span>
                        <span class="text-xs text-gray-500">${song.artist}</span>
                    </div>
                `;
                playlist.appendChild(li);
                
                // Thêm sự kiện click cho từng bài hát trong playlist
                li.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    playSong(index);
                });
            });
            
            // Nếu đang phát nhạc, tiếp tục phát bài hát hiện tại
            if (appData.musicPlaying) {
                audio.src = appData.songs[appData.currentSongIndex].src;
                audio.play();
            }
        }

        // Cập nhật thông tin bài hát hiện tại
        function updateCurrentSong() {
            const currentSong = appData.songs[appData.currentSongIndex];
            document.getElementById('album-cover').src = currentSong.cover;
            document.getElementById('song-title').textContent = currentSong.title;
            document.getElementById('song-artist').textContent = currentSong.artist;
            
            // Cập nhật trạng thái active trong playlist
            document.querySelectorAll('.playlist-item').forEach((item, index) => {
                if (index === appData.currentSongIndex) {
                    item.classList.add('bg-pink-100', 'text-pink-700');
                    item.classList.remove('hover:bg-gray-100');
                } else {
                    item.classList.remove('bg-pink-100', 'text-pink-700');
                    item.classList.add('hover:bg-gray-100');
                }
            });
        }

        // Phát/tạm dừng nhạc
        function togglePlay() {
            const audio = document.getElementById('music-player');
            const playIcon = document.getElementById('play-icon');
            
            if (appData.musicPlaying) {
                audio.pause();
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
                appData.musicPlaying = false;
            } else {
                // Nếu chưa có src, đặt src bài hát hiện tại
                if (!audio.src) {
                    audio.src = appData.songs[appData.currentSongIndex].src;
                }
                audio.play().then(() => {
                    playIcon.classList.remove('fa-play');
                    playIcon.classList.add('fa-pause');
                    appData.musicPlaying = true;
                }).catch(error => {
                    console.error("Lỗi khi phát nhạc:", error);
                });
            }
        }

        // Phát bài hát cụ thể
        function playSong(index) {
            const audio = document.getElementById('music-player');
            appData.currentSongIndex = index;
            audio.src = appData.songs[index].src;
            audio.play().then(() => {
                appData.musicPlaying = true;
                
                // Cập nhật giao diện
                updateCurrentSong();
                document.getElementById('play-icon').classList.remove('fa-play');
                document.getElementById('play-icon').classList.add('fa-pause');
            }).catch(error => {
                console.error("Lỗi khi phát nhạc:", error);
            });
        }

        // Bài hát tiếp theo
        function nextSong() {
            appData.currentSongIndex = (appData.currentSongIndex + 1) % appData.songs.length;
            playSong(appData.currentSongIndex);
        }

        // Bài hát trước đó
        function prevSong() {
            appData.currentSongIndex = (appData.currentSongIndex - 1 + appData.songs.length) % appData.songs.length;
            playSong(appData.currentSongIndex);
        }

        // Định dạng thời gian (phút:giây)
        function formatTime(seconds) {
            if (isNaN(seconds)) return "0:00";
            
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }

        function updateLoveTime() {
            const startDate = new Date("2024-10-08T00:00:00"); // Ngày bắt đầu yêu
            const now = new Date();
            let diff = now - startDate;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            diff -= days * (1000 * 60 * 60 * 24);
            const hours = Math.floor(diff / (1000 * 60 * 60));
            diff -= hours * (1000 * 60 * 60);
            const minutes = Math.floor(diff / (1000 * 60));
            diff -= minutes * (1000 * 60);
            const seconds = Math.floor(diff / 1000);
            
            document.getElementById('days-together').textContent = days;
            document.getElementById('hours-together').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes-together').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds-together').textContent = seconds.toString().padStart(2, '0');
        }

        function updateImportantDates() {
            const list = document.getElementById('important-dates-list');
            if (!list) return;
            list.innerHTML = '';
            const today = new Date();
            appData.importantDates.forEach(event => {
                // Xử lý ngày dạng dd/mm/yyyy hoặc dd/mm/
                let [day, month, year] = event.date.split('/');
                if (!year || year === '') {
                    year = today.getFullYear();
                }
                let eventDate = new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00`);
                // Nếu sự kiện đã qua trong năm nay, chuyển sang năm sau
                if (eventDate < today) {
                    eventDate.setFullYear(eventDate.getFullYear() + 1);
                }
                const diffTime = eventDate - today;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                const daysText = diffDays > 0 ? `Còn ${diffDays} ngày` : (diffDays === 0 ? 'Hôm nay!' : 'Đã qua');
                const li = document.createElement('li');
                li.className = 'flex justify-between items-center bg-pink-50 rounded-lg px-4 py-2';
                li.innerHTML = `<span class="font-medium text-gray-700">${event.name}</span><span class="text-pink-600 font-semibold">${daysText}</span>`;
                list.appendChild(li);
            });
        }

        function renderAlbum() {
            const images = [
                "./img/1.jpg",
                "./img/2.jpg",
                "./img/3.jpg",
                "./img/4.jpg",
                "./img/5.jpg",
                "./img/6.jpg",
                "./img/7.jpg",
                "./img/8.jpg",
                "./img/9.jpg",
            ];
            const album = document.getElementById("album");
            if (!album) return;
            album.innerHTML = '';
            images.forEach(link => {
                const slide = document.createElement("div");
                slide.className = "swiper-slide";
                slide.innerHTML = `<img src="${link}" alt="Ảnh album">`;
                album.appendChild(slide);
            });
            if (window.albumSwiper) window.albumSwiper.destroy(true, true);
            window.albumSwiper = new Swiper('.swiper', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                loop: true
            });
        }

        // Tải danh sách thư
        function loadLetters() {
            const container = document.getElementById('letters-container');
            if (!container) return;
            
            container.innerHTML = '';
            
            appData.letters.forEach(letter => {
                const letterElement = document.createElement('div');
                letterElement.className = 'bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:shadow-2xl hover:-translate-y-1 memory-card';
                letterElement.innerHTML = `
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-bold text-lg text-pink-600">${letter.title}</h3>
                            <span class="text-sm text-gray-500">${formatDate(letter.date)}</span>
                        </div>
                        <p class="text-gray-700 text-sm leading-relaxed mb-4">${letter.content.substring(0, 150)}${letter.content.length > 150 ? '...' : ''}</p>
                        <div class="flex justify-between items-center">
                            <button class="text-pink-500 hover:text-pink-700 text-sm font-medium read-letter-btn" data-letter-id="${letter.id}">
                                <i class="fas fa-eye mr-1"></i>Đọc thư
                            </button>
                            <div class="flex space-x-2">
                                <button class="text-gray-500 hover:text-pink-500 text-sm edit-letter-btn" data-letter-id="${letter.id}">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="text-gray-500 hover:text-red-500 text-sm delete-letter-btn" data-letter-id="${letter.id}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(letterElement);
            });
            
            // Thêm sự kiện cho các nút
            addLetterEventListeners();
            
            // Thêm sự kiện cho form viết thư mới
            const newLetterForm = document.getElementById('new-letter-form');
            if (newLetterForm) {
                newLetterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    addNewLetter();
                });
            }
        }

        // Thêm sự kiện cho các nút thư
        function addLetterEventListeners() {
            // Nút đọc thư
            document.querySelectorAll('.read-letter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const letterId = parseInt(this.getAttribute('data-letter-id'));
                    const letter = appData.letters.find(l => l.id === letterId);
                    if (letter) {
                        showLetterModal(letter);
                    }
                });
            });
            
            // Nút sửa thư
            document.querySelectorAll('.edit-letter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const letterId = parseInt(this.getAttribute('data-letter-id'));
                    const letter = appData.letters.find(l => l.id === letterId);
                    if (letter) {
                        editLetter(letter);
                    }
                });
            });
            
            // Nút xóa thư
            document.querySelectorAll('.delete-letter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const letterId = parseInt(this.getAttribute('data-letter-id'));
                    if (confirm('Bạn có chắc muốn xóa thư này?')) {
                        deleteLetter(letterId);
                    }
                });
            });
        }

        // Hiển thị modal đọc thư
        function showLetterModal(letter) {
            // Tạo modal
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold text-pink-600">${letter.title}</h3>
                        <button class="text-gray-500 hover:text-gray-700 text-2xl close-modal">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="text-sm text-gray-500 mb-4">${formatDate(letter.date)}</div>
                    <div class="text-gray-700 leading-relaxed whitespace-pre-wrap">${letter.content}</div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Sự kiện đóng modal
            modal.querySelector('.close-modal').addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            // Đóng modal khi click bên ngoài
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        }

        // Sửa thư
        function editLetter(letter) {
            // Điền form với dữ liệu thư hiện tại
            document.getElementById('letter-title').value = letter.title;
            document.getElementById('letter-content').value = letter.content;
            
            // Thay đổi nút submit
            const submitBtn = document.querySelector('#new-letter-form button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-save mr-2"></i>Cập nhật thư';
            submitBtn.setAttribute('data-edit-id', letter.id);
            
            // Scroll đến form
            document.getElementById('new-letter-form').scrollIntoView({ behavior: 'smooth' });
        }

        // Xóa thư
        function deleteLetter(letterId) {
            const index = appData.letters.findIndex(l => l.id === letterId);
            if (index !== -1) {
                appData.letters.splice(index, 1);
                loadLetters();
                alert('Đã xóa thư thành công!');
            }
        }

        // Thêm thư mới hoặc cập nhật thư
        function addNewLetter() {
            const title = document.getElementById('letter-title').value;
            const content = document.getElementById('letter-content').value;
            const submitBtn = document.querySelector('#new-letter-form button[type="submit"]');
            const editId = submitBtn.getAttribute('data-edit-id');
            
            if (!title || !content) {
                alert('Vui lòng điền đầy đủ thông tin!');
                return;
            }
            
            if (editId) {
                // Cập nhật thư hiện có
                const letterIndex = appData.letters.findIndex(l => l.id === parseInt(editId));
                if (letterIndex !== -1) {
                    appData.letters[letterIndex].title = title;
                    appData.letters[letterIndex].content = content;
                    
                    // Reset form và nút
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Gửi thư 💖';
                    submitBtn.removeAttribute('data-edit-id');
                    
                    const successMessage = document.createElement('div');
                    successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4';
                    successMessage.innerHTML = 'Thư đã được cập nhật thành công! 💖';
                    
                    const form = document.getElementById('new-letter-form');
                    form.parentNode.insertBefore(successMessage, form);
                    
                    setTimeout(() => {
                        if (successMessage.parentNode) {
                            successMessage.parentNode.removeChild(successMessage);
                        }
                    }, 3000);
                }
            } else {
                // Thêm thư mới
                const newLetter = {
                    id: Date.now(), // Sử dụng timestamp làm ID
                    title: title,
                    content: content,
                    date: new Date().toISOString().split('T')[0] // Format YYYY-MM-DD
                };
                
                appData.letters.unshift(newLetter); // Thêm vào đầu danh sách
                
                const successMessage = document.createElement('div');
                successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4';
                successMessage.innerHTML = 'Thư đã được gửi thành công! 💖';
                
                const form = document.getElementById('new-letter-form');
                form.parentNode.insertBefore(successMessage, form);
                
                setTimeout(() => {
                    if (successMessage.parentNode) {
                        successMessage.parentNode.removeChild(successMessage);
                    }
                }, 3000);
            }
            
            loadLetters();
            document.getElementById('new-letter-form').reset();
        }

        // Định dạng ngày
        function formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('vi-VN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        // Chặn bôi đen văn bản
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
        });

        // Chặn menu chuột phải
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // Chặn copy (Ctrl+C)
        document.addEventListener('copy', function(e) {
            e.preventDefault();
            alert('Không cho phép sao chép nội dung!');
        });

        // Chặn cut (Ctrl+X)
        document.addEventListener('cut', function(e) {
            e.preventDefault();
        });

        // Chặn paste (Ctrl+V)
        document.addEventListener('paste', function(e) {
            e.preventDefault();
        });

        // Hiển thị tab Lỗi của anh
        function showMistakeTab() {
          // Lấy template
          const template = document.getElementById('mistake-template');
          const content = template.content.cloneNode(true);
          const mainContent = document.getElementById('main-content');
          mainContent.innerHTML = '';
          mainContent.appendChild(content);

          // Gắn lại sự kiện cho form và load dữ liệu
          setTimeout(() => {
            const form = document.getElementById("loveForm");
            if (form) {
              form.addEventListener("submit", function(e) {
                e.preventDefault();
                document.getElementById("timestamp").value = new Date().toLocaleString();
                const formData = new FormData(form);
                fetch("https://sheetdb.io/api/v1/9y1uawujxex5m", {
                  method: "POST",
                  body: formData
                })
                .then(res => res.json())
                .then(() => {
                  document.getElementById("successMsg").style.display = "block";
                  form.reset();
                  loadEntries();
                });
              });
            }
            window.loadEntries = function() {
              fetch("https://sheetdb.io/api/v1/9y1uawujxex5m")
                .then(response => response.json())
                .then(data => {
                  const entriesDiv = document.getElementById("entries");
                  const countDiv = document.getElementById("errorCount");
                  entriesDiv.innerHTML = '<h2>Danh sách lỗi của anh 📜</h2>';
                  countDiv.textContent = `Tổng cộng anh đã gây ra ${data.length} lỗi 😢`;
                  entriesDiv.appendChild(countDiv);
                  data.reverse().forEach(entry => {
                    const div = document.createElement("div");
                    div.className = "entry";
                    div.innerHTML = `
                      <p><strong>Lỗi:</strong> ${entry.mistake}</p>
                      <p><strong>Em muốn anh:</strong> ${entry.suggestion}</p>
                      <p style="font-size: 0.85em; color: gray;">🕒 ${entry.time}</p>
                    `;
                    entriesDiv.appendChild(div);
                  });
                });
            }
            window.loadEntries();
          }, 0);
        }


   