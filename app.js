let gameseq = []
let userseq = []
let btns = ['yellow', 'red', 'purple', 'green']
let started = true
let lavel = 0;
let h2 = document.querySelector('h2')

document.addEventListener('keypress', () => {
    if (started == true) {
        lavelup();
        started = false;
    }
})
function gameflash(btn) {
    btn.classList.add('flash')
    setTimeout(function () {
        btn.classList.remove('flash')
    }, 150); 
}
function userflash(btn) {
    btn.classList.add('userflash')
    setTimeout(function () {
        btn.classList.remove('userflash')
    }, 150); 
}

function lavelup(){
    userseq = [];
    lavel++;
    h2.innerText = `level ${lavel}`
    let randomidx = Math.floor(Math.random() *3);
    let randomcolor = btns[randomidx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    gameflash(randombtn);
    // heighest(lavel)
}
//store heighest value on there 
// let topscore  = document.querySelector('h3')
// function heighest(level){
//      topscore.innerText = `heighest score: ${lavel}`;
//      let store = localStorage.getItem(level)    
//      if(level > store){
//      localStorage.setItem(level)
//      }
// };
// window.onload = function(){
//     topscore.innerText = store
// }


function cheAns(idx) {
 if(userseq[idx] === gameseq[idx] ){
    if(userseq.length == gameseq.length){
        setTimeout((lavelup), 500);
    }
 } else{
    h2.innerHTML= 
    `game Over! your score was <b> ${lavel}</b> press any key to start`;
    document.querySelector('body').style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor = "white";
    },150);
    reset();
 }
}

function btnpress(){
let btn = this
userflash(btn);
 let usercolor = btn.getAttribute('id')
console.log(usercolor)
userseq.push(usercolor)
cheAns(userseq.length - 1);
}


let allbtn = document.querySelectorAll('.btn')
for (const btns of allbtn) {
    btns.addEventListener('click',(btnpress))
    };

    function reset(){
    started = false;
    gameseq = []
    userseq = []
    lavel = 0; 
    }


