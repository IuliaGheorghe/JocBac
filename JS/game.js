let Eminescu = [

//Luceafarul
[
  //easy array
  [{
    versuri: "Nu caut vorbe pe ........, </br>Nici știu cum aș începe -</br>Deși vorbești pe înțeles,</br>Eu nu te pot pricepe;</br>",
    raspuns: ["ales"],
    r: "Nu caut vorbe pe <b>ales</b>, </br>Nici știu cum aș începe -</br>Deși vorbești pe înțeles,</br>Eu nu te pot pricepe;</br>"
  },],

  //medium array
  [{
    versuri: "Nu caut vorbe pe ........, </br>Nici știu cum aș ........ -</br>Deși vorbești pe înțeles,</br>Eu nu te pot pricepe;</br>",
    raspuns: ["ales", "începe"]
  },],

  //hard array
  [{
    versuri: "Nu caut vorbe pe ........, </br>Nici știu cum aș ........ -</br>Deși vorbești pe ........,</br>Eu nu te pot pricepe;</br>",
    raspuns: ["ales", "începe", "înțeles"]
  },],
],

//Floare Albastra
[
  ["FloareAlbastraEasy"],
  ["FloareAlbastraMedium"],
  ["FloareAlbastraHard"],
]

]

let Blaga = [
[
  ["CorolaEasy"],
  ["CorolaMedium"],
  ["CorolaHard"],
],


]

let autor;
let opera;
let grade;
let authorArray;
let operaIndex;

let randomNum;


function findAuthorArray(){
   if(autor === 'Eminescu')  authorArray = Eminescu;
   else if (autor==='Blaga') authorArray = Blaga;

   return authorArray;
   
}

function findOperaIndex(){
   if(authorArray===Eminescu)
   	{if(opera==="Luceafarul") operaIndex =0;
    else if(opera==="Floare-Albastra") operaIndex =1;}
   else if(authorArray===Blaga) {
   	if(opera==="Corola") operaIndex = 0;
   }
}

function operaFunction(autorP, operaP){
 
   document.getElementById('cont-opera').style.display="none";
   document.getElementById('cont-dif').style.display="flex";
   autor = autorP;
   console.log(autor);
   opera = operaP;
   console.log(opera);
   
}

function difficultyFunction(gradeP){
    document.getElementById('cont-dif').style.display="none";
    document.getElementById('cont-vers').style.display="flex";
    grade=gradeP;
    flow();

}

function inputText(){
	let arrLength = authorArray[operaIndex][grade][randomNum].raspuns.length;
	if(arrLength>1)
	{
	document.getElementsByClassName("raspuns")[0].placeholder="Raspunsul 1";
	for(let i=1;i<arrLength;i++){
    let clone = document.getElementsByClassName("raspuns")[i-1].cloneNode( true );
    let num = (i+1).toString();
    document.getElementById('raspunsuri').appendChild( clone );
    document.getElementsByClassName("raspuns")[i].placeholder="Raspunsul " + num;
    }
    }
}

function flow(){
	findAuthorArray();
	findOperaIndex();

	randomNum = Math.floor(Math.random() * authorArray[operaIndex][grade].length);
	document.getElementById("versuri").innerHTML = authorArray[operaIndex][grade][randomNum].versuri;
	inputText();



}

function diacritice(strAccents) {
		var strAccents = strAccents.split('');
		var strAccentsOut = new Array();
		var strAccentsLen = strAccents.length;
		var accents = 'ăâîșțÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
		var accentsOut = "aaistAAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
		for (var y = 0; y < strAccentsLen; y++) {
			if (accents.indexOf(strAccents[y]) != -1) {
				strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
			} else
				strAccentsOut[y] = strAccents[y];
		}
		strAccentsOut = strAccentsOut.join('');
		return strAccentsOut;
	}

let ok = 0;

function verif(){
    let arrLength = authorArray[operaIndex][grade][randomNum].raspuns.length;
    for(let i=0;i<arrLength;i++){

    	let a;
    	a=document.getElementsByClassName("raspuns")[i].value;

    	a = a.toLowerCase();
		a = a.replace(/\s/g,'');
		a = a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
		a = diacritice(a);

		console.log(a);

		let b;

		b=authorArray[operaIndex][grade][randomNum].raspuns[i];

		b = b.toLowerCase();
		b = b.replace(/\s/g,'');
		b = b.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
		b = diacritice(b);

    	if(a !== b) ok++;
        
  

    }

    if(ok===0) {
    	document.getElementById("cont-vers").style.display="none";
    	document.getElementById("good-ans").style.display="flex";
    }
    else {
        document.getElementById("cont-vers").style.display="none";
    	document.getElementById("wrong-ans").style.display="flex";
        document.getElementById("ans").innerHTML = authorArray[operaIndex][grade][randomNum].r;
    }

}

function newGame(){
	ok=0;
	document.getElementById("good-ans").style.display="none";
	document.getElementById("wrong-ans").style.display="none";
	let arrLength = authorArray[operaIndex][grade][randomNum].raspuns.length;
    for(let i=0;i<arrLength;i++)
    	document.getElementsByClassName("raspuns")[i].value="";
	document.getElementById("cont-vers").style.display="flex";
	flow();
}


