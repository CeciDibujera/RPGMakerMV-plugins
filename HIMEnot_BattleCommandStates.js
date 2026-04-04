//=============================================================================
//HIMEnot_BattleCommandStates.js
//=============================================================================
/*:
@author FriKitty / CeciDibujera & Cardcaph
@plugindesc Battle commands can depend on states v1.0
@filename HIMEnot_BattleCommandStates.js

@help HIMEnot_BattleCommandStates v1.0

This plugin was NOT made by Hime.
An addon to add more functionality to Hime's Actor Battle Commands 
and its addon Battle Command Use Skill. It also makes it compatible 
with vgperson's Custom Translation Engine (this part thanks to 
Cardcaph.) This plugin should go below HIME_ActorBattleCommands 
and HIME_BattleCommandUseSkill.

Using notetags, you can disable battle commands depending on states.
By default, you can already seal skill types with states, 
but you're able to open the sub-menu and see all your skills greyed out. 
With this plugin, you can make it so that you can't open it. 
You can also disable item, guard and attack this way.

The commands themselves have to be set up on each actor 
with Hime's plugin, read its instructions.

=======================================================================
NOTETAGS
Add these notetags on your states.

= Disable attack, guard or item commands =
<disableattack>
<disableguard>
<disableitem>

= Disable skill list (all skills your actor has) =
<disableskilllist>

= Disable skill type =
<disableskilltype:x,y,z>

Where x, y and z are the ID numbers of those skill types. Example:
<disableskilltype:1,3,4>
Will disable skill types 1, 3 and 4, but not 2.

If you only need to disable one skill type, don't use commas.
<disableskilltype:1>

If you need to disable a specific skill, you don't need to use notetags.
You can do it by default in RPG Maker.

By the way, be careful to not make it possible for all your commands
to be disabled at a time, or you won't be able to continue, lol

=======================================================================
You can use this plugin for any project, commercial or not.
You must credit "CeciDibujera (BF Project)" and "Cardcaph".
You must also credit Hime, obviously.

You can edit this plugin as much as you like, as long as you add
in this description somewhere that you did (also, would be a good
idea to add this information in the Spanish instructions, or delete
it altogether, so Spanish speaking users can see that).
You can also look at the code and see how we did some things to make
your own plugin that does things differently. In that case, there is
no need to credit us. This is how people learn!
=======================================================================

*/

/*:es
@author FriKitty / CeciDibujera & Cardcaph
@plugindesc Los comandos de batalla pueden depender de estados v1.0
@filename HIMEnot_BattleCommandStates.js

@help HIMEnot_BattleCommandStates v1.0

Este plugin NO está hecho por Hime.
Es una extensión para uno de sus plugins, Actor Battle Commands,
y su extensión Battle Command Use Skill. También los hace compatibles
con el plugin de vgperson, Custom Translation Engine (esta parte
gracias a Cardcaph). Este plugin debe ir debajo de HIME_ActorBattleCommands
y HIME_BattleCommandUseSkill.

Usando notetags, puedes deshabilitar los comandos de batalla dependiendo
de si un actor tiene estados alterados o no. Por defecto, ya se pueden
sellar tipos de habilidades usando estados, pero te deja abrir el
submenú donde puedes ver todas las habilidades de color gris.
Con este plugin, puedes hacer que no te deje siquiera abrirlo.
También de esta forma puedes desactivar los comandos de objetos,
defender y atacar.

Los comandos los tienes que poner primero para cada actor 
como pone en las instrucciones del plugin de Hime.

=======================================================================
NOTETAGS
Añade estos notetags en los estados.

= Desactivar atacar, defender u objetos =
<disableattack>
<disableguard>
<disableitem>

= Desactivar la lista de habilidades (todas las que tiene tu actor) =
<disableskilllist>

= Desactivar tipos de habilidad concretos =
<disableskilltype:x,y,z>

Donde x, y y z son las IDs de los tipos de habilidad que quieres elegir. 
Por ejemplo:
<disableskilltype:1,3,4>
Esto desactivará los tipos de habilidad 1, 3 y 4, pero no 2.

Si sólo quieres desactivar un tipo de habilidad, no uses comas.
<disableskilltype:1>

Si quieres desactivar una habilidad concreta, no necesitas notetags.
Se puede hacer por defecto en RPG Maker.

Por cierto, ten cuidado de no dejar que todos los comandos se
puedan desactivar al mismo tiempo, o no podrás continuar, lol

=======================================================================
You can use this plugin for any project, commercial or not.
You must credit "CeciDibujera (BF Project)" and "Cardcaph".

You can edit this plugin as much as you like, as long as you add
in this description somewhere that you did (also, would be a good
idea to add this information in the Spanish instructions, or delete
it altogether, so Spanish speaking users can see that).
You can also look at the code and see how we did some things to make
your own plugin that does things differently. In that case, there is
no need to credit us. This is how people learn!

Puedes usar este plugin para el proyecto que quieras, comercial o no.
Debes acreditar a "CeciDibujera (BF Project)" y a "Cardcaph".
También debes acreditar a Hime, claro.

También puedes editar este plugin tanto como quieras, mientras que
añadas en esta descripción (y en inglés) que lo has hecho.
También puedes mirar mi código y ver cómo hemos hecho ciertas cosas para
luego hacer tu propio plugin que hace las cosas diferente. En ese
caso, no necesitas acreditarnos. ¡Así aprende la gente!
=======================================================================


*/




//Another rewrite of Hime Actor Battle Commands lol
//disableitem, disableattack, disableguard

Window_ActorCommand.prototype.addBattleCommand_item = function(cmd) {
    var enabled = cmd.isEnabled(this._actor);
    //Para mirar que tienes disableitem o no
    if(this._actor.states().filter((estado) => "disableitem" in estado.qmeta).length){enabled = false}
    this.addCommand(TextManager.item, cmd.symbol(), enabled);
  };

  Window_ActorCommand.prototype.addBattleCommand_attack = function(cmd) {
    var enabled = cmd.isEnabled(this._actor) && this._actor.canAttack();   
    //Para mirar que tienes disableattack o no
    if(this._actor.states().filter((estado) => "disableattack" in estado.qmeta).length){enabled = false}
    this.addCommand(TextManager.attack, cmd.symbol(), enabled);
  };
  
  Window_ActorCommand.prototype.addBattleCommand_guard = function(cmd) {
    var enabled = cmd.isEnabled(this._actor) && this._actor.canGuard();   
    //Para mirar que tienes disableguard o no
    if(this._actor.states().filter((estado) => "disableguard" in estado.qmeta).length){enabled = false} 
    this.addCommand(TextManager.guard, cmd.symbol(), enabled);
  };

  //Los de skill type son más difíciles. Y para una skill suelta no hace falta, ya lo hace rpg maker

 Window_ActorCommand.prototype.addBattleCommand_skill_type = function(cmd) {
    var enabled = cmd.isEnabled(this._actor);

    //Si existe la propiedad disableskilltype, entramos a comprobar
    if(this._actor.states().filter((estado) => "disableskilltype" in estado.qmeta).length){
        //Hacemos un array vacío al que le vamos a meter todo lo que esté en disableskilltype en cada estado
        var arraySkillTypes = []
        this._actor.states().forEach((estado) => estado.qmeta.disableskilltype ? arraySkillTypes = arraySkillTypes.concat(estado.qmeta.disableskilltype.split(",")) : false );
        //Y ahora este array lo comparamos con el skill type que vamos a poner abajo. Si coincide el número, disable!
        //Convertido a string porque ._ext por defecto es numerito
        if(arraySkillTypes.includes(cmd._ext.toString())){
            enabled = false
        }
    }

    this.addCommand(cmd.name(), cmd.symbol(), enabled, cmd.ext());
  };
  
  //Añado skilllist aunque yo no lo vaya a usar
Window_ActorCommand.prototype.addBattleCommand_skill_list = function(cmd) {
    var enabled = cmd.isEnabled(this._actor);
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function(a, b) {
        return a - b;
    });
    skillTypes.forEach(function(stypeId) {
        if (!this._actor.isSkillTypeHidden(stypeId)) {
			var name = $dataSystem.skillTypes[stypeId];
			if (!ConfigManager.isBaseLanguage()) {
				if (CTE.dataExists("types", "skilltypes")) {
					var list = CTE.getData("types", "skilltypes").split("\n");
					list.unshift(""); // Blank index 0
					if (stypeId < list.length) name = list[stypeId];
				}
			}
			
          var enabled = !this._actor.isSkillTypeDisabled(stypeId);

        //mirar si tienes puesto disableskilllist
        if(this._actor.states().filter((estado) => "disableskilllist" in estado.qmeta).length){enabled = false}    

          this.addCommand(name, 'skill_type', enabled, stypeId);
        }
    }, this);
  };
  
  //Arreglo de custom translation engine

  Window_ActorCommand.prototype.addBattleCommand_use_skill = function(cmd) {
    var skill = $dataSkills[cmd.ext()]
    var enabled = cmd.isEnabled(this._actor) && this._actor.canUse(skill);
    var name = skill.name;
    this.addCommand(name, cmd.symbol(), enabled, cmd.ext());
  };