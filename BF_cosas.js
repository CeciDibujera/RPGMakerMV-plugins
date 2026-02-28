//=============================================================================
//BF_cosas.js
//=============================================================================

/*:
@author FriKitty / CeciDibujera
@plugindesc Small things for BF project. But you can use them if you want :)
@filename BF_cosas.js

@param spriteOffset
@text Pixels under sprite
@type number
@min -47
@max 47
@default 6
@desc How many pixels your sprites are shifted upwards. Default: 6

@param enemyName
@text Automatic names for enemies
@type boolean
@on Enable (default)
@off Disable
@default true
@desc Enable or disable that enemies get automatically called "Enemy A" "Enemy B" when there's more than one of them

@param battlerMove
@text Battler movements
@type boolean
@on Enable (default)
@off Disable
@default true
@desc Enable or disable battler sprites moving around when they do things in battle

@param emerge
@text Battle emerge message
@type boolean
@default true
@on Show (default)
@off Hide
@desc Show or hide the "enemy emerged" message at the start of battles

@param battlefps
@text Battle animation FPS
@type number
@min 1
@max 60
@default 15
@desc Battle animation speed, in frames per second. Default: 15

@param winOpa
@text Window opacity
@type number
@default 192
@min 0
@max 255
@desc Set window opacity (used in textbox, menu...). Default: 192. Recommended: 255

@param mouseCon
@text Mouse controls
@type boolean
@default true
@on Enable (default)
@off Disable
@desc Enable or disable mouse controls in the game

@param mouseCursor
@text Mouse cursor
@type boolean
@default true
@on Show (default)
@off Hide
@desc Show or hide the mouse cursor when it's on your game window

@param blur
@text Menu blur
@type boolean
@default true
@on Blur (default)
@off Don't blur 
@desc Blur or don't blur the map when you open the menu

@param tint
@text Tint under menu
@type boolean
@default false
@on Activate
@off Deactivate (default)
@desc Tints the screen under the menu. Works like event command Tint screen

@param red
@text Red tint
@parent tint
@type number
@min -255
@max 255
@default 0
@desc Set red tint between -255 and 255. Default: 0

@param green
@text Green tint
@parent tint
@type number
@min -255
@max 255
@default 0
@desc Set green tint between -255 and 255. Default: 0

@param blue
@text Blue tint
@parent tint
@type number
@min -255
@max 255
@default 0
@desc Set blue tint between -255 and 255. Default: 0

@param fondoNegro
@text Black background under menu
@type boolean
@default false
@on Use
@off Don't use
@desc Use a black image as a background under menus. By default: Don't use

@param fondoNegroOpa
@parent fondoNegro
@text Background transparency
@type number
@min 0
@max 255
@default 255
@desc Transparency of black background. 0 = opaque, 255 = transparent

@param blink
@text Cursor blink
@type boolean
@default true
@on Activate
@off Deactivate
@desc Cursor blink in menus, choices... By default: activate

-------------------------------------------------------------------
@help BF_cosas v.1.0

This is a little plugin I made to change some stuff for my game(s). 
You can use it for any project you want, commercial or not.
You can edit it as much as you like, just write somewhere that you did.
(Also in the Spanish help, even if written in English).
You must credit me as FriKitty AND CeciDibujera, OR just CeciDibujera.
You must credit "BF Project".

Contact me on cecilia.ocon[at]gmail.com or on Twitter/Discord (frikitty)
if you need something.

=======================================================================
"Battler movements" is disabled in my project because I use transparent
battlers to simulate a front view that still keeps animations.
I place them exactly where I want to using a different plugin. But I
don't want them moving around on their own.
I only changed those movements I need, so this may not disable all
movements and it may not be useful to you.

"Battle animation FPS" won't do anything to the preview inside the
database, it will only work in the game itself. You'll have to
playtest to see the change. Also, it rounds up some numbers. If 60
isn't divisible by your fps number, the result will be slightly faster.

For "Window opacity" I recommend setting it to 255 because that means
100% opacity. This way, you can easily control the opacity you want
directly in your Window.png.

"Mouse controls" only disables those, but it leaves touch controls
(for tablets and phones) intact. Because I only export to PC and it
doesn't affect me, I prefer leaving them alone. Find a different 
plugin if you need that.

"Tint under menu" changes the values of red, green and blue under
the menus. I used this in the beginning because after removing the
blur, it looked weird that the background looked exactly the same
as before opening the menu.

However, I prefer the "Black background under menu" option. You
can change its transparency from 0 to 255. The two effects can
be used at once.

*/

/*:es
@author FriKitty / CeciDibujera
@plugindesc Cosillas para el proyecto BF. Pero las puedes usar si quieres :)
@filename BF_cosas.js

@param spriteOffset
@text Píxeles bajo el sprite
@type number
@min -47
@max 47
@default 6
@desc Cuántos píxeles suben tus sprites con respecto al tile. Por defecto:  6

@param enemyName
@text Nombres automáticos de enemigos
@type boolean
@on Activar (por defecto)
@off Desactivar
@default true
@desc Activa o desactiva que los enemigos tengan nombres automáticos "Enemigo A" "Enemigo B" cuando hay más de uno

@param battlerMove
@text Movimiento de battlers
@type boolean
@on Activar (por defecto)
@off Desactivar
@default true
@desc Activa o desactiva que los sprites battler se muevan en batalla cuando hacen cosas

@param emerge
@text Mensaje de aparición
@type boolean
@default true
@on Mostrar (por defecto)
@off Ocultar
@desc Muestra u oculta el mensaje de "enemigo ha aparecido" al principio de la batalla

@param battlefps
@text FPS de animación de batalla
@type number
@min 1
@max 60
@default 15
@desc Velocidad de las animaciones de batalla, en frames por segundo. Por defecto: 15

@param winOpa
@text Opacidad de ventana
@type number
@default 192
@min 0
@max 255
@desc Establece la opacidad de la ventana (texto, menús...). Por defecto: 192. Recomendado: 255

@param mouseCon
@text Control del ratón
@type boolean
@default true
@on Activar (por defecto)
@off Desactivar
@desc Activa o desactiva que se pueda controlar el juego con el ratón

@param mouseCursor
@text Cursor del ratón
@type boolean
@default true
@on Mostrar (por defecto)
@off Ocultar
@desc Muestra u oculta el cursor del ratón cuando está encima de la ventana del juego

@param blur
@text Difuminado del menú
@type boolean
@default true
@on Difuminar (por defecto)
@off No difuminar
@desc Difumina o no el mapa cuando abres el menú

@param tint
@text Teñir bajo el menú
@type boolean
@default false
@on Activar
@off Desactivar (por defecto)
@desc Tiñe la pantalla bajo el menú. Funciona como el comando Teñir pantalla

@param red
@text Tinte rojo
@parent tint
@type number
@min -255
@max 255
@default 0
@desc Ajusta el tinte rojo entre -255 y 255. Por defecto: 0

@param green
@text Tinte verde
@parent tint
@type number
@min -255
@max 255
@default 0
@desc Ajusta el tinte verde entre -255 y 255. Por defecto: 0

@param blue
@text Tinte azul
@parent tint
@type number
@min -255
@max 255
@default 0
@desc Ajusta el tinte azul entre -255 y 255. Por defecto: 0

@param fondoNegro
@text Fondo negro bajo menú
@type boolean
@default false
@on Usar
@off No usar
@desc Usa una imagen negra de fondo bajo los menús. Por defecto: No usar

@param fondoNegroOpa
@parent fondoNegro
@text Transparencia del fondo
@type number
@min 0
@max 255
@default 255
@desc Transparencia del fondo negro. 0 = opaco, 255 = transparente

@param blink
@text Parpadeo del cursor
@type boolean
@default true
@on Activado
@off Desactivado
@desc Parpadeo del cursor en menús, elección de opciones... Por defecto: activado

@param mensajeOscu
@text Fondo oscuro sólido (mensaje)
@type boolean
@default false
@on Sólido
@off Por defecto
@desc Convierte el fondo oscuro de "Mostrar mensaje" en un rectángulo sólido (en vez de gradiente)

@param mensajeOscuOpa
@parent mensajeOscu
@text Opacidad de mensaje oscuro
@type number
@decimals 2
@default 1
@max 1
@desc Opacidad del fondo oscuro de "Mostrar mensaje". 0 = transparente, 1 = opaco. Escribe los decimales con punto (.)

------------------------------------------------------------------------
@help BF_cosas v.1.0

Un plugin que he hecho para cambiar algunas cosillas para mi(s) juego(s).
Puedes usarlo para el proyecto que quieras, comercial o no.
Puedes editarlo todo lo que quieras, pero escribe en algún lado 
que lo has hecho (y en inglés también).

Debes acreditarme como FriKitty Y CeciDibujera, O sólo CeciDibujera.
Debes acreditar "BF Project".

Contáctame mandando un email a cecilia.ocon[arroba]gmail.com 
o en Twitter/Discord (frikitty) si necesitas algo.

=======================================================================
"Movimiento de battlers" lo tengo desactivado en mi proyecto porque 
utilizo battlers transparentes para simular una vista desde atrás 
que siga teniendo animaciones. Con otro plugin los muevo 
a donde yo quiero. Pero no me interesa que se muevan ellos solos. 
He cambiado sólo lo que necesito, así que quizá no desactive 
todos los movimientos y no te sirva.

"FPS de animación de batalla" no surtirá efecto en la preview de la
base de datos, pero sí en el juego. Tendrás que probarlo en
playtest para ver el cambio. Además, redondeará algunos números.
Si 60 no es divisible por tu número de fps, el resultado será
ligeramente más rápido.

En "Opacidad de ventana" recomiendo ponerlo a 255 porque eso significa
100% de opacidad. De esta forma, puedes controlar fácilmente la
opacidad que tú quieras directamente en Window.png.

"Control del ratón" sólo desactiva el ratón, pero mantiene los
controles táctiles (para tablets y móviles) como están. Como sólo
exporto a PC y no me afecta, prefiero dejarlos así. Busca otro plugin
si necesitas eso.

"Teñir bajo el menú" cambia los valores de rojo, verde y azul tras los
menús. Esto en un principio lo puse porque al quitar el difuminado 
quedaba raro que el fondo fuera igual que antes de abrir el menú.

Sin embargo, me gusta más la opción "Fondo negro bajo menú", 
de la que puedes cambiar la transparencia del 0 al 255. 
Los dos efectos se pueden usar a la vez.
*/

//Lo de los enemigos / The enemies thing
Game_Troop.prototype.setup = function (troopId) {
    this.clear();
    this._troopId = troopId;
    this._enemies = [];
    this.troop().members.forEach(function (member) {
        if ($dataEnemies[member.enemyId]) {
            var enemyId = member.enemyId;
            var x = member.x;
            var y = member.y;
            var enemy = new Game_Enemy(enemyId, x, y);
            if (member.hidden) {
                enemy.hide();
            }
            this._enemies.push(enemy);
        }
    }, this);
    if (PluginManager.parameters('BF_cosas')["enemyName"] == "true") {
        this.makeUniqueNames();
    }
};

//Lo de los píxeles en los sprites / The sprite pixel shift thing
Game_CharacterBase.prototype.shiftY = function () {
    var numeroPixeles = PluginManager.parameters('BF_cosas')["spriteOffset"]
    numeroPixeles = Number.parseInt(numeroPixeles)
    return this.isObjectCharacter() ? 0 : numeroPixeles;
};

//Lo de los battlers moviéndose / The battlers movement thing
Sprite_Actor.prototype.moveToStartPosition = function () {
    if (PluginManager.parameters('BF_cosas')["battlerMove"] == "true") {
        this.startMove(300, 0, 0);
    }
};

Sprite_Actor.prototype.stepForward = function () {
    if (PluginManager.parameters('BF_cosas')["battlerMove"] == "true") {
        this.startMove(-48, 0, 12);
    }
};

Sprite_Actor.prototype.stepBack = function () {
    if (PluginManager.parameters('BF_cosas')["battlerMove"] == "true") {
        this.startMove(0, 0, 12);
    }
};

Sprite_Actor.prototype.retreat = function () {
    if (PluginManager.parameters('BF_cosas')["battlerMove"] == "true") {
        this.startMove(300, 0, 30);
    }
};

Sprite_Actor.prototype.damageOffsetX = function () {
    if (PluginManager.parameters('BF_cosas')["battlerMove"] == "false") {
        return 0;
    }
};

Sprite_Enemy.prototype.damageOffsetY = function () {
    if (PluginManager.parameters('BF_cosas')["battlerMove"] == "false") {
        return 0;
    }
};

//Opacidad de ventana / Window opacity
Window_Base.prototype.standardBackOpacity = function () {
    var winOpa = PluginManager.parameters('BF_cosas')["winOpa"]
    winOpa = Number.parseInt(winOpa)
    return winOpa;
}

//Desactivar ratón y ocultar cursor / Deactivate mouse and hide cursor
TouchInput._onMouseDown = function (event) {
    if (PluginManager.parameters('BF_cosas')["mouseCon"] == "true") {
        if (event.button === 0) {
            this._onLeftButtonDown(event);
        } else if (event.button === 1) {
            this._onMiddleButtonDown(event);
        } else if (event.button === 2) {
            this._onRightButtonDown(event);
        }
    }
};

TouchInput._onMouseMove = function(event) {
    if (PluginManager.parameters('BF_cosas')["mouseCon"] == "true") {
    if (this._mousePressed) {
        var x = Graphics.pageToCanvasX(event.pageX);
        var y = Graphics.pageToCanvasY(event.pageY);
        this._onMove(x, y);
    }
    }
};

TouchInput._onMouseUp = function(event) {
    if (PluginManager.parameters('BF_cosas')["mouseCon"] == "true") {
    if (event.button === 0) {
        var x = Graphics.pageToCanvasX(event.pageX);
        var y = Graphics.pageToCanvasY(event.pageY);
        this._mousePressed = false;
        this._onRelease(x, y);
    }
    }
};

TouchInput._onWheel = function(event) {
    if (PluginManager.parameters('BF_cosas')["mouseCon"] == "true") {
    this._events.wheelX += event.deltaX;
    this._events.wheelY += event.deltaY;
    event.preventDefault();
    }
};

if(PluginManager.parameters('BF_cosas')["mouseCursor"] == "false"){
    document.body.style.cursor='none';
}

//Mensaje de apareció / Emerge message
BattleManager.displayStartMessages = function() {
    if(PluginManager.parameters('BF_cosas')["emerge"] == "true"){
        $gameTroop.enemyNames().forEach(function(name) {
            $gameMessage.add(TextManager.emerge.format(name));
        });
    }
    else{
        //Si el emerge está quitado, hay que ocultar statusWindow y luego sacarlo otra vez
        BattleManager._statusWindow.visible = false;
        //Compatibilidad con SRD_BattleStatusCustomizer
        if(typeof SRD != "undefined" && typeof SRD.BattleStatusCustomizer != "undefined"){
        BattleManager._statusWindows.forEach((window) => window.visible = false);
       }
    }
    if (this._preemptive) {
        $gameMessage.add(TextManager.preemptive.format($gameParty.name()));
    } else if (this._surprise) {
        $gameMessage.add(TextManager.surprise.format($gameParty.name()));
    }
};

Window_ActorCommand.prototype.setup = function(actor) {
    this._actor = actor;
    this.clearCommandList();
    this.makeCommandList();
    this.refresh();
    this.selectLast();
    this.activate();
    this.open();
    
    //Aquí aparece de nuevo
    if(PluginManager.parameters('BF_cosas')["emerge"] == "false"){
        BattleManager._statusWindow.visible = true;
        if(typeof SRD != "undefined" && typeof SRD.BattleStatusCustomizer != "undefined"){
            BattleManager._statusWindows.forEach((window) => window.visible = true);
        }
    }  
}

SceneManager.snapForBackground = function() {
    this._backgroundBitmap = this.snap();
    //Teñir la pantalla bajo el menú / Tint the screen under menu
    if(PluginManager.parameters('BF_cosas')["tint"] == "true"){
        var red = Number.parseInt(PluginManager.parameters('BF_cosas')["red"]);
        var green = Number.parseInt(PluginManager.parameters('BF_cosas')["green"]);
        var blue = Number.parseInt(PluginManager.parameters('BF_cosas')["blue"]);
        this._backgroundBitmap.adjustTone(red, green, blue);
    }

    //Difuminar bajo el menú / Blur under the menu
    if(PluginManager.parameters('BF_cosas')["blur"] == "true"){
        this._backgroundBitmap.blur();
    } 
};

//Crear una imagen negra detrás de los menús / Create a black image under menus
if(PluginManager.parameters('BF_cosas')["fondoNegro"] == "true"){
    Scene_MenuBase.prototype.createBackground = function() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
        var fondoNegroOpa = parseInt(PluginManager.parameters('BF_cosas')["fondoNegroOpa"])
        this.setBackgroundOpacity(fondoNegroOpa)
        this.addChild(this._backgroundSprite);
    };

}

//Animación de batalla / Battle animation
//Default 4 -> 15fps / 1 -> 60fps / 7.5 -> 8fps?
Sprite_Animation.prototype.setupRate = function() {
    var fps = Number.parseInt(PluginManager.parameters('BF_cosas')["battlefps"])
    //Redondeado para abajo para que no salgan decimales / Rounded down so there are no decimals
    this._rate = Math.floor(60 / fps);
};

//Blink
Window.prototype._updateCursor = function() {
    var blinkCount = this._animationCount % 40;
    var cursorOpacity = this.contentsOpacity;
    if (this.active) {
        if (blinkCount < 20) {
            cursorOpacity -= blinkCount * 8;
        } else {
            cursorOpacity -= (40 - blinkCount) * 8;
        }
    }
    //sólo cambiamos el alpha / we just change the alpha
    if (PluginManager.parameters('BF_cosas')["blink"]== "true"){
        this._windowCursorSprite.alpha = cursorOpacity / 255;
    }
    else{
        this._windowCursorSprite.alpha = 1
    }
    
    this._windowCursorSprite.visible = this.isOpen();
};

//Caja de texto negra // black text box
if(PluginManager.parameters('BF_cosas')["mensajeOscu"] == "true"){
    var mensajeOscuOpa = PluginManager.parameters('BF_cosas')["mensajeOscuOpa"]
    Window_Base.prototype.dimColor1 = function() {
        return 'rgba(0, 0, 0, ' + mensajeOscuOpa + ')'
    };
    
    Window_Base.prototype.dimColor2 = function() {
        return 'rgba(0, 0, 0, ' + mensajeOscuOpa + ')'
    };
}

