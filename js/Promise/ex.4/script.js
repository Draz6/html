//==================== Promise.all Practice with JSONPlaceholder ========================

const usersURL = "https://jsonplaceholder.typicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";

const usersPromise = fetch(usersURL).then((response) => response.json());

const postsPromise = fetch(postsURL).then((response) => response.json());

Promise.all([usersPromise, postsPromise])
  .then(([users, posts]) => {
    users.forEach((user) => {
      const usersContainer = document.getElementById("users");
      const userDiv = document.createElement("div");
      userDiv.classList.add("item");
      userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      usersContainer.appendChild(userDiv);
    });

    posts.forEach((post) => {
      const postsContainer = document.getElementById("posts");
      const postDiv = document.createElement("div");
      postDiv.classList.add("item");
      postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
      postsContainer.appendChild(postDiv);
    });
  })

  .catch((err) => {
    const errors = document.getElementById("error");
    errors.textContent = `${err.message} Please try again later. `;
  });
