ace.define("ace/theme/kuroir",[],(function(r,c,e){c.isDark=!1,c.cssClass="ace-kuroir",c.cssText="  .ace-kuroir .ace_gutter {  background: #F0F0F0;  color: #333;  }  .ace-kuroir .ace_print-margin {  width: 1px;  background: #F0F0F0;  }  .ace-kuroir {  background-color: #F0F0F0;  color: #363636;  }  .ace-kuroir .ace_cursor {  color: #202020;  }  .ace-kuroir .ace_marker-layer .ace_selection {  background: #c0c0c0;  }  .ace-kuroir.ace_multiselect .ace_selection.ace_start {  box-shadow: 0 0 3px 0px #F0F0F0;  }  .ace-kuroir .ace_marker-layer .ace_step {  background: rgb(198, 219, 174);  }  .ace-kuroir .ace_marker-layer .ace_bracket {  margin: -1px 0 0 -1px;  border: 1px solid rgba(0, 0, 0, 0.29);  }  .ace-kuroir .ace_marker-layer .ace_active-line {  background: #c0c0c030;  }  .ace-kuroir .ace_gutter-active-line {  background-color: #c0c0c030;  }  .ace-kuroir .ace_marker-layer .ace_selected-word {  border: 1px solid #c0c0c050;  }  .ace-kuroir .ace_invisible {  color: #BFBFBF  }  .ace-kuroir .ace_fold {  border-color: #363636;  }  .ace-kuroir .ace_constant{color:#3F9ADB;}.ace-kuroir .ace_constant.ace_numeric{color:#DB880F;}.ace-kuroir .ace_support{color:#104E8B;}.ace-kuroir .ace_support.ace_function{color:#005273;}.ace-kuroir .ace_support.ace_constant{color:#CF6A4C;}.ace-kuroir .ace_storage{color:#A52A2A;}.ace-kuroir .ace_invalid.ace_illegal{color:#FD1224;  background-color:rgba(255, 6, 0, 0.15);}.ace-kuroir .ace_invalid.ace_deprecated{text-decoration:underline;  font-style:italic;  color:#FD1732;  background-color:#F0F0F0;}.ace-kuroir .ace_string{color:#639300;}.ace-kuroir .ace_string.ace_regexp{color:#417E00;  background-color:#C9D4BE;}.ace-kuroir .ace_comment{color:rgba(148, 148, 148, 0.91);  background-color:rgba(220, 220, 220, 0.56);  border-radius: 10px;  padding: 0 2px;}.ace-kuroir .ace_variable{color:#333;}.ace-kuroir .ace_meta.ace_tag{color:#005273;}.ace-kuroir .ace_markup.ace_heading{color:#B8012D;  background-color:rgba(191, 97, 51, 0.051);}.ace-kuroir .ace_markup.ace_list{color:#8F5B26;}  .ace-kuroir .ace_entity.ace_name.ace_type{color: #FA75A3;}  .ace-kuroir .ace_entity.ace_name.ace_function{color: #2ECC71;}  .ace-kuroir .ace_keyword.ace_operator{color: #E36B5E;}  .ace-kuroir .ace_keyword.ace_control{color: #C0392B;}  ",r("../lib/dom").importCssString(c.cssText,c.cssClass,!1)})),ace.require(["ace/theme/kuroir"],(function(r){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=r)}));