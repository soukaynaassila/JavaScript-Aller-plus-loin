let container = document.getElementById("articles");

fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  .then(response => response.json())
  .then(posts => {
    let ul = document.createElement('ul');

    posts.forEach(post => {
      let li = document.createElement('li');
      li.textContent = post.title;
      ul.appendChild(li);
    });

    container.appendChild(ul);
  })
  .catch(error => {
    container.innerText = "Erreur lors de la récupération des données.";
    console.error(error);
  });

//   mokhetaser 
//   const container = document.getElementById("articles");

// fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//   .then(res => res.json())
//   .then(posts => {
//     container.innerHTML = `
//       <ul>
//         ${posts.map(post => `<li>${post.title}</li>`).join('')}
//       </ul>
//     `;
//   })
//   .catch(() => {
//     container.textContent = "Erreur";
//   });
