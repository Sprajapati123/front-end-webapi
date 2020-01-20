$(document).ready(function () {



	var user_id;


	$('#EditUser').submit(function(e) {

		user_id = $(this)[0].attributes.userid.nodeValue;

		e.preventDefault();

		var editData = {
			username: $('#email-reg').val(),
			address: $('#address-reg').val(),
			contact: $('#contact-reg').val(),
			gender: $('#gender').val(),
			userType: $('#usertype-reg').val()
		}

		$.ajax({

			url: 'http://localhost:3001/v1/updateusers/' + user_id ,
			method: "PUT",
			contentType: 'application/json',
			dataType: 'json',
			headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
			data:JSON.stringify(editData),
			success: function(result) {
				console.log(result)
				window.location.href = "account.html"
			},
			error: function(jqXHR) {
				console.log(jqXHR)
			}

		})

	})

	$('#userdetails').on('click','#userdelete',function () {

		user_id = $(this)[0].attributes.userid.nodeValue;

		var del = confirm("Are you sure?");

		if (del == true){
			$.ajax({
				url:'http://localhost:3001/v1/deleteuser/'+user_id,
				method:'delete',
				dataType: 'json',
				headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
				success: function(result){
					window.location.href =  "account.html";
					// $('#deletemessage').html(result.message)
				},
				error: function (jqXHR) {
					console.log(jqXHR);
				}

			})
		}
		else {
			window.location.href = "account.html";
		}
	})


	$('#userdetails').on('click','#useredit',function () {
		user_id = $(this)[0].attributes.userid.nodeValue;


		$.ajax({
			url:'http://localhost:3001/v1/geteachuser/'+user_id,
			method:'GET',
			dataType:'json',
			headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
			success:function (result) {

				$('#email-reg').val(result.username)
				$('#address-reg').val(result.address)
				$('#contact-reg').val(result.contact)
				$('#gender').val(result.gender)
				$('#usertype-reg').val(result.userType)


			},
			error:function (jqXHR) {
				console.log(jqXHR)
			}
		})
	})



	$.ajax({

		url:'http://localhost:3001/v1/viewusers',
		method:'GET',
		contentType:'application/json',
		headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
		dataType:'json',

		success: function(result,status) {
			console.log(result);

			for (key in result){
				console.log(result[key].itemprice);


				$('#userdetails').append('  <tr>\n' +
					'        <th scope="row">'+result[key].id+'</th>\n' +
					'        <td>'+result[key].username+'</td>\n' +
					'        <td>'+result[key].address+'</td>\n' +
					'        <td>'+result[key].contact+'</td>\n' +
					'        <td>'+result[key].gender+'</td>\n' +
					'        <td>'+result[key].userType+'</td>\n' +
					'        <td><button class="btn btn-primary" id="useredit" userid="'+ result[key].id +'" data-toggle="modal" data-target="#exampleModal" ><i class="fa fa-edit"></i></button></td>\n' +
					'        <td><button class="btn btn-danger" userid="'+ result[key].id +'" id="userdelete"><i class="fa fa-trash"></i></button></td>\n' +
					'    </tr>')

			}
		},

		error:function(jqXHR,status) {
			// $('#messageadditem').html(jqXHR.responseJSON.message)
			console.log(jqXHR)
		}
	})


})