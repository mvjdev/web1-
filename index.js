const getClass= e => document.querySelector(`.${e}`);

let left=getClass(`text-one`),
right=getClass(`text-two`),
center=getClass(`text-three`);

setTimeout(()=>{
    left.style.display="none"
    right.style.display="block"
    setTimeout(()=>{
        right.style.display="none"
    },2000);
},2000);
