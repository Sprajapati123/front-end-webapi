$(document).ready(function () {

    $('#itemdetails').on('click','#addtocart',function () {
        item_id = $(this)[0].attributes.itemid.nodeValue;

        $.ajax({
            url:'http://localhost:3001/v1/geteachitem/'+item_id,
            method:'GET',
            dataType:'json',
            headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
            success:function (result) {
                console.log(result)

               var username= window.localStorage.getItem('username');
                var uid= window.localStorage.getItem('id');

                $('#uname').val(username)
                $('#uid').val(uid)
                $('#iid').val(result.id)
                $('#iname').val(result.itemname)
                $('#iprice').val(result.itemprice)
                $('#idescription').val(result.itemdescription)
                $('#icategory').val(result.category)


            },
            error:function (jqXHR) {
                console.log(jqXHR)
            }
        })
    })

    $('#AddCart').submit(function (event) {
        event.preventDefault();


        var userForm = {
            uname:$('#uname').val(),
            uid:$('#uid').val(),
            iname:$('#iname').val(),
            iid:$('#iid').val(),
            iprice:$('#iprice').val(),
            icategory:$('#icategory').val(),
            idescription:$('#idescription').val(),
            city:$('#city').val(),
            street:$('#street').val(),
            quantity:$('#quantity').val(),

        }

       // var a= $('#iprice').val();
       // var b=$('#quantity').val();
       //
       // var c=a*b;

       console.log($('#uname').val());
       console.log($('#uid').val());
       console.log($('#iname').val());
       console.log($('#iid').val());
       console.log($('#iprice').val());
       console.log($('#icategory').val());
       console.log($('#idescription').val());
       console.log($('#city').val());
       console.log($('#street').val());
       console.log($('#quantity').val());

        $.ajax({

            url:'http://localhost:3001/v1/addtocart',
            method:'POST',
            contentType:'application/json',
            headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
            data: JSON.stringify(userForm),
            dataType:'json',

            success: function(result,status) {

                $('#added').html(result.message)
                // $('#total').html('Total='+c)


                console.log(result)
                // window.location.href = "mycart.html"

                //next();
            },

            error:function(jqXHR,status) {
                $('#added').html(jqXHR.responseJSON.message)
                // console.log(jqXHR)
            }
        })

    })


 })




