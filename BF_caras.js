//=============================================================================
//BF_caras.js
//=============================================================================
/*:
@author FriKitty / CeciDibujera
@plugindesc Change faces in messages using plugin commands. v1.0
@filename BF_caras.js

@help BF_caras v1.0

Plugin for changing the face that will appear in the next message 
(or messages). Useful when you want your faces in messages to depend 
on variables, and you don't want to copy and paste messages 
for every outcome.

You can use this plugin for any project, commercial or not.
You must credit me as CeciDibujera, or as FriKitty / CeciDibujera.
You must also credit "BF Project".

You can edit this plugin as much as you like, as long as you add
in this description somewhere that you did (also, would be a good
idea to add this information in the Spanish instructions, or delete
it altogether, so Spanish speaking users can see that).
You can also look at the code and see how I did some things to make
your own plugin that does things differently. In that case, there is
no need to credit me. This is how people learn!

=======================================================================

===PLUGIN COMMANDS===
To use this plugin, you need to type this plugin command everytime
you want to change the faces in messages outside of those messages:

BFface [name] [number]

[name]: Replace with the .png filename where your desired face is.
No brackets, no quotations and no .png. NOTE: The filename cannot
have spaces.

[number]: Replace with the number that corresponds with the specific
face that you want to use. You have to start counting from the upper
left, and starting from 0. For example, if I want to show Harold, 
I'd have to use:

BFface Actor1 0

Because Harold is the first face (number 0) that appears in the 
Actor1.png image.

After using this command, ALL MESSAGES will have this face, even those
that originally didn't have any. So make sure to use this other command
so that RPG Maker goes back to showing what it would by default:

BFface clear

*/

/*:es
@author FriKitty / CeciDibujera
@plugindesc Cambia las caras en los mensajes con comandos de plugin. v1.0
@filename BF_caras.js

@help BF_caras v1.0
Plugin para cambiar la cara que aparecerá en el siguiente (o los siguientes)
mensajes. Útil cuando quieres que la cara de un mensaje dependa de variables,
y no quieres copiar y pegar los mensajes todas las veces.

Puedes usar este plugin para el proyecto que quieras, comercial o no.
Debes acreditame como CeciDibujera, o como FriKitty / CeciDibujera.
Debes acreditar "BF Project".

También puedes editar este plugin tanto como quieras, mientras que
añadas en esta descripción (y en inglés) que lo has hecho.
También puedes mirar mi código y ver cómo hice ciertas cosas para
luego hacer tu propio plugin que hace las cosas diferente. En ese
caso, no necesitas acreditarme. ¡Así aprende la gente!

=======================================================================

===COMANDOS DE PLUGIN===
Para usar este plugin, tienes que usar este comando de plugin cada vez que
quieras cambiar la cara de los mensajes fuera de dichos mensajes:

BFface [nombre] [número]

[nombre]: Sustituye por el nombre del archivo .png de donde quieres sacar
la cara, sin corchetes, comillas ni .png. NOTA: El nombre del archivo
no puede llevar espacios.

[número]: Sustituye por el número que corresponde a la cara específica
que quieres usar. Se empieza a contar desde arriba a la izquierda, y desde
0. Por ejemplo, si quiero usar a Harold, sería:

BFface Actor1 0

Ya que Harold es el primero (número 0) que aparece en la imagen Actor1.png.

Tras usar este comando, TODOS LOS MENSAJES llevarán esta cara, incluso
los que originalmente no tenían cara. Así que asegúrate de usar este otro
comando para que RPG Maker vuelva a enseñar lo que enseñaría por defecto:

BFface clear


*/

//Comanditos, primero el alias
var Alias_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
//Las variables para saber si se activará y donde van guardaditas las opciones
var bfCaras = false
var bfCarasOpciones = []

//El comando es BFface (o bfface)
//El primer argumento es el nombre del png. No necesita comillas porque ya es string
//El segundo argumento es el index de las caras
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    //Lo que quiero hacer aquí
    if (command.toLowerCase() === 'bfface') {
      bfCaras = true;
      this.bfFaceCommand(args);
    }
    //Call al alias
    Alias_Game_Interpreter_pluginCommand.call(this, command, args);
};

Game_Interpreter.prototype.bfFaceCommand = function(args){
    if(args[0] === "clear"){
        bfCaras = false
    }
    else{
        bfCarasOpciones = args;
    }
}

Game_Message.prototype.setFaceImage = function(faceName, faceIndex) {
    this._faceName = faceName;
    this._faceIndex = faceIndex;
    if(bfCaras === true){
        console.log("es true sí")
    //el arg 0 es el nombre del png, el 1 es el index
    this._faceName = bfCarasOpciones[0]
    this._faceIndex = parseInt(bfCarasOpciones[1])
    }
};