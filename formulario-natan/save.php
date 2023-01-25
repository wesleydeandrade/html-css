<?php 

if (isset($_POST["enviar"])){ 

   $nome=$_POST["nome"]; 
   $telefone=$_POST["telefone"]; 
   $email=$_POST["email"]; 
   $
   echo "<p>Olá, ".$nome."</p>"; echo "<p>Seu email é: ".$email."</p>"; 

   echo "<p>Seu telefone é: ".$telefone."</p>"; 


} 

?>