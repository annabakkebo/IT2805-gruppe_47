
function loadEmployees(employeeList=employeeList1) {
    var wrapper = document.getElementById('wrapper');
    var listOfEmployees = document.createElement('ul');
    for (var person of employeeList){
        console.log('Going through the employee list');
        var employeelistElm = document.createElement('li');
        employeelistElm.class = "employeeListElm";
        var personList = document.createElement('ul');

        var name = person.fullName();
        var nameListElm = document.createElement('li');
        nameListElm.innerHTML=name;
        personList.appendChild(nameListElm);

        var workTitle = person.workTitle;
        var workListElm = document.createElement('li');
        workListElm.innerHTML=workTitle;
        personList.appendChild(workListElm);

        var email = person.email();
        var emailListElm = document.createElement('li');
        var emailLinkElm = document.createElement('a');
        emailLinkElm.setAttribute('href', 'mailto:'+email);
        emailLinkElm.innerHTML=email;
        emailListElm.appendChild(emailLinkElm);
        personList.appendChild(emailListElm);

        var tlf = person.tlf;
        var tlfListElm = document.createElement('li');
        tlfListElm.innerHTML="Tlf: "+tlf;
        personList.appendChild(tlfListElm);

        employeelistElm.appendChild(personList);
        listOfEmployees.appendChild(employeelistElm);
    };
    wrapper.appendChild(listOfEmployees);

}