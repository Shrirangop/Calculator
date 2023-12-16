
let Enteredval = "";
let string = "";
let numarr = [];
let numstring = "";
let ans = 0;

const calci = (event)=>{
    Enteredval = event.target.textContent;
    numstring+=Enteredval;
    if(Enteredval==="+"){
    numarr.push(parseFloat(numstring));
    ans+=parseFloat(numstring);
    numstring = "";
    
    }
    string+=Enteredval;
    document.getElementById("screen").innerText = string;
   
    console.log(numarr);
    console.log(ans);




}

document.addEventListener('click',calci);