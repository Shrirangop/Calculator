
let Enteredval = "";
let string = "";
let numarr = [];
let numstring = "";
let ans = 0;
count = 1;

const calci = (event)=>{
    Enteredval = event.target.textContent;
    numstring+=Enteredval;

    // if(Enteredval==="+"){
    // console.log(parseFloat(numstring));
    // numarr.push(parseFloat(numstring));
    // ans+=parseFloat(numstring);
    // numstring = "";

    
    // }

    // if(Enteredval==="-"){
    //     numarr.push(parseFloat(numstring));
    //     ans-=parseFloat(numstring);
    //     numstring = "";
    // }

    // if(Enteredval==="*"){
    //     numarr.push(parseFloat(numstring));
    //     ans*=parseFloat(numstring);
    //     numstring = "";
    // }

    // if(Enteredval==="/"){
    //     numarr.push(parseFloat(numstring));
    //     ans/=parseFloat(numstring);
    //     numstring = "";
    // }

    if(Enteredval==="="){
    document.getElementById("screen").innerText = eval(string);
    console.log(ans);
    }

    else{
    string+=Enteredval;
    document.getElementById("screen").innerText = string;
    }
   
}

document.addEventListener('click',calci);