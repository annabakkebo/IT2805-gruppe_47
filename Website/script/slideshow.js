var i=0;
var images = [];
var time = 3000;

// Image list
images[0]='img/football.jpg';
images[1]='img/library.jpg';
images[2]='swing.jpg';

// Change image
function changeImg(){
    document.slide.src= images[i];

    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout("changeImg()", time);
}

window.onload=changeImg;