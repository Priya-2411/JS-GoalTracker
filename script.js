
 let input = document.getElementById("addGoal");
 let submit = document.getElementById("submit")
 let list = document.getElementById("list");
 let list2 = document.getElementById("list2");

 submit.addEventListener('click', addToList);

 function addToList(e) {  
    e.preventDefault();  


    let toDo = input.value;
    let liNode = document.createElement("li");
    let textNode = document.createTextNode(toDo);

    liNode.appendChild(textNode);
    list.appendChild(liNode);

    let completeButton = document.createElement('button');
    completeButton.innerHTML = "Complete";
    completeButton.style.color= "blue";
    liNode.appendChild(completeButton);
    completeButton.addEventListener('click',done);
    
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.style.color= "blue";
    liNode.appendChild(deleteButton);
    deleteButton.addEventListener('click',erase);

    input.value = " ";

    function done(e){
        e.preventDefault(); 
        liNode.remove();
        let node = document.createElement("li");
        let text1 = textNode;

        
        node.appendChild(text1);
        list2.appendChild(node);
        node.appendChild(deleteButton);
        deleteButton.addEventListener('click',finalErase);

        function finalErase(e){
            e.preventDefault(); 
            node.remove();
        
         }
    
     }
     function erase(e){
        e.preventDefault(); 
        liNode.remove();
    
     }
    
 }



