<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}
</style>
</head>
<body>
<h1>MNIST Result</h1>
<p id="p2">Drag the slider to display the result.</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Training Distribution&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Generated Distribution (CNN)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Generated Distribution (RNN) </p>
<p id="p1"></p>


<div class="slidecontainer">
  <input type="range" min="1" max="10" value="30" class="slider" id="myRange">
  <p>Value: <span id="demo"></span></p>
</div>

<script>
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  //output.innerHTML = this.value;
  
  /*
  if (this.value == 5) {
    var y = document.getElementById("p1");
    //window.alert(r);
    y.removeChild(y.childNodes[0]);
  }
  
  if (this.value == 1) {
    var y = document.getElementById("p1");
    if (y.childNodes.length == 2) {
    	y.removeChild(y.childNodes[0]);
    	y.removeChild(y.childNodes[0]);
    }
    //var y = document.getElementById("p1");
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://raw.githubusercontent.com/hyren/clevr-dataset-gen/master/imgs/WGAN-GP.CNN.64.1.png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    y.appendChild(x);
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://raw.githubusercontent.com/hyren/clevr-dataset-gen/master/imgs/train_1.png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    y.appendChild(x);
    //document.body.appendChild(x);
  }
  */
    var y = document.getElementById("p1");
    if (y.childNodes.length == 3) {
    	y.removeChild(y.childNodes[0]);
    	y.removeChild(y.childNodes[0]);
    	y.removeChild(y.childNodes[0]);
    }
    //var y = document.getElementById("p1");
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://raw.githubusercontent.com/hyren/clevr-dataset-gen/master/imgs/train_"+this.value+".png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    y.appendChild(x);
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://raw.githubusercontent.com/hyren/clevr-dataset-gen/master/imgs/WGAN-GP.CNN.64."+this.value+".png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    y.appendChild(x);
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://raw.githubusercontent.com/hyren/clevr-dataset-gen/master/imgs/WGAN-GP.RNN.64."+this.value+".png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    y.appendChild(x);
    //document.body.appendChild(x);
}
</script>

</body>
</html>

