let timerele=document.getElementById("timer");
let spinnerele=document.getElementById("spinner");
let displayele=document.getElementById("quoteDisplay");
let resultele=document.getElementById("result");
let inputele=document.getElementById("quoteInput");
let sbtn=document.getElementById("submitBtn");
let rbtn=document.getElementById("resetBtn");
let count=0;
spinnerele.classList.toggle("d-none");

function counter(){
    count+=1;
    timerele.textContent=count;
    console.log(count);
}
let countval=setInterval(counter,1000);

function getquote(){
    let url="https://apis.ccbp.in/random-quote";
    let options={
        method:"GET"
    };
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        spinnerele.classList.add("d-none");
        displayele.textContent=jsonData.content;
        console.log(jsonData.content);
    });
}
getquote();
counter();
rbtn.onclick=function(){
    spinnerele.classList.remove("d-none");
    getquote();
    counter();
    count=0;
    resultele.textContent="";
    inputele.textContent="";
};
sbtn.onclick=function(){
    if(inputele.value===displayele.textContent){
        clearInterval(countval);
        resultele.textContent="You types in "+count+" Seconds";
        resultele.style.color="Green";
        resultele.style.fontWeight="500";
    }else{
        resultele.textContent="You typed incorrect sentence"
        resultele.style.color="Red";
        resultele.style.fontWeight="500";
    }
};