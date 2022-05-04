// write your code here

fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(data => ramenRater(data))

const ramenBar = document.getElementById("ramen-menu")
const ramenDetails = document.getElementById("ramen-detail")
const form = document.querySelector('form')
console.log(form)
const input = document.querySelector('input')



function ramenRater(data){
    data.forEach(data => {
        const ramenImage = document.createElement('img')
        ramenImage.src = data.image
        ramenBar.append(ramenImage)

        ramenImage.addEventListener("click", (e) => {
         e.preventDefault;
         ramenImage.src = data.image
        const bigImage = document.getElementsByClassName('detail-image')
        console.log(bigImage)
        bigImage.src = data.image
 
        const newRestaurant = document.getElementsByClassName('restaurant')
         console.log(newRestaurant)
         newRestaurant.textContent = data.restaurant

         //bigImage and newRestaurant are not working 

         const rating = document.getElementById('rating-display')
         rating.innerHTML = data.rating

         const comment = document.getElementById('comment-display')
         comment.innerHTML = data.comment

        const text = document.querySelector("h2")
        text.innerText = data.name   

        
        input.addEventListener("click", (e) => {
        e.preventDefault
        //how to save all of the inputs from the form 
        // form.textContent
        console.log(form.textContent)

        })
            
    }   )

    
    })

 

}



    
   // console.log(bigImage)
      //  bigImage.src = data.image











    //const image = document.createNewElement('img')
    // image.src = data.image
    //console.log(data.image)
    // ramenDetails.append(ramenImage)
    
    
  


        // const ul = document.createElement('ul')
        // ul.textContent = data.name
        // ramenBar.append(ul)
        // console.log(data.name)
        // ramenImage.img = data.image
        // ramenBar.append(ramenImage)
        



// function renderData(data){
//     li.textContent = data.name
//     ramenBar.append(li)
//     console.log(data.name)
//     //console.log(ramenBar)
//     // ramenImage.img = 
// }