document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
  
    // Kiểm tra nhập đầy đủ
    if (email === '' || password === '') {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
  
    // Lấy dữ liệu từ localStorage (danh sách users đã đăng ký)
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Kiểm tra email & password có khớp với user nào đã đăng ký không
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      alert('Đăng nhập thành công!');
      // Chuyển hướng sang trang chủ (ví dụ home.html)
      window.location.href = 'home.html';
    } else {
      alert('Email hoặc mật khẩu không đúng!');
    }
  });