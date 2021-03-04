let button = document.querySelector(".getNewNews");

let newNews;

// function getCards() {
//     return fetch("/news")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       newNews = data;
//     });
//   };
// getCards();


 button.addEventListener("click", () => {
   for(let [key, value] of Object.entries(newNews.newsMessege)) {
       let newDivBlock = `<div><h4>${value}<h3></div>`;
       button.insertAdjacentHTML("afterend", newDivBlock);
   };
  });

  async function postData(url = '/news') {
  const response = await fetch("/news", {
    method: 'POST'
  });
  return await response.json();
  };

  postData('/news')
  .then((data) => {
    newNews = data;
  });

  postData();

