// console.log("hello world")
// const div = document.getElementsByClassName("parent");
// console.log(div);
// //div[0].innerHTML = "<h2  style=color : red> hello world</h2>"
// const h1 = document.createElement("h1");
// console.log(h1);
// h1.innerText="ABES Engineering college";
// console.log(h1);
// h1.style.backgroundColor="red";
// h1.style.color="blue";
// h1.style.marginLeft ="100px";
// div[0].appendChild(h1);
// const img = document.createElement("img");
// img.src = "https://foujiadda.com/wp-content/uploads/2024/07/unnamed-14.png";
// console.log(img);
// img.setAttribute("height","300");
// img.setAttribute("width","100");
// div[0].appendChild(img);
// //div[0].removeChild(img);
// function getData(){
//     console.log("hi , inside getdata");
//     div[0].innerHTML="<h2 style=color:red>hello,event handled</h2>";
// }

// const button=document.getElementsByClassName("btn");
// console.log(button);
// button[0].addEventListener("click",getData);

// const promise=new Promise((resolve,reject)=>{
//     let a=12;
//     if(a>10)
// {
//     resolve("accepted");
// }
// else{
//     reject("Not Accepted");
// }


// })


// promise.then((msg)=>{console.log(msg)}
// ).catch((error)=>{console.log(error)})
// .finally(()=>console.log("All resources have closed"));

// const promise2=new Promise((resolve,reject)=>{
//     resolve({name:"supriya",Stack:"MERN Stack"});

// });
// promise2.then((data)=>{console.log("hi,"+data.name)})
// .catch(x=>{console.log(x)})

const response=fetch("https://dummyjson.com/products");
response.then((data)=>{
    console.log(data);
    data.json().then((res)=>{
        console.log(res);
    })
})