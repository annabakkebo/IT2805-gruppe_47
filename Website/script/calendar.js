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
    var eventList = mainEventList[0];
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
    console.log(newMonth);
    var oldYear = Number(document.getElementById('monthRowCalValYear').innerText);
    var newYear = add ? (oldMonth == 11 ? oldYear +1 : oldYear) : (oldMonth==0 ? oldYear-1 : oldYear);
    console.log(newYear);
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

// Make circles

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
            var title = protoEvent[1].innerText;
            var description = protoEvent[2].innerText;
            eventList.push([d,title,description]);
            eventListDate.push(dd);
        }

    }
    return [eventList,eventListDate]
}

// When click on circles

function loadOverlay(eventList,day,month,year){
    var backOverlay = document.createElement('div');
    backoverlay.setAttribute('id','black');
    backOverlay.setAttribute('style','width:100%;' +
        'height100%;'+'position:fixed;background-color:rgba(0,0,0,0.5)');
    var bodyTag = document.getElementsByTagName('body')[0];

}

// Load into another page

