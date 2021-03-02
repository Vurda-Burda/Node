function getCards() {
    return fetch("http://localhost:8080/newsProgram.js")
    .then(response => {
      if (!response.ok) {      
        throw response;
      }
      return response.json();    
    })  
  };
  console.log(getCards());
  






