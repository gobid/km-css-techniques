// import { saveAs } from 'file-saver';
var slider = document.getElementById("myRange");
var pageWidth = document.getElementById("pageWidth");
pageWidth.innerHTML = slider.value/ parseFloat(getComputedStyle(document.querySelector('#articles_page'))['font-size']) +" em"; // Display the default slider value
var num_visual_outcomes = 0;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    pageWidth.innerHTML = slider.value/ parseFloat(getComputedStyle(document.querySelector('#articles_page'))['font-size'])+" em";
    document.getElementById("articles_page").style.width = slider.value + "px";
	dcoument.getElementById("icons_page").style.width = slider.value + "px";
	console.log('printing here');
	
	const articlesIFrame = document.getElementById('articles_page');
	const iconsIFrame = document.getElementById('icons_page');
	var feed_wrap = iframe.contentDocument.getElementsByClassName("blog-feed__wrap")[0];
}

function addVisualOutcome(){
    var input = document.createElement("input");
    input.classList.add("form-control");
	input.name = "visual_outcome";
	input.type = "text";
	input.placeholder = "new visual observation"
    document.getElementById("outcomes").appendChild(input);
    num_visual_outcomes += 1;
}

function updateDropdown() { 
	selectElement =  
			document.querySelector('#outcome_dropdown'); 

	output = selectElement.value;
	console.log(output);

	document.querySelector('#outcome_description').innerHTML = "<%= visualOutcomes["+selectElement.value + "] %>";
	// 		= output; 
}

function populateEditor(){
    // for(var i=0; i<num_visual_outcomes; i++){

    // }
    // var dropdown = document.getElementById("outcome_dropdown");
    console.log("new file");
    var blob = new Blob(["Welcome to Websparrow.org."],
                { type: "text/plain;charset=utf-8" });
    saveAs(blob, "static.txt");
}