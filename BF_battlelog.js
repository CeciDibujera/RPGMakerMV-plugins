//=============================================================================
//BF_battlelog.js
//=============================================================================
/*:
@author FriKitty / CeciDibujera
@plugindesc Tweaks the battle log v1.0
@filename BF_battlelog.js

@param ventana
@text Use window
@type boolean
@default false
@on Use 
@off Don't use (default)
@desc Use a window like the other menus for the battle log.

@param anchoVen
@parent ventana
@text Window width
@type number
@min 0
@default 0
@desc Window width, in pixels. Write 0 to use the default value (game window width).

@param altoVen
@parent ventana
@text Window height
@type number
@min 1
@default 10
@desc Window height, in text lines. Default is 10, because it assumes you won't use the window.

@param xVen
@parent ventana
@text Window X position
@type number
@default 0
@desc Window X position, in pixels. Default: 0.

@param yVen
@parent ventana
@text Window Y position
@type number
@default 0
@desc Window Y position, in pixels. Default: 0.

------------------------------------------------------------------------
@param rectangulo
@text Use rectangle
@type boolean
@default true
@on Use (default)
@off Don't use
@desc Use the rectangle for the battle log. 

@param colorRec
@parent rectangulo
@text Rectangle color
@type text
@default #000000
@desc Hexadecimal color code. Default #000000 (black). If you enter an invalid code, black will be used.

@param opaRec
@parent rectangulo
@text Rectangle opacity
@type number
@default 64
@min 1
@max 255
@desc Rectangle opacity. Default: 64. Maximum: 255 (opaque).

------------------------------------------------------------------------
@param logAuto
@text Log advances automatically
@type boolean
@default true
@on Automatic (default)
@off Input
@desc Log advances automatically (default). Input waits for OK button to be pressed.

@param logVel
@text Log speed
@type number
@default 16
@min 1
@desc Speed of automatic log. Default: 16. The bigger the number, the slower it will be.

------------------------------------------------------------------------
@help BF_battlelog v.1.0

Plugin to change the battle log (the text that appears in battle narrating
the actions that occur). Mostly to use a window like all the other menus
and messages, and for the log to not advance automatically.

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
Even if you use the black rectangle instead of the window, the window
still exists, just completely transparent.
Thus, if you want to use the black rectangle with a different width
and position, you must change those values in the window section.

I recommend setting the window as 4 lines long. I think all RPG Maker
basic messages in battle are 4 lines long max before they delete
and go to the next ones.

=======================================================================
Contact me on cecilia.ocon[at]gmail.com or on Twitter/Discord (frikitty)
if you need something.

*/

//=======================================================================

/*:es
@author FriKitty / CeciDibujera
@plugindesc Modifica el log de batalla v1.0
@filename BF_battlelog.js

@param ventana
@text Usar ventana
@type boolean
@default false
@on Usar 
@off No usar (por defecto)
@desc Usa una ventana como el resto de menús para el battle log.

@param anchoVen
@parent ventana
@text Ancho de ventana
@type number
@min 0
@default 0
@desc Ancho de la ventana, en píxeles. Escribe 0 para usar el valor por defecto (ancho de ventana de juego).

@param altoVen
@parent ventana
@text Alto de ventana
@type number
@min 1
@default 10
@desc Alto de ventana, en líneas de texto. Por defecto es 10, porque asume que no se usará ventana.

@param xVen
@parent ventana
@text Posición X de ventana
@type number
@default 0
@desc Posición X de ventana, en píxeles. Por defecto: 0

@param yVen
@parent ventana
@text Posición Y de ventana
@type number
@default 0
@desc Posición Y de ventana, en píxeles. Por defecto: 0

------------------------------------------------------------------------
@param rectangulo
@text Usar rectángulo
@type boolean
@default true
@on Usar (por defecto)
@off No usar
@desc Usa el rectángulo para el battle log.

@param colorRec
@parent rectangulo
@text Color del rectángulo
@type text
@default #000000
@desc Código de color hexadecimal. Por defecto: #000000 (negro). Si introduces un código que no vale se usará negro.

@param opaRec
@parent rectangulo
@text Opacidad del rectángulo
@type number
@default 64
@min 1
@max 255
@desc Opacidad del rectángulo. Por defecto: 64. Máximo: 255 (opaco).

------------------------------------------------------------------------
@param logAuto
@text Avance automático del log
@type boolean
@default true
@on Automático (por defecto)
@off Input
@desc Avance automático del log (por defecto). Input espera a que se pulse el botón OK.

@param logVel
@text Velocidad del log
@type number
@default 16
@min 1
@desc Velocidad del log automático. 16 por defecto. A mayor número, más lento será.

------------------------------------------------------------------------
@help BF_battlelog v.1.0

Plugin para cambiar el battle log (el texto que aparece en la batalla narrando
las acciones que pasan). Mayormente para utilizar una ventana como los demás
menús y mensajes, y para que el log no avance automáticamente.

Puedes usar este plugin para el  proyecto que quieras, comercial o no.

Debes acreditarme como FriKitty Y CeciDibujera, O sólo CeciDibujera.
Debes acreditar "BF Project".
También puedes editar este plugin tanto como quieras, mientras que
añadas en esta descripción (y en inglés) que lo has hecho.
También puedes mirar mi código y ver cómo hice ciertas cosas para
luego hacer tu propio plugin que hace las cosas diferente. En ese
caso, no necesitas acreditarme. ¡Así aprende la gente!

=======================================================================
Incluso si usas el rectángulo negro en vez de la ventana, la ventana
sigue existiendo, sólo que completamente transparente.
Por lo tanto, si quieres usar el rectángulo negro pero con otro ancho
y posición, debes cambiar estos valores en el apartado de ventana.

Recomiendo poner la ventana como mínimo 4 líneas de alto. Creo que
todos los mensajes de RPG Maker base usan 4 líneas máximo antes
de borrar los anteriores.

=======================================================================
VALORES PARA MI PROYECTO
Para recordármelo a mí misma, apunto los valores para los parámetros
que uso en mi proyecto. Ignóralos y usa los tuyos propios o los que
vienen por defecto en RPG Maker.

Usar ventana: Sí
Ancho de ventana: 900
Alto de ventana (en líneas): 3 o 4 (depende de las skills que haga)
Posición X de ventana: 30
Posición Y de ventana: 0

Usar rectángulo negro: No
-Color del rectángulo: []
-Opacidad del rectángulo: [] 

Log avanza automáticamente: No
Velocidad de log automático: []

=======================================================================
Contáctame mandando un email a cecilia.ocon[arroba]gmail.com 
o en Twitter/Discord (frikitty) si necesitas algo.

*/


//Esto cambia el ancho y pone opacidad a la ventana que por defecto es 0. Uso X a 30 por ser menos ancha que el total
Window_BattleLog.prototype.initialize = function() {
    //Primero pongo el ancho por defecto, y si luego anchoVen es mayor que 0, lo cambia a lo que hayas puesto
    var anchoVen = parseInt(PluginManager.parameters('BF_battlelog')["anchoVen"]);
    var width = this.windowWidth();
    if (anchoVen > 0){
        width = anchoVen;
    }
    var height = this.windowHeight();
    var x = parseInt(PluginManager.parameters('BF_battlelog')["xVen"]);
    var y = parseInt(PluginManager.parameters('BF_battlelog')["yVen"]);
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    //opacidad 255 pa que se vea, openness 0 pa que se abra luego
    if(PluginManager.parameters('BF_battlelog')["ventana"] == "true"){
        this.opacity = 255;
    }
    else{this.opacity = 0;}
    this.openness = 0;
    this._lines = [];
    this._methods = [];
    this._waitCount = 0;
    this._waitMode = '';
    this._baseLineStack = [];
    this._spriteset = null;
    this.createBackBitmap();
    this.createBackSprite();
    this.refresh();
};

//Tengo que añadir updateOpen y updateClose o si no no van las cosas lol lmao
Window_BattleLog.prototype.update = function() {
    if (!this.updateWait()) {
        this.callNextMethod();
    }
    this.updateOpen();
    this.updateClose();
};

//Cuando empieza la acción, añado open
Window_BattleLog.prototype.startAction = function(subject, action, targets) {
    var item = action.item();
    this.push('performActionStart', subject, action);
    this.push('waitForMovement');
    this.push('performAction', subject, action);
    this.push('showAnimation', subject, targets.clone(), item.animationId);
    this.displayAction(subject, item);
    this.open();
};

//Cuando vas a elegir comandos, cerramos log window
Scene_Battle.prototype.startActorCommandSelection = function() {
    this._statusWindow.select(BattleManager.actor().index());
    this._partyCommandWindow.close();
    this._actorCommandWindow.setup(BattleManager.actor());
    this._logWindow.close();
};

//Mientras esté busy con el game message (mensaje normal), cierra log Window igual que lo demás
Scene_Battle.prototype.updateStatusWindow = function() {
    if ($gameMessage.isBusy()) {
        this._statusWindow.close();
        this._partyCommandWindow.close();
        this._actorCommandWindow.close();
        this._logWindow.close();
    } else if (this.isActive() && !this._messageWindow.isClosing()) {
        this._statusWindow.open();
    }
};

//Máximo 4 líneas (si se escriben más sale cortao, creo).
Window_BattleLog.prototype.maxLines = function() {
    return parseInt(PluginManager.parameters('BF_battlelog')["altoVen"]);
};

//Opacidad del rectángulo
Window_BattleLog.prototype.backPaintOpacity = function() {
    if(PluginManager.parameters('BF_battlelog')["rectangulo"] == "true"){
        return parseInt(PluginManager.parameters('BF_battlelog')["opaRec"]);
    }
    else{
        //Se sigue creando el rectángulo pero ahora es transparente lmao
        return 0;
    }
};

//Color del rectángulo
Window_BattleLog.prototype.backColor = function() {
    return PluginManager.parameters('BF_battlelog')["colorRec"];
};

//Esto para que no haya que darle más de una vez al OK cuando cambia de mensajito, quitamos el wait si el logAuto está false
Window_BattleLog.prototype.waitForNewLine = function() {
    var baseLine = 0;
    if (this._baseLineStack.length > 0) {
        baseLine = this._baseLineStack[this._baseLineStack.length - 1];
    }
    if (this._lines.length > baseLine && PluginManager.parameters('BF_battlelog')["logAuto"] == "true") {
        this.wait();
    }
};

//El updatewaitcount cuando llega a 0 pasa la siguiente cosa. Por lo tanto restamos un montón si estamos pulsando, y 0 si no
Window_BattleLog.prototype.updateWaitCount = function() {
    if (this._waitCount > 0) {
        
        if(PluginManager.parameters('BF_battlelog')["logAuto"] == "true"){
            //Si es verdad, da el primero, si es falso da el segundo. Log auto
            this._waitCount -= this.isFastForward() ? 3 : 1;
        }
        else{
            //Esto es para cuando el log es manual
            this._waitCount -= this.isOKtriggered() ? 5000 : 0
            this._waitCount -= this.isFastForward() ? 3 : 0
        }
        
        if (this._waitCount < 0) {
            this._waitCount = 0;
        }
        return true;
    }
    return false;
};

//Función nueva de sólo darle al ok sin pulsar
Window_BattleLog.prototype.isOKtriggered = function() {
    return (Input.isTriggered('ok'));
};

//Para que el fast forward solo sea pressed ok
Window_BattleLog.prototype.isFastForward = function() {
    return Input.isPressed('ok');
};

//Velocidad si el log va auto
Window_BattleLog.prototype.messageSpeed = function() {
    return parseInt(PluginManager.parameters('BF_battlelog')["logVel"]);
};