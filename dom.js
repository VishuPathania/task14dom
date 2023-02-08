function savetoLocalStorage(event){
    event.preventDefault();
    const name= event.target.username.value;
    const phone= event.target.contact.value;
    const email= event.target.email.value;
    
    const obj= {
        name:name ,
        phone:phone ,
        email:email
    }

    //store in local storage with key as email
    localStorage.setItem(obj.email, JSON.stringify(obj))

    showuseronScreen(obj) 
}

function showuseronScreen(obj) {
    const parentElem = document.getElementById('listofitems') //create li tag also for new details
    const childElem = document.createElement('li')
    childElem.textContent= obj.name+ ' - ' + obj.phone + ' - ' + obj.email 
    parentElem.appendChild(childElem)
   
    //Adding delete button and functionality DOM 13
    const delBtn= document.createElement('input')
    delBtn.type = "button"
    delBtn.style.color= "red"
    delBtn.style.backgroundColor= "cherry"
    delBtn.value = 'Delete'
    delBtn.onclick = () => {
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
    }
     
   
     //Adding EDIT button and functionality DOM 14
     //We will just delete from li and populate in input

    const editBtn= document.createElement('input')
    editBtn.type = "button"
    editBtn.style.color= "blue"
    editBtn.style.backgroundColor= "yellow"
    editBtn.value = 'Edit'
    editBtn.onclick = () => {
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
        document.getElementById('username').value =obj.name
        document.getElementById('email').value =obj.email
        document.getElementById('contact').value =obj.contact
    }
    
    childElem.appendChild(delBtn)
    childElem.appendChild(editBtn)
    childElem.appendChild(childElem)

}