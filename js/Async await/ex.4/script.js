//====================== Loading Indicator with JSONPlaceholder ==========================

const usersURL = "https://jsonplaceholder.typicode.com/users";
const loadingIndicator = document.getElementById("loading-indicator");
const usersContainer = document.getElementById("users");

async function fetchUsers() {
  try {
    const response = await fetch(usersURL);
    const users = await response.json();
    users.forEach((user) => {
      const usersContainer = document.getElementById("users");
      const userDiv = document.createElement("div");
      userDiv.classList.add("item");
      userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      usersContainer.appendChild(userDiv);
      loadingIndicator.style.display = "none";
    });
  } catch (err) {
    loadingIndicator.innerHTML = `<p style="color: red;">${err.message} Please try again later.</P>`;
  }
}
fetchUsers();
