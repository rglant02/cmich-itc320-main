"use strict";

const domain = "https://jsonplaceholder.typicode.com";

async function displayUsers() {
    try {
        const response = await fetch(`${domain}/users`);
        const users = await response.json();

        const usersSelect = document.getElementById("users");

        users.forEach(user => {
            const option = document.createElement("option");
            option.value = user.id;
            option.text = user.name;
            usersSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await displayUsers();

    const viewListButton = document.getElementById("view_list");
    viewListButton.addEventListener("click", async () => {
        const selectedUserId = document.getElementById("users").value;
        const listContainer = document.getElementById("list");

        try {
            const response = await fetch(`${domain}/todos/?userId=${selectedUserId}`);
            const todos = await response.json();

            // Format todos as an HTML table
            let tableHTML = "<table><tr><th>ID</th><th>Title</th><th>Completed</th></tr>";

            todos.forEach(todo => {
                tableHTML += `<tr><td>${todo.id}</td><td>${todo.title}</td><td>${todo.completed}</td></tr>`;
            });

            tableHTML += "</table>";
            listContainer.innerHTML = tableHTML;
        } catch (error) {
            console.error("Error fetching todo items:", error);
        }
    });
});
