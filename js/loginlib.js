function fetchLocalStorage(){
    document.getElementById("txtemail").value = localStorage.getItem("email");
    document.getElementById("txtpass").value = localStorage.getItem("pwd");
}

window.addEventListener("load", fetchLocalStorage);

function store_credentials(){
let emailval = document.getElementById("txtemail").value;
let passval = document.getElementById("txtpass").value;
let chkobj = document.getElementById("chkrem");

if ( chkobj.checked ){
    localStorage.setItem("email", emailval);
    localStorage.setItem("pwd", passval);
}
else{
    localStorage.removeItem("email");
    localStorage.removeItem("pwd");
}
}

chkrem.addEventListener("change", store_credentials);