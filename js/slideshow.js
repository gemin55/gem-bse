//create array imgArray to store the 4 images
let imgArray = [
                "img/advert1.jpg",
                "img/advert2.jpg",
                "img/advert3.jpg",
                "img/advert4.jpg"
];

//set an index counter to zero
let index = 0;

function doNext()
{
//verify if it’s not the last image
if (index < 3){
    index++;
    document.querySelector("#slideshow").src= imgArray[index];
}
else{
//assign the imgarray to the slideshow image
//restart the doNext()
index = 0;
document.querySelector("#slideshow").src= imgArray[index];

}
}

//create the doBack() function
function doBack()
{
//verify if it’s not the last image
if (index > 0){
    index--;
    document.querySelector("#slideshow").src= imgArray[index];
}
else{
//assign the imgarray to the slideshow image
//restart the doNext()
index = 3;
document.querySelector("#slideshow").src= imgArray[index];

}
}


//create the jump() function
function jump(pos){
document.querySelector("#slideshow").src= imgArray[pos];
}

let timer;
//create function run() and
function run(){

//invoke the function doNext() every 3 seconds
timer = setInterval("doNext()", 3000);
return timer;
}

//invoke the run() once the page loads
window.addEventListener("load", run);

//create function stop() to stop the timer

function stop(){
    clearInterval(timer);
}

//search for the ss-container and add listeners to detect mouse event
let sscontainer = document.getElementById("ss-container");
sscontainer.addEventListener("mouseover", stop);
sscontainer.addEventListener("mouseout", run);
