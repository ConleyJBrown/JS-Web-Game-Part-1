
//function to create new images
function newImage(imgSrc, left, bottom){
    let newImage = document.createElement('img')
    newImage.src = imgSrc
    newImage.style.position = 'fixed'
    newImage.style.left = left
    newImage.style.bottom = bottom
    document.body.append(newImage)

    return newImage
}
//create new items which are images that can be removed by bein
//double clicked
function newItem(imgSrc, left, bottom)
{
let newItem = newImage(imgSrc, left, bottom)

newItem.addEventListener('dblclick', function(){
    newItem.remove()
})
}

//invoke newImage using for loops to tile the grass and sky
for (let i = 0; i < window.innerWidth; i = i + 100)
{
   
    for (let j = 0; j<=window.innerHeight/2; j+= 100)
    {
        newImage('assets/grass.png',`${i}px`, `${j}px`)
    }
    for (let j = window.innerHeight/2; j < window.innerHeight; j+=100)
    {
        newImage('assets/sky.png',`${i}px`, `${j}px`)
    }
}

//invoke the function to create images
newImage('assets/green-character.gif', '100px', '100px' )
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')
//invoke the function to create items
newItem('assets/sword.png','500px','405px')
newItem('assets/sheild.png','165px','185px')
newItem('assets/staff.png','600px','100px')



