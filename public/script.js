const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");

function addTask() {
   
    if (inputBox.value === '') {
        alert("You must write something!");
        saveData();
    } else {
        
        let li = document.createElement("li");

       
        li.innerHTML = `
            ${inputBox.value}
            <button class="remove-btn" onclick="removeTask(this)">Remove</button>
        `;

       
        listContainer.appendChild(li);

      
        li.addEventListener("click", () => {
            li.classList.toggle("checked");
            saveData();
        });

       
        inputBox.value = '';

      
        saveData();
    }
}

function removeTask(button) {
   
    const li = button.parentElement;
    li.remove();
    
   
    saveData();
}

function saveData() {
   
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}


window.onload = showTask;
