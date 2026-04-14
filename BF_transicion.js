//=============================================================================
//BF_transicion.js
//=============================================================================
/*:
@author FriKitty / CeciDibujera
@plugindesc Use images for transitions v1.0
@filename BF_transicion.js

@param numeroImg
@text Number of images
@type number
@min 1
@desc Number of images the transition will have.


@param velFrame
@text Frame speed
@type number
@min 1
@desc How much each image in the transition will last, in frames.

@param introBat
@text Use battle intro
@type boolean
@default true
@on Default
@off Generic
@desc Use the default battle intro, or the generic one you set up in this plugin.


@help BF_transicion v.1.0

Plugin to change the default transitions (when a battle starts or
ends, when a new game starts, when you open the title menu, when you
change maps), to use images instead of a black background that gradually
loses opacity (or vice versa).

You can use this plugin for any project you want, commercial or not.

You must credit me as FriKitty AND CeciDibujera, OR just CeciDibujera.
You must credit "BF Project".
You can also edit this plugin as much as you like, as long as you add
in this description somewhere that you did (also, would be a good
idea to add this information in the Spanish instructions, or delete
it altogether, so Spanish speaking users can see that).
You can also look at my code and see how I did some things to make
your own plugin that does things differently. In that case, there is
no need to credit me. This is how people learn!

=======================================================================
By default, RPG Maker transitions are a black background that gradually
loses or gains opacity each frame until it finishes. They last 24 frames,
or double that for the slow ones.

This plugin changes those transitions so that:
· They all last the same.
· They use images in order, showing an animation.

You need to add your images in the img/pictures folder and name them
trans0.png, trans1.png, trans2.png... as many as you want ordered
from less dark to darker.
Remember to start with 0, not 1.

Then, you have to add the total image count in the "Number of images"
parameter. And what each image will last (in frames) in "Frame speed".

If you want to change the battle transition so it's not the default
one (with some zoom and a white flash), and it instead uses the same
one you have set up in this plugin, select "Generic" (false) in
"Use battle intro". If you need a different one, it's best if you
find a different plugin, like SRD_CEBattleIntro.

=======================================================================
This plugin does NOT modify the event commands "Fade out" and "Fade in".
If, in addition to those transitions for map transfer, load, new game, 
battle... you need manual transitions for your events, you'll have to
use a common event like so:

· Show image: #1, trans0, Upper left (0,0), (100%, 100%), 255, Normal
· Wait: X frames
· Show image: #1, trans1...

And the reverse for the opposite one.

By the way, this plugin makes it so that when you select the transition
"White" in "Transfer player" it doesn't change anything. If you need a
map transition with a different color, simply deactivate it in the 
Transfer player command and do it manually with images and/or
common events.

=======================================================================
EXTRA ADVICE
Images used with the "Show image" command will always lag a little the
first time they're used, which is very noticeable when you try to 
show them quick in order to create an animation. There are plugins to
preload images and any of them would work. But if you don't want to
do that, I'll tell you what I do:

Before I use an image, inside the common event or wherever, I select
the "Script" command and type:

ImageManager.reservePicture("imagename");
(without .png)

This for each image that the animation uses.
Then, a 1 frame pause ("Wait").
Then, I use a "Conditional branch" and in the last tab I select "script"
and type:

ImageManager.isReady()

Inside that if, I put all the images like I explained before.

If you know a better method you can ignore this advice, but it works
well for me.

By the way, the images used in this plugin are already preloaded,
this advice is only for different transitions you may need in your
events.

=======================================================================
Thanks to caethyril for giving me some pointers, and to LeonarthCG for
helping me make this plugin flexible with parameters.

Contact me on cecilia.ocon[at]gmail.com or on Twitter/Discord (frikitty)
if you need something.

*/

/*:es
@author FriKitty / CeciDibujera
@plugindesc Usa imágenes para las transiciones v1.0
@filename BF_transicion.js

@param numeroImg
@text Número de imágenes
@type number
@min 1
@desc Número de imágenes que tendrá la transición.

@param velFrame
@text Velocidad de los frames
@type number
@min 1
@desc Cuánto dura cada imagen de la transición, en frames.

@param introBat
@text Usar intro de batalla
@type boolean
@default true
@on Por defecto
@off Genérica
@desc Usar la intro de batalla por defecto, o la genérica que configuras en este plugin.

@help BF_transicion v.1.0

Plugin para cambiar las transiciones por defecto (cuando empieza
o termina la batalla, cuando empieza una nueva partida, cuando se abre 
el menú de título, cuando se cambia de mapa), para usar imágenes en
lugar de un fondo negro que va perdiendo opacidad poco a poco (o
viceversa).

Puedes usar este plugin para el proyecto que quieras, comercial o no.

Debes acreditarme como FriKitty Y CeciDibujera, O sólo CeciDibujera.
Debes acreditar "BF Project".
También puedes editar este plugin tanto como quieras, mientras que
añadas en esta descripción (y en inglés) que lo has hecho.
También puedes mirar mi código y ver cómo hice ciertas cosas para
luego hacer tu propio plugin que hace las cosas diferente. En ese
caso, no necesitas acreditarme. ¡Así aprende la gente!

=======================================================================
Por defecto, las transiciones de RPG Maker son un fondo negro que va
perdiendo o ganando opacidad en cada frame hasta que termina. Duran
24 frames, o el doble para las que son más lentas.

Este plugin cambia esas transiciones para que:
· Todas duren lo mismo.
· Utilicen imágenes en orden, mostrando una animación.

Necesitas añadir tus imágenes en la carpeta img/pictures y
llamarlas trans0.png, trans1.png, trans2.png... todas las que quieras
en orden de menos oscuro a más oscuro. 
Recuerda empezar por el 0, no por el 1.

Luego, tienes que añadir el total de imágenes en el parámetro Número
de imágenes. Y lo que va a durar cada imagen (en frames) en Velocidad
de los frames.

Si quieres cambiar la transición de batalla para que no sea la por 
defecto (con zoom y flash blanco), y que utilice la misma que has
configurado en este plugin, selecciona "Genérica" (false) en
"Usar intro de batalla". Si necesitas que sea otra distinta, 
es mejor que busques otro plugin, como SRD_CEBattleIntro.

=======================================================================
Este plugin NO modifica los comandos de evento "Iniciar transición" y
"Finalizar transición". Si, además de transiciones de mapa, cargar, 
empezar nueva partida, batalla... necesitas transiciones manuales para
tus eventos, tendrás que usar un evento común tal que así:

· Mostrar imagen: #1, trans0, Superior izquierda (0,0), (100%, 100%), 255, Normal
· Esperar: X fotogramas
· Mostrar imagen: #1, trans1...

Y al revés para el contrario.

Por cierto, este plugin hace que cuando seleccionas transición de mapa
(Transportar al jugador) como "Blanco" no cambie nada. Si necesitas una 
transición de mapa de otro color, simplemente desactívala en el comando
de Transportar al jugador y hazlo manualmente con imágenes y/o
eventos comunes.

=======================================================================
CONSEJO ADICIONAL
Las imágenes usadas con el comando "Mostrar imagen" siempre tendrán
un poco de lag, que se nota mucho cuando intentas enseñarlas rápido
para crear una animación. Hay plugins para pre-cargar (preload)
imágenes y cualquiera de ellos funcionaría. Pero si no quieres hacer
eso, te enseño lo que hago yo:

Antes de usar una imagen, en el evento común o donde sea, selecciono
el comando "Script" y escribo:

ImageManager.reservePicture("nombredeimagen");
(sin .png)

Esto por cada imagen que use la animación.
Después, una pausa de un frame ("Esperar").
Después, uso "Derivación condicional" y en la última página elijo
"script" y pongo:

ImageManager.isReady()

Dentro de ese if (esa derivación condicional) pongo todas las imágenes
como he explicado antes.

Si conoces un método mejor puedes ignorar este consejo, pero 
a mí me funciona bien.

Por cierto, las imágenes que se usan en este plugin ya están
pre-cargadas, este consejo es sólo para transiciones diferentes
que puedas necesitar en tus eventos.

=======================================================================
Agradecimientos a caethyril por apuntarme en la buena dirección, 
y a LeonarthCG por ayudarme a hacer este plugin flexible con parámetros.

Contáctame mandando un email a cecilia.ocon[arroba]gmail.com 
o en Twitter/Discord (frikitty) si necesitas algo.

*/


//Velocidad de transición y número de imágenes
//Cogemos los parámetros primero y después los multiplicamos en fadeSpeed
var bfNumeroImg = parseInt(PluginManager.parameters('BF_transicion')["numeroImg"])
var bfVelFrame = parseInt(PluginManager.parameters('BF_transicion')["velFrame"])

Scene_Base.prototype.fadeSpeed = function() {
    return bfNumeroImg * bfVelFrame;
};

//Slow es igual que la normal ahora
Scene_Base.prototype.slowFadeSpeed = function() {
    return this.fadeSpeed();
};

//Creamos un diccionario vacío donde luego vamos a meter las reservas de imagen
var bfTransImg = {}
//Nos inventamos un contador i, empieza a 0, mientras sea menor que bfNumeroImg hará la cosa, y cada vez aumenta 1
for (let i = 0; i < bfNumeroImg; i++){
    //metemos en bfTransImg cada imagen, que se tiene que llamar trans[numero].png (sin corchetes). Empezando por el 0
    bfTransImg[i] = ImageManager.reservePicture("trans"+i)
}

//Crear un sprite de fade sin bitmap asociado todavía
Scene_Base.prototype.createFadeSprite = function() {
    if(!this.spriteTrans){
        this.spriteTrans = new Sprite();
        this.addChild(this.spriteTrans)
    }
};

//Cuando te vas a negro, ponerle el bitmap primero, bfTransImg[0]
Scene_Base.prototype.startFadeOut = function(duration) {
    //Cuando te vas a negro
        this.createFadeSprite();
        this._fadeSign = -1;
        this._fadeDuration = duration;
        this.spriteTrans.bitmap = bfTransImg[0];
        this.spriteTrans.visible = true;
};

//Cuando vuelves de negro empiezas con la imagen última, que como puede cambiar es bfNumeroImg -1
Scene_Base.prototype.startFadeIn = function(duration) {
    //Cuando vuelves de negro
    this.createFadeSprite();
    this._fadeSign = 1;
    this._fadeDuration = duration;
    //es bfNumeroImg -1 porque siempre va a cambiar el número de imágenes. Y como empieza a contar desde 0, pues -1
    this.spriteTrans.bitmap = bfTransImg[bfNumeroImg-1];
    this.spriteTrans.visible = true;
};

//En updateFade es donde ponemos la animación
Scene_Base.prototype.updateFade = function() {
    if (this._fadeDuration > 0) {
        this._fadeDuration--;
        //imagenActual me va a dar la key de bfTransImg que toca. Se divide la cuenta atrás (fadeDuration) entre la velocidad de cada frame
        //Y se redondea pabajo pa que no haya decimales
        //Por ejemplo la animación dura 16 frames, son 4 imágenes: empieza siempre con uno menos, 15
        //15/4 = 3,noseque, redondeado 3. Entonces me pone la imagen 3, que es la 4ª porque contamos desde 0
        var imagenActual = Math.floor(this._fadeDuration / bfVelFrame)
        if (this._fadeSign > 0) {
            //esto es fadein (venir de negro)
            this.spriteTrans.bitmap = bfTransImg[imagenActual];
        } 
        else {
            //Esto de abajo es el fadeout (irse a negro)
            //De esto no me voy a acordar nunca pero de cada número que habría en fadein, te da el complementario para hacer fadeout
            //Por ejemplo, si de un total de 4, tengo el 3 (4º img), te da el 0 (1ª img)
            //Si tengo el 2 (3ª), te da el 1 (2ª)
            //No entiendo del todo PERO CHUSCA
            imagenActual = bfNumeroImg - imagenActual - 1
            this.spriteTrans.bitmap = bfTransImg[imagenActual];
        }
        if(this._fadeDuration <= 0 && this._fadeSign > 0){
            this.spriteTrans.visible = false;
        }
    }
};

//Batalla con intro normal
if(PluginManager.parameters('BF_transicion')["introBat"] == "false"){
    Scene_Map.prototype.launchBattle = function() {
        BattleManager.saveBgmAndBgs();
        this.stopAudioOnBattleStart();
        SoundManager.playBattleStart();
        //Cambiar startEncounterEffect por startFadeOut y punto
        this.startFadeOut(this.fadeSpeed())
        this._mapNameWindow.hide();
    };
}