//1
const calculateAverageOfArrNum = (arr) => (arr.reduce((num1,num2)=>  num1+num2))/arr.length;
console.log(calculateAverageOfArrNum([5,10,15]));


//2
const reverseString = (str) =>{
    let reverseStr ="";
    for(let i=str.length-1;i>=0;i--){
        reverseStr+=str[i];
    }
    return reverseStr;
}
console.log(reverseString("world"));


//3
const findLongestWord = (arr) => {
    longestWord = arr[0];
    for(let word of arr){
        if(longestWord.length>word.length){
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord(["apple","banana","grapefruit"]));



//4
const calculateStringLength = (str) =>{
length = 0
 for(let alphabet of str){
    length+=1;
 }
 return length
}
console.log(calculateStringLength("hello"));



const students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 92 },
    { name: "Charlie", age: 19, grade: 88 }
  ];


//5.1
const calculateAverageGrade = (students) =>{
    let avg = 0;
    for(let i=0;i<students.length;i++){
        avg+=students[i].grade
    }
    return avg/students.length
}
console.log(calculateAverageGrade(students));


//5.2
const getNames = (students) =>{
    let studentsArr = [];
    for(let i=0;i<students.length;i++){
        studentsArr.push(students[i])
    }
    return studentsArr;
}
console.log(getNames(students));


//5.3
const calculateAverageAge = (students) =>{
    let avgAge = 0;
    for(let i=0;i<students.length;i++){
        avgAge+=students[i].age
    }
    return avgAge/students.length
}
console.log(calculateAverageAge(students));


//5.4
const highGrades = (students) =>{
    let avgAge = 0;
    for(let i=0;i<students.length;i++){
        avgAge+=students[i].grade
    }
    return avgAge/students.length
}
console.log(highGrades(students));


//5.5
const isAnyBelow18 = (stud) =>{
    let below18 = false;
    for(let i=0;i<stud.length;i++){
        if(stud[i].age<18){
            below18 = true;
            break;
        }
        return below18;
    }
    
}
console.log(isAnyBelow18(students));



//5.6
const findStudentsByName = (students, studentName)=>{
    for(let i=0;i<students.length;i++){
        if(students[i].name==studentName){
            return students[i];
        }
    }
}
console.log(findStudentsByName(students,"Charlie"));



//5.7
const getHighScoreStudents = (students) =>{
    const studentsAbove85 = [];
    for(let i=0;i<students.length;i++){
        if(students[i].grade>85){
        studentsAbove85.push(students[i].name)
        }
    }
    return studentsAbove85
}

console.log(getHighScoreStudents(students));