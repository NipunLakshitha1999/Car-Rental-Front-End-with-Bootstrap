function loadMiniCras() {
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/addCar/miniCar',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            $.each(resp.data,function (idx,ele) {
                let row='<tr>'+
                    '<td>'+ele.no+'</td>'+
                    '<td>'+ele.carBrand+'</td>'+
                    '<td>'+ele.carColor+'</td>'+
                    '<td>'+ele.carPassengers+'</td>'+
                    '<td>'+ele.carTransmission+'</td>'+
                    '<td>'+ele.carFuel+'</td>'
                '</tr>';

                $('#tblMiniCarTblBody').append(row);
            })
        }
    });
}

function loadPrimiumCars() {
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/addCar/priyum',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            $.each(resp.data,function (idx,ele) {
                let row='<tr>'+
                    '<td>'+ele.no+'</td>'+
                    '<td>'+ele.carBrand+'</td>'+
                    '<td>'+ele.carColor+'</td>'+
                    '<td>'+ele.carPassengers+'</td>'+
                    '<td>'+ele.carTransmission+'</td>'+
                    '<td>'+ele.carFuel+'</td>'
                '</tr>';

                $('#tblPrimiumCarBody').append(row);
            })
        }
    });
}

function loadHybridCars() {
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/addCar/hybrid',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            $.each(resp.data,function (idx,ele) {
                let row='<tr>'+
                    '<td>'+ele.no+'</td>'+
                    '<td>'+ele.carBrand+'</td>'+
                    '<td>'+ele.carColor+'</td>'+
                    '<td>'+ele.carPassengers+'</td>'+
                    '<td>'+ele.carTransmission+'</td>'+
                    '<td>'+ele.carFuel+'</td>'
                '</tr>';

                $('#tblHybridCarBody').append(row);
            })
        }
    });
}
function loadLuxuryCars() {
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/addCar/luxury',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            $.each(resp.data,function (idx,ele) {
                let row='<tr>'+
                    '<td>'+ele.no+'</td>'+
                    '<td>'+ele.carBrand+'</td>'+
                    '<td>'+ele.carColor+'</td>'+
                    '<td>'+ele.carPassengers+'</td>'+
                    '<td>'+ele.carTransmission+'</td>'+
                    '<td>'+ele.carFuel+'</td>'
                '</tr>';

                $('#tblHybridCarBody').append(row);
            })
        }
    });
}
function loadMiniVans() {
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/addCar/miniVan',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            $.each(resp.data,function (idx,ele) {
                let row='<tr>'+
                    '<td>'+ele.no+'</td>'+
                    '<td>'+ele.carBrand+'</td>'+
                    '<td>'+ele.carColor+'</td>'+
                    '<td>'+ele.carPassengers+'</td>'+
                    '<td>'+ele.carTransmission+'</td>'+
                    '<td>'+ele.carFuel+'</td>'
                '</tr>';

                $('#tblMiniVanBody').append(row);
            })
        }
    });
}
function loadVan() {
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_war/api/v1/addCar/van',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            $.each(resp.data,function (idx,ele) {
                let row='<tr>'+
                    '<td>'+ele.no+'</td>'+
                    '<td>'+ele.carBrand+'</td>'+
                    '<td>'+ele.carColor+'</td>'+
                    '<td>'+ele.carPassengers+'</td>'+
                    '<td>'+ele.carTransmission+'</td>'+
                    '<td>'+ele.carFuel+'</td>'
                '</tr>';

                $('#tblVanBody').append(row);
            })
        }
    });
}
