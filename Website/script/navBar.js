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
    var menuElement=[['admission/index.html','Admission'],['about/index.html','About us'],
        ['about/contact.html','Contact us'],['about/blog.html','Blog'], ['about/calendar.html','Calendar']];
    function changeUrl(urlLink,placeNumb){
        var a=urlLink[0].split('/');
        if (a[0]===y){
            menuElement[placeNumb][0]=a[1];
        };
    };
    var bildeLink = ['/img/logo.svg','/index.html'];
    if (y==='about' || y==='admission'){
        bildeLink = ['../img/logo.svg','../index.html']
    };
    menuElement.forEach(changeUrl);
    var listelem = document.createElement('UL');
    var listelem2 = document.createElement('LI');
    var linkelem = document.createElement('A');
    listelem2.setAttribute('style','text-align:left;');
    linkelem.setAttribute('href',menuElement[0][0]);
    linkelem.innerHTML=menuElement[0][1];
    listelem2.appendChild(linkelem);
    listelem.appendChild(listelem2);
    var listelem3 = document.createElement('LI');
    linkelem.setAttribute('href',bildeLink[1]);
    var imageelem=document.createElement('IMG');
    imageelem.setAttribute('src',bildeLink[0]);
    imageelem.setAttribute('alt','Home');
    linkelem.appendChild(imageelem);
    listelem3.appendChild(linkelem);
    listelem.appendChild(listelem3);
    listelem2.setAttribute('style','text-align:right;cursor:pointer;');
    listelem2.setAttribute('onclock','toggleClick()');
    listelem2.innerHTML='About';
    listelem.appendChild(listelem2);
    nav.appendChild(listelem);
    var divElem = document.createElement('DIV');
    var listelem = document.createElement('UL');
    listelem.setAttribute('id','toggleButtNav');
    listelem.setAttribute('style','display:none;');
    function listMaker(iterNameVar){
        var subMen = document.createElement('LI');
        var subMenLink = document.createElement('A');
        subMenLink.setAttribute('href',iterNameVar[0]);
        subMenLink.innerHTML=iterNameVar[1];
        subMen.appendChild(subMenLink);
        listelem.appendChild(subMen);
    };
    menuElement.forEach(listMaker);
    divElem.appendChild(listelem);
    nav.appendChild(divElem);
    var mainPart = document.getElementById('wrapper');
    var x = document.getElementsByTagName("BODY")[0];
    x.insertBefore(nav,mainPart);
};
window.onload=function(){
    document.getElementById("wrapper").addEventListener("load", loadNavBar());
}