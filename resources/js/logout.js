$(document).ready(function () {


    $('#logout').click(function (event) {
        event.preventDefault();

        window.localStorage.removeItem('token')
        window.localStorage.removeItem('id')
        window.localStorage.removeItem('username')
        window.localStorage.removeItem('contact')
        window.localStorage.removeItem('gender')
        window.localStorage.removeItem('userType')
        window.localStorage.removeItem('address')
        window.localStorage.removeItem('password')
        window.location.href = "../login.html"

    })
    })
