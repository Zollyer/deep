<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<?
//sanitizar
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  
  return $data;
}
/////////////BASE DE DATOS////////////////
include_once "conexion.php";
echo '<title>';
function buscar(){ //Creador de options para formularios Interfaz
	
	//consulta de datos en BD
	$querry = test_input($_GET["q"]);
	$querry = str_replace("'", '%27', $querry);
	$sql = "SELECT * FROM aprendizaje WHERE pregunta LIKE '".$querry."'";  
			$x=0; //contador
			$rec = mysql_query($sql);	
				while($row = mysql_fetch_object($rec)){  //regresa la tabla de interfaz
					$result = $row;		
					return $nombre = $result->respuestas;
				}
			
}
// para las respuestas crearemos un like en una consulta a la base de datos para selecionar aleatoriamente una de las respuesta o la que tenga mayor moda.
function aprender_pregunta(){ // Capturar una pregunta
	$querry = test_input($_GET["q"]);
	$querry = str_replace("'", '%27', $querry);
	$sql2 = "INSERT INTO aprendizaje(pregunta) VALUES ('".$querry."')";//Se insertan los datos a la base de datos y el usuario ya fue registrado con exito.
	mysql_query($sql2);	
	echo '><><aprende><><';
}
function aprender_respuesta(){ // Capturar una pregunta
//saber el id del la ultima pregunta ---
$sql = 'SELECT * FROM aprendizaje ORDER by ID DESC LIMIT 1'; 
        $rec = mysql_query($sql); 

        while($result = mysql_fetch_object($rec)) 
        {           
              $ultima_pregunta = $result->id;
			   
        } 
///////// meter el id en la siguiente consulta a donde se guardara 		
	$querry = test_input($_GET["r"]);
	$querry = str_replace("'", '%27', $querry);
	$sql = "UPDATE aprendizaje SET respuestas='".$querry."' WHERE id=".$ultima_pregunta;	
	mysql_query($sql);	
	
	echo '';
}

////////////////BOT//////////
//saber el id del la ultima pregunta ---
$sql = 'SELECT * FROM aprendizaje ORDER by ID DESC LIMIT 1'; 
        $rec = mysql_query($sql); 

        while($result = mysql_fetch_object($rec)) 
        {           
              $ultima_pregunta = $result->id;
			   
        } 

 $rana = rand(1, $ultima_pregunta);

$sql = "SELECT * FROM aprendizaje WHERE id LIKE '".$rana."'";  
			$x=0; //contador
			$rec = mysql_query($sql);	
				while($row = mysql_fetch_object($rec)){  //regresa la tabla de interfaz
					$result = $row;		
					echo $nombre = $result->pregunta;
				}
			
?>

</title>
