function loadAllRentRequst() {
    console.log("work");
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/rentMiniCar',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            console.log(resp);
            $.each(resp.data, function (idx, ele) {
                let row = '<tr>' +
                    '<td>' + ele.rentid + '</td>' +
                    '<td>' + ele.carregno + '</td>' +
                    '<td>' + ele.cardate + '</td>' +
                    '<td>' + ele.cartime + '</td>' +
                    '<td>' + ele.cardiver + '</td>' +
                    '<td>' + ele.customer.email + '</td>';
                '</tr>';

                $('#tblRentAdmin').append('<tr><th scope="row">' + ele.rentid + '</th><td>' + ele.carregno + '</td><td>' + ele.cardate + '</td><td>' + ele.cartime + '</td><td>' + ele.carDriver + '</td><td>' + ele.customer.email + '</td></tr>');
            })
        }
    });

    $('#tblRentAdminFormBody tr').on('click', function () {
        console.log($(this));
    })
}

function saveDriver() {
    const myObject = {
        driverEmail: $('#DriverID').val().toString().trim(),
        driverCode: $('#DriverPassword').val().toString().trim(),
        driverName: $('#DriverName').val().toString().trim(),
        diverAddress: $('#DriverAddress').val().toString().trim(),
        diverContact: $('#DriverContact').val().toString().trim(),
        status: $('#DriverStatus').val().toString().trim()
    };
    console.log(myObject);
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/driver/saveDriver',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            if (resp.code === 200) {
                alert("CUSTOMER ADDED");

            } else {
                alert(resp);
            }

        },
        data: JSON.stringify(myObject)
    })
}

function LoadAllDriverDeatil() {

    console.log("work");
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/driver',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            console.log(resp);
            $.each(resp.data, function (idx, ele) {
                let row = '<tr>' +
                    '<td>' + ele.driverEmail + '</td>' +
                    '<td>' + ele.driverName + '</td>' +
                    '<td>' + ele.diverAddress + '</td>' +
                    '<td>' + ele.diverContact + '</td>' +
                    '<td>' + ele.status + '</td>';
                '</tr>';

                $('#tblDriver').append(row);
            })
        }
    })
}

// $(function () {
//     $('#tblRentAdminFormBody tr').click(function () {
//         $('td',this).each(function () {
//            console.log( $(this).html());
//         })
//         // cNo = $($(this).children().get(1)).text();
//         // reDate = $($(this).children().get(2)).text();
//         // reTime= $($(this).children().get(3)).text();
//         // reDriver = $($(this).children().get(4)).text();
//         // reEmail = $($(this).children().get(5)).text();
//         // $('#detailRentID').val(rid);
//         console.log($(this).closest("tr"));
//     })
// })

function signInAdmin() {


    const myData = {
        email: $('#AdminEmail').val().toString().trim(),
        passowrd: $('#AdminPassword').val().toString().trim()
    };

    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/adminSignIn',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            if (resp === true) {
                alert("Login Success");
                $('#adminFormMain').css("display", 'block');
                $('#main-admin').css("display", 'none');
            } else {
                alert("login Fail");
            }
        },
        data: JSON.stringify(myData)
    })


}

var rid = null;
var cNo = null;
var reDate = null;
var reTime = null;
var reDriver = null;
var reEmail = null;

var dEmail = null;
var dName = null;
var dAddress = null;
var dContact = null;
var dStatus = null;

var detailID=null;
var km=null;
var car=null;
$('#button-AdminSignIn').click(function () {
    $('#tblDriverBody tr').on("click", function () {

        dEmail = $($(this).children().get(0)).text();
        dName = $($(this).children().get(1)).text();
        dAddress = $($(this).children().get(2)).text();
        dContact = $($(this).children().get(3)).text();
        dStatus = $($(this).children().get(4)).text();

        $('#detailDriverID').val(dEmail);
        $('#detailCarID').val(dCar);

    });

    $('#tblRentAdminFormBody tr').on("click", function () {
        rid = $($(this).children().get(0)).text();
        cNo = $($(this).children().get(1)).text();
        reDate = $($(this).children().get(2)).text();
        reTime = $($(this).children().get(3)).text();
        reDriver = $($(this).children().get(4)).text();
        reEmail = $($(this).children().get(5)).text();
        $('#detailRentID').val(rid);
        $('#detailCarID').val(cNo);
    });

    $('#tblRentDetailFormRentDetailBody tr').on("click",function () {
        detailID=$($(this).children().get(1)).text();
        km=$($(this).children().get(1)).text();
        car=$($(this).children().get(4)).text();
        $('#PaymentRentDetailID').val($($(this).children().get(0)).text());
        $('#PaymentCarRegNO').val(car);
    });
});
var car = null;

function addrentDetail() {
    const myObject = {
        tour: $('#detailTour').val().toString().trim(),
        rentid: $('#detailRentID').val().toString().trim(),
        driverid: $('#detailDriverID').val().toString().trim()
    }

        console.log(myObject);
        $.ajax({
            url: 'http://localhost:8080/Car_Rental_war/api/v1/RentDetail/inputDetail',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            success: function (resp) {
                if (resp.code === 200) {
                    alert("RentDetail ADDED");
                    UpdateDriverStatues();
                    getRentDetaiFromRentDetail();

            } else {
              console.log(resp);
            }

        },
        data: JSON.stringify(myObject)
    });
}

// function getAllDataFromRentDetail() {
//     console.log("method work")
//     $.ajax({
//             url: 'http://localhost:8080/Car_Rental_war/api/v1/RentDetail',
//             type: 'GET',
//             dataType: 'json',
//             contentType: 'application/json',
//             success: function (resp) {
//                 console.log(resp);
//             }
//         })
// }

function getRentDetaiFromRentDetail() {
        console.log("method work");
    $.ajax({
            url: 'http://localhost:8080/Car_Rental_war/api/v1/RentDetail',
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: function (resp) {
                console.log(resp);
                $.each(resp.data, function (idx, ele) {
                    let row = '<tr>' +
                        '<td>' + ele.rentDetailid + '</td>' +
                        '<td>' + ele.tour + '</td>' +
                        '<td>' + ele.driver.driverEmail + '</td>' +
                        '<td>' + ele.rentcar.rentid + '</td>' +
                        '<td>' + ele.car.no + '</td>'
                    '</tr>';

                    $('#tblRentDetailFormRentDetailBody').append(row);
                })
            }
        })
}

function UpdateDriverStatues() {

    const myObject = {
        driverEmail: dEmail,
        driverName:dName,
        status: "Not Available"
    };
    console.log(myObject);
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/driver/UpdateDriver',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            if (resp.code === 200) {
                alert("Driver Updated");

            } else {
                alert(resp);
            }

        },
        data: JSON.stringify(myObject)
    })
}
var dID=null;
var tour=null;
function searchCar() {
     dID=$('#PaymentRentDetailID').val().toString().trim();
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/addCar?'+$.param({regno:car}),
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            console.log(resp);
            // $.each(resp.data, function (idx, ele) {
            //     let row = '<tr>' +
            //         '<td>' + dID + '</td>' +
            //         '<td>' + ele.no + '</td>' +
            //         '<td>' + tour + '</td>' +
            //         '<td>' + ele.carFreeMilageFDay + '</td>' +
            //         '<td>' + ele.carFreeMilageFMonth + '</td>'+
            //         '<td>' + ele.carPriceFExKM + '</td>'+
            //         '<td>' + ele.carPriceFRentDaily + '</td>'+
            //         '<td>' + ele.carPricesFRentMonthly + '</td>'
            //     '</tr>';
            //
            //     $('#tblcustomerPaymentBody').append(row);
            // })

            $('#PayCarNo').val(resp.data.no);
            $('#payFreeMiFDay').val(resp.data.carFreeMilageFDay);
            $('#payFreeMiFMonth').val(resp.data.carFreeMilageFMonth);
            $('#payPriceExFKm').val(resp.data.carPriceFExKM);
            $('#payPriceFDay').val(resp.data.carPriceFRentDaily);
            $('#payPriceFMonth').val(resp.data.carPricesFRentMonthly);
        }
    })
}
var balace=0;
$('#btnPayment').on("click",function () {
        nTour=Number($('#payTour').val().toString());
        price=Number($('#payPriceFDay').val().toString());
        balace=nTour*price;

})

$('#payTour').on("keypress",function (e) {
    if(e.key  == "Enter"){
        $('#payBalace').val(balace);
    }
})
function addPayment() {

       const myObject={
           id:Number($('#PaymentRentDetailID').val().toString()),
            tour:Number($('#payTour').val().toString()),
            price:Number($('#payPriceFDay').val().toString()),
            balace:Number($('#payBalace').val().toString())
       }

    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/payment',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            if (resp.code === 200) {
                alert("Payment Added");
                loadPayment();
            } else {
                alert(resp);
            }

        },
        data: JSON.stringify(myObject)
    })
}

function loadPayment() {
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/payment',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            $.each(resp.data, function (idx, ele) {
                let row = '<tr>' +
                    '<td>' + ele.id + '</td>' +
                    '<td>' + ele.tour + '</td>' +
                    '<td>' + ele.price + '</td>' +
                    '<td>' + ele.balance+ '</td>'
                '</tr>';

                $('#tblPaymentBody').append(row);
            })
        }
    })

}
