// shorthand

let personName = "Maze"
let age = 20

const obj = {
  personName: personName,
  age: age,
};


const obj1 = { personName, age }


const createObject = (personName, age) => {
    return { personName, age };
}


console.log(createObject("Mace", 20));