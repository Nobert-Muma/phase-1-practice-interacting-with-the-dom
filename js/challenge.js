let counter=document.getElementById("counter");
let addi=parseInt(counter.textContent);
let likeCount=0;
function countt(){
    //let addi=parseInt(counter.textContent);
    addi+=1;
    counter.textContent=addi;
}

document.addEventListener("DOMContentLoaded", ()=>{
    setInterval(countt,1000)
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
        likeCount++;
        const likes=document.getElementsByClassName("likes")[0];
        const li=document.createElement("li");
        if(likeCount===1){
            li.innerHTML=`${addi} has been liked ${likeCount} time`;
        } else if (likeCount>1){
            li.innerHTML=`${addi} has been liked ${likeCount} times`;
        }
        likes.appendChild(li);
        //console.log(likes)
    })
    
})
