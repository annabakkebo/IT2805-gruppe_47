var monthsNameArray = [['January','Jan.'],['February','Feb.'],['March','Mar.'],['April','Apr.'],['May','May'],
    ['June','Jun.'],['July','Jul.'],['August','Aug.'],['September','Sep.'],['October','Oct.'],['November','Nov.'],
    ['December','Dec']];
var daysNameArray = [['Monday','Mon.'],['Tuesday','Tu.'],['Wednesday','Wed.'],['Thursday','Th.'],['Friday','Fri.'],
    ['Saturday','Sat.'],['Sunday','Sun.']];
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

function displayCal(small=false){
    var currDate = new Date();
    var calElmt = document.getElementById('calElmt');
    calElmt.setAttribute('id','calTab')
    var mainFrame = document.createElement('table');
    var monthRow = document.createElement('tr');
    var monthRowCell = document.createElement('th');
    monthRowCell.setAttribute('colspan','7');
    var arr1 = document.createElement('button');
    arr1.setAttribute('type','button');
    arr1.setAttribute('name','back');
    arr1.innerText ='<';
    var arr2 = document.createElement('button');
    arr2.setAttribute('type','button');
    arr2.setAttribute('name','forward');
    arr2.innerText ='>';
    var textNode = document.createTextNode(monthName(currDate.getMonth(),small)+' '+currDate.getFullYear());
    monthRowCell.appendChild(arr1);
    monthRowCell.appendChild(textNode);
    monthRowCell.appendChild(arr2);
    monthRow.append(monthRowCell);
    mainFrame.appendChild(monthRow);
    var dayRow = document.createElement('tr');
    for (var i=0;i < 6;i++){
        var dayCell = document.createElement('th');
        dayCell.innerHTML = dayName(i,small);
        dayRow.appendChild(dayCell);
    }
    mainFrame.appendChild(dayRow);
    calElmt.appendChild(mainFrame);
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