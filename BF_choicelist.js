//=============================================================================
//BF_choicelist.js
//=============================================================================
/*:
@author FriKitty / CeciDibujera
@plugindesc Fix for choice lists v.1.0
@filename BF_choicelist.js

@param altoElec
@text Choice height
@type number
@default 0
@desc Number of pixels added to each choice line's default height

@help BF_choicelist.js

A plugin that fixes a strange bug that would make choice list windows look wrong
(because it somehow makes the width a non-integer number of pixels).

It also makes it so that choice list windows will always align with the message box,
even if said message box is narrower than the game window. This was an overlook (?)
in YEP_MessageCore, so this plugin fixes that.

=======================================================================
CHOICE HEIGHT
If you made your font bigger in MessageCore, it's possible that some
letters will get cut off from the bottom if they're the last choice
in a choice list (q, y, p, g, j). To avoid this, you can make each
choice a little taller. The number you add in this parameter will get
added to the default height.

Try numbers, but it's best if you don't type anything too big.
Leave it at 0 if you don't need it.

This will also make the NameBox taller if you use Yanfly MessageCore.

=======================================================================
You can use this plugin for any project you want, commercial or not.

You must credit me as FriKitty AND CeciDibujera, OR just CeciDibujera.
You must credit "BF Project".
You can also edit this plugin as much as you like, as long as you add
in this description somewhere that you did (also, would be a good
idea to add this information in the Spanish instructions, or delete
it altogether, so Spanish speaking users can see that).

Contact me on cecilia.ocon[at]gmail.com or on Twitter/Discord (frikitty)
if you need something.
*/

/*:es
@author FriKitty / CeciDibujera
@plugindesc Arreglo para las listas de elecciones v.1.0
@filename BF_choicelist.js

@param altoElec
@text Alto de elección
@type number
@default 0
@desc Número de píxeles sumados al alto por defecto de cada línea de elección

@help BF_choicelist.js

Plugin que arregla un bug raro que hace que las listas de elecciones 
se vean mal (porque por algún motivo toman para el ancho un número de 
píxeles con decimales).

También hace que las ventanas de listas de elecciones siempre 
se alineen con la caja de mensaje, incluso si la caja es más estrecha
que la ventana del juego. Esto es algo que se pasó por alto (?)
en YEP_MessageCore, así que este plugin lo arregla.

=======================================================================
ALTO DE ELECCIONES
Si has aumentado el tamaño de la fuente en MessageCore, es posible que
algunas letras salgan cortadas por abajo en las listas de elecciones
si están en la última elección (las q, y, p, g, j). Para evitar esto, 
puedes hacer que cada elección sea un poquito más alta. El número 
que añadas se sumará a la altura por defecto. 

Prueba números, pero es mejor si no pones nada demasiado grande.
Déjalo a 0 si no lo necesitas.

También esto agrandará el alto de la NameBox si usas Yanfly MessageCore.

=======================================================================
Puedes usar este plugin para el  proyecto que quieras, comercial o no.

Debes acreditarme como FriKitty Y CeciDibujera, O sólo CeciDibujera.
Debes acreditar "BF Project".
También puedes editar este plugin tanto como quieras, mientras que
añadas en esta descripción (y en inglés) que lo has hecho.

Contáctame mandando un email a cecilia.ocon[arroba]gmail.com 
o en Twitter/Discord (frikitty) si necesitas algo.

*/


//Esto arregla las ventanas de opciones rotas por no ser un número entero de píxeles
Window_ChoiceList.prototype.windowWidth = function() {
    var width = this.maxChoiceWidth() + this.padding * 2;
    width = parseInt(width)
    return Math.min(width, Graphics.boxWidth);
};

//Esto hace que se alinee la cajita siempre a donde está el mensaje por si lo cambias en messagecore
Window_ChoiceList.prototype.updatePlacement = function() {
    var positionType = $gameMessage.choicePositionType();
    var messageY = this._messageWindow.y;
    this.width = this.windowWidth();
    this.height = this.windowHeight();
    switch (positionType) {
    case 0:
        this.x = this._messageWindow.x;
        break;
    case 1:
        this.x = (Graphics.boxWidth - this.width) / 2;
        break;
    case 2:
        this.x = this._messageWindow.width - this.width + ((Graphics.boxWidth - this._messageWindow.width) / 2)
        break;
    }
    if (messageY >= Graphics.boxHeight / 2) {
        this.y = messageY - this.height;
    } else {
        this.y = messageY + this._messageWindow.height;
    }
};

//Esto cambia el alto de las ventanas un poquito para que no se corten letras
var bfAltoElec = parseInt(PluginManager.parameters('BF_choicelist')["altoElec"])

Window_ChoiceList.prototype.itemRect = function(index) {
    var rect = new Rectangle();
    var maxCols = this.maxCols();
    rect.width = this.itemWidth();
    rect.height = this.itemHeight() + bfAltoElec;
    rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
    rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
    return rect;
};

Window_ChoiceList.prototype.fittingHeight = function(numLines) {
    return numLines * (this.lineHeight() + bfAltoElec) + this.standardPadding() * 2;
};

Window_ChoiceList.prototype.contentsHeight = function() {
    return this.maxItems() * (this.itemHeight() + bfAltoElec);
};

//Esto cambia el alto de las nameboxes para que no se corten las letras
Window_NameBox.prototype.windowHeight = function() {
    return this.fittingHeight(1) + bfAltoElec;
};
