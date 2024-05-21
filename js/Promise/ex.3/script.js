//=============== Promise Error Handling Exercise ==================

const users = document.getElementById("users");
const errors = document.getElementById("error");
const usersUrl = "https://jsonplaceholder.typicode.com";

fetch(`${usersUrl}/users`)
  .then((response) => response.json())
  .then((userData) => {
    userData.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML += `<h2>${user.name}</h2><p><strong>Email:</strong>${user.email}</p>`;
      users.appendChild(userDiv);
      errors.style.display = "none";
    });
  })
  .catch((error) => {
    errors.textContent = `${error.message} Please try again later. `;
  });
