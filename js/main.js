// todos.length > 0 ?todos[todos.length - 1].id  + 1 :1,

const elForm =document.querySelector('.js-form')
const elInput =document.querySelector('.js-input')
const elbtn =document.querySelector('.js-btn')
const elList =document.querySelector('.list')
const elbtngroup =document.querySelector('.btn-group')
// const elButtonElDelete =document.querySelector('.js-delate-btn')

const todos =[]

function rendertodos(arr,node){
    node.innerHTML =""
elInput.value =""
    arr.forEach((item)=>{
        
        const newitem =document.createElement("li")
        const newSpan =document.createElement("span")
        const newInput =document.createElement('input')
        const buttonElEdit =document.createElement('button')
        const buttonElDelete =document.createElement('button')
        
        elList.appendChild(newitem)
        
        newitem.setAttribute("class","list-group-item d-flex  align-items-center justify-content-between flex-grow-1 ")
        newSpan.setAttribute('class','flex-grow-1 mx-3')
        newInput.setAttribute('class','form-check-input m-0 js-check')
        buttonElEdit.setAttribute("class","btn btn-warning  ms-auto js-edit-btn")
        buttonElDelete.setAttribute("class","btn btn-danger ms-1 js-delate-btn")
        buttonElDelete.dataset.todoId =item.id
        buttonElEdit.dataset.todoId =item.id
        newInput.dataset.todoId =item.id
        
        newSpan.textContent =item.id + " " + item.text
newInput.type ='checkbox'
buttonElDelete.textContent ="DELATE"
buttonElEdit.textContent = "Edit"

    newitem.appendChild(newInput)
    newitem.appendChild(newSpan)
    newitem.appendChild(buttonElEdit)
    newitem.appendChild(buttonElDelete)
    // console.log(item.isCompleted);
if(item.isCompleted){
    newInput.checked =true
    newSpan.style.textDecoration = 'line-through'


}

 node.appendChild(newitem)
 elbtngroup.children[0].children[0].innerHTML =todos.length
    })
}


elForm.addEventListener("submit",(evt) =>{
    evt.preventDefault()
    
   
    const todosobj = {
                id:todos.length + 1 ,
                text:elInput.value,
                isCompleted:false
                }
                todos.push(todosobj)
            
rendertodos(todos,elList)

})
let sum =0

elList.addEventListener('click',(evt)=>{
    // console.log(evt.target.matches('.js-delate-btn'));
    if(evt.target.matches('.js-delate-btn')){
        const todoId =evt.target.dataset.todoId;
        const findindex =todos.findIndex((item) =>item.id == todoId)
todos.splice(findindex,1)
rendertodos(todos,elList)
    };
    if(evt.target.matches('.js-edit-btn')){
        const todoId =evt.target.dataset.todoId;
        console.log(todoId);
        const finditem =todos.find((item) =>item.id == todoId)
    const newText = prompt("Yangi todo kiriting",finditem.text)
    finditem.text =newText
rendertodos(todos,elList)
    };
    if(evt.target.matches('.js-check')){
        const todoId =evt.target.dataset.todoId;
     const findentItem =todos.find((item) => item.id == todoId)
     findentItem.isCompleted =!findentItem.isCompleted
     if(findentItem.isCompleted){
    let sumb =++sum
 elbtngroup.children[1].children[0].innerHTML =sumb
 let unsum =todos.length - sumb
 elbtngroup.children[2].children[0].innerHTML = unsum
}
const newtodos =[]
const newtodosun =[]
const Completed =elbtngroup.children[1]
const ComUn =elbtngroup.children[2]
console.log(elbtngroup.children[2]);

Completed.addEventListener('click',(evt)=>{
    evt.preventDefault()
    todos.forEach((el) =>{
        if(el.isCompleted){
      newtodos.push(el)
            console.log(el);
        }
    })
    rendertodos(newtodos,elList)
    console.log(newtodos);
})

console.log(ComUn);
ComUn.addEventListener('click',(evt)=>{
    evt.preventDefault()
    todos.forEach((el) =>{
        if(el.isCompleted !=true){
      newtodosun.push(el)
            console.log(el);
        }
        console.log(newtodosun);
        
    })
    rendertodos(newtodosun,elList)
})


console.log(Completed);

rendertodos(todos,elList)
    }
})





