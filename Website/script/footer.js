function loadFooter() {
    var footer = document.createElement("div");
    footer.id = 'footer';
    var links = [
        ['index.html', 'Home', 'Hjem'],
        ['admission/index.html','Admission','Opptak'],
        ['about/index.html','About us','Om oss'],
        ['about/blog.html','Blog','Aktuelt'],
        ['about/calendar.html','Calendar','Kalender']
    ];
    var linkListMain = document.createElement('ul');
    for(const element of links){
        console.log('going through the list');
        var linkElm =document.createElement('a');
        var listElm = document.createElement('li');
        linkElm.setAttribute('style','text-align:left;');
        linkElm.setAttribute('href',element[0]);
        linkElm.innerHTML=element[1];
        listElm.appendChild(linkElm);
        linkListMain.appendChild(listElm);
        console.log(linkElm);
        console.log(linkListMain);
    }
    footer.appendChild(linkListMain);
    console.log(footer);


    var adress = ['Vei veiesen 123','123 Sted','0047 123 45 678'];
    var listAdress = document.createElement('ul');
    listAdress.id= 'adress';
    for (const element of adress){
        var listElm = document.createElement('li');
        listElm.innerHTML = element;
        listAdress.appendChild(listElm);
    }
    var listElm =document.createElement('ul');
    var linkElm = document.createElement('a');
    linkElm.setAttribute('href', 'mailto:post@laescuela.no');
    linkElm.innerHTML= 'post@laescuela';
    listElm.appendChild(linkElm);
    listAdress.appendChild(listElm);

    console.log(listAdress);
    footer.appendChild(listAdress);

    console.log(footer);

    var doc = document.getElementById('wrapper');
    doc.insertAdjacentElement("afterend", footer);
}