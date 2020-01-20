
$(document).ready(function () {
	var name;

	$('#registerForm').submit(function (event) {
		event.preventDefault();


		var userForm = {
			username : $('#email-reg').val(),
			password : $('#password-reg').val(),
			address : $('#address-reg').val(),
			contact : $('#contact-reg').val(),
			gender : $('#gender').val(),
			// image : $('#image-reg')[0].files[0],
		}



		$.ajax({

			url:'http://localhost:3001/v1/users/register',
			method:'POST',
			contentType:'application/json',
			data: JSON.stringify(userForm),
			dataType:'json',


			success: function(result,status) {

			$('#message').html(result.message)

				// console.log(result)
				window.location.href = "login.html"

				//next();
			},

			error:function(jqXHR,status) {
				$('#message').html(jqXHR.responseJSON.message)
				// console.log(jqXHR)
			}
		})

	})




	$('#loginForm').submit(function (event) {
		event.preventDefault();

		var userForm2 = {
			username : $('#username').val(),
			password : $('#password').val(),
		}


		$.ajax({

			url:'http://localhost:3001/v1/users/login',
			method:'POST',
			contentType:'application/json',
			data: JSON.stringify(userForm2),
			dataType:'json',
			success: function(result,status) {


				window.localStorage.setItem('token',result.token);
				window.localStorage.setItem('id',result.result.id);
				window.localStorage.setItem('username',result.result.username);
				window.localStorage.setItem('password',result.result.password);
				window.localStorage.setItem('address',result.result.address);
				window.localStorage.setItem('contact',result.result.contact);
				window.localStorage.setItem('gender',result.result.gender);
				window.localStorage.setItem('userType',result.result.userType);


				if (result.result.userType == "User"){
					window.location.href='user/index.html'

				}
				else
				{
					window.location.href='admin/index.html'

				}
				// $('#message2').html(result.message)
				// console.log(result.userType)

			},

			error:function(jqXHR,status) {
				$('#message2').html(jqXHR.responseJSON.message)

			}
		})

	})




})