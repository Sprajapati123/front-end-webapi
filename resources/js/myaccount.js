$(document).ready(function () {

    $.ajax({

        url:'http://localhost:3001/v1/viewusers',
        method:'GET',
        headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
        contentType:'application/json',
        dataType:'json',

        success: function(result,status) {

            console.log(result)
           var username = window.localStorage.getItem('username');
           var address = window.localStorage.getItem('address');
           var contact = window.localStorage.getItem('contact');
           var gender = window.localStorage.getItem('gender');
           var id = window.localStorage.getItem('id');
           var userType = window.localStorage.getItem('userType');

            $('#uid').val(id)
            $('#email-reg').val(username)
            $('#address-reg').val(address)
            $('#contact-reg').val(contact)
            $('#gender').val(gender)
            // $('#gender').val(gender)

        },

        error:function(jqXHR,status) {
            console.log(jqXHR)
        }
    })





    $('#editdetail').submit(function(e) {

        var uid = window.localStorage.getItem('id');
        console.log(uid)


        e.preventDefault();

        var editData = {
            username: $('#email-reg').val(),
            address: $('#address-reg').val(),
            contact: $('#contact-reg').val(),
            gender: $('#gender').val(),
        }

        $.ajax({

            url: 'http://localhost:3001/v1/updatemydetail/' + uid ,
            method: "PUT",
            contentType: 'application/json',
            dataType: 'json',

            data:JSON.stringify(editData),

            success: function(result) {
                console.log(result)
                // window.location.href = "../login.html"

                $('#message-update').html(result.message +' <br>' +'Plz Login again to access your latest information')
                // window.localStorage.setItem('username',result.result.username);
                // window.localStorage.setItem('address',result.result.address);
                // window.localStorage.setItem('contact',result.result.contact);
                // window.localStorage.setItem('gender',result.result.gender);


            },
            error: function(jqXHR) {
                console.log(jqXHR)
                $('#message-update').html(result.message)
            }

        })

    })
})