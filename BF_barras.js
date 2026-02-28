//=============================================================================
//BF_barras.js
//=============================================================================
/*:
@author LeonarthCG & FriKitty / CeciDibujera
@plugindesc Enemy bars in battle v1.0
@filename BF_barras.js

@param yOffsetNumero
@text Damage popup Y offset
@type number
@default 0
@min -9999
@desc Pixels the damage popup moves down from its default position. Default: 0

@param yOffsetBarra
@text Bar Y offset
@type number
@default 12
@min -9999
@desc Pixels the bar moves down from the bottom of the enemy sprite. Default: 12. Negative numbers: it goes up.

@param anchoBarra
@text Bar width
@type number
@default 160
@min 1
@desc Pixels wide the bar will be. Default: 160

@param altoBarra
@text Bar height
@type number
@default 12
@min 1
@desc Pixels tall the bar will be. Default: 12

@param color1Barra
@text Bar color (1)
@type text
@default 20
@desc Bar color 1, in windowskin code or hexadecimal. Default: 20 (HP).

@param color2Barra
@text Bar color (2)
@type text
@default 21
@desc Bar color 2, in windowskin code or hexadecimal. Default: 21 (HP).

@param grosorContorno
@text Bar outline thickness
@type number
@default 1
@desc Thickness of outline, in pixels. Default: 1. Choose 0 if you don't want an outline.

@param colorContorno
@text Bar outline color
@type text
@default #000000
@desc Bar outline color, in windowskin code or hexadecimal. Default: #000000 (black).

------------------------------------------------------------------------
@help BF_barras v.1.0

A plugin to add HP bars for enemies when you attack them. 
You can use this plugin for any project, commercial or not.
You must credit us as LeonarthCG and CeciDibujera.
You must also credit "BF Project".

You can edit this plugin as much as you like, as long as you add
in this description somewhere that you did (also, would be a good
idea to add this information in the Spanish instructions, or delete
it altogether, so Spanish speaking users can see that).
You can also look at the code and see how we did some things to make
your own plugin that does things differently. In that case, there is
no need to credit us. This is how people learn!

=======================================================================

The default value on the damage popup is the one that RPG Maker uses. 
We have no clue where it actually starts.
Try numbers until you get one you like.

=======================================================================
NOTETAGS
All bars in all your enemies will use the default values set in this
plugin's parameters, unless you set notetags in the enemy's database
entry. These are all the tags:

<bf_bardisabled> Disables the bar on this enemy
<bf_damageoffset:x> Changes damage popup offset for this enemy
<bf_baroffset:x> Changes bar offset for this enemy
<bf_barwidth:x> Changes bar width for this enemy
<bf_barheight:x> Changes bar height for this enemy
<bf_barcolor1:x> Changes bar color 1 for this enemy
<bf_barcolor2:x> Changes bar color 2 for this enemy
<bf_outlinethick:x> Changes bar outline thickness for this enemy
<bf_outlinecolor:x> Changes bar outline color for this enemy

Change x for the number or code you need.

*/

/*:es
@author LeonarthCG & FriKitty / CeciDibujera
@plugindesc Barras de vida en enemigos v1.0
@filename BF_barras.js

@param yOffsetNumero
@text Offset Y del popup de daño
@type number
@default 0
@min -9999
@desc Píxeles que baja el popup de daño desde su posición por defecto. Por defecto: 0

@param yOffsetBarra
@text Offset Y de barra
@type number
@default 12
@min -9999
@desc Píxeles que baja la barra desde abajo del sprite de enemigo. Por defecto: 12. Números negativos: sube.

@param anchoBarra
@text Ancho de barra
@type number
@default 160
@min 1
@desc Píxeles de ancho de la barra. Por defecto: 160

@param altoBarra
@text Alto de barra
@type number
@default 12
@min 1
@desc Píxeles de alto de la barra. Por defecto: 12

@param color1Barra
@text Color de barra 1
@type text
@default 20
@desc Color de barra 1, en código de windowskin o hexadecimal. Por defecto: 20 (PV).

@param color2Barra
@text Color de barra 2
@type text
@default 21
@desc Color de barra 2, en código de windowskin o hexadecimal. Por defecto: 21 (PV).

@param grosorContorno
@text Grosor del contorno de la barra
@type number
@default 1
@desc Grosor del contorno, en píxeles. Por defecto: 1. Pon 0 si no quieres contorno.

@param colorContorno
@text Color del contorno de la barra
@type text
@default #000000
@desc Color del contorno, en código de windowskin o hexadecimal. Por defecto: #000000 (negro).

------------------------------------------------------------------------
@help BF_barras v.1.0

Plugin para añadir barras de vida de enemigos cuando los atacas.
Puedes usar este plugin para el proyecto que quieras, comercial o no.
Debes acreditarnos como LeonarthCG y CeciDibujera.
Debes acreditar "BF Project".

También puedes editar este plugin tanto como quieras, mientras que
añadas en esta descripción (y en inglés) que lo has hecho.
También puedes mirar mi código y ver cómo hice ciertas cosas para
luego hacer tu propio plugin que hace las cosas diferente. En ese
caso, no necesitas acreditarme. ¡Así aprende la gente!

=======================================================================

El valor por defecto del popup de daño es el que usa RPG Maker.
No tenemos ni idea de dónde empieza realmente.
Prueba números hasta que te guste cómo queda.

=======================================================================
NOTETAGS
Todas las barras de todos los enemigos usarán los valores por defecto
que has puesto en los parámetros de este plugin, a menos que uses
notetags en la entrada del enemigo en la base de datos. Estos son
los tags:

<bf_bardisabled> Desactiva la barra en este enemigo
<bf_damageoffset:x> Cambia el offset del popup de daño en este enemigo
<bf_baroffset:x> Cambia el offset de la barra en este enemigo
<bf_barwidth:x> Cambia el ancho de la barra en este enemigo
<bf_barheight:x> Cambia el alto de la barra en este enemigo
<bf_barcolor1:x> Cambia el color 1 de la barra en este enemigo
<bf_barcolor2:x> Cambia el color 2 de la barra en este enemigo
<bf_outlinethick:x> Cambia el grosor del contorno en este enemigo
<bf_outlinecolor:x> Cambia el color del contorno en este enemigo

Cambia la x por el número que necesites.


*/


var BF_barras_previousHP;
_Game_BattlerBase_setHp = Game_BattlerBase.prototype.setHp;
Game_BattlerBase.prototype.setHp = function(hp) {
    BF_barras_previousHP = this._hp;
    _Game_BattlerBase_setHp.call(this, hp);
};

//Diferente para que no se cargue los menús. Otra función
Window_Base.prototype.drawEnemyGauge = function(x, y, width, height, rate, color1, color2, outlineThick, outlineColor) {
    var fillW = Math.floor(width * rate);
    //primero se dibuja un rectángulo debajo de todo para que haga de contorno. x y -outlineThick porque es outlineThick pixeles y tiene que verse
    //width + 2 * outlineThick porque es lo que mide outlineThick por cada lado.
    this.contents.fillRect(x - outlineThick , y - outlineThick, width + (outlineThick * 2), height + (outlineThick * 2), outlineColor);
    //aquí se dibuja la barra de verdad
    this.contents.fillRect(x, y, width, height, this.gaugeBackColor());
    this.contents.gradientFillRect(x, y, fillW, height, color1, color2);
};

//Esto es el damage popup que lo cambiamos de sitio (o no)
Sprite_Battler.prototype.setupDamagePopup = function() {
    if (this._battler.isDamagePopupRequested()) {
        if (this._battler.isSpriteVisible()) {
            var barraNecesaria = Sprite_DamageBar.shouldHaveBar(this._battler);

            var sprite = new Sprite_Damage();
            sprite.x = this.x + this.damageOffsetX();
            var yOffset = this.damageOffsetY();
            if (barraNecesaria) {
                var yOffsetExtra = parseInt($dataEnemies[this._battler.enemyId()].meta["bf_damageoffset"]);
                if (isNaN(yOffsetExtra)) {
                    yOffsetExtra =  parseInt(PluginManager.parameters('BF_barras')["yOffsetNumero"]);
                }
                yOffset += yOffsetExtra;
            }
            sprite.y = this.y + yOffset;
            sprite.setup(this._battler);
            this._damages.push(sprite);
            this.parent.addChild(sprite);
            
            //solo crea la barra si hace falta
            if (barraNecesaria) {
                var spritebar = new Sprite_DamageBar();
                spritebar.x = this.x + this.damageOffsetX();
                spritebar.y = this.y + this.damageOffsetY();
                this._damages.push(spritebar);
                this.parent.addChild(spritebar);
                spritebar.setup(this._battler);
            }
        }
        this._battler.clearDamagePopup();
        this._battler.clearResult();
    }

};

function Sprite_DamageBar() {
    this.initialize.apply(this, arguments);
}

Sprite_DamageBar.prototype = Object.create(Sprite.prototype);
Sprite_DamageBar.prototype.constructor = Sprite_DamageBar;

Sprite_DamageBar.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this._duration = 0;
};

Sprite_DamageBar.shouldHaveBar = (target) => {
    if (target.isEnemy() && target.result().hpAffected) {
        //disabled o no
        if($dataEnemies[target.enemyId()].meta["bf_bardisabled"]) {
            return false;
        } else {
            return true;
        }
    }
    return false;
}

Sprite_DamageBar.prototype.setup = function(target) {
    var result = target.result();
    console.log(target)
    console.log(result)

    // creamos la ventana para dibujar la barra de vida
    this._window = new Window_Base(0, 0, Graphics.boxWidth, Graphics.boxHeight);
    this._window.opacity = 0;
    this._window.padding = 0;
    this.parent.parent.addChild(this._window); // y se la metemos a scene guarramente
    this._duration = 90;
    this._totalDrainDuration = this._duration / 2.0;
    this._drainDuration = this._totalDrainDuration;

    // valores de los parámetros. primero mira las notas, y si no, por defecto
    var enemyId = target.enemyId()

    //offset de la barra
    this._barYOffset = parseInt($dataEnemies[enemyId].meta["bf_baroffset"]);
    if (isNaN(this._barYOffset)) {
        this._barYOffset =  parseInt(PluginManager.parameters('BF_barras')["yOffsetBarra"]);
    }

    //ancho
    this._barWidth = parseInt($dataEnemies[enemyId].meta["bf_barwidth"]);
    if (isNaN(this._barWidth)) {
        this._barWidth =  parseInt(PluginManager.parameters('BF_barras')["anchoBarra"]);
    }
    //alto
    this._barHeight = parseInt($dataEnemies[enemyId].meta["bf_barheight"]);
    if (isNaN(this._barHeight)) {
        this._barHeight =  parseInt(PluginManager.parameters('BF_barras')["altoBarra"]);
    }
    //color 1. Primero mira si hay meta o no
    var color1Val = $dataEnemies[enemyId].meta["bf_barcolor1"];
    if (color1Val == undefined) {
        color1Val = PluginManager.parameters('BF_barras')["color1Barra"];
    }
    // y después hace un parseInt para distinguir si es hexadecimal o código de windowskin
    var color1Num = parseInt(color1Val);
    if (isNaN(color1Num)) {
        this._barColor1 = color1Val;
    }
    else {
        this._barColor1 = this._window.textColor(parseInt(color1Num));
    }

    //color 2. Primero mira si hay meta o no
    var color2Val = $dataEnemies[enemyId].meta["bf_barcolor2"];
    if (color2Val == undefined) {
        color2Val = PluginManager.parameters('BF_barras')["color2Barra"];
    }
    // y después hace un parseInt para distinguir si es hexadecimal o código de windowskin
    var color2Num = parseInt(color2Val);
    if (isNaN(color2Num)) {
        this._barColor2 = color2Val;
    }
    else {
        this._barColor2 = this._window.textColor(parseInt(color2Num));
    }

    //grosor
    this._outlineThick = parseInt($dataEnemies[enemyId].meta["bf_outlinethick"]);
    if (isNaN(this._outlineThick)) {
        this._outlineThick =  parseInt(PluginManager.parameters('BF_barras')["grosorContorno"]);
    }

    //color contorno. copypaste de color 1 y 2
    var colorConVal = $dataEnemies[enemyId].meta["bf_outlinecolor"];
    if (colorConVal == undefined) {
        colorConVal = PluginManager.parameters('BF_barras')["colorContorno"];
    }
    // y después hace un parseInt para distinguir si es hexadecimal o código de windowskin
    var colorConNum = parseInt(colorConVal);
    if (isNaN(colorConNum)) {
        this._outlineColor = colorConVal;
    }
    else {
        this._outlineColor = this._window.textColor(parseInt(colorConNum));
    }

    // conseguir datos del enemigo y se lo guardamos en this pa usarlo más abajo
    var sprite
    SceneManager._scene._spriteset._enemySprites.forEach((s) => { if (s._battler == target) sprite = s } )
    this._enemySprite = sprite
    this._target = target;
    //para que no se rompa la barra
    var hpDamage = result.hpDamage;
    if (hpDamage > 0) {
        hpDamage = Math.min(hpDamage, BF_barras_previousHP);
    } else {
        hpDamage = Math.max(hpDamage, BF_barras_previousHP - target.mhp);
    }
    this._hpDamage = hpDamage;
};

Sprite_DamageBar.prototype.update = function() {
    Sprite.prototype.update.call(this);
    if (this._duration > 0) {
        //bajamos los frames que le faltan para que haga la animación de quitarse
        this._duration--;
        this._drainDuration--;
        var porcentajeDrain =  (parseFloat(this._drainDuration) / parseFloat(this._totalDrainDuration)).clamp(0, 1);
        //rate es lo llena que está la barra durante la animación (se actualiza todo el rato)
        var rate = (parseFloat(this._target.hp + this._hpDamage * porcentajeDrain) / parseFloat(this._target.mhp)).clamp(0, 1);
        //La posición x aparte para que no sea una pesadilla
        var xPos = parseInt(this._enemySprite.x - (this._enemySprite.bitmap.width / 2) + ((this._enemySprite.bitmap.width - this._barWidth) / 2));
        var yPos = this._enemySprite.y + this._barYOffset;
        //se dibuja la barra con todos los datos
        this._window.drawEnemyGauge(xPos, yPos, this._barWidth, this._barHeight, rate, this._barColor1, this._barColor2, this._outlineThick, this._outlineColor)
        this.updateOpacity();
        //Si no quedan frames borramos la ventana
        if (this._duration == 0) {
            this.parent.parent.removeChild(this._window);
        }
    }
};

Sprite_DamageBar.prototype.updateOpacity = function() {
    if (this._duration < 10) {
        this._window.contentsOpacity = 255 * this._duration / 10;
    }
};

Sprite_DamageBar.prototype.isPlaying = function() {
    return this._duration > 0;
};
