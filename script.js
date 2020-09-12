const moon = document.querySelector('.moon');

moon.addEventListener('click',moonClick)


function moonClick(){
    const scene = document.querySelector('.scene')
    
    
    
    
    if(scene.style.background !== "lightSkyblue"){
       /*let x = Math.floor(Math.random() * window.innerWidth)
        let y = Math.floor(Math.random() * window.innerHeight) 
        let duration = Math.random() * 10
        let size = Math.random() * 2
        forest.style.left = 100 + 'px'
        forest.style.top = 50 + 'px'
        moon.style.left = 400 + 'px'
        moon.style.top = 400 + 'px'
        forest.style.animationDuration = 5 + duration + 's'
        forest.style.animationDelay= duration + 's'
        moon.style.width = 100 + size + 'px'
        moon.style.height = 100 + size + 'px'
        forest.style.height = 100 + size + 'px'*/
        
       scene.style.background = "lightSkyblue"
    }else if(scene.style.background === 'lightSkyblue'){
        /*let x = Math.floor(Math.random() * window.innerWidth)
        let y = Math.floor(Math.random() * window.innerHeight) 
        let duration = Math.random() * 10
        let size = Math.random() * 2
        forest.style.left = 1 + 'px'
        forest.style.top = 500 + 'px'
        moon.style.left = 50 + 'px'
        moon.style.top = 100 + 'px'
        forest.style.animationDuration = 5 + duration + 's'
        forest.style.animationDelay= duration + 's'
        moon.style.width = 50 + size + 'px'
        moon.style.height = 50 + size + 'px'
        forest.style.height = 100 + size + 'px'
        scene.style.background = "blue"*/
        scene.style.background = "blue"
    }
    
    
};


function stars(){
    let count = 500
    let i =0
    while( i < count){
        let star = document.createElement('i')
        const scene = document.querySelector('.scene')
        let x = Math.floor(Math.random() * window.innerWidth)
        let y = Math.floor(Math.random() * window.innerHeight)
        let duration = Math.random() * 10
        let size = Math.random() * 2

        star.style.left = x + 'px'
        star.style.top = y + 'px'
        star.style.animationDuration = 5 + duration + 's'
        star.style.animationDelay= duration + 's'
        star.style.width = 1 + size + 'px'
        star.style.height = 1 + size + 'px'

        scene.appendChild(star)
        i++
    }
}
stars()