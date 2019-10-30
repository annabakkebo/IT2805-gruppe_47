function infoGet(){
    var news = document.getElementsByClassName("news");
    info=[];
    for(i=0;i<2; i++){
        info.push(news[i].innerHTML);
    }
    return info;
}

function infoPut(){
    var info = infoGet();
    var mainfeed = document.createElement('div');
    div.innerHTML="<p>"+info[0]+"</p>";
    document.getElementById('slideshow').appendChild(mainfeed);
    homeblog.className = 'homeblog';
}

var datah2=[
    "Ha en fin høsttur!",
    "Høsttur i skogen."

];

