var css = require('css');

export var flex_dependencies = {"flex-direction": ["row", "row-reverse", "column", "column-reverse"], "flex-wrap": ["nowrap", "wrap", "wrap-reverse"], "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "start", "end", "left", "right"], "align-items": ["stretch", "flex-start", "flex-end", "center", "baseline", "first baseline", "last baseline", "start", "end", "self-start", "self-end"], "align-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "stretch", "first baseline", "last baseline", "start", "end"]};

var default_properties = {'flex-direction': 'row', 'flex-wrap': 'nowrap', 'justify-content': 'flex-start', 'align-items': 'stretch'};

function get_property_value(node, mapping){
	if (node.type == 'declaration'){
		var property = String(node.property);
		if (property in mapping){
			// console.log("property is " + property + " " + node.value + " or " + mapping[property]);
			if(mapping[property] != node.value){
				mapping[property] += node.value;
			}
		}
		else{
			mapping[String(node.property)] = node.value;
		}
	}
	else if (node.type == 'media' || node.type == 'stylesheet'){
		node.rules.forEach(function (rule, index) {
			get_property_value(rule, mapping);
		})
	}
	else if (node.type == 'rule'){
		node.declarations.forEach(function (declaration, index) {
			get_property_value(declaration, mapping);
		})
	}
	return mapping;
}
function parse_css(css_code){
	var obj = css.parse(css_code);
	var mapping = new Object();
	obj.stylesheet.rules.forEach(function (rule, index) {
		mapping = get_property_value(rule, mapping);
	})
	return mapping;
}

export function generate_highlighted_properties(css1, css2){
	var css_mapping1 = parse_css(css1);
	var css_mapping2 = parse_css(css2);
	var tier1 = new Set();
	var tier2 = new Set();
	var additional_properties1 = new Set();
	var additional_properties2 = new Set();
	for (var key in css_mapping1){
		if (key in css_mapping2){
			if (css_mapping1[key] == css_mapping2[key]){
				tier1.add(key);
			}
			else{
				tier2.add(key);
			}
		}
	}
	if(css_mapping1['display'] === "flex" && css_mapping2['display'] === "flex"){
		for (var property in flex_dependencies){
			if (property in css_mapping1 && property in css_mapping2){
				continue
			}
			else if (property in css_mapping1 && !(property in css_mapping2)){
				if (css_mapping1[property] === flex_dependencies[property][0]){
					tier1.add(property);
				}
				else{
					tier2.add(property);
				}
				additional_properties2.add(property);
			}
			else if (property in css_mapping2 && !(property in css_mapping1)){
				if (css_mapping2[property] === flex_dependencies[property][0]){
					tier1.add(property);
				}
				else{
					tier2.add(property);
				}
				additional_properties1.add(property);
			}
			else{
				tier1.add(property);
				additional_properties1.add(property);
				additional_properties2.add(property);
			}
		}
	}
	return {'tier1': tier1, 'tier2': tier2, 'additional_properties1': additional_properties1, 'additional_properties2': additional_properties2};
}



var blog_css = ".blog-feed__wrap { display: grid; grid-template-columns: 1fr; grid-template-rows: auto; grid-gap: 20px; } @media (min-width: 40em) { .blog-feed__wrap { grid-template-columns: 1fr 1fr; background-color: #3456} } @media (min-width: 60em) { .blog-feed__wrap { grid-template-columns: 1fr 1fr 1fr; } }";
var icon_css = ".grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr)); grid-auto-rows: min-content; grid-column-gap: 0.375rem; grid-row-gap: 0.375rem; grid-auto-flow: dense;}";

var single_article_css = ".cf-item { background-color: #ffffff; padding: 1em; display: flex; flex-direction: column; position: relative; background-color: #f8f8f8; }";

var single_icon_css = ".grid-item { background-color: #757575; display: flex; flex-direction: row; justify-content: center; padding: 1rem; text-align: center; }";

var grid_masterclass_css = "@media (max-width: 991px) {.grid {grid-template-columns: 1fr 1fr 1fr 25%;grid-template-rows: auto 1fr 1fr 1fr auto auto auto auto;}}.grid {-webkit-align-content: start;align-content: start;grid-column-gap: 0px;grid-row-gap: 0px;grid-template-columns: 1fr 1fr 1fr 25%; grid-template-rows: 1fr 1fr 1fr 0.5fr;}.w-layout-grid {display: grid; grid-template-columns: 1fr 1fr;grid-template-rows: auto auto;grid-row-gap: 16px;grid-column-gap: 16px;}* {-webkit-box-sizing: border-box; box-sizing: border-box;}"

var flex_masonry_css = ".masonry--h {margin-left: -8px;counter-reset: brick;}.masonry--h {flex-flow: row wrap;}.masonry {display: flex;width: 100%;}div {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}* {box-sizing: inherit;}"

var zendesk_css = ".p-pricing-page .hero-three-up .row-product-cards {align-items: stretch;}@media (min-width: 800px) {.hero .container .row {align-items: center;}}@media (min-width: 1115px) {.grid.padded .row {margin: 0 -1.5rem;}}.grid .row {display: flex;flex-wrap: wrap;margin: 0 -8px;}* {box-sizing: inherit;}"

var slack_css = "@media (min-width: 48rem) {.o-section__pricing-grid .o-pricing-grid__container {flex-wrap: nowrap;}}.o-section__pricing-grid .o-pricing-grid__container__border-primary {border-top: 4px solid #611f69;}.o-section__pricing-grid .o-pricing-grid__container {display: flex;flex-wrap: wrap;padding-bottom: 0;padding-top: 1rem; align-items: flex-start;}"

var dribbble_css = "body.grid-large ol.dribbbles {display: flex;flex-wrap: wrap;flex-direction: row;} @media (max-width: 1539px) and (min-width: 1411px) {body.grid-large ol.dribbbles {max-width: 1350px;}}"


var flaticon_css = ".icons {display: flex; flex-wrap: wrap; align-items: flex-start;}.icons {align-content: flex-start;margin-bottom: 20px;width: 100%;}"

export var css_strings = {"blog" : blog_css, "icon": icon_css, "single_article": single_article_css, "single_icon_css": single_icon_css, "masterclass": grid_masterclass_css, "masonry": flex_masonry_css, "zendesk": zendesk_css, "slack": slack_css, "dribbble": dribbble_css, "flaticon": flaticon_css};

// console.log(parse_css(single_icon_css));

// console.log(generate_highlighted_properties(blog_css, icon_css));
// generate_highlighted_properties(single_article_css, single_icon_css);
// console.log(generate_highlighted_properties(grid_masterclass_css, flex_masonry_css))

// console.log(generate_highlighted_properties(zendesk_css, slack_css))

// console.log(generate_highlighted_properties(slack_css, dribbble_css))
