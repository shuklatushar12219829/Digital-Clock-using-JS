
function getTime(){
    let a=new Date();
    let h=a.getHours();
    let m=a.getMinutes();
    let s=a.getSeconds();
    if(h<10 || m<10 || s<10){
        if(h<10){
            h="0"+h;
        }
        if(m<10){
            m="0"+m;
        }
        if(s<10){
            s="0"+s;
        }
    }
    if(h>6 && h<18){
        document.getElementsByTagName("img")[0].setAttribute("src","Screenshot 2023-12-20 183131.png")
    }
    document.getElementsByClassName("card")[0].innerHTML=h;
    document.getElementsByClassName("card")[1].innerHTML=m;
    document.getElementsByClassName("card")[2].innerHTML=s;
}

let b=setInterval(getTime,1000);
console.log(b);
