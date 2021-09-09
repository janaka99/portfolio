const burger = document.querySelector('.burger');
const navigation = document.querySelector('.nav-list-mobile');
const social = document.querySelector('.social')



const nav = function(){
    burger.addEventListener('click',()=>{
        navigation.classList.toggle("nav-active");

    })
}

nav();

const nightmode = document.querySelector('.night-mood');
const wholebody = document.querySelector('body');
const links = document.querySelectorAll('a');
const night = document.querySelector('.cloud-sun');
const nightrain = document.querySelector('.cloud-sun-rain');
const btn = document.querySelectorAll('.btn');
const footer = document.querySelector('.footers');
const navitemsa = document.querySelector('.nav-items-mobile .nav-list-mobile li a');


const nightmodeactive = function(e){
    
    nightmode.addEventListener('click',()=>{
        night.classList.toggle('active-night');
        nightrain.classList.toggle('active-night')
        wholebody.classList.toggle('active-night')
        footer.classList.toggle('active-night')
        for(let link of links){
            link.classList.toggle('active-night')
        }
        for(let bt of btn){
            bt.classList.toggle('active-night')

        }
        for(let a of navitemsa){
            a.classList.toggle('active-night')

        }

    }) 

}

nightmodeactive();


const words = ["Web developer", "Freelancer" , "Devop Engineer"]
const effect = document.getElementById('word');


let i = 0;
let timer;


function typingeffect(){
    let word = words[i].split("");
    var loopTyping = function(){
        if(word.length > 0){
           const helloworld =  effect.innerHTML += word.shift();
           
        }else{
            setTimeout(() => {
                deleteingEffect();
            }, 1500);
            return false;
            
        }
        timer = setTimeout(loopTyping, 100 );
    };

        loopTyping()
    
};



function deleteingEffect(){
    let word = words[i].split("")

        var loopDeleting = function(){
            if(word.length > 0){
                word.pop();
                effect.innerHTML = word.join("");
            }else{
                if(words.length > (i+1)){
                    i++;
                }else{
                    i = 0;
                }
                typingeffect();
                return false
            }
                setTimeout(loopDeleting, 50)

        }
        loopDeleting()


}

typingeffect();



// const nav = function(){
//     burger.addEventListener('click',()=>{
//         navigation.classList.toggle("nav-active");

//     })
// }

// nav();



