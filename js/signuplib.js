let alertmsg = document.getElementById("msg");
let alertbox = document.getElementById("alert");

function val_nic(){
   let nicval = document.getElementById("txtnic").value;
   let nic = document.getElementById("txtnic");
   let imgicon = document.getElementById("inic");

   if (nicval.length != 14){
        nic.focus();
        alertmsg.innerHTML = "NIC should contain 14 chars";
        nic.style.backgroundColor = "pink";
        imgicon.src = "img/cross.gif"; 
        errormsg();
        return false;
    }
    else{
         alertmsg.innerHTML = "Valid entry";
        imgicon.src = "img/tick.gif"; 
        successmsg();
        return true;
    }

}

function val_email(){
   let emailval = document.getElementById("txtemail").value;
   let email = document.getElementById("txtemail");
   let imgicon = document.getElementById("iemail");

   let regex = /^[\w\._-]+@[\w\._-]+\.[a-zA-Z]{2,7}$/;

   if ( !emailval.match(regex)  ){
        email.focus();
        alertmsg.innerHTML = "Invalid email format";
        email.style.backgroundColor = "pink";
        imgicon.src = "img/cross.gif"; 
        errormsg();
        return false;
    }
    else{
         alertmsg.innerHTML = "Valid entry";
        imgicon.src = "img/tick.gif"; 
        successmsg();
        return true;
    }

}


function val_fullname(){
   let nameval = document.getElementById("txtname").value;
   let name = document.getElementById("txtname");
   let imgicon = document.getElementById("iname");

   if ( nameval == null || nameval == ""  ){
        name.focus();
        alertmsg.innerHTML = "Name is Mandatory";
        name.style.backgroundColor = "pink";
        imgicon.src = "img/cross.gif"; 
      errormsg();
        return false;
    }
    else{
         alertmsg.innerHTML = "Valid entry";
        imgicon.src = "img/tick.gif"; 
        successmsg();
        return true;
    }

}

function successmsg(){
      //  alertbox.classList.add("alert-success", "d-block");
        //alertbox.classList.remove("alert-danger", "d-none");
//chaining
        $("#alert").
        fadeIn(0).
        removeClass("d-none alert-danger").
        addClass("d-block alert-success").
        delay(2000).
        fadeOut(2000, function(){
            $(this).removeClass("d-block").addClass("d-none");
        });

}

function errormsg(){
  alertbox.classList.add("alert-danger", "d-block");
        alertbox.classList.remove("alert-success", "d-none");
}



function generate_captcha(){

    let rannum = Math.floor(1000 + (Math.random() * 9000));
    document.getElementById("txtcap").value = rannum; 
}

window.addEventListener("load", generate_captcha);    


$(function() {
   
    $("#txtdob").datepicker({
      dateFormat: "yy/mm/dd",
      changeYear: true,
      changeMonth: true,
      maxDate: 0,
      yearRange: "2000:20025"
    });


    $index = 1;

    $("#btnaddphone").click(function(){
       $newdiv = $("#phone1").clone();
        $index++;
        $newid = "phone" + $index;
        $newtxtid = "txtmob" + $index;
        $newdiv.attr("id", $newid);
        $newdiv.find("span").remove();
        $newdiv.find("input").attr("id", $newtxtid);
        $newdiv.find("label").attr("for", $newtxtid);
        $newdiv.insertBefore($("#email"));
    });

  });




