var monthsNameArray = [['January','Jan.'],['February','Feb.'],['March','Mar.'],['April','Apr.'],['May','May'],
    ['June','Jun.'],['July','Jul.'],['August','Aug.'],['September','Sep.'],['October','Oct.'],['November','Nov.'],
    ['December','Dec.']];
var daysNameArray = [['Mon','Mo','Monday'],['Tue','Tu','Tuesday'],['Wed','We','Wednesday'],['Thu','Th','Thursday'],
    ['Fri','Fr','Friday'], ['Sat','Sa','Saturday'],['Sun','Su','Sunday']];
function dayName(day,small){
    if (small){
        return daysNameArray[day][1]
    } else {
        return daysNameArray[day][0]
    }
}
function monthName(month,small){
    if (small){
        return monthsNameArray[month][1]
    } else {
        return monthsNameArray[month][0]
    }
}

function daysInMonth(year,month){
    // Need to index by the following month, since we use a trick by finding the date of the previous months last date.
    var monthIndex = month+1;
    return new Date(year,monthIndex,0).getDate();
}

function makeDateArray(year,month){
    /*Returns the dates of the month concated with the dates of preceding and succeding month in the weeks of month
    change. I.e. in format [[date,month],...,[date,month]]*/
    var daysOfMonth = daysInMonth(year,month);
    var lastDateBef = daysInMonth(year,month-1);
    var firstDateMonthDay = new Date(year,month).getDay() || 7;//This returns 7 if sunday
    var dateArray = [];
    for (var i=firstDateMonthDay;i>1;i--){
        dateArray.push([lastDateBef-i+2,month-1]);
    }
    for (var i=1;i<daysOfMonth+1;i++){
        dateArray.push([i,month])
    }
    var len = 7-(dateArray.length)%7;
    for (var i=0;i<len;i++){
        dateArray.push([i+1,month+1])
    }
    return dateArray
}
function fillCalendarFunc (mainframe,dateArray,month,year) {
    var i=0;
    var mainEventList = eventLoad(year,month);
    var eventListDate = mainEventList[1];
    while (i< dateArray.length){
        var tablerow = document.createElement("tr");
        tablerow.setAttribute('class','dateRowsCal');
        for (var j=0;j<7;j++){
            /*Put in code for getting events here.*/
            var tablecell = document.createElement("td");
            var dateNode = document.createElement('span')
            dateNode.style.position='absolute';
            dateNode.style.zIndex='0';
            dateNode.innerText=dateArray[i][0];
            tablecell.appendChild(dateNode);
            if (month == dateArray[i][1]){
                tablecell.setAttribute('class','dateSameMonth');
                if (eventListDate.includes(dateArray[i][0])){
                    var canvElmt = document.createElement('canvas');
                    canvElmt.setAttribute('width','50');
                    canvElmt.setAttribute('height','50');
                    canvElmt.setAttribute('class','calCircl');
                    canvElmt.setAttribute('onclick',
                        'loadOverlay('+dateArray[i][0]+','+
                        month+','+year+')')
                    /*Add a onclick function*/
                    tablecell.appendChild(canvElmt);
                }
            } else {
                tablecell.setAttribute('class','dateNotSameMonth');
            }

            tablerow.appendChild(tablecell);
            i+=1;
        }
        mainframe.appendChild(tablerow);
    }
}

function calHead(mainFrame,month,year,small){
    var monthRow = document.createElement('tr');
    var monthRowCell = document.createElement('th');
    var monthRowCell2 = document.createElement('th');
    var monthRowCell3 = document.createElement('th');
    monthRowCell.setAttribute('colspan','3');
    monthRowCell2.setAttribute('colspan','2');
    monthRowCell3.setAttribute('colspan','2');
    var arr1 = document.createElement('button');
    arr1.setAttribute('type','button');
    arr1.setAttribute('name','back');
    arr1.setAttribute('onclick','changeMonth(false,'+small+')');
    arr1.innerText ='<';
    var arr2 = document.createElement('button');
    arr2.setAttribute('type','button');
    arr2.setAttribute('name','forward');
    arr2.setAttribute('onclick','changeMonth(true,'+small+')');
    arr2.innerText ='>';
    var spanElmt = document.createElement('span');
    var spanElmt2 = document.createElement('span');
    var spanElmt3 = document.createElement('span');
    spanElmt.setAttribute('id','monthRowCal');
    spanElmt2.setAttribute('id','monthRowCalVal');
    spanElmt3.setAttribute('id','monthRowCalValYear');
    spanElmt2.style.display='none';
    spanElmt2.innerHTML = month;
    spanElmt3.style.display='none';
    spanElmt3.innerHTML = year;
    spanElmt.innerHTML = monthName(month,small)+'<br\> '+year;
    monthRowCell2.appendChild(arr1);
    monthRowCell.appendChild(spanElmt);
    monthRowCell.appendChild(spanElmt2);
    monthRowCell.appendChild(spanElmt3);
    monthRowCell3.appendChild(arr2);
    monthRow.append(monthRowCell2);
    monthRow.append(monthRowCell);
    monthRow.append(monthRowCell3);
    mainFrame.appendChild(monthRow);
}
function displayCalLoad(small=false){
    /*Loads in the calendar for the current month on load.*/
    var currDate = new Date();
    var currMonth = currDate.getMonth();
    var currYear = currDate.getFullYear();
    var calElmt = document.getElementById('calElmt');
    var mainFrame = document.createElement('table');
    mainFrame.setAttribute('id','small'+small)
    calHead(mainFrame,currMonth,currYear,small);
    var dayRow = document.createElement('tr');
    for (var i=0;i < 7;i++){
        var dayCell = document.createElement('th');
        dayCell.innerHTML = dayName(i,small);
        dayRow.appendChild(dayCell);
    }
    mainFrame.appendChild(dayRow);
    calElmt.appendChild(mainFrame);
    var dateArray = makeDateArray(currYear,currMonth);
    fillCalendarFunc(mainFrame,dateArray,currMonth,currYear);
    circleDrawing();
}

function changeMonth(add,small=false){
    /*add gives wether we are going forward in time or backwards.*/
    var oldMonth = Number(document.getElementById('monthRowCalVal').innerText);
    var newMonth = add ?  (oldMonth == 11 ? 0 : oldMonth+1) : (oldMonth == 0 ? 11 : oldMonth-1);
    var oldYear = Number(document.getElementById('monthRowCalValYear').innerText);
    var newYear = add ? (oldMonth == 11 ? oldYear +1 : oldYear) : (oldMonth==0 ? oldYear-1 : oldYear);
    document.getElementById('monthRowCalValYear').innerText = newYear;
    document.getElementById('monthRowCalVal').innerText = newMonth;
    document.getElementById('monthRowCal').innerHTML = monthName(newMonth,small)+'<br\>'+newYear;
    var calElmt = document.getElementById('calElmt');
    var delList = document.getElementsByClassName('dateRowsCal');
    while (delList[0]) {
        delList[0].parentNode.removeChild(delList[0]);
    }
    var mainFrame = calElmt.firstChild;
    var newDateArray = makeDateArray(newYear,newMonth,);
    fillCalendarFunc(mainFrame,newDateArray,newMonth,newYear);
    circleDrawing();
}

// ListDisplay

function toggleEvDisp(elmt){
    var b = elmt.parentElement;
    var a = b.querySelector('.descEvent');
    if (a.style.display==="none"){
        a.style.display='block'
    }
    else {
        a.style.display='none'
    }
}

function toggleListCalDisp(cal=true){
    var b = document.getElementById('eventWrapper');
    var a = document.getElementById('calElmt');
    var c = document.getElementById('calSymb');
    var d = document.getElementById('listSymb');
    if (cal){
        a.style.display='block';
        b.style.display='none';
        c.style.backgroundColor='rgb(169,209,142)';
        d.style.backgroundColor='rgb(200,200,200)';
    } else {
        b.style.display='block';
        a.style.display='none';
        d.style.backgroundColor='rgb(169,209,142)';
        c.style.backgroundColor='rgb(200,200,200)';
    }
}

// Drawing

function circleDrawing () {
    var c = document.getElementsByClassName('calCircl');
    for (var i=0;i<c.length;i++) {
        var ctx = c[i].getContext("2d");
        ctx.beginPath();
        ctx.arc(25, 25, 20, 0, 2 * Math.PI);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 4;
        ctx.stroke();
    }
}

function calSymbFunc() {
    var c = document.getElementById('calSymb');
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(20,10);
    ctx.lineTo(80,10);
    ctx.quadraticCurveTo(90,10,90,20);
    ctx.lineTo(90,30);
    ctx.lineTo(10,30);
    ctx.lineTo(10,20);
    ctx.quadraticCurveTo(10,10,20,10);
    ctx.closePath();
    ctx.fillstyle = 'black';
    ctx.fill();
    ctx.strokeStyle='black';
    ctx.lineWidth=3;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(10,25);
    ctx.lineTo(10,80);
    ctx.quadraticCurveTo(10,90,20,90);
    ctx.lineTo(80,90);
    ctx.quadraticCurveTo(90,90,90,80);
    ctx.lineTo(90,25);
    ctx.strokeStyle='black';
    ctx.lineWidth=3;
    ctx.stroke();
    for (var i=38;i<80;i+=18){
        for (var j=18;j<80;j+=18){
            ctx.beginPath()
            ctx.rect(j,i,10,10);
            ctx.stroke();
            ctx.fill();
        }
    }
}

function listSymbFunc() {
    var c = document.getElementById('listSymb');
    var ctx = c.getContext('2d');
    ctx.beginPath();
    for (var i=25;i<100;i+=25){
        ctx.moveTo(20,i);
        ctx.arc(20, i, 10, 0, 2 * Math.PI);
    }
    ctx.fill();
    ctx.beginPath()
    for (var j=25;j<100;j+=25){
        ctx.moveTo(40,j);
        ctx.lineTo(85,j);
    }
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 15;
    ctx.stroke();
}

// Find events

function eventLoad(year, month){
    var protoEventList = document.querySelectorAll('div#eventWrapper > div.event');
    var eventList = [];
    var eventListDate =[]
    for (var i=0;i<protoEventList.length;i++){
        var protoEvent = protoEventList[i].children;
        var protoD = protoEvent[0].innerText.split('.');
        var dm = Number(protoD[1])-1;
        var dy = Number(protoD[2]);
        var dd = Number(protoD[0]);
        if (dm==month && dy==year) {
            var d = new Date(dy,dm,dd);
            var title = protoEvent[1].innerHTML;
            var description = protoEvent[2].innerHTML;
            eventList.push([d,title,description]);
            eventListDate.push(dd);
        }

    }
    return [eventList,eventListDate]
}

// When click on circles

function loadOverlay(day,month,year){
    var backOverlay = document.createElement('div');
    backOverlay.setAttribute('id','blackOverlay');
    backOverlay.setAttribute('style','width:100%;' +
        'height:100%;position:fixed;background-color:rgba(0,0,0,0.5);'+
        'z-index:2;top:0;left:0;');
    backOverlay.setAttribute('onclick','removeOverlay1()');
    var eventInfo = document.createElement('div');
    eventInfo.setAttribute('id','overlayEventInfo');
    eventInfo.setAttribute('onclick','dontRemoveOverlay(event)')
    var closeButt = document.createElement('div');
    closeButt.setAttribute('class','closeButton');
    closeButt.setAttribute('onclick','removeOverlay2(event)');
    eventInfo.appendChild(closeButt);
    var dateDiv = document.createElement('div');
    dateDiv.setAttribute('class','evInfDa');
    dateDiv.innerText = day +'.'+month+'.'+year;
    eventInfo.appendChild(dateDiv);
    var mainEventList = eventLoad(year,month);
    var eventDateList= mainEventList[1];
    var i=0;
    while (i<eventDateList.length){
        var j = eventDateList.indexOf(day,i);
        if ( (j==-1)){
            break;
        } else {
            var titleDiv = document.createElement('div');
            titleDiv.setAttribute('class','evInfTit');
            var infDiv = document.createElement('div');
            infDiv.setAttribute('class','evInfInf');
            titleDiv.innerHTML = mainEventList[0][j][1];
            infDiv.innerHTML = mainEventList[0][j][2];
            var eventInfoWrapper = document.createElement('div');
            eventInfoWrapper.appendChild(titleDiv);
            eventInfoWrapper.appendChild(infDiv);
            eventInfo.appendChild(eventInfoWrapper);
            i=j+1;
        }
    }
    backOverlay.appendChild(eventInfo);
    var bodyTag = document.getElementsByTagName('body')[0];
    bodyTag.insertBefore(backOverlay,bodyTag.childNodes[0]);

}
/*The three following functions remedy the fact that an onclick-event propagates through children
 elements and to parents*/
function dontRemoveOverlay(e){
    e.stopPropagation();
}
function removeOverlay1(){
    var alfa = document.getElementById('blackOverlay');
    var parElmAlfa=alfa.parentElement;
    parElmAlfa.removeChild(alfa);
}

function removeOverlay2(e){
    e.stopPropagation();
    var alfa = document.getElementById('blackOverlay');
    var parElmAlfa=alfa.parentElement;
    parElmAlfa.removeChild(alfa);
}

// Load into another page

