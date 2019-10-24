var Person1 = {
    firstName: "Arne",
    lastName: "Brillestad",
    category: 'leadership',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Principal",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "91662277"
};
var Person2 = {
    firstName: "Hanne",
    lastName: "Johannesen",
    category: 'teacher',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Teacher",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "91110932"
};
var Person3 = {
    firstName: "Joy",
    lastName: "McAuley",
    category: 'teacher',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Teacher",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "45826144"
};
var Person4 = {
    firstName: "Martin",
    lastName: "Hansen",
    category: 'teacher',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Teacher",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "91916377"
};
var Person5 = {
    firstName: "Eve",
    lastName: "Johnson",
    category: 'teacher',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Teacher",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "95824188"
};
var Person6 = {
    firstName: "Markus",
    lastName: "Torsen",
    category: 'teacher',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Teacher",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "93821568"
};
var Person7 = {
    firstName: "André",
    lastName: "Lunde",
    category: 'teacher',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Teacher",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "72916382"
};
var Person8 = {
    firstName: 'Trude',
    lastName: 'Thorsen',
    category: 'leadership',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Administator",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "91627382"
};
var Person9 = {
    firstName: 'Sigurd',
    lastName: 'Magnusson',
    category: 'leadership',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Administator",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "91627382"
};
var Person10 = {
    firstName: 'Name',
    lastName: 'Nameson',
    category: 'counsellor',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Counsellor",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "91110245"
};
var Person11 = {
    firstName: 'Name',
    lastName: 'Nameson',
    category: 'counsellor',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Counsellor",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "15241099"
};
var Person12 = {
    firstName: 'Gjermund',
    lastName: 'Nilsen',
    category: 'external',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Rented assistant",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "71524311"
};
var Person13 = {
    firstName: 'Jakob',
    lastName: 'Andersen',
    category: 'external',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Substitute teacher",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "71524311"
};
var Person14 = {
    firstName: 'Gjermund',
    lastName: 'Nilsen',
    category: 'external',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Consultant",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "71524311"
};
var Person15 = {
    firstName: 'Finn',
    lastName: 'Asbjørnsen',
    category: 'external',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Teacher assistant, rented",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "81627155"
};

var employeeList1 = [
    Person1, Person2, Person3, Person4, Person5, Person6, Person7, Person8, Person9,
    Person10, Person11, Person12, Person13, Person14, Person15
];
employeeList1.sort((a,b)=>(a.lastName>b.lastName)?1:-1);