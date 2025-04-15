// template literals


// a function to concatenmate strings

const createMessage = (item, quantity) => {
    return `You have ${quantity} ${item}${quantity>1?"s":""}`
}

console.log(createMessage("apple", 1)); 
console.log(createMessage("Guava", 3));



// a function to create URL

const generateURL = (endpoint, params) => {
    return `https://api.example.com/${endpoint}?${params}`
}


console.log(generateURL("users","page=1&limit=10"))