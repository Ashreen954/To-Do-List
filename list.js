let input = document.querySelector("#input-btn");
let btn = document.querySelector("#btn");
let list = document.querySelector(".list");

btn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        let container = document.createElement("div");
        container.classList.add("list-item");
        let h = document.createElement("h3");
        let b = document.createElement("button");
        b.id = "del";
        let bt = document.createElement("button");
        bt.id = "edi";
        bt.innerHTML = "Edit";
        b.innerHTML = "Delete";
        h.innerHTML = input.value;
        container.appendChild(h);
        container.appendChild(bt);
        container.appendChild(b);
        list.appendChild(container);
        input.value = "";
        saveData();
    } else {
        alert("Please enter a valid note.");
    }
});

list.addEventListener("click", (event) => {
    if (event.target.id === "del") {
        event.target.parentNode.remove();
        saveData();
    }
    if (event.target.id === "edi") {
        let container = event.target.parentNode;
        let h = container.querySelector("h3");
        let text = h.textContent;
        
        h.style.display = "none";
        event.target.style.display = "none";

        let input = document.createElement("input");
        input.type = "text";
        input.style.width = "80%";
        input.value = text;
        container.insertBefore(input, event.target);

        let saveButton = document.createElement("button");
        saveButton.innerHTML = "Save";
        container.appendChild(saveButton);


        saveButton.addEventListener("click", () => {
            h.innerHTML = input.value;
            h.style.display = "inline";
            event.target.style.display = "inline";
            input.remove();
            saveButton.remove();
            saveData();
        });
    }
});

function saveData() {
    localStorage.setItem("hi", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("hi");
}
showTask();

