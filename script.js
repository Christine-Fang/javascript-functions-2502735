var temp = 86
tempC()
console.log(temp) // 86
function tempC() {
    //var temp
    console.log(temp) // undefined
    //temp = 50
    var temp = 50
    temp = (temp - 32) / 1.8
    console.log(temp) // 10
}

//hoisting
//after compilation, line 4-9 function declaration will be moved to before invocation on line 3
//inside tempC, line 8 is broken into 2 parts
//declaration is moved to before logging temp and replaces the global temp, which gives undefined
//outside tempC, it's the global temp