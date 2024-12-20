var card = document.querySelector(".card")



const arr = [
    {
        img : 'https://images.unsplash.com/photo-1734365294963-743f3ed421c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D',
        name:'lora'
    },
    {
        img : 'https://images.unsplash.com/photo-1724722154056-f57482d540d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D',
        name:'lovely.luna'
    },
    {
        img : 'https://plus.unsplash.com/premium_photo-1734413233859-b288d00f7e36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D',
        name:'sparkle.spirit'
    },
    {
        img : 'https://images.unsplash.com/photo-1734312621516-3d258db95e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        name:'precioue_peter'
    },
    {
        img : 'https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        name:'little_Aura'
    },
]

var sum = ''

arr.forEach(function(elem){
    sum = sum + ` <div class="story">
            <img src= ${elem.img}alt="">
             <h5>${elem.name}</h5>
        </div>
           `

          
})
card.innerHTML=sum



