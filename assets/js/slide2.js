let counter = 0;
let list = document.querySelectorAll('#list');
console.log(list);
let gradient = document.querySelectorAll('.gradient-border');
console.log(gradient);
document.querySelectorAll
list.forEach((list, index) => {
  list.style.left = `${index * 100}%`;
})

const next = (a) =>{
  counter = a;
  slide()
}

const slide = ()=>{
  list.forEach((list , index)=>{
    if(counter == index){
    list.style.transform = `translateX(-${counter * 100}%)`;
    gradient.forEach((gradients , index2)=>{
           if(index ===  index2){
            gradients.classList.add('active');
           }
           else{
            gradients.classList.remove('active');
           }
    })
    }
   else
   list.style.transform = `translateX(${counter * 100}%)`;
     

    
  })
}







