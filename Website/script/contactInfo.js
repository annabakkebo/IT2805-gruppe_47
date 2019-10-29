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
    tlf: "612 00 002"
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
    tlf: "911 10 932"
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
    tlf: "458 26 144"
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
    tlf: "919 16 377"
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
    tlf: "958 24 188"
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
    tlf: "938 21 568"
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
    tlf: "729 16 382"
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
    tlf: "916 27 382"
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
    tlf: "916 27 382"
};
var Person10 = {
    firstName: 'Fredrik',
    lastName: 'Sunde',
    category: 'counsellor',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Counsellor",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "911 10 245"
};
var Person11 = {
    firstName: 'Hanne',
    lastName: 'Torkildsen',
    category: 'counsellor',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Counsellor",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "152 41 099"
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
    tlf: "715 24 311"
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
    tlf: "715 24 311"
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
    tlf: "715 24 311"
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
    tlf: "816 27 155"
};
var Person16 = {
    firstName: 'Pauline',
    lastName: 'Johnsen',
    category: 'external',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Teacher assistant, rented",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "827 16 654"
};
var Person17 = {
    firstName: 'Helge',
    lastName: 'Olsen',
    category: 'external',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    workTitle: "Invigilator, rented",
    email: function () {
        return this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "@laeskuela.no"
    },
    tlf: "816 27 155"
};

var employeeList1 = [
    Person1, Person2, Person3, Person4, Person5, Person6, Person7, Person8, Person9,
    Person10, Person11, Person12, Person13, Person14, Person15, Person16, Person17
];
employeeList1.sort((a,b)=>(a.lastName>b.lastName)?1:-1);