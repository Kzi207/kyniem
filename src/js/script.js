 // Chặn chuột phải
    document.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    });

    // Chặn phím tắt
    document.addEventListener("keydown", function(e) {
      // Dùng tổ hợp phím Ctrl + ...
      if (e.ctrlKey) {
        const blocked = ['u', 's', 'c', 'x', 'v', 'p', 'a'];
        if (blocked.includes(e.key.toLowerCase())) {
          e.preventDefault();
        }
      }

      // Chặn F12
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Chặn Ctrl+Shift+I / J / C
      if (e.ctrlKey && e.shiftKey) {
        const blockedCombo = ['i', 'j', 'c'];
        if (blockedCombo.includes(e.key.toLowerCase())) {
          e.preventDefault();
        }
      }
    });