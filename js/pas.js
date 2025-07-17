document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Đổi lại tên đăng nhập và mật khẩu theo ý bạn
    if (username === 'daohangan' && password === '03112003') {
        // Lưu trạng thái đăng nhập (có thể dùng localStorage/sessionStorage)
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = "home.html";
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
};