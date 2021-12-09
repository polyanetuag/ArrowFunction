/*--- Entendendo a diferença da função regular e simplificada ---*/

const doces = ["brigadeiro", "beijinho", "casadinho"];

//função regular
doces.map(function (doces) {
  return doces.length;
});
//retorna a quantidade de letras de cada doce [10, 8, 9]

//função simplificada (arrow function)
doces.map((doces) => {
  return doces.length;
});
//retorna mesmo resultado

//Quando existir somente um parâmetro, pode remover o ()
doces.map((doces) => {
  return doces.length;
});

//Se houver somente o return, ainda pode removê-lo, juntamente com as chaves{}
doces.map((doces) => doces.length);
