function daysInMonth(year,month){
    // Need to index by following month, since we use a trick by finding the date of the previous months last date.
    var monthIndex = month+1;
    return new Date(year,monthIndex,0).getDate();
}
function genCal(date){
    var month = date.getMonth();
    var year = date.getFullYear();
    var monthStart = new Date(year,month).getDay();
    var daysOfMonth = daysInMonth(year,month);
    var amountOfRows = math.trunc((daysOfMonth+monthStart)/6)+1;
    var daysArray=[];
    for (var i =1;i<monthStart,,i++){
        daysArray.append
    }
    var daysinWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    var monthArray = [daysinWeek];
    for(var i=0;i<amountOfRows;i++){
        var weekArray =[];
        for (var j=0;j<daysinWeek.length;j++){

        }

    }

}
