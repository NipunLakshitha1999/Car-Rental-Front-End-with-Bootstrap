function CustomerSignIn() {
    let FPasswod=$('#firstPassword').val().toString().trim();
    let SPassword=$('#secondPassword').val().toString().trim()
    let Cpassword=null;
    if(FPasswod === SPassword){
        Cpassword=SPassword;
    }

    const myData={
        email: $('#UserEmail').val().toString().trim(),
        password:Cpassword
    }

    $.ajax({
        url:'http://localhost:8080/Car_Rental_war/api/v1/signInCustomer',
        type:'POST',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
            if(resp.code === 200){
                alert("Sign In SuccessFull");
            }else{
                alert(resp);
            }

        },
        data:JSON.stringify(myData)
    })
}

function UploadImage() {
      var formData=new FormData();
      formData.append('file[]',$('#inputPhoto')[0].files[0]);
      formData.append('file[]',$('#inputLisenPhoto')[0].files[0]);
      formData.append('email',$('#UserEmail').val());
        $.ajax({
            url:'http://localhost:8080/Car_Rental_war/api/v1/user/upload',
            type: 'POST',
            data: formData,
            contentType: false,
            processData:false,
            success:function (resp) {
               console.log(resp);
            }
        })
}

function getImage() {
   let Iemail=$('#UserEmail').val().toString().trim();

    $.ajax({
        url:'http://localhost:8080/Spring/api/v1/customer?'+$.param({email:Iemail}),
        type:'GET',
        dataType:'json',
        contentType:'application/json',
        success:function (resp) {
           console.log(resp);
        }
    })
}
