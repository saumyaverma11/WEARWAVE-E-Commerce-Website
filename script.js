const bar = document.getElementById('mobile');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    });

}

const cross= document.getElementById('close');

if(close){
cross.addEventListener('click',()=>{
    nav.classList.remove('active');
});
}


