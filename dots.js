<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.slidecontainerbig {
  width: 100%;
}

.sliderbig {
  -webkit-appearance: none;
  width: 70%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.sliderbig:hover {
  opacity: 1;
}

.sliderbig::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #6495ED;
  cursor: pointer;
}

.sliderbig::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #6495ED;
  cursor: pointer;
}
img {
    margin-right: 100px;
}
h1 { font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px; } h3 { font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 15.4px; } p { font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; } blockquote { font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif; font-size: 21px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 30px; } pre { font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 18.5714px; }
</style>
</head>
<body>
<h1>MNIST Result</h1>
<p id="p2">Drag the slider to display the result.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b>Example Image in Training Set</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Generated Images</b></p>
<p id="p1"></p>


<div class="slidecontainerbig">
  <input type="range" min="1" max="7" value="20" class="sliderbig" id="myRange">
  <p>Number of Objects in Training Set: <span id="demo"></span></p>
</div>

<script>
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var y = document.getElementById("p1");

    
slider.oninput = function() {
    if (y.childNodes.length == 2) {
    	y.removeChild(y.childNodes[0]);
    	y.removeChild(y.childNodes[0]);    			
    }
    //var y = document.getElementById("p1");
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://raw.githubusercontent.com/hyren/clevr-dataset-gen/master/imgs/dots_gan_"+this.value+".png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    y.appendChild(x);
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://raw.githubusercontent.com/hyren/clevr-dataset-gen/master/imgs/dots_gen_"+this.value+".png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    y.appendChild(x);
	output.innerHTML = slider.value;
}
</script>

</body>
</html>

