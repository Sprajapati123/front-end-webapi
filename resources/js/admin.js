$(document).ready(function () {

    $('#addItems').submit(function (event) {
        event.preventDefault();

        var formdata = new FormData();
        var userForm = {
            itemname : $('#itemname').val(),
            itemprice : $('#itemprice').val(),
            itemdescription : $('#itemdescription').val(),
            category : $('#category').val(),
            image : $('#itemimage')[0].files[0]
        }

        for (key in userForm){
            formdata.append(key,userForm[key]);
        }


        $.ajax({

            url:'http://localhost:3001/v1/addItems',
            method:'POST',
            contentType:false,
            processData:false,
            data: formdata,
            headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
            dataType:'json',

            success: function(result,status) {
                console.log(result);
                // window.localStorage.setItem('token',result.Token);
                $('#messageadditem').html(result.message)
                // window.location.href='user/index.html'
            },

            error:function(jqXHR,status) {
                // $('#messageadditem').html(jqXHR.responseJSON.message)
            console.log(jqXHR)
            }
        })

    })


    $('#viewItems').click(function (event) {
        event.preventDefault()


        $.ajax({

            url:'http://localhost:3001/v1/viewItems',
            method:'GET',
            headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
            contentType:'application/json',
            dataType:'json',

            success: function(result,status) {
                console.log(result);
                // window.localStorage.setItem('token',result.Token);
                // $('#messageadditem').html(result.message)
                window.location.href='items.html'
                // console.log(result)
                for (key in result){
                    // console.log(result[key].itemname);

                    // $('#items').append('<li class="list-group-item">'+result[key].itemname+'</li>')
                    // $('#itemsdetail').append('<li class="list-group-item">'+result[key].itemname+'</li>')
                }
            },

            error:function(jqXHR,status) {
                // $('#messageadditem').html(jqXHR.responseJSON.message)
                console.log(jqXHR)
            }
        })

    })

    $('#viewaccounts').click(function (event) {
        event.preventDefault()

        $.ajax({

            url:'http://localhost:3001/v1/viewusers',
            method:'GET',
            contentType:'application/json',
            headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
            dataType:'json',

            success: function(result,status) {
                console.log(result);

                window.location.href='account.html'
                console.log(result)
                for (key in result){
                    console.log(result[key].username);

                }
            },

            error:function(jqXHR,status) {
                // $('#messageadditem').html(jqXHR.responseJSON.message)
                console.log(jqXHR)
            }
        })

    })



    $('#viewMessages').click(function (event) {
        event.preventDefault()

        $.ajax({

            url:'http://localhost:3001/v1/viewmessages',
            method:'GET',
            contentType:'application/json',
            headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
            dataType:'json',

            success: function(result,status) {
                console.log(result);

                window.location.href='messages.html'
                console.log(result)

            },

            error:function(jqXHR,status) {
                // $('#messageadditem').html(jqXHR.responseJSON.message)
                console.log(jqXHR)
            }
        })

    })

    $.ajax({

        url:'http://localhost:3001/v1/viewmessages',
        method:'GET',
        contentType:'application/json',
        headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
        dataType:'json',

        success: function(result,status) {
            console.log(result);

            for (key in result){



                $('#usermessage').append('  <tr>\n' +
                    '        <th scope="row">'+result[key].id+'</th>\n' +
                    '        <td>'+result[key].name+'</td>\n' +
                    '        <td>'+result[key].email+'</td>\n' +
                    '        <td>'+result[key].phone+'</td>\n' +
                    '        <td>'+result[key].message+'</td>\n' +
                    '    </tr>')

            }
        },

        error:function(jqXHR,status) {
            // $('#messageadditem').html(jqXHR.responseJSON.message)
            console.log(jqXHR)
        }
    })



    $('#admincart').click(function (event) {
        event.preventDefault()

        $.ajax({

            url:'http://localhost:3001/v1/viewbooking',
            method:'GET',
            contentType:'application/json',
            headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
            dataType:'json',

            success: function(result,status) {
                console.log(result);

                window.location.href='admincart.html'
                console.log(result)

            },

            error:function(jqXHR,status) {
                // $('#messageadditem').html(jqXHR.responseJSON.message)
                console.log(jqXHR)
            }
        })

    })


})