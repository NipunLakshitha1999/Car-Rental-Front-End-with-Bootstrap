function saveCustomer() {
    const myObject = {
        email: $('#userEmail').val().toString().trim(),
        nic:$('#userID').val().toString().trim(),
        lisenNo:$('#userLisenID').val().toString().trim(),
        name: $('#userName').val().toString().trim(),
        address: $('#userAddress').val().toString().trim(),
        contact: $('#userContact').val().toString().trim(),
        password:$('#userPassword').val().toString().trim()

    }
    console.log(myObject);
    $.ajax({
        url:'http://localhost:8080/Car_Rental_war/api/v1/customer',
        type:'POST',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
            if(resp.code === 200){
                alert("CUSTOMER ADDED");
                window.location.href = "http://localhost:63342/carRentalFrondEnd/UI/index.html?_ijt=2qf4d9ubn6mgm2tcpagst26vb8";

            }else{
                alert(resp);
                console.log(resp)
            }

        },
        data:JSON.stringify(myObject)
    })
}

function signInCustomer() {
    console.log("sign in work")
    var c=new Customer($('#signInEmail').val().toString().trim(),$('#signInPassword').val().toString().trim());
    $('#CusEmail').val($('#signInEmail').val().toString().trim());
    $('#CusEmail-primum').val($('#signInEmail').val().toString().trim());
    $('#CusEmail-Hybrid').val($('#signInEmail').val().toString().trim());
    $('#CusEmail-Luxury').val($('#signInEmail').val().toString().trim());
    $('#CusEmail-MiniVanCar').val($('#signInEmail').val().toString().trim());
    $('#CusEmail-Van').val($('#signInEmail').val().toString().trim());

    cusArray.push(c)
    const myData={
        email:$('#signInEmail').val().toString().trim(),
        password:$('#signInPassword').val().toString().trim()
    }
    console.log(myData);
    $.ajax({
        url:'http://localhost:8080/Car_Rental_war/api/v1/customer/signIn',
        type:'POST',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
           if(resp.code == 200){
               alert("loginSuccess");
               $('#dashbord').css("display", 'block');
               $('#customerSignInMain').css("display", 'none');

           }else {
               console.log(resp);
           }

        },
        data:JSON.stringify(myData)
    })
}
function rentMiniCar() {
    console.log(cusArray[0].getCustomerEmail())
    const myData={

        carregno:$('#carNo').val().toString().trim(),
        cardate:$('#rentDate').val().toString().trim(),
        cartime:$('#rentTime').val().toString().trim(),
        cardiver:$('#driver').val().toString().trim(),
        cusemail:$('#CusEmail').val().toString().trim()
    }
    console.log(myData);

    $.ajax({
        url:'http://localhost:8080/Car_Rental_war/api/v1/rentMiniCar',
        type:'POST',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
            if(resp.code === 200){
                alert("Rent Car");
                loadAllRentRequst();
            }else{
                alert(resp);
                console.log(resp);
            }

        },
        data:JSON.stringify(myData)
    })
}

function rentPremiyumcar() {
    console.log(cusArray[0].getCustomerEmail())
    const myData={

        carregno:$('#PrimumcarNo').val().toString().trim(),
        cardate:$('#PrimumrentDate').val().toString().trim(),
        cartime:$('#PrimumrentTime').val().toString().trim(),
        cardiver:$('#Primumdriver').val().toString().trim(),
        cusemail:$('#CusEmail-primum').val().toString().trim()
    }
    console.log(myData);

    $.ajax({
        url:'http://localhost:8080/Car_Rental_war/api/v1/rentMiniCar',
        type:'POST',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
            if(resp.code === 200){
                alert("Rent Car");
                loadAllRentRequst();
            }else{
                alert(resp);
                console.log(resp);
            }

        },
        data:JSON.stringify(myData)
    })
}

function HybridCar() {
    console.log(cusArray[0].getCustomerEmail())
    const myData={

        carregno:$('#HybridcarNo').val().toString().trim(),
        cardate:$('#HybridrentDate').val().toString().trim(),
        cartime:$('#HybridrentTime').val().toString().trim(),
        cardiver:$('#Hybriddriver').val().toString().trim(),
        cusemail:$('#CusEmail-Hybrid').val().toString().trim()
    }
    console.log(myData);

    $.ajax({
        url:'http://localhost:8080/Car_Rental_war/api/v1/rentMiniCar',
        type:'POST',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
            if(resp.code === 200){
                alert("Rent Car");
                loadAllRentRequst();
            }else{
                alert(resp);
                console.log(resp);
            }

        },
        data:JSON.stringify(myData)
    })
}

function luxuryCarRent() {
    console.log(cusArray[0].getCustomerEmail())
    const myData={

        carregno:$('#LuxurycarNo').val().toString().trim(),
        cardate:$('#LuxuryrentDate').val().toString().trim(),
        cartime:$('#LuxuryrentTime').val().toString().trim(),
        cardiver:$('#Luxurydriver').val().toString().trim(),
        cusemail:$('#CusEmail-Luxury').val().toString().trim()
    }
    console.log(myData);

    $.ajax({
        url:'http://localhost:8080/Car_Rental_war/api/v1/rentMiniCar',
        type:'POST',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
            if(resp.code === 200){
                alert("Rent Car");
                loadAllRentRequst();
            }else{
                alert(resp);
                console.log(resp);
            }

        },
        data:JSON.stringify(myData)
    })
}

function miniVanCarRental() {
    console.log(cusArray[0].getCustomerEmail())
    const myData={

        carregno:$('#MiniVancarNo').val().toString().trim(),
        cardate:$('#MiniVanrentDate').val().toString().trim(),
        cartime:$('#MiniVanrentTime').val().toString().trim(),
        cardiver:$('#MiniVandriver').val().toString().trim(),
        cusemail:$('#CusEmail-MiniVanCar').val().toString().trim()
    }
    console.log(myData);

    $.ajax({
        url:'http://localhost:8080/Car_Rental_war/api/v1/rentMiniCar',
        type:'POST',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
            if(resp.code === 200){
                alert("Rent Car");
                loadAllRentRequst();
            }else{
                alert(resp);
                console.log(resp);
            }

        },
        data:JSON.stringify(myData)
    })
}

function rentVan() {
    console.log(cusArray[0].getCustomerEmail())
    const myData={

        carregno:$('#VancarNo').val().toString().trim(),
        cardate:$('#VanrentDate').val().toString().trim(),
        cartime:$('#VanrentTime').val().toString().trim(),
        cardiver:$('#Vandriver').val().toString().trim(),
        cusemail:$('#CusEmail-Van').val().toString().trim()
    }
    console.log(myData);

    $.ajax({
        url:'http://localhost:8080/Car_Rental_war/api/v1/rentMiniCar',
        type:'POST',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
            if(resp.code === 200){
                alert("Rent Car");
                loadAllRentRequst();
            }else{
                alert(resp);
                console.log(resp);
            }

        },
        data:JSON.stringify(myData)
    })
}

function signCustomer() {
    console.log("Sign in work");
}



