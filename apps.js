

/*
para
 */
let para1
para1 = document.getElementById('para1')

let para2
para2 = document.getElementById('para2')

let para ;
para = para1 && para2 ;

/*
span
 */

let spa1 ;
spa1 = 5;

let spa2 ;
spa2 = 12;





/*
calcul
 */

let resultat = document.getElementById('resultat');
resultat.innerHTML= ( spa1===5 && spa2 <=15) ? ( spa1 + spa2 ).toString () : (spa1 - spa2 ).toString() ;


if (( resultat < 10  ) && resultat <= 0) {
    para1.innerText = "get above a mission";
}