$(document).ready(function () {

    // if(window.log)

    $.ajax({

        url:'http://localhost:3001/v1/viewItems',
        method:'GET',
        contentType:'application/json',
        // headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
        dataType:'json',

        success: function(result,status) {

            for (key in result){

                $('#itemdetails').append('    <li>\n' +
                    '<figure style="border: 1px solid black">\n' +
                    ' <img src="http://localhost:3001/uploads/'+result[key].image+'"+ alt="polo shirt img" height="100px" width="100px">\n' +
                    '\n' +
                    '<figcaption>\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ result[key].itemname +'</a></h4>\n' +
                    '<input type="text" hidden  value="'+ window.localStorage.getItem('username') +'" name="user_name" id="user_name">\n' +
                    '<input type="text" hidden value="'+ window.localStorage.getItem('id') +'" name="user_id" id="user_id">\n' +
                    '<input type="text" hidden value="'+ result[key].id + '" id="item_id" name="item_id">\n' +
                    '<input type="text" hidden value="'+ result[key].itemname + '" id="item_name" name="item_name">\n' +
                    '<input type="text" hidden value="'+ result[key].itemprice + '" id="item_price" name="item_price">\n' +
                    '<input type="text" hidden value="'+ result[key].category + '" id="item_category" name="item_category">\n' +
                    '<input type="text" hidden value="'+ result[key].itemdescription + '" id="item_description" name="item_description">\n' +
                    '<span class="aa-product-price">'+ result[key].itemprice +'</span>\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ result[key].category +'</a></h4>\n\n' +
                   '<h4 class="aa-product-title"><a href="#">'+ result[key].itemdescription +'</a></h4>\n\n' +

                    '</figcaption>\n' +
                    '<span class="fa fa-shopping-cart"></span>' +
                    '<input type="submit" itemid="'+ result[key].id +'" value="Add to cart" id="addtocart" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" >\n'+
                    // '<span class="glyphicon glyphicon-shopping-cart"></span><input type="submit" name="btnaddtocart" value="Add to cart" class="btn btn-success">\n'+
                    '</figure>\n' +

                    '</li>')

            }
        },

        error:function(jqXHR,status) {
            console.log(jqXHR)
        }
    })


})