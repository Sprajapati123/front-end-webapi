
$(document).ready(function () {

    $.ajax({

        url:'http://localhost:3001/v1/viewbooking',
        method:'GET',
        // headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
        contentType:'application/json',
        dataType:'json',


        success: function(result,status) {

            for (key in result){



                $('#itemdetails').append('    <li>\n' +
                    '<figure style="border: 1px solid black">\n' +
                    '<figcaption>\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ '<b>Item name:</b>'+ result[key].iname +'</a></h4>\n' +
                    // '<span class="aa-product-price">'+ result[key].item_id +'</span>\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ '<b>Item price:</b>' +result[key].iprice +'</a></h4>\n\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ '<b>Category</b>' +result[key].icategory +'</a></h4>\n\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ '<b>Item Description</b>' + result[key].idescription +'</a></h4>\n\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ '<b>street:</b>'+ result[key].street +'</a></h4>\n\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ '<b>City:</b>'+result[key].city +'</a></h4>\n\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ '<b>Quantity:</b>'+result[key].quantity +'</a></h4>\n\n' +
                    '<h4 class="aa-product-title"><a href="#">'+ '<b>contact:</b>'+window.localStorage.getItem('contact') +'</a></h4>\n\n' +

                    '</li>')

            }
        },

        error:function(jqXHR,status) {
            console.log(jqXHR)
        }
    })


})