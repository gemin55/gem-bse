function generate_otp(){

    let rannum = Math.floor(1000 + Math.random() * 9000);
    document.querySelector("#txtotp").value = rannum;
}

btnGenerateOtp.addEventListener("click", generate_otp );


