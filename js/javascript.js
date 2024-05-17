$("#inputPhone").mask("(99) 99999-9999");

function formatPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.toString(); 
    return phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); 
  }

var courses = [
    {id:1, name: "Java"},
    {id:2, name: "Python"},
    {id:3, name: "PowerBI"},
    {id:4, name: "C++"}
];

var periods = [
    {id:1, name: "Manhã"},
    {id:2, name: "Tarde"},
    {id:3, name: "Noite"}
];

var students = [
    {   
        id: 1,
        name: "Ana",
        email: "ana@fatec.br",
        phone: 15999999999,
        course: 1,
        period: 3
    },
    {
        id: 2,
        name: "João",
        email: "joao@fatec.br",
        phone: 11987654321,
        course: 2,
        period: 1
    } 

];

loadStudents();

function loadStudents(){
    for (student of students){
        addNewRow(student);
    }
}

function addNewRow(student){
    var table = document.getElementById("studentsTable");
    var newRow = table.insertRow();

    var idNode = document.createTextNode(student.id);
    newRow.insertCell().appendChild(idNode);

    var nameNode = document.createTextNode(student.name);
    newRow.insertCell().appendChild(nameNode);

    var emailNode = document.createTextNode(student.email);
    newRow.insertCell().appendChild(emailNode);

    var formattedPhone = formatPhoneNumber(student.phone);

    var phoneNode = document.createTextNode(formattedPhone);
    newRow.insertCell().appendChild(phoneNode);

    var courseNode = document.createTextNode(courses[student.course-1].name);
    newRow.insertCell().appendChild(courseNode);

    var periodNode = document.createTextNode(periods[student.period-1].name);
    newRow.insertCell().appendChild(periodNode);

        
    }
