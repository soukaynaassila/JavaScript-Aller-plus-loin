let panier = []; // État : tableau des produits
let listePanier = document.getElementById("liste-panier");
let total = document.getElementById("total");

function afficherPanier() {
  listePanier.innerHTML = ""; /* KANEMESE7O LMONTAJAT LE9EDIMA BAX MANE3AWEDOHOMX*/
  let somme = 0;

  panier.forEach(p => {/*p = produit*/
    let li = document.createElement("li");
    li.textContent = `${p.nom} – ${p.prix} €`;
    listePanier.appendChild(li);
    somme += p.prix; /*KANEJEM3O TOTAL */
  });

  total.textContent = `Total : ${somme} €`;/*KANE3ERDO TOTAL */
}

let boutons = document.querySelectorAll("button");
boutons.forEach(bouton => {
  bouton.addEventListener("click", function() {
    let produit = {
      nom: this.dataset.nom,
      prix: parseFloat(this.dataset.prix) /* dataset kayereje3 text W parseFloat() kate7awelo l number */
    };
    panier.push(produit);
    afficherPanier(); // Mettre à jour l'affichage après ajout
  });
});
