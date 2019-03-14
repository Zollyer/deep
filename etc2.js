
console.log('Amadeus esta iniciando...');
console.log('Buscando discord.js..');
const Discord = require('discord.js');
console.log('discord.js.. encontrada');
const bot = new Discord.Client();
console.log('Token declarado..');

const token = '';

const puppeteer = require('puppeteer');


//conectar a mysql
console.log('Iniciando MYSQL..');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "amadeus"
});


//variables publicas
// Create an instance of a Discord client
const { Client, RichEmbed } = require('discord.js');
access = 'null';

(async () => {
  console.log('Consultando servidor..');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  response = await page.goto('http://localhost');
  //console.log(response.title);
  //console.log(page.Target{title});
    await page.screenshot({
    path: 'landing-page.png',
    fullPage: true
	
  });
  await browser.close();
  ///
})();




//aqui comienza el bot 
aprender =0;
pass = 0;
resp = 0;
preg = 0;
otro=0;
//inicia programa principal
bot.on('message', (message) => {
	
	function mens(titulo,color,descri){
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle(titulo)
      // Set the color of the embed
      .setColor(color)
      // Set the main content of the embed
      .setDescription(descri);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
	}
    
//////////// MYSQL /////////


function aprende(preg,resp){

con.connect(function(err) {
  console.log("guardado 1");
  var sql = "INSERT INTO memoria (pregunta, respuesta) VALUES ('"+preg+"', '"+resp+"')";
  con.query(sql, function (err, result) {
    console.log("MySql >"+preg+resp+"> Guardado.");
  });
});

}

function buscar(preg){
similar=0;
var similares = [''];
ulti='aprendido';

con.connect(function(err) {
   console.log("Consultado 1");
  con.query("SELECT * FROM memoria", function (err, result, fields) {
	  //busqueda de patrones
    console.log('Patrones para >'+preg+' :');
	console.log(result);
	console.log('Patrones conocidos:'+result.length);
	//comparacion de patrones
	console.log('Patrones similares:');	

	
	for(x=result.length -1;x>=0;x--){ //despliege de patrones	
		  
		  if(result[x].pregunta.indexOf(preg) == 0){
			     console.log(result[x].pregunta);
				 console.log(result[x].respuesta);
				 //seleccionar pregunta similar o respuesta similar
				 var etc = similares.push(result[x].respuesta); //agregar a segundo arreglo respuestas
				}
				
			
	}
	xa = Math.floor(Math.random() * (similares.length - 1)) + 1;//pregunta de aprendizaje aleatoria
	console.log('patron seleccionado='+xa);	
	//mens('Numero evolutivo:','#665432',xa);
	ulti = similares[xa];
	if(ulti == null){
		ulti='!';//ulti='-'+preg;
	}
	//mens('Deep 1.0','#665432',ulti); <- mensaje de aprendije
	console.log('patrones analizados='+result.length);
	//eleccion de pregunta o respuesta 0 1 aleatorio
	
	
	//salir ed bucle
	otro=1;
  });
});

}

///////////////////////	/////////////////////////////
//function IA(pregunta)
function inteligencia(vale) {


}
///////////////////////////////////////////////////
  
  if(message.author.bot){
	  
	  if(message.author.id === 'id del bot'){ // id del bot 
		  
	  }else{
		  
		  /* informacion sobre otros bots que esten en el servidor
		  console.log('comprobado');
		  message.channel.sendMessage('Hit  this -> bot:'+message.author.bot);
		  console.log(message.author.id); //
		  message.channel.sendMessage('Hit  this -> bot:'+message.author.bot);
		  message.channel.sendMessage('Is bot :'+message.author.id+' to feed this:');
		  message.channel.sendMessage(message.author+' hola');
	     console.log(message.author.id); //
		 */
	  }
	 
	  
  }else{
	  //Si es una persona entonces .......
	  //message.channel.sendMessage('Esta persona ha escrito esto:');
	  //message.channel.sendMessage(message.author +' '+ message.content);
	  
	  ///////comandos de pregunta
	  ///////////////
	  buscar(preg);//saber si hay patron no conocido =1 desconocido = 0
	  //mens('ok:'+preg,'#00FF00');
	  

	  if(pass=='acceso'){
			pass=0;//salir de ciclo
		    			
			
			if(otro==1){
				//otro variable 0 1 en la cual servira para compraobar
			    
				//aprendizaje
				  //mens('Evolucionando:'+preg,'#00FF00',message.content);		  
				  resp=message.content;
				  aprende(preg,resp);
				  otro==0;
			}else{
				  
			}
				  
		  //algoritmo de decision de aprendizaje sinapsis fuerte o debil 0.1 a .999
		  
			//comienza a funcionar
	  }else{
		  //mens('Amadeus:','#00FFFF',message.content);
		  pass='acceso';
		  //busqueda de patron conocido
		  
		  preg=message.content;
	  }
	 
  }//si es un parsona
  
   if (message.content === '/help') {	  
	  message.channel.sendMessage('Estoy Aqui.. Aprendiendo (:');
  }
	
});

bot.login(token);
