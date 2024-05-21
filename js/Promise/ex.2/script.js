//=========== 2-Promise Chaining with Multiple API Calls to JSONPlaceholder ============

const usersUrl = "https://jsonplaceholder.typicode.com";

fetch(`${usersUrl}/users`)
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    users.forEach((user) => {
      const userDiv = document.getElementById("users");
      userDiv.innerHTML += ` <h2>${user.name}</h2>
                             <p><strong>Email:</strong> ${user.email}</p>
                             <div class="posts"></div>`;

      fetch(`${usersUrl}/posts?userId=${user.id}`)
        .then((res) => {
          return res.json();
        })
        .then((posts) => {
          const postsContainer = document.querySelector(".posts");
          postsContainer.innerHTML = "<h1> Posts </h1>";
          posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
            postsContainer.appendChild(postDiv);
          });
        });
    });
  })
  .catch((err) => console.log(err));
