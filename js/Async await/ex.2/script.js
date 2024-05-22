//=============== Promise Error Handling Exercise ==================

const users = document.getElementById("users");
const errors = document.getElementById("error");
const usersUrl = "https://jsonplaceholder.typicode.com";

async function fetchUsers() {
  try {
    const response = await fetch(`${usersUrl}/users`);
    if (!response.ok) {
      throw "Network response was not ok";
    }
    const userData = await response.json();
    userData.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML += `<h2>${user.name}</h2><p><strong>Email:</strong>${user.email}</p>`;
      users.appendChild(userDiv);
      errors.style.display = "none";
    });
  } catch (error) {
    errors.textContent = error;
  }
}

fetchUsers();
