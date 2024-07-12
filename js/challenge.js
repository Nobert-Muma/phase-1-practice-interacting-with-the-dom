let counter=document.getElementById("counter");
let addi=parseInt(counter.textContent);
const pause=document.getElementById("pause");
const disable=document.querySelectorAll(".dis");
const form=document.getElementsByTagName("form")[0];
const inputValue=document.getElementById("comment-input");
const submmit=document.getElementById("submit");
let likeCount=0;
let isPaused=false;
function countt(){
    //let addi=parseInt(counter.textContent);
    addi+=1;
    counter.textContent=addi;
}

document.addEventListener("DOMContentLoaded", ()=>{
    const intervall=setInterval(countt,1000);
    const minus=document.getElementById("minus");
    minus.addEventListener("click", ()=>{
        addi=addi-1;
        counter.textContent=addi;
    });
    const plus=document.getElementById("plus");
    plus.addEventListener("click",()=>{
        addi=addi+1;
        counter.textContent=addi;
    });
    const heart=document.getElementById("heart");
    heart.addEventListener("click", ()=>{
        likeCount+=1;
        const likes=document.getElementsByClassName("likes")[0];
        const li=document.createElement("li");
        if(likeCount===1){
            li.innerHTML=`${addi} has been liked ${likeCount} time`;
        } else if (likeCount>1){
            li.innerHTML=`${addi} has been liked ${likeCount} times`;
        }
        likes.appendChild(li);
        //console.log(likes)
    });
    // const pause=document.getElementById("pause");
    pause.addEventListener("click", ()=>{
        
        isPaused=true;
        pause.textContent="Resume";
        // const disable=document.querySelectorAll(".dis");
        disable.forEach(button=>button.setAttribute("disabled", ""));
        clearInterval(intervall);
        intervall=null;
    });
    submmit.addEventListener("click",(e)=>{
        e.preventDefault();
        let keyedValue=inputValue.value;
        const h3=document.getElementsByTagName("h3")[0];
        h3.append(keyedValue);
        h3.append(document.createElement("br"))
        inputValue.value="";

    })
   

    
})
