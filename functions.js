window.addEventListener("load", begin);

function begin(){
    

    let quadrants = document.getElementById("quadrants").children;

    addEventApearrOnClick(quadrants);

    EventRandomOnBlocks(quadrants);
}

function addEventApearrOnClick(quadrants){
    for(let i=0; i<quadrants.length ; i++){
        quadrants[i].addEventListener("click", (e)=>{
            e.preventDefault();
            quadrants[i].classList.toggle("expand");
        })
    }
}

//Animations in main.scss
let arr = ["clickOnMe","bright","paintRed","makeBigger","rotateRight", "rotateLeft", "turnOut","jumping"];

function EventRandomOnBlocks(quadrants){
    let block = quadrants[Math.floor(Math.random()*quadrants.length)].children[0];
    let classEvent =  arr[Math.floor(Math.random()*arr.length)];

    block.style.transition = "all .25s 0s ease";

    n = 1000 + Math.floor(Math.random()*3000);

    let event = setTimeout(()=>{
        block.classList.toggle(classEvent);
        deleteEventRandomOnBlock(block, classEvent); 
        EventRandomOnBlocks(quadrants);
    },n);

}
function deleteEventRandomOnBlock(block, event){
    setTimeout(()=>{
        block.classList.toggle(event);
    },1000)
}