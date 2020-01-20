$(document).ready(function () {

    $('#feedback').submit(function (event) {
        event.preventDefault();


        var userForm = {
            name : $('#name').val(),
            email : $('#email').val(),
            phone : $('#phone').val(),
            message : $('#message').val(),

        }


        $.ajax({

            url:'http://localhost:3001/v1/feedback',
            method:'POST',
            contentType:'application/json',
            headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
            data: JSON.stringify(userForm),
            dataType:'json',


            success: function(result,status) {

                $('#message-feedback').html(result.message)
                // console.log("success")

                //next();
            },

            error:function(jqXHR,status) {
                $('#message-feedback').html(jqXHR.responseJSON.message)
                // console.log(jqXHR)
            }
        })

    })


})