let btn = document.getElementById('btn');
let btn2 =  document.getElementById('btn-2');
let element = document.getElementById('quote');
    

let output = document.getElementById('output');
let quotes = [
    '”You can do anything, but not everything.” David Allen',
    '”Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.”Antoine de Saint-Exupery',
   ' “The richest man is not he who has the most, but he who needs the least.” Unknown Author',
  ' ”You miss 100 percent of the shots you never take.” Wayne Gretzky',
  '"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default." J. K. ROWLING',
  '"Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but — I hope — into a better shape." CHARLES DICKENS',
  '"Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all." DALE CARNEGIE',
  '"Never fear the darkness… The strongest trees are rooted in the dark places of the earth. Darkness will be your cloak, your shield, your mother’s milk. Darkness will make you strong." GEORGE R.R. MARTIN',
  '“Courage is not the absence of fear, but rather the judgement that something else is more important than fear.” Ambrose Redmoon',
 ' ” You must be the change you wish to see in the world.” Gandhi',
];
btn.addEventListener('click', function(){
    var randQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randQuotes;
})

let selectValue = element.value;
console.log(selectValue);
//let authName = ['David Allen','Saint-Exupery','Unknown Author','Wayne Gretzky','J. K. ROWLING','CHARLES DICKENS','DALE CARNEGIE','GEORGE R.R. MARTIN','Ambrose Redmoon','Gandh']


//onclick="myfunction('John', 20)"
myfunction = function(selectValue) {
    // if (selectValue === 'David Allen'){
    //         output.innerHTML = 'You can do anything, but not everything.';
    //     } else if(selectValue ==='Antoine de Saint-Exupery' ){
    //         output.innerHTML = 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away';
    //     } else if(selectValue === 'Unknown Author'){
    //     output.innerHTML = 'The richest man is not he who has the most, but he who needs the least.';
    // }else{
    //     output.innerHTML = 'any quote';
    // }
    


// btn2.addEventListener('click', function(selectValue){
//     console.log(selectValue);
let varb = document.getElementById('quote'); 
var selectValue =  varb.value ; 
//switch('selectValue'){case 'David Allen' :

    console.log(selectValue);
    switch (selectValue){
        case "David Allen":
            output.innerHTML = 'You can do anything, but not everything.';
            break;
        case "Antoine de Saint-Exupery":
                output.innerHTML = 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away';
            break;
        case "Unknown Author":
                    output.innerHTML = 'The richest man is not he who has the most, but he who needs the least.';
            break;
        case "Wayne Gretzky":
                    output.innerHTML = 'You miss 100 percent of the shots you never take.';
            break;
        case "J. K. ROWLING":
                    output.innerHTML = 'It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default.';
            break;
        case "CHARLES DICKENS":
                output.innerHTML = 'Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but — I hope — into a better shape. ';
            break;
        case "DALE CARNEGIE":
                output.innerHTML = 'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.';
            break;
        case "GEORGE R.R. MARTIN":
                output.innerHTML = 'Never fear the darkness… The strongest trees are rooted in the dark places of the earth. Darkness will be your cloak, your shield, your mother’s milk. Darkness will make you strong. ';
            break;
        case "Ambrose Redmoon":
                output.innerHTML = 'Courage is not the absence of fear, but rather the judgement that something else is more important than fear.” ';
                break;
        case "Gandhi":
                output.innerHTML = 'You must be the change you wish to see in the world. ';
                break;
        default: 
                output.innerHTML = 'any quote';




     }
}

