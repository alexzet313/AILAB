let point = document.querySelectorAll('.point')
let imageSlider = document.querySelectorAll('.imageSlider')
let leftBtn = document.getElementById('leftBtn')
let rightBtn = document.getElementById('rightBtn')

point[0].classList.add('activeImage')
imageSlider[0].classList.add('activeImage')

let counter = 0;

for(let i=0; i<point.length; i++){
    point[i].addEventListener('click',()=>{
        for(let k = 0; k<imageSlider.length; k++){
            point[k].classList.remove('activeImage')
            imageSlider[k].classList.remove('activeImage')
        }
        counter = i;
        imageSlider[counter].classList.add('activeImage');
        point[counter].classList.add('activeImage');
    })
}

leftBtn.addEventListener('click',()=>{
    for(let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
    }
    counter--
    if (counter <0){
        counter = imageSlider.length-1
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
})

rightBtn.addEventListener('click',()=>{
    for(let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
    }
    counter++
    if (counter >= imageSlider.length){
        counter = 0
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
})


function slowSlider () {
    for(let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
    }
    counter++
    if (counter >= imageSlider.length){
        counter = 0
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
}

let second = 1000*2
let TimerImage = setInterval(()=>slowSlider(), second)

let blockSlider = document.getElementById('blockSlider')
blockSlider.addEventListener('mouseover',()=>{
    clearInterval(TimerImage)
})

blockSlider.addEventListener('mouseleave',()=>{
    TimerImage = setInterval(()=>slowSlider(), second)
})




const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () =>{
    popUp.classList.remove('active');
})


function changeButtonText() {
    var button = document.getElementById("sendButton");
    button.innerHTML = "Положение скачено";
}


