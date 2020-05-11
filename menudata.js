/*
@ @licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2017 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var menudata={children:[
{text:"BoI: AB+ Lua Docs",url:"index.html"},
{text:"Tutorials",url:"#",children:[
{text:"Debug Console",url:"debug_console_primer.html"},
{text:"Debugging using ZeroBrane Studio",url:"debugging.html"},
{text:"Loading other .lua files",url:"remarks.html"},
{text:"Writing Shaders",url:"screen_shaders.html"},
{text:"Render text",url:"special_chars.html"},
{text:"Add costumes (no LUA)",url:"adding_costumes.html"},
]},
{text:"Frequently used",url:"#",children:[
{text:"Entity",url:"class_entity.html",children:[
{text:"EntityPlayer",url:"class_entity_player.html"},
{text:"EntityNPC",url:"class_entity_n_p_c.html"},
{text:"EntityEffect",url:"class_entity_effect.html"},
]},
{text:"Isaac.",url:"namespace_isaac.html"},
{text:"Game()",url:"class_game.html"},
{text:"Room()",url:"class_room.html"},
{text:"Level()",url:"class_level.html"},
{text:"Mod Callbacks",url:"group__enums.html#ga84d8f7ea5c80b37ad1c55b2a97286eb1"},

]},


/*
  [ "[Tutorial] Debug Console", "debug_console_primer.html", [
      [ "Commands ", "debug_console_primer.html#commands", [
        [ "spawn", "debug_console_primer.html#spawn", null ],
        [ "goto", "debug_console_primer.html#goto", null ],
        [ "stage", "debug_console_primer.html#stage", null ],
        [ "gridspawn", "debug_console_primer.html#gridspawn", null ],
        [ "debug", "debug_console_primer.html#debug", null ],
        [ "giveitem", "debug_console_primer.html#giveitem", [
          [ "Item and trinket syntax", "debug_console_primer.html#giveitem_item", null ],
          [ "Pill syntax", "debug_console_primer.html#giveitem_pill", null ],
          [ "Card syntax", "debug_console_primer.html#giveitem_card", null ]
        ] ],
        [ "remove", "debug_console_primer.html#remove", null ],
        [ "costumetest", "debug_console_primer.html#costumetest", null ],
        [ "restart", "debug_console_primer.html#restart", null ],
        [ "repeat", "debug_console_primer.html#repeat", null ],
        [ "clearseeds", "debug_console_primer.html#clearseeds", null ],
        [ "seed", "debug_console_primer.html#seed", null ],
        [ "challenge", "debug_console_primer.html#challenge", null ],
        [ "combo", "debug_console_primer.html#combo", null ],
        [ "macro", "debug_console_primer.html#macro", null ],
        [ "curse", "debug_console_primer.html#curse", null ],
        [ "reseed", "debug_console_primer.html#reseed", null ],
        [ "copy", "debug_console_primer.html#copy", null ],
        [ "clear", "debug_console_primer.html#clear", null ],
        [ "lua", "debug_console_primer.html#lua", null ],
        [ "luarun", "debug_console_primer.html#luarun", null ],
        [ "luamod", "debug_console_primer.html#luamod", null ],
        [ "luamem", "debug_console_primer.html#luamem", null ]
      ] ]
    ] ],
    [ "[Tutorial] Debugging using ZeroBrane Studio", "debugging.html", null ],
    [ "[Tutorial] Loading other .lua files", "remarks.html", null ],
    [ "[Tutorial] Writing shaders", "screen_shaders.html", null ],
    [ "[Tutorial] Render text", "special_chars.html", null ],
    [ "[Tutorial] Add costumes (no LUA)", "adding_costumes.html", null ],

*/



//{text:"Modules",url:"modules.html"},
/*{text:"Namespaces",url:"namespaces.html",children:[
{text:"Namespace List",url:"namespaces.html"},
{text:"Namespace Members",url:"namespacemembers.html",children:[
{text:"All",url:"namespacemembers.html",children:[
{text:"a",url:"namespacemembers.html#index_a"},
{text:"c",url:"namespacemembers.html#index_c"},
{text:"d",url:"namespacemembers.html#index_d"},
{text:"e",url:"namespacemembers.html#index_e"},
{text:"f",url:"namespacemembers.html#index_f"},
{text:"g",url:"namespacemembers.html#index_g"},
{text:"h",url:"namespacemembers.html#index_h"},
{text:"i",url:"namespacemembers.html#index_i"},
{text:"l",url:"namespacemembers.html#index_l"},
{text:"r",url:"namespacemembers.html#index_r"},
{text:"s",url:"namespacemembers.html#index_s"},
{text:"w",url:"namespacemembers.html#index_w"}]},
{text:"Functions",url:"namespacemembers_func.html",children:[
{text:"a",url:"namespacemembers_func.html#index_a"},
{text:"c",url:"namespacemembers_func.html#index_c"},
{text:"d",url:"namespacemembers_func.html#index_d"},
{text:"e",url:"namespacemembers_func.html#index_e"},
{text:"f",url:"namespacemembers_func.html#index_f"},
{text:"g",url:"namespacemembers_func.html#index_g"},
{text:"h",url:"namespacemembers_func.html#index_h"},
{text:"i",url:"namespacemembers_func.html#index_i"},
{text:"l",url:"namespacemembers_func.html#index_l"},
{text:"r",url:"namespacemembers_func.html#index_r"},
{text:"s",url:"namespacemembers_func.html#index_s"},
{text:"w",url:"namespacemembers_func.html#index_w"}]}]}]},
{text:"Classes",url:"annotated.html",children:[
{text:"Class List",url:"annotated.html"},
{text:"Class Index",url:"classes.html"},
{text:"Class Hierarchy",url:"hierarchy.html"},
{text:"Class Members",url:"functions.html",children:[
{text:"All",url:"functions.html",children:[
{text:"_",url:"functions.html#index__"},
{text:"a",url:"functions_a.html#index_a"},
{text:"b",url:"functions_b.html#index_b"},
{text:"c",url:"functions_c.html#index_c"},
{text:"d",url:"functions_d.html#index_d"},
{text:"e",url:"functions_e.html#index_e"},
{text:"f",url:"functions_f.html#index_f"},
{text:"g",url:"functions_g.html#index_g"},
{text:"h",url:"functions_h.html#index_h"},
{text:"i",url:"functions_i.html#index_i"},
{text:"k",url:"functions_k.html#index_k"},
{text:"l",url:"functions_l.html#index_l"},
{text:"m",url:"functions_m.html#index_m"},
{text:"n",url:"functions_n.html#index_n"},
{text:"o",url:"functions_o.html#index_o"},
{text:"p",url:"functions_p.html#index_p"},
{text:"q",url:"functions_q.html#index_q"},
{text:"r",url:"functions_r.html#index_r"},
{text:"s",url:"functions_s.html#index_s"},
{text:"t",url:"functions_t.html#index_t"},
{text:"u",url:"functions_u.html#index_u"},
{text:"v",url:"functions_v.html#index_v"},
{text:"w",url:"functions_w.html#index_w"},
{text:"x",url:"functions_x.html#index_x"},
{text:"y",url:"functions_y.html#index_y"}]},
{text:"Functions",url:"functions_func.html",children:[
{text:"_",url:"functions_func.html#index__"},
{text:"a",url:"functions_func_a.html#index_a"},
{text:"b",url:"functions_func_b.html#index_b"},
{text:"c",url:"functions_func_c.html#index_c"},
{text:"d",url:"functions_func_d.html#index_d"},
{text:"e",url:"functions_func_e.html#index_e"},
{text:"f",url:"functions_func_f.html#index_f"},
{text:"g",url:"functions_func_g.html#index_g"},
{text:"h",url:"functions_func_h.html#index_h"},
{text:"i",url:"functions_func_i.html#index_i"},
{text:"k",url:"functions_func_k.html#index_k"},
{text:"l",url:"functions_func_l.html#index_l"},
{text:"m",url:"functions_func_m.html#index_m"},
{text:"n",url:"functions_func_n.html#index_n"},
{text:"o",url:"functions_func_o.html#index_o"},
{text:"p",url:"functions_func_p.html#index_p"},
{text:"q",url:"functions_func_q.html#index_q"},
{text:"r",url:"functions_func_r.html#index_r"},
{text:"s",url:"functions_func_s.html#index_s"},
{text:"t",url:"functions_func_t.html#index_t"},
{text:"u",url:"functions_func_u.html#index_u"},
{text:"v",url:"functions_func_v.html#index_v"},
{text:"w",url:"functions_func_w.html#index_w"}]},
{text:"Variables",url:"functions_vars.html",children:[
{text:"a",url:"functions_vars.html#index_a"},
{text:"b",url:"functions_vars_b.html#index_b"},
{text:"c",url:"functions_vars_c.html#index_c"},
{text:"d",url:"functions_vars_d.html#index_d"},
{text:"e",url:"functions_vars_e.html#index_e"},
{text:"f",url:"functions_vars_f.html#index_f"},
{text:"g",url:"functions_vars_g.html#index_g"},
{text:"h",url:"functions_vars_h.html#index_h"},
{text:"i",url:"functions_vars_i.html#index_i"},
{text:"k",url:"functions_vars_k.html#index_k"},
{text:"l",url:"functions_vars_l.html#index_l"},
{text:"m",url:"functions_vars_m.html#index_m"},
{text:"n",url:"functions_vars_n.html#index_n"},
{text:"o",url:"functions_vars_o.html#index_o"},
{text:"p",url:"functions_vars_p.html#index_p"},
{text:"q",url:"functions_vars_q.html#index_q"},
{text:"r",url:"functions_vars_r.html#index_r"},
{text:"s",url:"functions_vars_s.html#index_s"},
{text:"t",url:"functions_vars_t.html#index_t"},
{text:"u",url:"functions_vars_u.html#index_u"},
{text:"v",url:"functions_vars_v.html#index_v"},
{text:"w",url:"functions_vars_w.html#index_w"},
{text:"x",url:"functions_vars_x.html#index_x"},
{text:"y",url:"functions_vars_y.html#index_y"}]}]}]}
*/
]}
