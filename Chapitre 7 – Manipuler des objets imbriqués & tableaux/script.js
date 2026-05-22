let utilisateur = { /*necha2ena wahed object utilisateur*/
  nom: "Sara",
  adresse: {   /*hade l adresse rah object داخل object*/
    ville: "Rabat",
    codePostal: 10000
  },
  achats: [/*array fiha bezaf deyal les object deyal l products*/
    { nom: "PC portable", prix: 900 },
    { nom: "Souris", prix: 20 },
    { nom: "Clavier", prix: 40 }
  ]
};

let liste = document.getElementById("liste-produits");/*hena jebena <ul> mn html bax nezido fiha l products*/

// Parcourir les achats
utilisateur.achats.forEach(item => {
  let li = document.createElement("li");
  li.textContent = `${item.nom} - ${item.prix} €`;
  liste.appendChild(li);
});

// Mise à jour d'un prix
utilisateur.achats[0].prix = 850;
console.log("Nouveau prix du PC :", utilisateur.achats[0].prix);
