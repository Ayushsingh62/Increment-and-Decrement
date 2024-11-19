const counter = document.querySelector('.counter')

const Incrementbtn = document.querySelector('#increment')

const Decrementbtn = document.querySelector('#decrement')

let counterValue = 0

function updatevalue(){

    counter.textContent = counterValue


}
console.log(counterValue)

Incrementbtn.addEventListener('click',()=>{

counterValue++;
updatevalue();
console.log(counterValue)
})



Decrementbtn.addEventListener('click',()=>{

    counterValue--;
    updatevalue();
   console.log(counterValue) 
    })

    