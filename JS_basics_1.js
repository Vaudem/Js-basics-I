// QU'AFFICHENT LES APPELS À 
// What is logged ... ?

function log(data) {
    console.log(data); //raccourci console.log = log
}

var x, booleen, obj, n1, n2, n3;

booleen = 123 === '123';  //false
n1 = 0;
n2 = 777;
n3 = 10/1;
obj = {
    name: 'objet simple',
    contenu: 23 * 10
};

/* 1 */
log(true && false); //false

/* 2 */
log(x);  //undefined

/* 3 */
x = x && booleen; //undefined (falthy) et false = false
x = !x; //true

log (n1 + n2); //777

/* 4 */
log(obj.name); //'objet simple'

/* 5 */
log(obj.contenu + n3 > n2); // 230 > 777 = false

/* 6 */
log(x); //true

/* 7 */
log(x && booleen); //true && false = false

/* 8 */
log(x || booleen); //true || false = true

/* 9 */
log(obj.name + ' (la variable obj contient un objet "litéral")'); // 'objet simple la variable obj...'

/* 10 */
log(typeof obj.contenu); //number




