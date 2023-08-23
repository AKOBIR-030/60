const slide = document.querySelectorAll('.slide')
const btn_prev = document.querySelector('.btn-prev')
const btn_next = document.querySelector('.btn-next')
const container = document.querySelector('.container')
const counter = document.querySelector('.c1')

let index=0


function slideRight(){
    const TL =gsap.timeline()

    TL
    .to(slide[index],{
        x:0,
        duration:1
    })
}

function slideleft(){
    console.log(index);
    const TL = gsap.timeline()

    TL
    .to(slide[index],{
        x:"-100%",
        duration:1
    })
}

btn_next.addEventListener('click' ,()=>{
    console.log(index);
    if(index===slide.length-1){
        gsap.to(container,{
            keyframes:[
                {duration:.1 , x:4},
                {duration:.1 , x:-4},
                {duration:.1 , x:4},
                {duration:.1 , x:-4},
            ]
        })
        return
    }

    index ++
    slideRight()

})

btn_prev.addEventListener('click' ,()=>{

    if(index===0){
        gsap.to(container,{
            keyframes:[
                {duration:.1 , x:4},
                {duration:.1 , x:-4},
                {duration:.1 , x:4},
                {duration:.1 , x:-4},
            ]
        })
        return
    }

   
    slideleft()
    index --
})
