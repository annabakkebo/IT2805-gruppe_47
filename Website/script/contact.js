function loadContact() {
    var wrapper = document.getElementById('wrapper');
    var employeeDiv = document.createElement('div');
    employeeDiv.id= 'employees';
    wrapper.appendChild(employeeDiv);
    loadEmployees();
}

function loadEmployees(employeeList=employeeList1) {
    var employeeDiv = document.getElementById('employees');
    var listOfEmployees1 = document.createElement('ul');
    listOfEmployees1.classList='employeeList';
    listOfEmployees1.id='column1';
    var listOfEmployees2 = document.createElement('ul');
    listOfEmployees2.classList='employeeList';
    listOfEmployees2.id='column2';
    for (var i=0; i< employeeList.length;i++){
        console.log('Going through the employee list');
        var employeelistElm = document.createElement('li');
        employeelistElm.classList = "employeeListElm";
        var personList = document.createElement('ul');

        var name = employeeList[i].fullName();
        var nameListElm = document.createElement('li');
        nameListElm.innerHTML=name;
        personList.appendChild(nameListElm);

        var workTitle = employeeList[i].workTitle;
        var workListElm = document.createElement('li');
        workListElm.innerHTML=workTitle;
        personList.appendChild(workListElm);

        var email = employeeList[i].email();
        var emailListElm = document.createElement('li');
        var emailLinkElm = document.createElement('a');
        emailLinkElm.setAttribute('href', 'mailto:'+email);
        emailLinkElm.innerHTML=email;
        emailListElm.appendChild(emailLinkElm);
        personList.appendChild(emailListElm);

        var tlf = employeeList[i].tlf;
        var tlfListElm = document.createElement('li');
        tlfListElm.innerHTML="Phone: "+tlf;
        personList.appendChild(tlfListElm);

        employeelistElm.appendChild(personList);
        if (i%2==0){
            listOfEmployees1.appendChild(employeelistElm);
        }
        else{
            listOfEmployees2.appendChild(employeelistElm);
        }
    };
    while (employeeDiv.hasChildNodes()){
        employeeDiv.removeChild(employeeDiv.childNodes[0]);
    }
    employeeDiv.appendChild(listOfEmployees1);
    employeeDiv.appendChild(listOfEmployees2);

}

function loadSection(key,employeeList=employeeList1){
    var new_list=[];
    for (element of employeeList){
        if (element['category'] == key){
            new_list.push(element);
        }
    }
    loadEmployees(new_list);
}