function add() {
    let a = Number(document.getElementById("fstno").value);

    let b = Number(document.getElementById("fstno2").value);

    let c=a+b;
let d = document.getElementById("first");
    d.value="Answer: "+c;
}


function subs() {
    let x = Number(document.getElementById("fstno").value);

    let y = Number(document.getElementById("fstno2").value);

    let f=x-y;
let e = document.getElementById("first");
    e.value="Answer: "+f;

}


function multi() {
    let m = Number(document.getElementById("fstno").value);

    let n = Number(document.getElementById("fstno2").value);

    let o=m*n;
let p= document.getElementById("first");
    p.value="Answer: "+o;
}


function divide() {
    let g = Number(document.getElementById("fstno").value);

    let h = Number(document.getElementById("fstno2").value);

    let i=g/h;
let j= document.getElementById("first");
    j.value="Answer: "+i;   
}



function reminder() {
    let r = Number(document.getElementById("fstno").value);

    let s = Number(document.getElementById("fstno2").value);

    let t=r%s;
let u= document.getElementById("first");
    u.value="Answer: "+t;   
}



// function reset() {
//     let p= document.getElementById("fstno");
//     p.value="null";

//     let q =document.getElementById("fstno2");
//     q.innerHTML="null";

// }