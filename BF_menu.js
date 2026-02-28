//=============================================================================
//BF_menu.js
//=============================================================================
/*:
@author FriKitty / CeciDibujera
@plugindesc Personalized menu for BF project. v1.0
@filename BF_menu.js

@param dineroIcon
@text Money icon
@type number
@min 0
@default 0
@desc Select which icon you want to use instead of the currency name. Default 0 (nothing)

------------------------------------------------------------------------
@param bustos
@text Busts in Status menu

@param bustoWidth
@parent bustos
@text Bust width
@type number
@min 0
@default 304
@desc Select the width of the bust images in pixels. Default: 340

@param bustoHeight
@parent bustos
@text Bust height
@type number
@min 0
@default 644
@desc Select the height of the bust images in pixels. Default: 644

@param bustoX
@parent bustos
@text X position of busts
@type number
@min 0
@default 0
@desc Select the X position of busts, counting from the upper left corner.

@param bustoY
@parent bustos
@text Y position of busts
@type number
@min 0
@default 0
@desc Select the Y position of busts, counting from the upper left corner.

@param busto1
@parent bustos
@text Actor 1 bust
@type file
@dir img/system

@param busto2
@parent bustos
@text Actor 2 bust
@type file
@dir img/system

@param busto3
@parent bustos
@text Actor 3 bust
@type file
@dir img/system

@param busto4
@parent bustos
@text Actor 4 bust
@type file
@dir img/system

@param bustosExtra
@parent bustos
@text Extra busts
@type text[]
@desc Write each entry: actor ID, variable value, "filename"

------------------------------------------------------------------------
@param saveloadvariables
@text Variables in Save and Load

@param slvIcon1
@parent saveloadvariables
@text Icon 1
@type number
@min 0
@default 0
@desc Choose the icon for variable 1 (it will appear lower)

@param slvVar1
@parent saveloadvariables
@text Variable 1
@type number
@min 0
@default 0
@desct Choose the ID of variable 1 (it will appear lower)

@param slvIcon2
@parent saveloadvariables
@text Icon 2
@type number
@min 0
@default 0
@desc Choose the icon for variable 2 (it will appear higher)

@param slvVar2
@parent saveloadvariables
@text Variable 2
@type number
@min 0
@default 0
@desc Choose the ID of variable 2 (it will appear higher)

------------------------------------------------------------------------
@param opciones
@text Options

@param volcol1
@parent opciones
@text Volume color 1
@type number
@min 0
@max 31
@default 14
@desc Choose the system color to be used in the volume gauge (1st color)

@param volcol2
@parent opciones
@text Volume color 2
@type number
@min 0
@max 31
@default 15
@desc Choose the system color to be used in the volume gauge (2nd color)

@param onoffIcons
@parent opciones
@text Use icons instead of ON/OFF
@type boolean
@default false
@on Icons
@off Text
@desc Choose using icons or writing ON/OFF text (default: Text)

@param onIcon
@parent onoffIcons
@text ON icon
@type number
@default 0
@min 0
@desc Choose the ON icon

@param onIconL
@parent onoffIcons
@text ON icon left
@type number
@default 0
@min 0
@desc Choose the icon to the left of ON (0 for transparent)

@param offIcon
@parent onoffIcons
@text OFF icon
@type number
@default 0
@min 0
@desc Choose the OFF icon

@param offIconL
@parent onoffIcons
@text OFF icon left
@type number
@default 0
@min 0
@desc Choose the icon to the left of OFF (0 for transparent)

------------------------------------------------------------------------
@help BF_menu v.1.0

A plugin to change the menu. You can use this plugin for any
project you want, commercial or not, but it is heavily adapted to
my own project, and thus I don't think it will be super useful to
anyone else. 

· It's made to look good for 960 x 720 resolution
· It will look wrong if your actors have very long names or classes
· Shop menus are broken because I don't use them (for now)
· Only three stats are visible: attack, defense and speed
· It's not great code overall

That said, if you want to use it anyway, you can. 
You must credit me as FriKitty AND CeciDibujera OR just CeciDibujera.
You must credit my game, "BF Project".

You can also edit this plugin as much as you like, as long as you add
in this description somewhere that you did (also, would be a good
idea to add this information in the Spanish instructions, or delete
it altogether, so Spanish speaking users can see that).
You can also look at my code and see how I did some things to make
your own plugin that does things differently. In that case, there is
no need to credit me. This is how people learn!

=======================================================================
BUSTS IN STATUS MENU
Busts appear in the Status menu. You have to assign a bust to each
actor (4 maximum in these parameters, I'll tell you later how to
add more if you need them), so they appear by default.
They have to be in the img/system folder. Avoid spaces in their names.

All busts must have the same dimensions and you must enter these
numbers in the parameters. That said, it's optimized for the default
values. If you don't deviate too much from them, they could look good.

If you want to change an actor's bust in the middle of the game,
you have to follow these steps:

· Create a variable inside the editor called bfBusto[number]
where [number] has to be changed for the actor ID that you
want to change (no brackets).

Example: bfBusto5

· Add the filename of your image to the Extra busts parameters.
You must do it following this syntax:
Actor ID, variable value, "filename"

Example: 5, 23, "harold23"
This will make it so that actor 5's bust will change to the image
harold23.png when the variable bfBusto5 has a value of 23.

· Change the variable with an event when you need it.

In this example I used number 5 to demonstrate that, this way,
you can add more than 4 actors, even if there is no room in the
parameters. To add a default image for actor 5 onwards, simply write
0 in the second field of Extra busts.

IF THE VARIABLE bfBusto5 DOES NOT EXIST, actor 5 won't have any bust,
as much as you assign it in this plugin. You have to create the variable.

=======================================================================
CHARACTER DESCRIPTIONS IN STATUS MENU
In order to make descriptions with 5-6 lines you have to use another
plugin: YEP_MessageCore. 
When writing them on the editor, write <WordWrap> at the
beginning. Then, to jump to the next line use <br>. Write everything
in the same line inside the editor.

=======================================================================
VARIABLES IN LOAD AND SAVE MENU
Save and load menus show the files' money count. Also, you can add
up to two variables from that save with an icon by the side, to show
the progress of whatever.

You have to choose the icon number and the ID of the variable you
want to show. If you don't choose the variable (default 0) nothing
will be shown. 

=======================================================================
OPTIONS MENU
Colors 1 and 2 are the system colors that will be used in the volume
gauges. If you want to change these colors you must change Window.png
in System. I recommend using colors from 1 to 15, because they won't
be used in anything else, but whatever you select from 0 to 31
will work.

For the ON and OFF icons, you have to first activate use icons,
and then assign a number for each option.

In addition to this icon (aligned to the right), you can use another
one to the left. So it can look like a rectangular icon instead of
a square one.

=======================================================================
Many thanks to SRD, Galv, Yanfly and Mr. Trivel, I looked at their code 
at times to put things together. 
And even more thanks to LeonarthCG, who helped me with the bust system 
(and in general). Also to bass2yang, who helped me with the save/load
info displaying.

Contact me on cecilia.ocon[at]gmail.com or on Twitter/Discord (frikitty)
if you need something.
*/

/*:es
@author FriKitty / CeciDibujera
@plugindesc Menú personalizado para BF Project. v1.0
@filename BF_menu.js

@param dineroIcon
@text Icono de dinero
@type number
@min 0
@default 0
@desc Selecciona qué icono quieres usar en vez del nombre del dinero. Por defecto 0 (nada)

------------------------------------------------------------------------
@param bustos
@text Bustos en Estado

@param bustoWidth
@parent bustos
@text Ancho de bustos
@type number
@min 0
@default 304
@desc Indica el ancho de las imágenes para bustos en píxeles. Por defecto 304

@param bustoHeight
@parent bustos
@text Alto de bustos
@type number
@min 0
@default 644
@desc Indica el alto de las imágenes para bustos en píxeles. Por defecto 644

@param bustoX
@parent bustos
@text Posición X de bustos
@type number
@min 0
@default 0
@desc Indica la posición X de las imágenes para bustos, contando desde la esquina superior izquierda.

@param bustoY
@parent bustos
@text Posición Y de bustos
@type number
@min 0
@default 0
@desc Indica la posición Y de las imágenes para bustos, contando desde la esquina superior izquierda.

@param busto1
@parent bustos
@text Busto actor 1
@type file
@dir img/system

@param busto2
@parent bustos
@text Busto actor 2
@type file
@dir img/system

@param busto3
@parent bustos
@text Busto actor 3
@type file
@dir img/system

@param busto4
@parent bustos
@text Busto actor 4
@type file
@dir img/system

@param bustosExtra
@parent bustos
@text Bustos extra
@type text[]
@desc Escribe cada entrada: ID de actor, valor de variable, "nombre de archivo"

------------------------------------------------------------------------
@param saveloadvariables
@text Variables en Guardar y Cargar

@param slvIcon1
@parent saveloadvariables
@text Icono 1
@type number
@min 0
@default 0
@desc Elige el icono para la variable 1 (irá más abajo)

@param slvVar1
@parent saveloadvariables
@text Variable 1
@type number
@min 0
@default 0
@desc Elige la ID de la variable 1 (irá más abajo)

@param slvIcon2
@parent saveloadvariables
@text Icono 2
@type number
@min 0
@default 0
@desc Elige el icono para la variable 2 (irá más arriba)

@param slvVar2
@parent saveloadvariables
@text Variable 2
@type number
@min 0
@default 0
@desc Elige la ID de la variable 2 (irá más arriba)

------------------------------------------------------------------------
@param opciones
@text Opciones

@param volcol1
@parent opciones
@text Volumen color 1
@type number
@min 0
@max 31
@default 14
@desc Elige el color de sistema para usarse en la barra de volumen (1er color)

@param volcol2
@parent opciones
@text Volumen color 2
@type number
@min 0
@max 31
@default 15
@desc Elige el color de sistema para usarse en la barra de volumen (2º color)

@param onoffIcons
@parent opciones
@text Usar iconos en vez de ON OFF
@type boolean
@default false
@on Iconos
@off Texto
@desc Elige usar iconos o escribir texto ON/OFF (por defecto: Texto)

@param onIcon
@parent onoffIcons
@text Icono ON
@type number
@default 0
@min 0
@desc Elige el icono para ON

@param onIconL
@parent onoffIcons
@text Icono ON izquierda
@type number
@default 0
@min 0
@desc Elige el icono a la izquierda de ON (0 para transparente)

@param offIcon
@parent onoffIcons
@text Icono OFF
@type number
@default 0
@min 0
@desc Elige el icono para OFF

@param offIconL
@parent onoffIcons
@text Icono OFF izquierda
@type number
@default 0
@min 0
@desc Elige el icono a la izquierda de OFF (0 para transparente)

------------------------------------------------------------------------
@help BF_menu v.1.0

Plugin para cambiar el menú. Puedes usar este plugin para el 
proyecto que quieras, comercial o no, pero está muy adaptado a mi
propio proyecto, así que no creo que sea muy útil para nadie más.

· Está hecho para verse bonito en una resolución de 960 x 720
· Se verá feo si tus actores tienen nombres o clases muy largas
· Los menús de tienda están rotos porque no los uso (de momento)
· Sólo se ven tres stats: ataque, defensa y velocidad
· El código no está muy bien hecho

Dicho lo cual, si quieres usarlo igualmente, puedes hacerlo.
Debes acreditarme como FriKitty Y CeciDibujera, O sólo CeciDibujera.
Debes acreditar "BF Project".

También puedes editar este plugin tanto como quieras, mientras que
añadas en esta descripción (y en inglés) que lo has hecho.
También puedes mirar mi código y ver cómo hice ciertas cosas para
luego hacer tu propio plugin que hace las cosas diferente. En ese
caso, no necesitas acreditarme. ¡Así aprende la gente!

=======================================================================
BUSTOS EN ESTADO
Los bustos aparecen en el menú Estado. Tienes que asignar un busto
a cada actor (4 como máximo en estos parámetros, luego te digo cómo
añadir más si los necesitas), para que aparezcan por defecto.
Deben estar en la carpeta img/system. Evita los espacios en los nombres.

Todos los bustos deben medir lo mismo y debes meter esas cifras en
los parámetros. Eso sí, está optimizado para los valores por
defecto. Si no te alejas mucho de ahí, puede verse bien también.

Si quieres cambiar el busto de un actor en mitad de la partida, 
tienes que seguir estos pasos: 

· Crear una variable dentro del editor llamada bfBusto[número]
donde [número] lo tienes que cambiar por la ID del actor
que quieres cambiar (sin corchetes).

Ejemplo: bfBusto5

· Añadir el nombre de la imagen en los parámetros de Bustos extra.
Debes hacerlo siguiendo esta sintaxis:
ID de actor, valor de variable, "nombre de archivo"

Ejemplo: 5, 23, "pepito23"
Esto hará que el busto del actor 5 cambie a la imagen pepito23.png
cuando la variable bfBusto5 tenga el valor 23.

· Cambiar la variable con un evento cuando lo necesites.

En este ejemplo he usado el número 5 para demostrar que de esta
forma puedes añadir más de 4 actores, aunque no haya hueco en los
parámetros. Para añadir una imagen por defecto para el actor 5
en adelante, simplemente escribe 0 en el segundo campo de Bustos extra.

SI NO EXISTE LA VARIABLE bfBusto5, el actor 5 no tendrá ningún busto, 
por mucho que se lo asignes en este plugin. Tienes que crear esa variable.

=======================================================================
DESCRIPCIONES DE PERSONAJES EN EL MENÚ ESTADO
Para que las descripciones salgan con sus 5-6 líneas hay que usar
otro plugin: YEP_MessageCore. 
Cuando las escribas en el editor, escribe <WordWrap> al principio.
Después, para saltar de línea usa <br>. Escríbelo todo
en la misma línea dentro del editor.

=======================================================================
VARIABLES EN EL MENÚ DE CARGAR Y GUARDAR
El menú de guardar y cargar enseña el dinero de la partida. Además,
le puedes poner hasta dos variables del juego con un icono al lado,
para mostrar el progreso de alguna cosa.

Hay que elegir el número del icono y la ID de la variable que
quieras mostrar. Si no eliges la variable (por defecto 0) no
saldrá nada.

=======================================================================
MENÚ DE OPCIONES
Los colores 1 y 2 son los colores de sistema que se usarán en la barra
de volumen. Si quieres cambiar estos colores debes cambiar la imagen
Window.png en System. Recomiendo usar los colores del 1 al 15, porque
no se usan para nada más del sistema, pero cualquier cosa que pongas
aquí del 0 al 31 funcionará.

Para los iconos de ON y OFF, tienes que activar primero usar iconos,
y después asignar un número en cada opción.

Además del icono (ajustado a la derecha), se puede poner uno adicional 
a la izquierda. Para que quede como un icono rectangular 
en vez de uno cuadrado.

=======================================================================
Agradecimientos a SRD, Galv, Yanfly y Mr. Trivel, miré su código 
en algunas ocasiones para montar esto.
Y sobre todo agradecimientos a LeonarthCG por ayudarme con el sistema
de bustos (y en general). También a bass2yang, quien me ayudó con lo
de enseñar información en guardar y cargar.

Contáctame mandando un email a cecilia.ocon[arroba]gmail.com 
o en Twitter/Discord (frikitty) si necesitas algo.
*/


//PARA ARREGLAR TODOS LOS ICONOS DEL MUNDO MUNDIAL: parseInt a la x de textState para dratextex. Esto es ridículo
Window_Base.prototype.processDrawIcon = function(iconIndex, textState) {
    textState.x = parseInt(textState.x)
    this.drawIcon(iconIndex, textState.x + 2, textState.y + 2);
    textState.x += Window_Base._iconWidth + 4;
};

Window_Base.prototype.drawIcon = function(iconIndex, x, y) {
    //Como drawIcon por algún motivo escribe texto después (?) cojo la opacidad que se supone que iba a tener y la guardo en variable opacidadOriginal
    var opacidadOriginal = this.contents.paintOpacity
    //Después le digo que ponga opacidad 255 para que el icono esté bien opaco
    this.contents.paintOpacity = 255;
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y); 
    //Y después le digo que vuelva a como estaba para que el texto SÍ se ponga transparente si lo necesita
    this.contents.paintOpacity = opacidadOriginal
};

//PANTALLA DE MENÚ PRINCIPAL --------------------------------------------------------------------------------------
//CAJA DE COMANDOS menu command es lo de objetos, equipo, estado
//Aquí añado el continuar... pero no funciona del tirón
Scene_Menu.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_MenuCommand(0, 0);
    this._commandWindow.setHandler('item',      this.commandItem.bind(this));
    this._commandWindow.setHandler('skill',     this.commandPersonal.bind(this));
    this._commandWindow.setHandler('equip',     this.commandPersonal.bind(this));
    this._commandWindow.setHandler('status',    this.commandPersonal.bind(this));
    this._commandWindow.setHandler('formation', this.commandFormation.bind(this));
    this._commandWindow.setHandler('options',   this.commandOptions.bind(this));
    this._commandWindow.setHandler('save',      this.commandSave.bind(this));
    this._commandWindow.setHandler('gameEnd',   this.commandGameEnd.bind(this));
    this._commandWindow.setHandler('continue', this.commandContinue.bind(this));
    this._commandWindow.setHandler('cancel',    this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

//Con esto sí funciona el continuar
Scene_Menu.prototype.commandContinue = function () {
    SceneManager.push(Scene_Load);
    }

Window_MenuCommand.prototype.initialize = function (x, y) {
    Window_Command.prototype.initialize.call(this, x, y);
    this.selectLast();
    //esto es para centrar la cajita de comandos
    this.x = (Graphics.boxWidth - this.width) / 2;
    //20 pixeles desde arriba
    this.y = 20;
};

Window_MenuCommand.prototype.windowWidth = function () {
    //Ancho de la cajita de comandos
    return 800;
};

Window_MenuCommand.prototype.numVisibleRows = function () {
    //Alto de cajita de comandos (en filas)
    return 2;
};

Window_MenuCommand.prototype.maxCols = function () {
    //Columnas
    return 4;
};

//Si quiero cambiar el orden con moverlos aquí en makeCommandList basta
//He cambiado los Main para poder ordenarlos como yo quiera. En spanglish pa liarme menos
//objetos equipo guardar opciones / habilidades estado cargar salir
//Original es donde está cargar (continue). Formation lo quito

Window_MenuCommand.prototype.makeCommandList = function () {
    //this.addMainCommands();
    this.addObjetosCommand();
    this.addEquipoCommand();
    this.addSaveCommand();
    this.addOptionsCommand();
    //this.addFormationCommand();
    this.addHabilidadesCommand();
    this.addEstadoCommand();
    this.addOriginalCommands();
    this.addGameEndCommand();
};

//He hecho los addMainCommands en varios pa así poder moverlos de sitio arriba
Window_MenuCommand.prototype.addObjetosCommand = function (){
    var enabled = this.areMainCommandsEnabled();
    if (this.needsCommand('item')) {
        this.addCommand(TextManager.item, 'item', enabled);
    }
}
Window_MenuCommand.prototype.addEquipoCommand = function(){
    var enabled = this.areMainCommandsEnabled();
    if (this.needsCommand('equip')) {
        this.addCommand(TextManager.equip, 'equip', enabled);
    }
}
Window_MenuCommand.prototype.addHabilidadesCommand = function(){
    var enabled = this.areMainCommandsEnabled();
    if (this.needsCommand('skill')) {
        this.addCommand(TextManager.skill, 'skill', enabled);
    }
}
Window_MenuCommand.prototype.addEstadoCommand = function(){
    var enabled = this.areMainCommandsEnabled();
    if (this.needsCommand('status')) {
        this.addCommand(TextManager.status, 'status', enabled);
    }
}

//Aquí he puesto continue, antes estaba vacío
Window_MenuCommand.prototype.addOriginalCommands = function () {
    this.addCommand(TextManager.continue_, 'continue', Window_TitleCommand.prototype.isContinueEnabled());
};

//CAJA DE CARAS 
//Aquí es donde se pone el ancho y alto. Te puedes inventar el x e y en vez de esperar que otra función los ponga
//Pero en vez de eso te puedes ir a Window_MenuStatus.prototype.windowWitdth y así (abajito)
Window_MenuStatus.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    //Esto centra la cajita a lo ancho
    this.x = (Graphics.boxWidth - this.width) / 2;
    //Para el alto va a depender de la de comandos, que mide 108, más el margen de arriba (20) más 10
    this.y = 108 + 20 + 10;
    this._formationMode = false;
    this._pendingIndex = -1;
    this.refresh();
};

//Ancho y alto
Window_MenuStatus.prototype.windowWidth = function() {
    return 800;
};

Window_MenuStatus.prototype.windowHeight = function() {
    return (Graphics.boxHeight /3) *2;
};

//Aquí el height de cada una de las cajas de personajitos. Lo de clientHeight sólo sale aquí
Window_MenuStatus.prototype.itemHeight = function() {
    var clientHeight = this.height - this.padding * 2;
    return Math.floor(clientHeight / this.numVisibleRows());
};

//Número de filas visibles (4 es default, el máximo)
Window_MenuStatus.prototype.numVisibleRows = function() {
    return 2;
};

//Esto lo he añadido para que tenga columnas
Window_MenuStatus.prototype.maxCols = function() {
    return 2;
};

//Esto mueve las caras dentro del rectángulo que contiene a cada actor
Window_MenuStatus.prototype.drawItemImage = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    this.changePaintOpacity(actor.isBattleMember());
    //Divido el y entre 4 para que esté en el segundo cuarto
    //Al x le sumo numeritos a ojímetro
    this.drawActorFace(actor, rect.x+8, rect.y+(rect.height/4), Window_Base._faceWidth, Window_Base._faceHeight);
    this.changePaintOpacity(true);
};

//Cambia cómo se escribe el nivel
Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.levelA, x, y, 48);
    this.resetTextColor();
    this.drawText(actor.level, x + 45, y, 36, 'left');
};

//Función alternativa para escribir la clase (más abajo la uso también)
Window_Base.prototype.drawActorClassBF = function(actor, x, y, width) {
    width = width || 168;
    //El color cambiado para que sea como Nv, PV, MP...
    this.changeTextColor(this.systemColor())
    this.drawText(actor.currentClass().name, x, y, width, 'right');
};

//Traigo esto para cambiar las gauges de alto (se usan en más sitios) 
//El alto es el número que va tras width y fillW, default 6
//Muevo el gaugeY para compensar que sean un poco más gorditas. default era - 8
Window_Base.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
    var fillW = Math.floor(width * rate);
    var gaugeY = y + this.lineHeight() - 11;
    //primero se dibuja un rectángulo debajo de todo para que haga de contorno. x y -1 porque es 1 pixel y tiene que verse
    //width + 2 porque es uno por cada lado. y en el color, 1 al final porque es opaco
    this.contents.fillRect(x - 1 , gaugeY - 1, width + (1 * 2), 10 + (1 * 2), 'rgba(0, 0, 0, 1)');
    //aquí se dibuja la barra de verdad
    this.contents.fillRect(x, gaugeY, width, 10, this.gaugeBackColor());
    this.contents.gradientFillRect(x, gaugeY, fillW, 10, color1, color2);
};

//Mueve las letritas de actor dentro de su caja. Icons es donde van los estados alterados. Máximo 4
Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    this.drawActorName(actor, x, y + 10);
    //el ancho de la caja es idealmente 376
    this.drawActorClassBF(actor, x + 376/2, y + 10);
    //155 es margencito para la cara del actor
    this.drawActorLevel(actor, x + 155, y + 50);
    this.drawActorHp(actor, x + 155, y + 50 + lineHeight, 195);
    this.drawActorMp(actor, x + 155, y + 50 + lineHeight *2, 195);
    //84 es lo que mide el nivel a la izquierda
    //El +2 a lineHeight es para moverlo justo a donde está el retrato
    this.drawActorIcons (actor, x + 155, y + 50 + lineHeight *3 +2)
};

//Esto mueve la caja que contiene las letritas de cada actor
//Lo he puesto para que ocupe casi lo mismo que el rectángulo donde está metido
//x e y a ojímetro
Window_MenuStatus.prototype.drawItemStatus = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    //Asumo que x e y funcionan igual que antes, esquina superior izq
    var x = rect.x +8;
    var y = rect.y +5;
    //Este no sé cómo cambiarlo así que así se queda de momento
    //Esto y 376 es lo mismo (de momento según la ventana que tengo. ok)
    var width = rect.width - x - this.textPadding();
    this.drawActorSimpleStatus(actor, x, y, width);
};

// CAJA DE DINERO 
//La escena la tengo que cambiar o si no la y de la caja de oro no funciona lmao
Scene_Menu.prototype.createGoldWindow = function() {
    this._goldWindow = new Window_Gold(0, 0);
    this._goldWindow.y = Graphics.boxHeight - this._goldWindow.height -20;
    this.addWindow(this._goldWindow);
};

Window_Gold.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    //La x centrada
    var x = (Graphics.boxWidth - width) /2;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_Gold.prototype.windowWidth = function() {
    return 230;
};

//Cambia cómo se dibuja el dinero. Cambié alineación y añadí icono
Window_Base.prototype.drawCurrencyValue = function(value, unit, x, y, width) {
    //unitWidth tiene que convertirse en entero o si no se jode el icono del dinero
    var unitWidth = parseInt(Math.min(68, this.textWidth(unit)));
    this.resetTextColor();
    this.drawText(value, x, y, width - unitWidth +5, 'right');
    this.changeTextColor(this.systemColor());
    //El 16 es como rarillo pero es para que esté a la misma distancia en el menú de saves (a 5 píxeles). Antes era 25
    this.drawIcon(parseInt(PluginManager.parameters('BF_menu')["dineroIcon"]), width - unitWidth +16, 1)
};

//PANTALLA DE ACTOR CUANDO USAS OBJETOS, HABILIDADES, ETC
//Ojo que luego hay que modificar también el Window Menu Actor porque es cuando usas un objeto.
//Debo cambiar esto si cambio el anterior
Window_MenuActor.prototype.selectForItem = function(item) {
    //AQUÍ es donde se pone el copypaste para centrar la cajita
    this.x = (Graphics.boxWidth - this.width) / 2;
    //102 porque es según he hecho los menuses de objetos
    this.y = 102;
    var actor = $gameParty.menuActor();
    var action = new Game_Action(actor);
    action.setItemObject(item);
    this.setCursorFixed(false);
    this.setCursorAll(false);
    if (action.isForUser()) {
        if (DataManager.isSkill(item)) {
            this.setCursorFixed(true);
            this.select(actor.index());
        } else {
            this.selectLast();
        }
    } else if (action.isForAll()) {
        this.setCursorAll(true);
        this.select(0);
    } else {
        this.selectLast();
    }
};


//PANTALLA DE OBJETOS --------------------------------------------------------------------------------------
//Window_Help
//Ojo que Window_Help se comparte con Objetos, Habilidades, Equipo e incluso Cargar y Guardar
//Para guardar y cargar he usado otra que se pone arriba. Objetos,habilidades, equipo abajo
//Parece que Window_Help se adapta a las líneas, 1 o 2, eso ta bien

Window_Help.prototype.initialize = function(numLines) {
    //Cambiamos el width por 800
    var width = 800;
    var height = this.fittingHeight(numLines || 2);
    //Cambiamos la X para poder centrarlo y la Y pa ponerlo abajo (objetos, equipo, habilidades)
    var x = (Graphics.boxWidth - width) / 2
    var y = 592
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._text = '';
};

//Primero la escena que si no no chuscan algunas cosas
Scene_Item.prototype.createCategoryWindow = function() {
    this._categoryWindow = new Window_ItemCategory();
    this._categoryWindow.setHelpWindow(this._helpWindow);
    //Aquí va la puñetera y
    this._categoryWindow.y = 20;
    this._categoryWindow.setHandler('ok',     this.onCategoryOk.bind(this));
    this._categoryWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._categoryWindow);
};

//Ahora la y depende de categoryWindow. Su y (20) + lo que mide, + 10 de margen
Scene_Item.prototype.createItemWindow = function() {
    var wy = this._categoryWindow.y + this._categoryWindow.height + 10;
    var wh = 480;
    var wx = 180;
    var ww = 600
    this._itemWindow = new Window_ItemList(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
    this._categoryWindow.setItemWindow(this._itemWindow);
};

//Window_ItemCategory es para los tipos de objeto. Esto rompe las tiendas lol
//Aquí la x e y. La y no funciona porque tienes que irte a la scene item lol
Window_ItemCategory.prototype.initialize = function() {
    Window_HorzCommand.prototype.initialize.call(this, 80, 0);
};

Window_ItemCategory.prototype.windowWidth = function() {
    return 800;
};

//Window_ItemList es para la lista de objetos
Window_ItemList.prototype.maxCols = function() {
    return 1;
};

//El rectangulito que contiene las cosas
Window_ItemList.prototype.itemRect = function(index) {
    var rect = new Rectangle();
    var maxCols = this.maxCols();
    rect.width = 450;
    rect.height = this.itemHeight();
    rect.x = 52
    rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
    return rect;
};

//Cambio x y width
Window_ItemList.prototype.itemRectForText = function(index) {
    var rect = this.itemRect(index);
    rect.x += this.textPadding();
    rect.width = 450;
    return rect;
};

//Aquí pongo que tenga x antes del número en vez de :
Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
    if (this.needsNumber()) {
        this.drawText('x ', x, y, width - this.textWidth('00'), 'right');
        this.drawText($gameParty.numItems(item), x, y, width, 'right');
    }
};

//Esto afecta a más cosas, pero es pa que esté más lejitos del icono (+15 por ahí abajo)
Window_Base.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth +15, y, width - iconBoxWidth);
    }
};

//PANTALLA DE HABILIDADES ---------------------------------------------------------------------------------
//Window_SkillType es para poner los tipos que yo me invente en la base de datos. Magia, lucha...
Scene_Skill.prototype.createSkillTypeWindow = function() {
    var wy = 20;
    this._skillTypeWindow = new Window_SkillType(80, wy);
    this._skillTypeWindow.setHelpWindow(this._helpWindow);
    this._skillTypeWindow.setHandler('skill',    this.commandSkill.bind(this));
    this._skillTypeWindow.setHandler('cancel',   this.popScene.bind(this));
    this._skillTypeWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._skillTypeWindow.setHandler('pageup',   this.previousActor.bind(this));
    this.addWindow(this._skillTypeWindow);
};

//Cambio ancho
Window_SkillType.prototype.windowWidth = function() {
    return 184;
};

//Window_SkillStatus es donde va el nombre, cara, clase, nivel, barritas y estados. 
//Por defecto usa los del menú principal, así que tengo que inventarme otra.
//Primero la escena pa cambiar x e y
Scene_Skill.prototype.createStatusWindow = function() {
    var wx = this._skillTypeWindow.width + this._skillTypeWindow.x + 10;
    var wy = 20;
    var ww = 606;
    var wh = this._skillTypeWindow.height;
    this._statusWindow = new Window_SkillStatus(wx, wy, ww, wh);
    this._statusWindow.reserveFaceImages();
    this.addWindow(this._statusWindow);
};

//Cambiamos dónde se escribe cada cosa
Window_SkillStatus.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var x2 = x + 180;
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, 70);
    this.drawActorIcons(actor, x, 110);
    this.drawActorClassBF(actor, 373, y);
    this.drawActorHp(actor, x2 -20, 70, 220);
    //el y aumenta en 36 píxeles
    this.drawActorMp(actor, x2 -20, 106, 220);
};

Window_SkillStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var w = this.width - this.padding * 2;
        var h = this.height - this.padding * 2;
        var width = w - 162 - this.textPadding();
        this.drawActorFace(this._actor, 0, 0, 144, h);
        //cambiamos la y por 0, por defecto es 18 parece
        this.drawActorSimpleStatus(this._actor, 162, 0, width);
    }
};

//Window_SkillList es donde van los hechicitos
//Escena para cambiar x e y
Scene_Skill.prototype.createItemWindow = function() {
    var wx = 180;
    var wy = this._statusWindow.y + this._statusWindow.height + 10;
    var ww = 600;
    var wh = 372;
    this._itemWindow = new Window_SkillList(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._skillTypeWindow.setSkillWindow(this._itemWindow);
    this.addWindow(this._itemWindow);
};

//Una columna
Window_SkillList.prototype.maxCols = function() {
    return 1;
};

//Ahora a cambiar el rectangulito del medio para que sea igual que los items y los equips (o equivalente)
//He copiado esto de item y le he cambiado el nombre a skilllist
Window_SkillList.prototype.itemRect = function(index) {
    var rect = new Rectangle();
    var maxCols = this.maxCols();
    rect.width = 450;
    rect.height = this.itemHeight();
    rect.x = 52
    rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
    return rect;
};

//Cambiamos x y width
Window_SkillList.prototype.itemRectForText = function(index) {
    var rect = this.itemRect(index);
    rect.x += this.textPadding();
    rect.width = 450;
    return rect;
};

//Esto está para poner MP después del numerito
Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    if (this._actor.skillTpCost(skill) > 0) {
        this.changeTextColor(this.tpCostColor());
        this.drawText(this._actor.skillTpCost(skill), x, y, width, 'right');
    } else if (this._actor.skillMpCost(skill) > 0) {
        this.changeTextColor(this.mpCostColor());
        this.drawText(this._actor.skillMpCost(skill) + ' ' + $dataSystem.terms.basic[5], x, y, width, 'right');
    }
};

//PANTALLA DE EQUIPO ---------------------------------------------------------------------------------------
//EquipCommand es lo de Equipar, Quitar todo
//Hay que editar la escena un poco. Quito optimizar que no me gusta
Scene_Equip.prototype.createCommandWindow = function() {
    var wx = 80;
    var wy = 20;
    var ww = 448;
    this._commandWindow = new Window_EquipCommand(wx, wy, ww);
    this._commandWindow.setHelpWindow(this._helpWindow);
    this._commandWindow.setHandler('equip',    this.commandEquip.bind(this));
    this._commandWindow.setHandler('clear',    this.commandClear.bind(this));
    this._commandWindow.setHandler('cancel',   this.popScene.bind(this));
    this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._commandWindow.setHandler('pageup',   this.previousActor.bind(this));
    this.addWindow(this._commandWindow);
};

//2 columnas en vez de 3
Window_EquipCommand.prototype.maxCols = function() {
    return 2;
};

//Quitamos optimizar otra vez que no me gusta
Window_EquipCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.equip2,   'equip');
    this.addCommand(TextManager.clear,    'clear');
};

//EquipSlot es donde eliges los equipos
//Cambiar posición en la escena
Scene_Equip.prototype.createSlotWindow = function() {
    var wx = 80;
    var wy = this._commandWindow.y + this._commandWindow.height + 10;
    var ww = this._commandWindow.width;
    var wh = this._statusWindow.height - this._commandWindow.height - 10;
    this._slotWindow = new Window_EquipSlot(wx, wy, ww, wh);
    this._slotWindow.setHelpWindow(this._helpWindow);
    this._slotWindow.setStatusWindow(this._statusWindow);
    this._slotWindow.setHandler('ok',       this.onSlotOk.bind(this));
    this._slotWindow.setHandler('cancel',   this.onSlotCancel.bind(this));
    this.addWindow(this._slotWindow);
};

//El width de slotName y el + de la X de item name en vez de 138 lo ponemos a 140
Window_EquipSlot.prototype.drawItem = function(index) {
    if (this._actor) {
        var rect = this.itemRectForText(index);
        this.changeTextColor(this.systemColor());
        this.changePaintOpacity(this.isEnabled(index));
        this.drawText(this.slotName(index), rect.x, rect.y, 140, this.lineHeight());
        this.drawItemName(this._actor.equips()[index], rect.x + 140, rect.y);
        this.changePaintOpacity(true);
    }
};

//EquipStatus es donde salen los stats y voy a añadir careto del actor y nivel
//La escena para cambiar la X y la Y
Scene_Equip.prototype.createStatusWindow = function() {
    //80 es el margen, 448 es lo que mide la command window, 10 es el margen
    this._statusWindow = new Window_EquipStatus(80 + 448 + 10, 20);
    this.addWindow(this._statusWindow);
};

//Width contando píxeles
Window_EquipStatus.prototype.windowWidth = function() {
    return 342;
};

//Esta es la height que quiero pero parece que no funciona por sí sola lmao
Window_EquipStatus.prototype.windowHeight = function() {
    return 298;
};

//Esto pinta el nombre del actor y los STATS así que tengo que hacer lo mismo que hice en Estado con ataque, defensa y velocidad
//2, 3 y 6 son ataque defensa y velocidad
Window_EquipStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        this.drawActorName(this._actor, 144 + 15, 0);
        this.drawActorLevel(this._actor, 144 + 15, 114)
        this.drawActorFace(this._actor, 0, 0, 144, 144)
        //Lo de +144 + 10 es pa que esté abajito de la cara
        this.drawItem(0, (this.lineHeight() * 0) + 144 + 10, 2)
        this.drawItem(0, (this.lineHeight() * 1) + 144 + 10, 3)
        this.drawItem(0, (this.lineHeight() * 2) + 144 + 10, 6)
        //Los stats antes eran un for porque los pone todos. Ya pues no
    }
};

//Cambio drawItem y sus cosas pa que tengan más sitio
Window_EquipStatus.prototype.drawParamName = function(x, y, paramId) {
    this.changeTextColor(this.systemColor());
    //El sitio está aquí, antes era 120
    this.drawText(TextManager.param(paramId), x, y, 150);
};

//Desaplasta un poco los números
Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
    this.resetTextColor();
    this.drawText(this._actor.param(paramId), x, y, 50, 'right');
};

//Desaplasta los números también
Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId);
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    this.drawText(newValue, x, y, 50, 'right');
};

//Cambia la flecha por una más chula y pone espacios
Window_EquipStatus.prototype.drawRightArrow = function(x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(' ➤ ', x, y, 34, 'center');
};

//Lo mueve todo un poco a la derecha
Window_EquipStatus.prototype.drawItem = function(x, y, paramId) {
    this.drawParamName(x + this.textPadding(), y, paramId);
    if (this._actor) {
        this.drawCurrentParam(x + 150, y, paramId);
    }
    this.drawRightArrow(x + 198, y);
    if (this._tempActor) {
        this.drawNewParam(x + 232, y, paramId);
    }
};

//Window_EquipItem. Este realmente sólo hay que cambiar la escena
Scene_Equip.prototype.createItemWindow = function() {
    var wx = 180;
    var wy = this._statusWindow.y + this._statusWindow.height + 10;
    var ww = 600;
    var wh = 254;
    this._itemWindow = new Window_EquipItem(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setStatusWindow(this._statusWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._slotWindow.setItemWindow(this._itemWindow);
    this.addWindow(this._itemWindow);
};

//PANTALLA DE ESTADO ---------------------------------------------------------------------------------------
//Window_Status
//Tamaño de cajita. Las X e Y están centradas
Window_Status.prototype.initialize = function() {
    var width = 800;
    var height = 680;
    var x = (Graphics.boxWidth - width) / 2
    var y = (Graphics.boxHeight - height) / 2
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
    this.refresh();
    this.activate();
};

//Ahora los blocks, que luego en Window_Status.prototype.refresh se pone dónde van de altura (por eso la Y).
//Las X parece que van fijas
//DrawActorClass lo cambio por mi función propia (drawActorClassBF)
//335 es la X principal de casi todas las cosas. La clase  va distinto
//La clase está la X a la mitad, y 360 es el width de la clase. No preguntes por qué funciona
//Quito nickname que no lo quiero pa na
Window_Status.prototype.drawBlock1 = function(y) {
    this.drawActorName(this._actor, 335, y);
    this.drawActorClassBF(this._actor, 764 /2, y, 360);
};

//Cambiamos drawBasicInfo porque está feo. aquí va el nivel, iconitos de estado, y barras
Window_Status.prototype.drawBasicInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    this.drawActorLevel(this._actor, x, y);
    this.drawActorIcons(this._actor, x + 283, y + lineHeight + 45);
    this.drawActorHp(this._actor, x, y + lineHeight + 25, 250);
    this.drawActorMp(this._actor, x, y + lineHeight * 2 + 25, 250);
};

//Block 2 ahora tiene exp (custom) y basic info
Window_Status.prototype.drawBlock2 = function(y) {
    this.drawActorExp(this._actor, 345 + 100, y, 301)
    this.drawBasicInfo(335, y);
};

//El original tenía un for, qué pesadilla. escrito a mano
//En vez de 335 como los demás, este va a usar x
Window_Status.prototype.drawParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    //ataque
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.param(2), x, y + lineHeight, 170);
    this.resetTextColor();
    this.drawText(this._actor.param(2), x + 170, y + lineHeight, 60, 'right')
    //defensa
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.param(3), x, y + lineHeight*2, 170);
    this.resetTextColor();
    this.drawText(this._actor.param(3), x + 170, y + lineHeight *2, 60, 'right')
    //agilidad
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.param(6), x, y + lineHeight*3, 170);
    this.resetTextColor();
    this.drawText(this._actor.param(6), x + 170, y + lineHeight*3, 60, 'right')
};

//Quito equipments que no me hacen falta
Window_Status.prototype.drawBlock3 = function(y) {
    //425 para que esté centraíto
    this.drawParameters(425, y);
};

//Cambiamos la x aquí, la y en el otro sitio
Window_Status.prototype.drawBlock4 = function(y) {
    this.drawProfile(335, y);
};

//La línea horizontal para que la X y el width sean distintos
Window_Status.prototype.drawHorzLine = function(y) {
	var lineY = y + this.lineHeight() / 2 - 1;
	this.contents.paintOpacity = 48;
    this.contents.fillRect(320, lineY, 442, 2, this.lineColor());
	this.contents.paintOpacity = 255;
};

//Sistema de bustos
//Diccionario para bustos
var bfBustos = {
    1: PluginManager.parameters('BF_menu')["busto1"], 
    2: PluginManager.parameters('BF_menu')["busto2"],
    3: PluginManager.parameters('BF_menu')["busto3"],
    4: PluginManager.parameters('BF_menu')["busto4"],
}

//Preloading
//Esto reserva todo lo que esté dentro de bfBustos
for (const nombreImagen of Object.values(bfBustos)) {
    ImageManager.reserveSystem(nombreImagen)
  }

//Diccionario para los cambios de bustos. Empieza vacío
var bfCambios = {}

//Ahora leemos la lista con JSON.parse para luego meterla en bfCambios. Te da un array de strings
var bfBustosExtra = JSON.parse(PluginManager.parameters('BF_menu')["bustosExtra"])
bfBustosExtra.forEach(function(bustoExtra){
    //Ahora cada string lo convertimos en un array porque si no no vale pa na
    var datosBusto = JSON.parse("["+bustoExtra+"]")
    var idActor = datosBusto[0]
    var valorVariable = datosBusto[1]
    var nombreImagen = datosBusto[2]
    //Reservamos la imagen pa que se pueda enseñar luego
    ImageManager.reserveSystem(nombreImagen)

    //Si no existe un diccionario para ese actor dentro de bfCambios, lo creamos. Y si existe, pues le hacemos cosas
    if(!(idActor in bfCambios)){
        //Creamos un diccionario vacío para el actor
        bfCambios[idActor] = {}
    }
    //Le ponemos las instrucciones al diccionario del actor dentro de bfCambios
    bfCambios[idActor][valorVariable] = nombreImagen
})

//Función nueva que he medio copiao de drawFace. Height y width lo coge de los parámetros
Window_Status.prototype.drawBust = function(filename, x, y) {
    var bitmap = ImageManager.loadSystem(filename, 0);
    //source width and height
    var sw = parseInt(PluginManager.parameters('BF_menu')["bustoWidth"]);
    var sh = parseInt(PluginManager.parameters('BF_menu')["bustoHeight"]);
    //source x and y
    var sx = 0;
    var sy = 0;
    //destination x and y
    var dx = x;
    var dy = y;
    this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);
};

//drawBust tiene que ir aquí porque si no no hay información de en qué actor estás. 
Window_Status.prototype.refresh = function() {
    this.contents.clear();
    var bfBustoX = parseInt(PluginManager.parameters('BF_menu')["bustoX"])
    var bfBustoY = parseInt(PluginManager.parameters('BF_menu')["bustoY"])
    if (this._actor) {
        var lineHeight = this.lineHeight();
        this.drawBlock1(5);
        this.drawHorzLine(lineHeight * 1+5);
        this.drawBlock2(lineHeight * 2);
        this.drawHorzLine(lineHeight * 6);
        this.drawBlock3(lineHeight * 6);
        this.drawHorzLine(lineHeight * 10);
        this.drawBlock4(lineHeight *11 +10);
        //A partir de aquí son cosas de los bustos
        var idActor = this._actor._actorId
        //Aquí se guarda el nombre de la variable del busto que vamos a usar
        var variableBustoNom = "bfBusto"+idActor
        //Esto busca el índice (numerito) que tiene el nombre que hemos puesto antes
        //Si no lo encuentra, da -1
        //Busca si hay un nombre de una variable que sea igual que variableBustoNom (o sea, bfBustonumerito)
        var variableBustoIndice = $dataSystem.variables.findIndex((nombreVariable)=> nombreVariable == variableBustoNom)
        //Si existe en la lista de nombres de variables algo que se llame bfBustonumerito, o sea, es mayor o igual que 0 su índice.
        if(variableBustoIndice >= 0){
            var variableBustoValor = $gameVariables.value(variableBustoIndice)
            //Ahora mira si el actor tiene un diccionario creado y luego lo metemos en diccionarioActor
            if(idActor in bfCambios){
                var diccionarioActor = bfCambios[idActor]
                //Y luego si en ese diccionario existe el valor de variableBustoValor, dibuja el busto
                if(variableBustoValor in diccionarioActor){
                    this.drawBust(diccionarioActor[variableBustoValor], bfBustoX, bfBustoY)
                }
                //Si la variable no está en el diccionario del actor, se pone el default
                else{
                    this.drawBust(bfBustos[idActor], bfBustoX, bfBustoY)
                }
            }
            //Si no tiene bustos extra, usa el default
            else{
                this.drawBust(bfBustos[idActor], bfBustoX, bfBustoY)
            }

        }
        //El else es para el default
        else{
            this.drawBust(bfBustos[idActor], bfBustoX, bfBustoY)
        }
    }
};

//Barra exp. Me tengo que inventar el expRate para que me dé número entre 0 y 1 pa llenar la barra
//Exp rate SÓLO es para rellenar la barra, no altera los numeritos
Game_BattlerBase.prototype.expRate = function() {
    return (this.currentExp() - this.currentLevelExp())/ this.nextLevelExp();
};

//Me invento un drawCurrentAndMax nuevo para ponerlo más ancho en textwidth
Window_Base.prototype.drawCurrentAndMaxExp = function(current, max, x, y,
    width, color1, color2) {
var labelWidth = this.textWidth('HP');
//6 cifras en vez de 4
var valueWidth = this.textWidth('000000');
var slashWidth = this.textWidth('/');
var x1 = x + width - valueWidth;
var x2 = x1 - slashWidth;
var x3 = x2 - valueWidth;
if (x3 >= x + labelWidth) {
this.changeTextColor(color1);
this.drawText(current, x3, y, valueWidth, 'right');
this.changeTextColor(color2);
this.drawText('/', x2, y, slashWidth, 'right');
this.drawText(max, x1, y, valueWidth, 'right');
} else {
this.changeTextColor(color1);
this.drawText(current, x1, y, valueWidth, 'right');
}
};

//Aquí dibujo la barrita con ifs por si está al máximo nivel
Window_Base.prototype.drawActorExp = function(actor, x, y, width){
    width = width || 186;
    //colores de TP que así sirven pa algo
    var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
    if(actor.isMaxLevel()){
        this.drawGauge(x, y, width, 1, color1, color2);
        this.drawCurrentAndMaxExp(actor.currentExp(), actor.currentExp(), x, y, width, this.mpColor(actor), this.normalColor());
        this.changeTextColor(this.systemColor());
        this.drawText("MAX", x, y, 54);
    }
    else{
        this.drawGauge(x, y, width, actor.expRate(), color1, color2);
        this.drawCurrentAndMaxExp(actor.currentExp(), actor.nextLevelExp(), x, y, width, this.mpColor(actor), this.normalColor());
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.expA, x, y, 54);
    }
}

//PANTALLA DE GUARDAR Y CARGAR --------------------------------------------------------------------------------------
//La nueva Window_Help que me he inventado (saveload). Tiene que ir con muchas cosas.
function Window_HelpSL() {
    this.initialize.apply(this, arguments);
}
Window_HelpSL.prototype = Object.create(Window_Base.prototype);
Window_HelpSL.prototype.constructor = Window_Help;

Window_HelpSL.prototype.initialize = function(numLines) {
    //cambiamos el width por 800
    var width = 800;
    var height = this.fittingHeight(numLines || 2);
    //Cambiamos la X para poder centrarlo y la Y arriba
    var x = (Graphics.boxWidth - width) / 2
    var y = 20
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._text = '';
};

Window_HelpSL.prototype.setText = function(text) {
    if (this._text !== text) {
        this._text = text;
        this.refresh();
    }
};

Window_HelpSL.prototype.clear = function() {
    this.setText('');
};

Window_HelpSL.prototype.setItem = function(item) {
    this.setText(item ? item.description : '');
};

Window_HelpSL.prototype.refresh = function() {
    this.contents.clear();
    this.drawTextEx(this._text, this.textPadding(), 0);
};

//La escena para elegir el nuevo WindowHelp y cambiar X e Y
Scene_File.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_HelpSL(1);
    this._helpWindow.setText(this.helpWindowText());
    this.addWindow(this._helpWindow);
};

//Cambiamos x, y, width, height
Scene_File.prototype.createListWindow = function() {
    var x = 80;
    var y = this._helpWindow.height + this._helpWindow.y + 10;
    var width = 800;
    var height = Graphics.boxHeight - (this._helpWindow.height + this._helpWindow.y + 10 +20);
    this._listWindow = new Window_SavefileList(x, y, width, height);
    this._listWindow.setHandler('ok',     this.onSavefileOk.bind(this));
    this._listWindow.setHandler('cancel', this.popScene.bind(this));
    this._listWindow.select(this.firstSavefileIndex());
    this._listWindow.setTopRow(this.firstSavefileIndex() - 2);
    this._listWindow.setMode(this.mode());
    this._listWindow.refresh();
    this.addWindow(this._listWindow);
};

//Cuentapixels
Window_SavefileList.prototype.itemHeight = function() {
    return 185
};

//Cambio el color de cuando pone "Archivo"
Window_SavefileList.prototype.drawFileId = function(id, x, y) {
    this.changeTextColor(this.systemColor())
    this.drawText(TextManager.file + ' ' + id, x, y, 180);
    this.resetTextColor();
};

//3 en total a la vez
Window_SavefileList.prototype.maxVisibleItems = function() {
    return 3;
};

Window_SavefileList.prototype.drawGameTitle = function(info, x, y, width) {
   //Vacío esta función para que no ponga el título del juego
};

//Añado variable archivo para luego usarlo
Window_SavefileList.prototype.drawItem = function(index) {
    var id = index + 1;
    var valid = DataManager.isThisGameFile(id);
    var info = DataManager.loadSavefileInfo(id);

    var archivo = StorageManager.load(id);

    var rect = this.itemRectForText(index);
    this.resetTextColor();
    if (this._mode === 'load') {
        this.changePaintOpacity(valid);
    }
    this.drawFileId(id, rect.x, rect.y);
    if (info) {
        this.changePaintOpacity(valid);
        this.drawContents(info, rect, valid, archivo);
        this.changePaintOpacity(true);
    }
};

//drawItem a su vez tiene 2 cosas más
Window_SavefileList.prototype.drawContents = function(info, rect, valid, archivo) {
    var bottom = rect.y + rect.height;
    if (rect.width >= 420) {
        //Quito drawGameTitle
        if (valid) {
            this.drawPartyCharacters(info, rect.x + 0, bottom - 4);
        }
    }
    var lineHeight = this.lineHeight();
    var y2 = bottom - lineHeight;
    //El y del playtime es bottom - lineHeight, así que los demás pueden ser lo mismo pero x 2, x3...
    if (y2 >= lineHeight) {
        this.drawPlaytime(info, rect.x, y2, rect.width);
    }
    if (archivo.length > 0) {
        //Aquí va el icono y el texto de dinero
        var archivoJson = JsonEx.parse(archivo)
        this.drawIcon(parseInt(PluginManager.parameters('BF_menu')["dineroIcon"]), rect.width -24, bottom - lineHeight *2)
        this.drawText(archivoJson.party._gold, rect.x -35, bottom - lineHeight *2, rect.width, 'right')

        //Primera variable (más abajo)
        //Si has seleccionado la variable en parámetros Y esta variable tiene un valor mayor a 0, lo pinta
        var var1id = parseInt(PluginManager.parameters('BF_menu')["slvVar1"])
        var var1icon = parseInt(PluginManager.parameters('BF_menu')["slvIcon1"])
        if(parseInt(PluginManager.parameters('BF_menu')["slvVar1"]) > 0 &&
        archivoJson.variables._data[var1id] > 0){
            this.drawIcon(var1icon, rect.width -24, bottom - lineHeight *3)
            this.drawText(archivoJson.variables._data[var1id], rect.x -35, bottom - lineHeight *3, rect.width, 'right')
        }
        
        //Segunda variable (más arriba). Funciona igual que la otra
        var var2id = parseInt(PluginManager.parameters('BF_menu')["slvVar2"])
        var var2icon = parseInt(PluginManager.parameters('BF_menu')["slvIcon2"])
        if(parseInt(PluginManager.parameters('BF_menu')["slvVar2"]) > 0 &&
        archivoJson.variables._data[var2id] > 0){
            this.drawIcon(var2icon, rect.width -24, bottom - lineHeight *4)
            this.drawText(archivoJson.variables._data[var2id], rect.x -35, bottom - lineHeight *4, rect.width, 'right')
        }
    }
};

Window_SavefileList.prototype.drawPartyCharacters = function(info, x, y) {
    if (info.characters) {
        //Aquí hay que cambiar los info.characters por info.faces
        //Y luego drawFace en vez de drawCharacter (no drawActorFace)
        for (var i = 0; i < info.faces.length; i++) {
            var data = info.faces[i];
            this.drawFace(data[0], data[1], x + i * Window_Base._faceWidth +(3*i), y - (this.itemHeight()-40));
        }
    }
};


//ARREGLOS EN BATALLA - HABILIDADES, OBJETOS, SELECCIONAR ENEMIGO
//En la escena cambiamos Help Window para que use la SL. Esto arregla ya bastante
Scene_Battle.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_HelpSL();
    this._helpWindow.visible = false;
    this.addWindow(this._helpWindow);
};

//Ahora escena de habilidades
Scene_Battle.prototype.createSkillWindow = function() {
    //Añado +10 a la altura pa que tenga margencito
    var wy = this._helpWindow.y + this._helpWindow.height + 10;
    //De height le quitamos un poco para que no quede tan mal con el muñeco levantao. 32 es la diferencia, 10 es margen
    //Esto depende del plugin de SRD así que si lo cambio tengo que cambiar esto también
    var wh = this._statusWindow.y - wy - 32 - 10;
    //cambiamos width a 600, como el anterior, y de x centramos
    this._skillWindow = new Window_BattleSkill((Graphics.boxWidth - 600) /2, wy, 600, wh);
    this._skillWindow.setHelpWindow(this._helpWindow);
    this._skillWindow.setHandler('ok',     this.onSkillOk.bind(this));
    this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
    this.addWindow(this._skillWindow);
};

//Escena de objetos hacemos lo mismo
Scene_Battle.prototype.createItemWindow = function() {
    var wy = this._helpWindow.y + this._helpWindow.height + 10;
    var wh = this._statusWindow.y - wy - 32 - 10;
    this._itemWindow = new Window_BattleItem((Graphics.boxWidth - 600) /2, wy, 600, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
};

//Ocultar la ventana de elegir enemigo. ancho de 0 pa que no se vea nada
Window_BattleEnemy.prototype.windowWidth = function() {
    return 0;
};

//Alto de 300 para que se salga de la pantalla y no se vea la flechita de scroll
Window_BattleEnemy.prototype.windowHeight = function() {
    return 300;
};

//10 columnas (nunca voy a usar más de 10 enemigos) 
Window_BattleEnemy.prototype.maxCols = function() {
    return 10;
};

//1 fila ya que estamos
Window_BattleEnemy.prototype.numVisibleRows = function() {
    return 1;
};

//PANTALLA DE OPCIONES ----------------------------------------------------------------
Window_Options.prototype.windowWidth = function() {
    return 550;
};

//Esto es lo que miden las opciones ON/OFF y porcentajes. La otra mitad depende de esto
Window_Options.prototype.statusWidth = function() {
    return 200;
};

//Pa que puedas cambiar el volumen de 10 en 10, default es 20
Window_Options.prototype.volumeOffset = function() {
    return 10;
};

//Cambiando los rectángulos sólo en Window_Options para ver si los hago un poco más altos
Window_Options.prototype.itemRect = function(index) {
    var rect = new Rectangle();
    var maxCols = this.maxCols();
    rect.width = this.itemWidth();
    //Aquí + lo que sea. 4 queda bien
    rect.height = this.itemHeight() +4;
    rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
    rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
    return rect;
};

//Cambiando itemRectForText sólo para Window_Options. Copiado, es sólo para que use this.itemRect y sea el de Options y no Base
Window_Options.prototype.itemRectForText = function(index) {
    var rect = this.itemRect(index);
    rect.x += this.textPadding();
    rect.width -= this.textPadding() * 2;
    return rect;
};

//Pero al cambiar esto tenemos que cambiar el height. Esto suma +4 a cada row! Que es lo que le hemos puesto a cada rect.
Window_Options.prototype.windowHeight = function() {
    return this.fittingHeight(Math.min(this.numVisibleRows(), 12))+(this.numVisibleRows())*4;
};

//Funciones mías para los colores de la barra de volumen
Window_Base.prototype.volGaugeColor1 = function() {
    return this.textColor(parseInt(PluginManager.parameters('BF_menu')["volcol1"]));   
};

Window_Base.prototype.volGaugeColor2 = function() {
    return this.textColor(parseInt(PluginManager.parameters('BF_menu')["volcol2"]));
};

Window_Options.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var statusWidth = this.statusWidth();
    var titleWidth = rect.width - statusWidth;
    this.resetTextColor();
    this.changePaintOpacity(this.isCommandEnabled(index));
    this.drawText(this.commandName(index), rect.x, rect.y, titleWidth, 'left');

    //Sacamos símbolo para poder mirar si es volumesymbol y si sí, dibujamos gauge. Value sirve para luego más cosas
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol)

    if(this.isVolumeSymbol(symbol)){
        var color1 = this.volGaugeColor1();
        var color2 = this.volGaugeColor2();
        this.drawGauge (titleWidth + 37, rect.y, 170, value / 100, color1, color2)
    }

    //Esto mira si es volumen O idioma del plugin CustomTranslationEngine, pa escribir. Si es ON/OFF, no escribe texto
    if(this.isVolumeSymbol(symbol) || symbol == "language"){
        this.drawText(this.statusText(index), titleWidth, rect.y, statusWidth, 'right');
    }
    else{
        //Comprobación de que los parámetros tienen iconos activados o no
        if(PluginManager.parameters('BF_menu')["onoffIcons"] == "true"){
            //Asignación de numeritos de iconos
            var iconoON = parseInt(PluginManager.parameters('BF_menu')["onIcon"]);
            var iconoONL = parseInt(PluginManager.parameters('BF_menu')["onIconL"]);
            var iconoOFF = parseInt(PluginManager.parameters('BF_menu')["offIcon"]);
            var iconoOFFL = parseInt(PluginManager.parameters('BF_menu')["offIconL"]);

            //Pintar los iconos
            switch(value){
                case true:
                    this.drawIcon(iconoON, rect.width - 32, rect.y +4);
                    this.drawIcon(iconoONL, rect.width - 64, rect.y +4);
                    break;
                case false:
                    this.drawIcon(iconoOFF, rect.width - 32, rect.y +4);
                    this.drawIcon(iconoOFFL, rect.width - 64, rect.y +4);
                    break;
            }
        }
        else{
            //Esto escribe texto ON OFF si has elegido texto en parámetros
            this.drawText(this.statusText(index), titleWidth, rect.y, statusWidth, 'right')
        }
    }

};


//MENÚ SALIR -------------------------------------------------------------------------------
Scene_GameEnd.prototype.createBackground = function() {
    Scene_MenuBase.prototype.createBackground.call(this);
    //Quitar this.setBackgroundOpacity(128) hace que no se ponga más negro el fondo
};

Window_GameEnd.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this, 0, 0);
    this.updatePlacement();
    //Quitar this.openness = 0 desactiva la animación de abrirse
    this.open();
};

Window_GameEnd.prototype.windowWidth = function() {
    //Cambiamos width. No mucho
    return 350;
};

//Cambiar el height sin que afecte a los demás window commands
Window_GameEnd.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows()) + (this.numVisibleRows())*4;
};

//Cambiando los rectángulos sólo en Window_GameEnd para ver si los hago un poco más altos
Window_GameEnd.prototype.itemRect = function(index) {
    var rect = new Rectangle();
    var maxCols = this.maxCols();
    rect.width = this.itemWidth();
    //Aquí + lo que sea. 4 queda bien
    rect.height = this.itemHeight() +4;
    rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
    rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
    return rect;
};

//Cambiando itemRectForText sólo para Window_GameEnd. Copiado, es sólo para que use this.itemRect y sea el de Options y no Base
Window_GameEnd.prototype.itemRectForText = function(index) {
    var rect = this.itemRect(index);
    rect.x += this.textPadding();
    rect.width -= this.textPadding() * 2;
    return rect;
};

//Esta es la alineación del texto de Window_Command. 
//Lo cambia para todos los comandos en todos los menús y creo que queda bien?
Window_Command.prototype.itemTextAlign = function() {
    return 'center';
};

//PANTALLA DE TÍTULO -------------------------------------------------------------------------------------------------
//Window_TitleCommand

//opacity 0 pa que no se vea la ventana pero sí las letras
Window_TitleCommand.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this, 0, 0);
    this.updatePlacement();
    this.openness = 0;
    this.selectLast();
    this.opacity = 0;
};

//X es 0, y es el ancho de ventana - lo que mide la cosa
Window_TitleCommand.prototype.updatePlacement = function() {
    this.x = 0;
    this.y = Graphics.boxHeight - this.height;
};

//Ancho es el ancho de la ventana. El alto se hace solo
Window_TitleCommand.prototype.windowWidth = function() {
    return Graphics.boxWidth
};

Window_TitleCommand.prototype.maxCols = function() {
    return 3;
};

//Para que no parpadee, ya no depende de cursorOpacity. btw es _updateCursor con barra baja
//Le borro lo de arriba porque pa qué
Window_TitleCommand.prototype._updateCursor = function() {
    
    //Esto hace que deje de parpardear
    
    this._windowCursorSprite.alpha = 1;
    this._windowCursorSprite.visible = this.isOpen();
};

Window_TitleCommand.prototype._refreshCursor = function() {
    var pad = this._padding;
    var x = this._cursorRect.x + pad - this.origin.x;
    var y = this._cursorRect.y + pad - this.origin.y;
    var w = this._cursorRect.width;
    var h = this._cursorRect.height;
    var m = 4;
    var x2 = Math.max(x, pad);
    //No tocamos mucho y2 pero le restamos un poco
    var y2 = Math.max(y, pad) - 8;
    var ox = x - x2;
    var oy = y - y2;
    var w2 = Math.min(w, this._width - pad - x2);
    //Aquí cambiamos el h2 y le ponemos 4 en vez de eso
    var h2 = 4
    var bitmap = new Bitmap(w2, h2);

    this._windowCursorSprite.bitmap = bitmap;
    this._windowCursorSprite.setFrame(0, 0, w2, h2);
    this._windowCursorSprite.move(x2, y2);
    this._windowCursorSprite.bitmap.fillAll('white');

    //Quitar toda la parte de windowskin hace que no salga, sólo lo blanco
};


