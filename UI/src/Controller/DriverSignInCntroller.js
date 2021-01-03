function signInDriver() {


    const myData = {
        driverEmail: $('#DriverEmail').val().toString().trim(),
        driverCode: $('#DriverPassword').val().toString().trim()
    }

    console.log(myData);
    $.ajax({
        url:'http://localhost:8080/Car_Rental_war/api/v1/driver',
        type:'POST',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
            console.log(resp);
            if (resp.code === 200){
                alert("Login Success");
            }else {
                alert("login Fail");
            }
        },
        data:JSON.stringify(myData)
    })
}
