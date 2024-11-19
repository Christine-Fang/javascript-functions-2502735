const $ = document.querySelector.bind(document)

function add(a, b) {
  const c = a + b;
  return c;
}

const output = add(2, 2)var $ = document.querySelector.bind(document);

//declare then invoke
function add(a, b) {
  const c = a + b;
  return c;
};

//const output = add(2, 2);

//definition expression
let output1 = function(a, b){
    let temp = a + b;
    $('#output').innerHTML = temp;
    return temp;
};
//output1(2,10)
//IIIF immediately invoked function
//inside () is definition as expression
//(2,3) is invoke
//since function(a,b) is wrapped, it has a local scope, doesn't know about $ anymore
(function (a,b){
    console.log("IIFE", a + b);
    //const $ = document.querySelector.bind(document)
    const temp = a + b;
    $('#output').innerHTML = temp;
    //return a + b;
})(2,3);

//$('#output').innerHTML = output;
console.log(output);


$('#output').innerHTML = output
console.log(output)
