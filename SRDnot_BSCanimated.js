//=============================================================================
//SRDnot_BSCanimated.js
//=============================================================================
/*:
@author LeonarthCG & CeciDibujera
@plugindesc Adds rolling bars to SRD_BattleStatusCustomizer v.1.0
@filename SRDnot_BSCanimated.js

@param velocidad
@text Rolling speed
@type number
@default 0.003333
@min 0.000001
@max 1
@decimals 6
@desc Bar animation speed. If you set it to 0, it won't move. Max: 1. Use up to 6 decimals. Default: 0.003333

@help SRDnot_BSCanimated.js

This plugin is NOT made by SRDev. 
It is an addon for one of his plugins, SRD_BattleStatusCustomizer.
It makes the gauges in his plugin animate when they change value.
The name starts with SRD for ease of use.

You should put this plugin below any plugin that changes the battle
transition. When it doubt, just place it very low.

Credit LeonarthCG and CeciDibujera, and obviously, SRDev.

=======================================================================
HOW TO USE
In SRD_BattleStatusCustomizer part 1, you must set "Active Updating"
to true. This comes with a setback: whenever you open the console
in playtest, the game will go slow on battles. However, it works fine
outside (for me). If you can't afford to turn this on, you can't use
this addon.

In SRD_BattleStatusCustomizer part 2, wherever you set your HP gauge,
you must change the value of "Gauge [X] current" (default "actor.hp")
for "rollingHP(actor)" without quotations.

Similarly, change your MP gauge to "rollingMP(actor)".

Choose the animation speed in this plugin's parameters.
1 is the fastest, 0 won't even move. Set it somewhere between
0.00001 and 1. 

*/

/*:es
@author LeonarthCG & CeciDibujera
@plugindesc Añade animación a las barras de SRD_BattleStatusCustomizer v.1.0
@filename SRDnot_BSCanimated.js

@param velocidad
@text Velocidad
@type number
@default 0.003333
@min 0.000001
@max 1
@decimals 6
@desc Velocidad de la animación de la barra. En 0 no se mueve. Máximo: 1. Permite 6 decimales. Por defecto: 0.003333

@help SRDnot_BSCanimated.js

Este plugin NO está hecho por SRDev.
Es una extensión para uno de sus plugins, SRD_BattleStatusCustomizer.
Hace que las barras en su plugin tengan una animación cuando bajan
o suben de valor.
El nombre empieza por SRD para que sea más fácil organizarlo.

Deberías poner este plugin debajo de cualquier plugin que cambie
la transición de batalla. Si tienes dudas, ponlo abajo del todo.

Acredita a LeonarthCG y a CeciDibujera, además de a SRDev, obviamente.

=======================================================================
INSTRUCCIONES
En SRD_BattleStatusCustomizer parte 1, debes poner "Active Updating"
como true. Esto tiene un inconveniente: cada vez que abras la consola
en playtest, el juego irá lento en las batallas. Pero funciona bien
fuera de eso (en mi caso). Si no puedes permitirte poner esto true,
no puedes usar esta extensión.

En SRD_BattleStatusCustomizer parte 2, en el sitio donde pones tu
barra de PV, debes cambiar el valor de "Gauge [X] current" (que por
defecto es "actor.hp") por "rollingHP(actor)" sin las comillas.

De igual manera, cambia tu barra de PM por "rollingMP(actor)".

Elige la velocidad de la animación en los parámetros de este plugin.
1 es el más rápido, y con 0 no se mueve siquiera. Ponlo entre
0.000001 y 1.

*/


hp_dict = {};
mp_dict = {};

//Cuando empieza la batalla actualizamos la vida y la magia para que no se anime sólo por tener un valor distinto a la última vez
function fixRolling() {
    //aquí lo nuevo           
    $gameParty.members().forEach(actor => {
        const actor_id = actor.actorId();
        hp_dict[actor_id] = actor.hp;
        mp_dict[actor_id] = actor.mp;
    });
}

//llamamos a la función pero sin tocar la original/cambios que hayan hecho otros plugins
_Scene_Map_launchBattle = Scene_Map.prototype.launchBattle;
Scene_Map.prototype.launchBattle = function() {
    _Scene_Map_launchBattle.call(this);
	fixRolling();
};

function rollingHP(actor) {
    const actor_id = actor.actorId();
    var curr_hp = hp_dict[actor_id];
    if (curr_hp == undefined) {
        curr_hp = actor.hp;
    } else if (actor.hp != curr_hp) {
        const tick_value = actor.mhp * 0.00333;
        if (actor.hp > curr_hp) {
            curr_hp += tick_value;
            if (actor.hp < curr_hp) {
                curr_hp = actor.hp;
            }
        } else {
            curr_hp -= tick_value;
            if (actor.hp > curr_hp) {
                curr_hp = actor.hp;
            }
        }
    }
    hp_dict[actor_id] = curr_hp;
    return parseInt(curr_hp);
}

function rollingMP(actor) {
    const actor_id = actor.actorId();
    var curr_mp = mp_dict[actor_id];
    if (curr_mp == undefined) {
        curr_mp = actor.mp;
    } else if (actor.mp != curr_mp) {
        const tick_value = actor.mmp * 0.00333;
        if (actor.mp > curr_mp) {
            curr_mp += tick_value;
            if (actor.mp < curr_mp) {
                curr_mp = actor.mp;
            }
        } else {
            curr_mp -= tick_value;
            if (actor.mp > curr_mp) {
                curr_mp = actor.mp;
            }
        }
    }
    mp_dict[actor_id] = curr_mp;
    return parseInt(curr_mp);
}


