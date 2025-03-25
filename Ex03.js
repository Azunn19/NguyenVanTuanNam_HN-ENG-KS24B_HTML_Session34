document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    if (email === '' || password === '') {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      alert('Đăng nhập thành công!');
      window.location.href = 'home.html';
    } else {
      alert('Email hoặc mật khẩu không đúng!');
    }
  });
