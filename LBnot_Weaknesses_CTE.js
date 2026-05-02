//=============================================================================
// LBnot_Weaknesses_CTE.js                                                       
//=============================================================================

/*:
@plugindesc v.1.0 Makes LB_BattleLogWeaknesses compatible with Custom Translation Engine.
@author CeciDibujera

@help LBnot_Weaknesses_CTE v.1.0
This plugin makes LadyBaskerville's LB_BattleLogWeaknesses compatible with
Custom Translation Engine by vgperson. Put it below LB_BattleLogWeaknesses
and Custom Translation Engine.

Use the parameters in LB_BattleLogWeaknesses to set up the messages in your
base language. Then, in your langauge files, in 
AllDatabases > User-Defined Variables, set up these two:

battleWeak=Your weakness message here.
battleResist=Your resist message here.

Don't use quotations.
----------------------------------------------------------------------------
You can use this plugin for whatever project you want, and you can edit
it as much as you want. Like the LadyBaskerville one, credit is appreciated
but not required.

*/

/*:es
@plugindesc v.1.0 Hace que LB_BattleLogWeaknesses sea compatible con Custom Translation Engine.
@author CeciDibujera

@help LBnot_Weaknesses_CTE v.1.0
Este plugin hace que el plugin de LadyBaskerville LB_BattleLogWeaknesses
sea compatible con Custom Translation Engine de vgperson. Ponlo debajo
de LB_BattleLogWeaknesses y Custom Translation Engine.

Usa los parámetros en LB_BattleLogWeaknesses para configurar los mensajes
en tu idioma base. Después, en los archivos de traducción, en
AllDatabases > User-Defined Variables, pon estas dos cosas:

battleWeak=Mensaje de punto débil aquí.
battleResist=Mensaje de resistir el ataque aquí.

No uses comillas.
----------------------------------------------------------------------------
Puedes usar este plugin para cualquier proyecto, y lo puedes editar tanto
como quieras. Igual que el de LadyBaskerville, agradecería que me acreditases
pero tampoco hace falta.
*/


//Cambiamos esta función para mirar si tiene el idioma cambiado o no
Window_BattleLog.prototype.LB_displayWeakness = function(target) {
    //pone el default de los mensajes como pone en el plugin
    var weakMessage = LB.BattleLogWeaknesses.weakMsg
    var resistMessage = LB.BattleLogWeaknesses.resistMsg

    if (target.result().elementRate > 1) {
        if(CTE.getString("battleWeak")){
            //Si existe el campo battleWeak en AllDatabases, cambia el mensaje por ese
            weakMessage = CTE.getString("battleWeak")
        }
        this.push('addText', weakMessage);
    } else if (target.result().elementRate < 1){
        if(CTE.getString("battleResist")){
            resistMessage = CTE.getString("battleResist")
        }
            this.push('addText', resistMessage);
    }
};       