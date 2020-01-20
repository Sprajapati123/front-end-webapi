$(document).ready(function () {
    var item_id;

    $('#EachItems').submit(function(e) {


        e.preventDefault();

        var editData = {
            itemname: $('#itemname').val(),
            itemprice: $('#itemprice').val(),
            itemdescription: $('#itemdescription').val(),
            category: $('#category').val()
        }

        $.ajax({

            url: 'http://localhost:3001/v1/updateitems/' + item_id ,
            method: "PUT",
            contentType: 'application/json',
            headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
            dataType: 'json',
            data:JSON.stringify(editData),
            success: function(result) {
                console.log(result)
               window.location.href = "items.html"
            },
            error: function(jqXHR) {
            console.log(jqXHR)
            }

        })

    })


    $('#itemdetails').on('click','#itemedit',function () {
        item_id = $(this)[0].attributes.itemid.nodeValue;

        $.ajax({
            url:'http://localhost:3001/v1/geteachitem/'+item_id,
            method:'GET',
            dataType:'json',
            headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
            success:function (result) {
            console.log(result)
                $('#itemname').val(result.itemname)
                $('#itemprice').val(result.itemprice)
                $('#itemdescription').val(result.itemdescription)
                $('#category').val(result.category)


            },
            error:function (jqXHR) {
            console.log(jqXHR)
            }
        })
    })
    
    

    $('#itemdetails').on('click','#itemdelete',function () {

        item_id = $(this)[0].attributes.itemid.nodeValue;

        var del = confirm("Are you sure?");
        
        if (del == true){
            $.ajax({
                url:'http://localhost:3001/v1/deleteitem/'+item_id,
                method:'delete',
                headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
                dataType: 'json',
                success: function(result){
                    window.location.href =  "items.html";
                    $('#deletemessage').html(result.message)
                },
                error: function (jqXHR) {
                    console.log(jqXHR);
                }

            })
        }
       else {
           window.location.href = "items.html";
        }
    })

    $.ajax({

        url:'http://localhost:3001/v1/viewItems',
        method:'GET',
        contentType:'application/json',
        headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
        dataType:'json',

        success: function(result,status) {
            console.log(result);

            for (key in result){

                $('#itemdetails').append('    <li>\n' +
                    '<figure style="border: 1px solid black">\n' +
                    ' <img src="http://localhost:3001/uploads/'+result[key].image+'"+ alt="polo shirt img" height="100px" width="100px">\n' +
                    '\n' +
                    '<figcaption>\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ result[key].itemname +'</a></h4>\n' +
                    '<span class="aa-product-price">'+ result[key].itemprice +'</span>\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ result[key].category +'</a></h4>\n\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ result[key].itemdescription +'</a></h4>\n\n' +
                    '<button class="btn btn-primary" id="itemedit" itemid="'+ result[key].id +'" data-toggle="modal" data-target="#exampleModal" ><i class="fa fa-edit"></i></button>\n'+
                    '<button class="btn btn-danger" itemid="'+ result[key].id +'" id="itemdelete"><i class="fa fa-trash"></i></button>\n'+
                    '</figcaption>\n' +
                    '</figure>\n' +

                    '</li>')

            }
        },

        error:function(jqXHR,status) {
            // $('#messageadditem').html(jqXHR.responseJSON.message)
            console.log(jqXHR)
        }
    })
})