
let student = [
    {
        rollNo: 101,
        name: "Rahul",
        hindi: 80,
        english: 75,
        maths: 90
    },
    {
        rollNo: 102,
        name: "Amit",
        hindi: 85,
        english: 70,
        maths: 95
    },
    {
        rollNo: 103,
        name: "Priya",
        hindi: 78,
        english: 92,
        maths: 87
    }
];

const marksForComputer = [88, 92, 95];
for(let i = 0; i < student.length; i++)
    student[i].computer = marksForComputer[i];

console.log("1.1: Students Data with Computer Marks");
for(let i = 0; i < student.length; i++)
    console.log(`Name: ${student[i].name}, Roll No: ${student[i].rollNo}, Hindi: ${student[i].hindi}, English: ${student[i].english}, Maths: ${student[i].maths}, Computer: ${student[i].computer}`);
console.log('\n');

const marksForScience = [82, 90, 88];
for(let i = 0; i < student.length; i++)
    student[i].science = marksForScience[i];

console.log("1.2: Updated Students Data with Science Marks");
for(let i = 0; i < student.length; i++)
    console.log(`Name: ${student[i].name}, Roll No: ${student[i].rollNo}, Hindi: ${student[i].hindi}, English: ${student[i].english}, Maths: ${student[i].maths}, Computer: ${student[i].computer}, Science: ${student[i].science}`);
console.log('\n');

//QUESTION 2:
student.push({
    rollNo: 104,
    name: "Kaveri",
    hindi: 84,
    english: 88,
    maths: 78,
    computer: 90,
    science: 86
});
console.log("2.1: Kaveri's Data");
console.log(student[3]);

console.log("2.2: Updated Students Data with Kaveri");
for(let i = 0; i < student.length; i++)
    console.log(`Name: ${student[i].name}, Roll No: ${student[i].rollNo}, Hindi: ${student[i].hindi}, English: ${student[i].english}, Maths: ${student[i].maths}, Computer: ${student[i].computer}, Science: ${student[i].science}`);
console.log('\n');

console.log("2.3: Updated Students Data with Total Marks");
for(let i = 0; i < student.length; i++){
    let totalMarks = student[i].hindi + student[i].english + student[i].maths + student[i].computer + student[i].science;
    student[i].totalMarks = totalMarks;
    console.log(`Name: ${student[i].name}, Roll No: ${student[i].rollNo}, Total Marks: ${student[i].totalMarks}`);
}
console.log("\n");

console.log("2.4: Updated Students Data with Average Marks");
for(let i = 0; i < student.length; i++){
    student[i].avgMarks = student[i].totalMarks / 5;
    console.log(`Name: ${student[i].name}, Roll No: ${student[i].rollNo}, Average Marks: ${student[i].avgMarks}`);
}
console.log("\n");

// QUESTION 2
function returnGrade(marks){
    if(marks >= 90 && marks <= 100)
        return "A";
    else if(marks >= 80 && marks <= 89)
        return "B";
    else if(marks >= 70 && marks <= 79)
        return "C";
    else if(marks >= 60 && marks <= 69)
        return "D";
    else if(marks >= 50 && marks <= 59)
        return "E";

    return "F";
}

for(let i = 0; i < student.length; i++){
    console.log(`====== Report Card for ${student[i].name} ======`);
    console.log(`Roll No. : ${student[i].rollNo}`);
    console.log(`------\nMarks\n------`);
    console.log(`Hindi: ${student[i].hindi}`);
    console.log(`English: ${student[i].english}`);
    console.log(`Maths: ${student[i].maths}`);
    console.log(`Computer: ${student[i].computer}`);
    console.log(`Science: ${student[i].science}`);
    console.log('------');
    console.log(`Total: ${student[i].totalMarks}`);
    console.log(`Average: ${student[i].avgMarks}`);
    console.log(`Grade: ${returnGrade(student[i].avgMarks)}`);
    console.log("------ ------ ------ ------");
}