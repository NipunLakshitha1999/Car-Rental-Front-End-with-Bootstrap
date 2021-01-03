function saveCar() {
        const myData={
            no:$('#RegNo').val().toString().trim(),
            carBrand:$('#Brand').val().toString().trim(),
            carType:$('#Type').val().toString().trim(),
            carPassengers:Number($('#Passengers').val().toString().trim()),
            carTransmission:$('#Transmission').val().toString().trim(),
            carFuel:$('#Fuel').val().toString().trim(),
            carColor:$('#Color').val().toString().trim(),
            carCount:Number($('#count').val().toString().trim()),
            carFreeMilageFDay:Number($('#FreeMilageFDay').val().toString().trim()),
            carFreeMilageFMonth:Number($('#FreeMilageFMonth').val().toString().trim()),
            carPriceFRentDaily:Number($('#PriceFRentDaily').val().toString().trim()),
            carPricesFRentMonthly:Number($('#PricesFRentMonthly').val().toString().trim()),
            carPriceFExKM:Number($('#PriceFExKM').val().toString().trim())
        }
        console.log(myData);

    $.ajax({
        url:'http://localhost:8080/Car_Rental_war/api/v1/addCar',
        type:'POST',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
            if(resp.code === 200){
                alert("CAR ADDED");

            }else{
                alert(resp);
                console.log(resp);
            }

        },
        data:JSON.stringify(myData)
    })
}

function updateCar() {
    const myData={
        no:$('#RegNo').val().toString().trim(),
        carBrand:$('#Brand').val().toString().trim(),
        carType:$('#Type').val().toString().trim(),
        carPassengers:Number($('#Passengers').val().toString().trim()),
        carTransmission:$('#Transmission').val().toString().trim(),
        carFuel:$('#Fuel').val().toString().trim(),
        carColor:$('#Color').val().toString().trim(),
        carCount:Number($('#count').val().toString().trim()),
        carFreeMilageFDay:Number($('#FreeMilageFDay').val().toString().trim()),
        carFreeMilageFMonth:Number($('#FreeMilageFMonth').val().toString().trim()),
        carPriceFRentDaily:Number($('#PriceFRentDaily').val().toString().trim()),
        carPricesFRentMonthly:Number($('#PricesFRentMonthly').val().toString().trim()),
        carPriceFExKM:Number($('#PriceFExKM').val().toString().trim())
    }
    console.log(myData);

    $.ajax({
        url:'http://localhost:8080/Car_Rental_war/api/v1/addCar',
        type:'PUT',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
            if(resp.code === 200){
                alert("CAR UPDATED");

            }else{
                alert(resp);
                console.log(resp);
            }

        },
        data:JSON.stringify(myData)
    })
}

function deleteCar() {
    let cID=$('#RegNo').val().toString().trim();
    if (confirm("Are you sure to delete this Car")){
        $.ajax({
            url:'http://localhost:8080/Car_Rental_war/api/v1/addCar?'+$.param({id:cID}),
            type:'DELETE',
            dataType:'json',
            contentType:'application/json',
            success:function (resp) {
                if(resp.code === 200){
                    alert("CUSTOMER DELETED");
                }else{
                    alert(resp);
                }
                getAllCustomers();
            }
        })
    }
}
