function loadSlideshow() {
    var i;
    var root = document.querySelector('.fadein');
    var els = root.querySelectorAll(':not(:first-child)');


    for (i = 0; i < els.length; i++) {
        els[i].classList.add('is-hidden');
    }
    root.addEventListener('transitionend', function () {
        root.insertBefore(root.querySelector(':first-child.is-hidden'), null);
    });
    setInterval(function () {
        root.querySelector(':first-child').classList.add('is-hidden');
        root.querySelector(':nth-child(2)').classList.remove('is-hidden');
    }, 3000)
};



function loadSlideshow1() {
    var imageList = ['img/football.jpg', 'img/library.jpg', 'img/stroll.jpg', 'img/study.jpg', 'img/swing.jpg', 'img/swing2.jpg'];
    var slideshow = document.getElementById('slideshow');
    var fadein = document.createElement("div");
    fadein.className= 'fadein';
    
    for(const element of imageList){
        var image= document.createElement('img');
        image.setAttribute('src',element);
        image.classList.add('is-hidden');
        fadein.appendChild(image);
    }
    fadein.querySelector(':nth-child(1)').classList.remove('is-hidden');
    slideshow.appendChild( fadein);
    fadein.addEventListener('transitionend',function () {
        if(fadein.querySelector(':first-child.is-hidden'))
            fadein.insertBefore(fadein.querySelector(':first-child.is-hidden'), null);
    });
    setInterval(function () {
        fadein.querySelector(':first-child').classList.add('is-hidden');
        fadein.querySelector(':nth-child(2)').classList.remove('is-hidden');
    },3000)
}