function loadFooter() {
    var footer = document.createElement("div");
    footer.id = 'footer';
    var links = [
        ['index.html', 'Home', 'Hjem'],
        ['admission/index.html','Admission','Opptak'],
        ['about/index.html','About us','Om oss'],
        ['about/blog.html','Blog','Aktuelt'],
        ['about/calendar.html','Calendar','Kalender'],
        ['mailto:post@laescuela.no','post@laescuela']
    ];
    var linkElm = document.createElement('a');
    var listMain = document.createElement('ul');
    var listElm = document.createElement('li');
    listElm.setAttribute('style','text-align:left;');
    linkElm.setAttribute('href',links[0][0]);
    linkElm.innerHTML=links[0][1];
    listElm.appendChild(linkElm);
    listMain.appendChild(listElm);

    footer.appendChild(listMain);
    var doc = document.getElementsByTagName('body')[0];
    console.log(doc);
    doc.insertAdjacentElement("afterend", footer)
}