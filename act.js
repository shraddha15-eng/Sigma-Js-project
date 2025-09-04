let input=document.querySelector('input')
let btn=document.querySelector('button')
let ul=document.querySelector('ul')





btn.addEventListener("click",function(){
    let item=document.createElement('li')
    item.innerText=input.value;
      let dltbtn=document.createElement('button')
      dltbtn.innerText="delete";
      dltbtn.classList.add('delete')
      item.appendChild(dltbtn)

    ul.appendChild(item)
    input.value=""
    
})

ul.addEventListener("click",function(event){
   //console.log( event.target);   //gives whats the target
   //console.log(event.target.nodeName);  //gives name of target maybe list ,ul,button etc
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted")
    }
})


//this is not applied to new created ones
// let dltbtns = document.querySelectorAll('.delete')
// for (dltbtn of dltbtns){
//     dltbtn.addEventListener("click",function() {
//         console.log("element deleted");

//         let par=this.parentElement;
//         console.log(par);
//         par.remove()
//     })
// }