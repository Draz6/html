//====== Exercise 1 - Create and Handle a Simple Promise with Resolution andRejection ========

const triggerBtn = document.getElementById("triggerPromise");
triggerBtn.addEventListener("click", triggerFunc);

function triggerFunc() {
  const message = document.getElementById("message");
  const checkbox = document.getElementById("triggerRejection");
  const simpePromise = new Promise((res, rej) => {
    setTimeout(() => {
      if (!checkbox.checked) {
        res("The Promise has been resolved!");
      } else {
        rej("The Promise has been rejected!");
      }
    }, 1000);
  });

  simpePromise
    .then((msg) => {
      message.innerHTML = `<span style='color:#13d172'>${msg}</span>`;
    })
    .catch((err) => {
      console.log(err);
      message.innerHTML = `<span style='color:#f9174c'>${err}</span>`;
    });
}
