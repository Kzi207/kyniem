
# Kỷ Niệm - Profile KhanhDuy

Website cá nhân lãng mạn, lưu giữ kỷ niệm, hình ảnh, âm nhạc và những lời nhắn yêu thương. Giao diện hiện đại, hiệu ứng đẹp mắt, dễ sử dụng trên cả máy tính và điện thoại.

## Giới thiệu tính năng

- **Trang chủ (index.html):**
  - Giao diện chính với hiệu ứng động, hình nền đẹp.
  - Menu truy cập nhanh các mục: Trang chủ, Vòng quay kỷ niệm, v.v.
  - Có màn hình khoá bảo vệ nội dung (nhập mã 8 số), giúp riêng tư hơn.
  - Khi quay lại từ vòng quay, có thể bỏ qua màn hình khoá.

- **Vòng quay kỷ niệm (h.html):**
  - Hiển thị các hình ảnh, văn bản kỷ niệm dưới dạng carousel 3D xoay vòng.
  - Có nhạc nền lãng mạn, hiệu ứng chuyển động mượt mà.
  - Nút "Quay lại" đẹp, lãng mạn, trở về trang chủ chỉ với 1 click.
  - Hỗ trợ hiệu ứng âm thanh khi thao tác, hiệu ứng trái tim, bóng đổ, v.v.
  - Tương tác tốt trên cả điện thoại và máy tính.

- **Tuỳ chỉnh nội dung dễ dàng:**
  - Thay đổi hình ảnh, nhạc, văn bản chỉ bằng cách sửa 1 đoạn cấu hình trong file `vongquay.html`.
  - Có thể thêm/xoá hình ảnh, câu chữ, đổi nhạc nền theo ý thích.

- **Không cần cài đặt:**
  - Chỉ cần mở file HTML bằng trình duyệt, không cần server hay backend.
  - Dễ dàng chia sẻ cho người thân, bạn bè.

## Hướng dẫn sử dụng cụ thể

### 1. Mở trang chủ
- Mở file `index.html` bằng trình duyệt (Chrome, Edge, Firefox, Safari...)
- Nếu có màn hình khoá, nhập đúng mã 8 số để vào bên trong.

### 2. Truy cập vòng quay kỷ niệm
- Trên menu, chọn mục "Vòng quay" để chuyển sang trang `vongquay.html`.
- Trang này sẽ tự động phát nhạc nền, hiển thị các hình ảnh và câu chữ kỷ niệm dưới dạng carousel 3D.
- Có thể bấm nút mũi tên để xoay vòng, hoặc kéo chuột/ngón tay để xoay thủ công.
- Nhấn nút "Quay lại" (có trái tim) ở góc trên để trở về trang chủ.

### 3. Tuỳ chỉnh nội dung vòng quay
- Mở file `vongquay.html` bằng trình soạn thảo (VS Code, Notepad++...)
- Tìm đoạn cấu hình sau (gần đầu file):

## Cấu trúc thư mục
- `index.html`: Trang chính của ứng dụng.
- `h.html`: Trang vòng quay kỷ niệm (carousel hình ảnh, nhạc, text).
- `img/`: Thư mục chứa hình ảnh kỷ niệm.
- `music/`: Thư mục chứa file nhạc nền.

## Hướng dẫn sử dụng
1. Mở `index.html` để vào trang chủ.
2. Chọn menu "Vòng quay" để vào trang vòng quay kỷ niệm (`vongquay.html`).
3. Nhấn nút "Quay lại" để trở về trang chủ (bỏ qua màn hình khoá).
4. Để thay đổi hình ảnh, nhạc, văn bản: sửa biến `window.dataRoundaboutLoveLoom` trong file `vongquay.html`.

## Tuỳ chỉnh nội dung vòng quay
Trong file `h.html`, tìm đoạn:

```js
window.dataRoundaboutLoveLoom = {
  template: "roundabout",
  data: {
    text: [
      "anh yêu em",
      "anh thương em",
      "a muốn cưới em",
      "nhớ em quá"
    ],
    backgroundMusic: "/music/anhlacuaem.mp3", // Đường dẫn nhạc nền
    image: [
      "link_ảnh_1.jpg",
      "link_ảnh_2.jpg",
      // ... thêm link ảnh tuỳ ý
    ]
  }
};
```

- Để đổi **văn bản**: sửa hoặc thêm các dòng trong mảng `text`.
- Để đổi **hình ảnh**: thay link trong mảng `image` (có thể dùng link online hoặc file trong thư mục `img/`).
- Để đổi **nhạc nền**: sửa đường dẫn ở `backgroundMusic` (có thể dùng file trong thư mục `music/`).

### 4. Thêm hình ảnh/nhạc mới
- Thêm file ảnh vào thư mục `img/`, nhạc vào thư mục `music/`.
- Sửa lại đường dẫn trong cấu hình cho đúng tên file vừa thêm.

### 5. Chia sẻ hoặc lưu trữ
- Có thể copy toàn bộ thư mục lên Google Drive, OneDrive, hoặc gửi cho bạn bè.
- Không cần cài đặt gì thêm, chỉ cần mở file HTML là dùng được.

## Yêu cầu
- Trình duyệt hiện đại hỗ trợ ES6, CSS3.
- Không cần cài đặt backend, chỉ cần mở file HTML bằng trình duyệt.

## Bản quyền
- Dành cho mục đích cá nhân, học tập, kỷ niệm.
- Hình ảnh, nhạc sử dụng trong thư mục là tài sản cá nhân hoặc đã được cho phép sử dụng.

---
Mọi thắc mắc hoặc góp ý, liên hệ: Facebook (https://www.facebook.com/kzi207)
## Changelog
- 2023-07-10: Bản v2.0, sửa lỗi không thể quay lại từ vòng quay.


