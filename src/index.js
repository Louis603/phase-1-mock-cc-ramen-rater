// write your code here
const ramens = 'http://localhost:3000/ramens'

const ramenFetch = () => {
fetch(ramens)
.then(res => res.json())
.then(data => ramenImg(data))
}



const ramenImg = (data) => {
    const ramenData = data
    const blankImage = document.getElementById('detail-image')
    const blankH2 = document.querySelector('.name')
    const blankH3 = document.querySelector('.restaurant')
    //console.log(blankH2)
    //console.log(blankImage)
    //get images from data obj and append to div
    //click function for pics to make replace IMG
    
    ramenData.forEach(element => {
    const images = document.createElement('img')
    images.src = element.image
    images.className = 'clickable'
    // imageClick = document.getElementById('clickable')
    images.addEventListener('click', function(e) {
        blankImage.src = e.target.src 
        blankH2.textContent = element.name
        blankH3.textContent = element.restaurant
    })


    

    
    const divPic = document.getElementById('ramen-menu')
    divPic.append(images)
    })
}

//create a new ramen in the form get value from submit


const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(e.target.restaurant.value)
    console.log(e.target.image.value)
    console.log(e.target.rating.value)
    console.log(e.target.new_comment.value)
})





ramenFetch()