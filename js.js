// let age=178;
// console.log(`j'ai ${age} ans`);
// age==14?console.log("vous etes jeune"):console.log("vous etes vieux");
// let rep=prompt("Une note");
// if(Number.parseInt(rep) < 10)
// {
//  console.log("fachil");
// }
// else if( Number.parseInt(rep)>=10 && Number.parseInt(rep)<12 )
// {
// 	console.log("passable");
// }
// else if(Number.parseInt(rep)>=12 &&Number.parseInt(rep)<14)
// {
// 	console.log("assez bien ");
// }
// else
// {
// 	console.log("bien et tres bien");
// }
/*

let n1=prompt("donnez un nombre");
let n2=prompt("donnez un autre nombre");
let op=prompt("donnez l'operateur");
n1=Number.parseInt(n1);
n2=Number.parseInt(n2);
switch(op)
{case "+": console.log(`${n1+n2}`);
break;}
*/
/*function Addition(arg1,arg2)
{
	if(Number.isInteger(arg1) && Number.isInteger(arg2) )
	return arg1+arg2;
    else return null;
}
var x=prompt("argument 1");
var y=prompt("argument 2");
x= Number.parseInt(x);
y=Number.parseInt(y);
let somme=Addition(x,y);
console.log( `somme des deux argument est ${somme}`);*/





function Calculatrice(arg1,arg2,op)
{
	switch(op)
	{
		case "+" : console.log(`c'est de la somme  le resultat est :${arg1+ arg2}`); break;
		case "-" : console.log(`c'est de la substraction  le resultat est :${arg1 - arg2}`); break;
		case "*"  :console.log(`c'est du produit  le resultat est :${arg1 * arg2}`); break;
	}
}
var a=prompt("argument 1");
var b=prompt("argument 2");
a= Number.parseInt(a);
b=Number.parseInt(b);
var op=prompt("operateur");
Calculatrice(a,b,op);

