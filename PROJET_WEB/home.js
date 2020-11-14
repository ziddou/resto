let nom ;
let prenom ;
let sexe ;
let age ;

let entree=[] ;
let resistance=[] ;
let dessert=[] ;

let P_entree=[] ;
let P_resistance=[] ;
let P_dessert=[] ;

let ent ;
let res ;
let des ;

let i ;
let j ;
let k ;

let add ;

P_entree[1]="3000";
P_entree[2]="4500" ;
P_entree[3]="4500" ;
P_entree[4]="3500" ;
P_entree[5]="4000" ;
P_entree[6]="4000" ;

P_resistance[1]= "7000";
P_resistance[2]= "9500";
P_resistance[3]= "6500";
P_resistance[4]= "8000";
P_resistance[5]= "9000";
P_resistance[6]= "4500";

P_dessert[1]="7000" ;
P_dessert[2]="4000" ;
P_dessert[3]="8500" ;
P_dessert[4]= "6500";
P_dessert[5]= "5500";
P_dessert[6]= "4500";




entree[1]="Soupe aux 5 légumes";
entree[2]="Oeufs mimosa guacamole, poivronnade, et houmous" ;
entree[3]="Paupiettes de dinde aux champignons" ;
entree[4]="Oeufs Bénédict à la sauce hollandaise" ;
entree[5]="Velouté de petits pois" ;
entree[6]="Velouté de butternut aux châtaignes" ;

resistance[1]= "Quiche à la roquette et au jambon cru";
resistance[2]= "Poulet rôti : la bonne cuisson";
resistance[3]= "Brandade de morue";
resistance[4]= "Risotto calamars et chorizo";
resistance[5]= "Le rôti sans rôti de food wars";
resistance[6]= "Tarte au maroilles";

dessert[1]="Gâteau feuilleté aux poires" ;
dessert[2]="Gâteau chocolat noisette vegan" ;
dessert[3]="Le vrai coulant au chocolat" ;
dessert[4]= "Carrot cake sans oeuf";
dessert[5]= "Crème au chocolat Thermomix";
dessert[6]= "Pancakes Weight Watchers";



const enregistrement = (ev)=>{

	ev.preventDefault() ;
	
	nom=document.getElementById('nom').value ;

	prenom=document.getElementById('prenom').value ;

	sexe=document.getElementById('sexe').value ;

	age=document.getElementById('age').value ;

	console.log(nom + "\n" + prenom + "\n" + sexe + "\n" + age + "\n" ) ;

	location.replace('#form-2') ;
	
}	




const facture = (ev)=>{

	ev.preventDefault() ;
	
	ent=document.getElementById('ent').value ;

	res=document.getElementById('res').value ;

	des=document.getElementById('des').value ;

	console.log(ent + "\n" + res + "\n" + des + "\n" ) ;

	location.replace('#facture-cadre') ;

	document.getElementById('facture-cadre').style.display='block' ;

		document.getElementById('nom-client').innerHTML=nom ;
		document.getElementById('prenom-client').innerHTML=prenom ;
		document.getElementById('age-client').innerHTML=age ;
		document.getElementById('sexe-client').innerHTML=sexe ;

		for (i=1 ; i<=6 ; i++)
			{
				for( j=1 ; j<=6 ; j++)
					{
						for( k=1 ; k<=6 ; k++ )
							{
								if ( i==ent && j==res && k==des )
									{

										document.getElementById('p1').innerHTML=entree[i] ;
										document.getElementById('p2').innerHTML=resistance[j] ;
										document.getElementById('p3').innerHTML=dessert[k] ;

										document.getElementById('s1').innerHTML=P_entree[i] ;
										document.getElementById('s2').innerHTML=P_resistance[j] ;
										document.getElementById('s3').innerHTML=P_dessert[k] ;

										add= Number(P_entree[i]) + Number(P_resistance[j]) + Number(P_dessert[k]) ;

										document.getElementById('ps').innerHTML=add ;
										
									}
							}
					}
			}
	
}	





const menu = (ev)=>{
	
		if(document.getElementById('check').checked ){

		document.getElementById('form-2').style.display='block' ;

		} else {

			document.getElementById('form-2').style.display='none' ;
		}
	}


	document.addEventListener ('DOMContentLoaded', ()=>{
		document.getElementById('boutton').addEventListener('click' , menu ) ;
	});



	document.addEventListener ('DOMContentLoaded', ()=>{
		document.getElementById('boutton').addEventListener('click' , enregistrement ) ;
	});


	document.addEventListener ('DOMContentLoaded', ()=>{
		document.getElementById('boutton-2').addEventListener('click' , facture ) ;
	});

		    