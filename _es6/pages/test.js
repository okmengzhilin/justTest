
/*
引入依赖
*/

import Init from "../module/test/init.js";
import $ from "jquery";


/*
引入需要编译的sass
*/
import mycss from "../../_sass/pages/style.scss";



var init = new Init();

var param = 2;

init.init();

$("#test").html(init.b);
// console.log(init.b);