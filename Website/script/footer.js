function loadFooter() {
    var divfooter = document.createElement("div");
    divfooter.id = 'footer';
    var footer = document.createElement("footer");
    var links = [
        ['index.html', 'Home'],
        ['admission/index.html','Admission'],
        ['about/index.html','About us'],
        ['about/blog.html','Blog'],
        ['about/calendar.html','Calendar']
    ];
    var linkListMain = document.createElement('ul');
    for(const element of links.slice(0,2)){
        var linkElm =document.createElement('a');
        var listElm = document.createElement('li');
        linkElm.setAttribute('style','text-align:left;');
        linkElm.setAttribute('href',element[0]);
        linkElm.innerHTML=element[1];
        listElm.appendChild(linkElm);
        linkListMain.appendChild(listElm);
    }
    var new_list = document.createElement('ul');
    for(const element of links.slice(2,5)){
        var linkElm =document.createElement('a');
        var listElm = document.createElement('li');
        linkElm.setAttribute('style','text-align:left;');
        linkElm.setAttribute('href',element[0]);
        linkElm.innerHTML=element[1];
        listElm.appendChild(linkElm);
        new_list.appendChild(listElm);
    }
    var listElm = document.createElement('li');
    listElm.appendChild(new_list);
    linkListMain.appendChild(listElm);
    footer.appendChild(linkListMain);


    var adress = ['Vei veiesen 123','123 Sted','0047 123 45 678'];
    var listAdress = document.createElement('ul');
    listAdress.id= 'adress';
    for (const element of adress){
        var listElm = document.createElement('li');
        listElm.innerHTML = element;
        listAdress.appendChild(listElm);
    }
    var listElm =document.createElement('li');
    var linkElm = document.createElement('a');
    linkElm.setAttribute('href', 'mailto:post@laescuela.no');
    linkElm.setAttribute('style','text-align:left;');
    linkElm.innerHTML= 'post@laescuela';
    listElm.appendChild(linkElm);
    listAdress.appendChild(listElm);


    footer.appendChild(listAdress);

    var socialLinks = [['img/facebook.png','https://www.facebook.com'],
        ['img/twitter.png','https://twitter.com'],['img/insta.png','https://www.instagram.com']
    ];
    var socialMedia = document.createElement('ul');
    socialMedia.id='socialMediaList';

    for (element of socialLinks){
        var ListElm = document.createElement('li');
        var LinkElm = document.createElement('a');
        LinkElm.setAttribute('href',element[1]);
        var ImageElm = document.createElement('img');
        ImageElm.setAttribute('src',element[0]);
        ImageElm.classList = 'socialImg';
        ImageElm.setAttribute('alt', 'social media image');
        LinkElm.appendChild(ImageElm);
        ListElm.appendChild(LinkElm);
        socialMedia.appendChild(ListElm);
    }


    footer.appendChild(socialMedia);
    divfooter.appendChild(footer);
    var doc = document.getElementById('wrapper');
    doc.insertAdjacentElement("afterend", divfooter);
}