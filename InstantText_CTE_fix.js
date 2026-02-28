//=============================================================================
// InstantText_CTE_fix.js                                                         
//=============================================================================
 
/*:
@plugindesc v.1.0 Gives option for message text to render instantly.
@author Jatopian + CeciDibujera

@param Default
@text Default option
@desc Whether instant text is enabled by default in the Options menu.
@type boolean
@on Enabled
@off Disabled
@default true

@param text
@text Name of the option
@desc Type what you want the option in the menu to say by default.
@type text
@default Instant text

@param cteUsed
@text Is CTE used?
@desc Set to true if you are using Custom Translation Engine.
@type boolean
@default false

@help InstantText_CTE_fix v.1.0
This plugin gives the option for message text to render instantly,
instead of the default behavior (character-by-character).

Player can toggle this behavior in the game's Options menu.
Developer can toggle whether the default setting is ON or OFF.

This plugin was originally made by Jatopian, so you must credit them.
CeciDibujera added compatibility with Custom Translation Engine by vgperson,
to make this option in the menu able to be translated. Also, the ability
to change what it says in the menu in the original language, whether you
use CTE or not.

Put this plugin below any other plugin that changes your options menu.
If you use CTE, this plugin should also be below that.

Original terms of use:
- Free for commercial and non-commercial use.
- Please give credit in a trivially accessible place.
- OK to modify, but if you redistribute the modified version,
  please make clear that you modified it, and how.
- If you add features that could be useful to others,
  please at least consider sharing them with me and the community.

----------------------------------------------------------------------------
TRANSLATING NAME OF THE OPTION USING CTE
You need to set up something else if you want to translate the name of
this option. 

In CTE's generated scripts, go to your translated language and find the extra
section (in AllDataBases if you have all databases in one file). 
In User-Defined variables, add this, without any quotes:

instantTextName=Name you want

*/

/*:es
@plugindesc v.1.0 Da la opción de que el texto salga al instante.
@author Jatopian + CeciDibujera

@param Default
@text Opción por defecto
@desc Elige si el texto instantáneo está activado por defecto en el menú.
@type boolean
@on Activado
@off Desactivado
@default true

@param text
@text Nombre de la opción
@desc Escribe cómo quieres que se llame la opción en el menú por defecto.
@type text
@default Texto instantáneo

@param cteUsed
@text ¿Estás usando CTE?
@desc Ponlo en true si estás usando Custom Translation Engine.
@type boolean
@default false

@help InstantText_CTE_fix v.1.0
Este plugin da la opción para que el texto de los mensajes aparezca
instantáneamente, en vez de por defecto (letra a letra).

El jugador puede desactivar o activar esta opción en el menú de opciones.
El desarrollador puede elegir si por defecto está encendido o apagado.

Este plugin fue creado originalmente por Jatopian, así que debes
acreditar a esta persona. CeciDibujera añadió la compatibilidad con
Custom Translation Engine de vgperson, para que esta opción en el menú
pueda traducirse. Además, la posibilidad de cambiar cómo se llama esta
opción en el idioma original, uses CTE o no. Y tradujo esta ayuda al español.

Pon este plugin debajo de cualquier otro plugin que cambie tu menú
de opciones. Si usas CTE, este plugin debe ir debajo de ese también.

Términos de uso originales (traducidos):
- Gratis para juegos comerciales y no comerciales.
- Acredita (a Jatopian) en un sitio accesible.
- Puedes modificarlo, pero si redistribuyes la versión modificada,
deja claro que lo has cambiado y cómo.
- Si añades funcionalidades que puedan ser útiles a otras personas,
por favor, considera compartirlo conmigo y con la comunidad.

----------------------------------------------------------------------------
TRADUCIR EL NOMBRE DE LA OPCIÓN USANDO CTE
Necesitas hacer una cosa más si quieres traducir el nombre de esta opción.

En los scripts generados por CTE, ve al idioma traducido y busca la sección
extra (en AllDatabases si tienes toda la base de datos en un sólo archivo).
En User-Defined variables, añade esto, sin comillas ni nada:

instantTextName=El nombre que quieras

*/

(function() {
  var params = PluginManager.parameters("InstantText");
  var pInstantText = String(params["Default"]);
 
  //=============================================================================
  // ConfigManager
  //=============================================================================
  getDefaultInstantText = function() {
    if (pInstantText.match(/true/i)) {
      return true;
    } else if (pInstantText.match(/false/i)) {
      return false;
    } else {
      return Utils.isNwjs();
    }
  };

    ConfigManager.instantText = getDefaultInstantText();

    var alias_cm_md = ConfigManager.makeData;
    ConfigManager.makeData = function() {
        var config = alias_cm_md.call(this);
        config.instantText = this.instantText;
        return config;
    };

    var alias_cm_ad = ConfigManager.applyData;
    ConfigManager.applyData = function(config) {
        alias_cm_ad.call(this, config);
        this.instantText = this.readConfigInstantText(config, 'instantText');
    };

    ConfigManager.readConfigInstantText = function(config, name) {
        var value = config[name];
        if (value !== undefined) {
            return value;
        } else {
            return getDefaultInstantText();
        }
    };
 
  //=============================================================================
  // Window_Options
  //=============================================================================
  var alias_wo_ago = Window_Options.prototype.addGeneralOptions;
  Window_Options.prototype.addGeneralOptions = function() {
      alias_wo_ago.call(this);
      //Change text to what you set in the plugin
      var text = PluginManager.parameters('InstantText_CTE_fix')["text"]
      //Checks if CTE is used so that name of the option changes between languages
      if (PluginManager.parameters('InstantText_CTE_fix')["cteUsed"] == "true"){
        if (CTE.getString("instantTextName")){
            text = CTE.getString("instantTextName")
        }
      }
      this.addCommand(text, 'instantText');
  };
 
  //=============================================================================
  // Window Message
  //=============================================================================
  var alias_wm_udf = Window_Message.prototype.updateShowFast;
  Window_Message.prototype.updateShowFast = function() {
    alias_wm_udf.call(this);
    if (ConfigManager.instantText === true) {
      this._showFast = true
    }
  }
 
})();