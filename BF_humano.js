//=============================================================================
//BF_humano.js
//=============================================================================
/*:
@author FriKitty / CeciDibujera
@plugindesc Humans shouldn't battle v1.0
@filename BF_humano.js

@param intID
@text Switch
@type number
@default 0
@min 0
@max 9999
@desc Choose the switch you will use to activate or deactivate
0 HP and MP on menus.

@param nombreHumano
@text Character names
@type text[]
@desc Enter the names of the characters who are humans.
It's case sensitive.

------------------------------------------------------------------------
@help BF_humano v.1.0
This is a very small plugin that changes the main and status menus so that
the selected characters in the party appear to have 0 max HP for lore reasons.

In an event I must turn on a switch for this to work.
This plugin must go below BF_menu (I think).

This plugin is very specific about the lore of my game, so I don't think
anyone will find it useful at all. I won't list any usage conditions.
If you want to copy my code or adapt it for something else, feel free.
I don't need you to credit me.
*/

/*:es
@author FriKitty / CeciDibujera
@plugindesc Los humanos mejor que no luchen v1.0
@filename BF_humano.js

@param intID
@text Interruptor
@type number
@default 0
@min 0
@max 9999
@desc Elige el interruptor que usarás para activar o desactivar
el HP y MP 0 en el menú.

@param nombreHumano
@text Nombres de los personajes
@type text[]
@desc Introduce los nombres de los personajes que son humanos.
Importan las mayúsculas y las minúsculas, ponlas bien.

------------------------------------------------------------------------
@help BF_humano v.1.0
Este es un plugin pequeñísimo que cambia el menú principal y de estado para
que los personajes seleccionados parezcan que tienen 0 HP y MP máximos
por motivos de lore.

En un evento debo activar un interruptor para que esto funcione.
Este plugin debe ir debajo de BF_menu (creo).

Este plugin es muy específicamente sobre el lore de mi juego, así que
no creo que a nadie le vaya a ser útil. No voy a poner condiciones de uso.
Si quieres copiar mi código o adaptarlo para otra cosa, adelante.
No necesito que me acredites.
*/

//La ID del interruptor
var bfHumanoIntID = parseInt(PluginManager.parameters('BF_humano')["intID"])
//Convertimos el JSON que nos da text[] en un array guapo
var bfNombreHumano = JSON.parse(PluginManager.parameters('BF_humano')["nombreHumano"])

Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.hpGaugeColor1();
    var color2 = this.hpGaugeColor2();
    //Ahora hay que mirar si EN EL ARRAY se incluye el nombre del actor para dibujar barra vacía
    //También mira si el interruptor está ON
    if(bfNombreHumano.includes(actor._name) && $gameSwitches.value(bfHumanoIntID) == true){ 
        this.drawGauge(x, y, width, 0, color1, color2);
    }
    else{
        this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
    }
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.hpA, x, y, 44);
    //Aquí igual para escribir números a 0
    if(bfNombreHumano.includes(actor._name) && $gameSwitches.value(bfHumanoIntID) == true){
        this.drawCurrentAndMax(0, 0, x, y, width,
            this.hpColor(actor), this.normalColor());
    }
    else{
        this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width,
            this.hpColor(actor), this.normalColor());
    }
};

//Lo mismo con MP
Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.mpGaugeColor1();
    var color2 = this.mpGaugeColor2();
    if(bfNombreHumano.includes(actor._name) && $gameSwitches.value(bfHumanoIntID) == true){
        this.drawGauge(x, y, width, 0, color1, color2);
    }
    else{
        this.drawGauge(x, y, width, actor.mpRate(), color1, color2);
    }
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.mpA, x, y, 44);
    if(bfNombreHumano.includes(actor._name) && $gameSwitches.value(bfHumanoIntID) == true){
        this.drawCurrentAndMax(0, 0, x, y, width, this.mpColor(actor), this.normalColor());
    }
    else{
        this.drawCurrentAndMax(actor.mp, actor.mmp, x, y, width, this.mpColor(actor), this.normalColor());
    }
};

