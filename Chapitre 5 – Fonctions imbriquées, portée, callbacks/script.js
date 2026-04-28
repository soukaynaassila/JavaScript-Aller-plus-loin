function addition(a, b, callback) {
  let somme = a + b;
  // On exécute le callback avec un délai de 1 seconde
  setTimeout(() => {
    callback(somme);
  }, 1000);
}

addition(5, 7, function(resultat) {
  console.log("La somme après 1 seconde est : " + resultat);
});
/*Fonctions imbriquées: kandiro function dakhile function bax nedemo lcode 
Callback: hiya function kane3etiwha l function khera w katenefed mn be3edeha
Synchrone vs Asynchrone : 
Synchrone => l code kayemechi khotewa b khotewa
Asynchrone => kaykon ta2ekhir be7al setTimeout

*/