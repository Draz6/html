//=========== 2-Promise Chaining with Multiple API Calls to JSONPlaceholder ============

const userDiv = document.getElementById("users");
const usersUrl = "https://jsonplaceholder.typicode.com";

//=== fetch users data by async function ===
async function fetchUsers() {
  const response = await fetch(`${usersUrl}/users`);
  const users = await response.json();
  return users;
}

//=== fetch posts data by async function ===
async function fetchPosts(userId) {
  const response = await fetch(`${usersUrl}/posts?userId=${userId}`);
  const posts = await response.json();
  return posts;
}
//=== display users & posts data by async function ===
async function displayUserAndPosts() {
  try {
    const users = await fetchUsers();
    await users.forEach((user) => {
      userDiv.innerHTML += ` <h2>${user.name}</h2>
                             <p><strong>Email:</strong> ${user.email}</p>
                             <div class="posts"></div>`;
    });

    const posts = await fetchPosts(1);
    const postsContainer = document.querySelector(".posts");
    postsContainer.innerHTML = "<h1> Posts </h1>";
    await posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
      postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
      postsContainer.appendChild(postDiv);
    });
  } catch (error) {
    console.log(error);
  }
}
displayUserAndPosts();
