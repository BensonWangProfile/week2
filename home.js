const dots = document.getElementsByClassName("dots");
const turnImg = document.querySelector(".feedback_section");
const turnImgWidth = turnImg.clientWidth;

const pagination = document.querySelector(".pagination");


let temp = 0;
dots[temp].classList.add("active");

function turnPage(num){
    console.log(`num:${num},temp:${temp}`);
    turnImg.style = `transform:translateX(${-(num-temp)*turnImgWidth-15}px)`;
    dots[temp].classList.remove("active");
    dots[num].classList.add("active");

    //temp存入上一點位
    temp = num;
    
}

function getAtt(e){
    let num = e.target.getAttribute("page-num");
    turnPage(num);
}

pagination.addEventListener("click",getAtt);
