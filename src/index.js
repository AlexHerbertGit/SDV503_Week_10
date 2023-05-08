var obj = {firstName: "Alexander", lastName: "Herbert"};
var obj2 = obj;
obj2.firstName = "Alex"
console.log(obj.firstName)

//Create Object that stores Student Information 

let studentInfo = new Object();

studentInfo.name = "Alex Herbert";
studentInfo.dob = "25 Jan 1992";
studentInfo.class1 = "SDV503";
studentInfo.class2 = "DES503";
studentInfo.class3 = "COM502";
studentInfo.class4 = "CSA502";

console.log(typeof studentInfo)
console.log(studentInfo)

function Book(name, year)
{
    this.name = name;
    this.year = year;
}

var firstBook = new Book("ReactJS Ebook", 2016);
var secondBook = new Book("JavaScript Ebook", 2017);

console.log(firstBook.name, firstBook.year);

firstBook instanceof Book;