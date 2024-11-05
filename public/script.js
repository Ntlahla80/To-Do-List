const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");

function addTask() {
    
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
       
        let li = document.createElement("li");

      
        li.innerHTML = `
            ${inputBox.value}
            <button class="remove-btn" onclick="removeTask(this)">Remove</button>
        `;

       
        listContainer.appendChild(li);

      
        li.addEventListener("click", () => {
            li.classList.toggle("checked");
        });

      
        inputBox.value = '';
    }
}


function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
