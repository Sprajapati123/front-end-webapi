
$(document).ready(function () {


    $('#itemdetails').on('click', '#confirm', function () {

        var item_id = $(this)[0].attributes.itemid.nodeValue

        console.log(item_id)



        var del = confirm("Are you sure?");

        if (del == true){
            $.ajax({
                url: 'http://localhost:3001/v1/deletecart/' + item_id,
                method: 'delete',
                // headers: {'authorization': 'Bearer ' + window.localStorage.getItem('token')},
                dataType: 'json',
                success: function (result) {
                    window.location.href =  "mycart.html";
                    // $('#deletemessage').html(result.message)
                },
                error: function (jqXHR) {
                    console.log(jqXHR);
                }

            })
        }
        else {
            window.location.href = "mycart.html";
        }
    })


    var id = window.localStorage.getItem('id');

    $.ajax({


        url: 'http://localhost:3001/v1/viewbooking/'+id,
        method: 'GET',
        contentType: 'application/json',
        // headers : { 'authorization' :'Bearer '+window.localStorage.getItem('token') },
        dataType: 'json',


        success: function (result, status) {

            for (key in result) {


                $('#itemdetails').append('    <li>\n' +
                    '<figure style="border: 1px solid black">\n' +
                    '<figcaption>\n' +
                    '<h4 class="aa-product-title"><a href="#">' + result[key].iname + '</a></h4>\n' +
                    // '<span class="aa-product-price">'+ result[key].item_id +'</span>\n' +
                    '<h4 class="aa-product-title"><a href="#">' + result[key].iprice + '</a></h4>\n\n' +
                    '<h4 class="aa-product-title"><a href="#">' + result[key].icategory + '</a></h4>\n\n' +
                    '<h4 class="aa-product-title"><a href="#">' + result[key].idescription + '</a></h4>\n\n' +


                    '</figcaption>\n' +
                    '<i class="fa fa-credit-card""></i><input type="submit" id="confirm" name="confirm" itemid="' + result[key].id + '" class="btn btn-primary" value="Proceed to Delievery" >\n' +
                    '</figure>\n' +

                    '</li>')





            }
        },

        error: function (jqXHR, status) {
            console.log(jqXHR)
        }
    })


})



// data-toggle="modal" data-target="#exampleModalCenter"