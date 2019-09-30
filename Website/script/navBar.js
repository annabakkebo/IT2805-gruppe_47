function toggleClick(){
    var aboutvar=document.getElementById('toggleButtNav');
    if (aboutvar.style.display==="none"){
        aboutvar.style.display='inline-block'
    }
    else {
        aboutvar.style.display='none'
    }
};

function currentdirectory(){
    var a = window.location.href;
    var b = a.split('/');
    return b[b.length-2]
};

function loadNavBar(){
    var y = currentdirectory()
    var nav = document.createElement('DIV');
    nav.id = 'navbar';
    var menuElement=[['admission/index.html','Admission','Opptak'],['about/index.html','About us','Om oss'],
        ['about/contact.html','Contact us','Kontakt oss'],['about/blog.html','Blog','Aktuelt'],
        ['about/calendar.html','Calendar','Kalender'],['img/logo.svg','index.html','Home','Hjem']];
    var directories = ['admission','about'];
    function changeUrl(urlLink,placeNumb){
        var a=urlLink[0].split('/');
        console.log(a[0]);
        console.log(a[0]==y);
        console.log(directories.includes(a[0]));
        if (a[0]==y){
            menuElement[placeNumb][0]=a[1];
        } else if (directories.includes(y)){
            menuElement[placeNumb][0]='../'+urlLink[0]
        }
    }
    if (y==='about' || y==='admission'){
        menuElement[5] = ['../img/logo.svg','../index.html','Home','Hjem']
    }
    menuElement.slice(0,-1).forEach(changeUrl);

    var listMain = document.createElement('UL');
    var listElm = document.createElement('LI');
    var linkElm = document.createElement('A');
    listElm.setAttribute('style','text-align:left;');
    linkElm.setAttribute('href',menuElement[0][0]);
    linkElm.innerHTML=menuElement[0][1];
    listElm.appendChild(linkElm);
    listMain.appendChild(listElm);

    var listImg = document.createElement('LI');
    var linkElm2 = document.createElement('A')
    linkElm2.setAttribute('href',menuElement[5][1]);
    var imgElm=document.createElement('IMG');
    imgElm.setAttribute('src',menuElement[5][0]);
    imgElm.setAttribute('alt','Home');
    imgElm.setAttribute('id','logo');
    linkElm2.appendChild(imgElm);
    listImg.appendChild(linkElm2);
    listMain.appendChild(listImg);

    var listElm2 = document.createElement('LI');
    listElm2.setAttribute('style','text-align:right;cursor:pointer;');
    listElm2.setAttribute('onclick','toggleClick()');
    listElm2.innerHTML='About';
    listMain.appendChild(listElm2);
    nav.appendChild(listMain);

    var divElem = document.createElement('DIV');
    var listElmDiv = document.createElement('UL');
    listElmDiv.setAttribute('id','toggleButtNav');
    listElmDiv.setAttribute('style','display:none;');
    function listMaker(iterNameVar){
        var subMen = document.createElement('LI');
        var subMenLink = document.createElement('A');
        subMenLink.setAttribute('href',iterNameVar[0]);
        subMenLink.innerHTML=iterNameVar[1];
        subMen.appendChild(subMenLink);
        listElmDiv.appendChild(subMen);
    };
    menuElement.slice(1,menuElement.length-1).forEach(listMaker);
    divElem.appendChild(listElmDiv);
    nav.appendChild(divElem);
    var mainPart = document.getElementById('wrapper');
    var x = document.getElementsByTagName("BODY")[0];
    x.insertBefore(nav,mainPart);
};
window.onload=function(){
    document.getElementById("wrapper").addEventListener("load", loadNavBar());
}