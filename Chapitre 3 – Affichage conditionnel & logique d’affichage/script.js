let produits = [
    { nom: "PC portable", prix: 900 },
    { nom: "Souris", prix: 25 },
    { nom: "Clavier", prix: 40 },
    { nom: "Écran", prix: 150 }
  ];
  
  let liste = document.getElementById("produits");
  
  // Filtrer les produits à moins de 100€
  let produitsFiltres = produits.filter(p => p.prix > 100);
  //let produitsFiltres =   { nom: "Souris", prix: 25 }, and { nom: "Clavier", prix: 40;
  
  // Si aucun produit ne correspond, afficher un message
  if (produitsFiltres.length === 0) {
    liste.innerHTML = "<li>Aucun produit en promotion.</li>";
  } else {
    produitsFiltres.forEach(i => {
      let li = document.createElement("li");
      li.textContent = `${i.nom} – ${i.prix} €`;
      liste.appendChild(li);
    });
  }
    