document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (email === '' || password === '' || confirmPassword === '') {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    if (password !== confirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      alert('Email đã tồn tại!');
      return;
    }
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Đăng ký thành công!');
    document.getElementById('registerForm').reset();
  });
