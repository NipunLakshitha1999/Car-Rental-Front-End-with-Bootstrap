let Customer=function (email,password) {

    var email=email;
    var password=password;

    this.getCustomerEmail=function () {
        return email;
    }
    this.getCustomerPassword=function () {
        return password;
    }

    this.setCustomerEmail=function (emailVal) {
        email=emailVal
    }
    this.setCustomerPassword=function (passwordVal) {
        password=passwordVal;
    }

}
