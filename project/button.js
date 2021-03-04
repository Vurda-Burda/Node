let button = document.querySelector(".getNewNews");

let newNews;

function getCards() {
    return fetch("/news")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      newNews =data;
      console.log(newNews);
    });
  };
getCards();


 button.addEventListener("click", () => {
  let newDivBlock = `<div>${newNews}</div>`;
  button.insertAdjacentHTML("afterend", newDivBlock);
  });
  

