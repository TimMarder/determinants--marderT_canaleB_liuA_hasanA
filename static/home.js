var data = [0.0, 0.1, 0.2, 0.3, 0.4, 0.0]

var svg = d3.select("svg");
var width = svg.attr("width");
var height = svg.attr("height");
var radius = Math.min(width, height) / 2;
var c = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var  color = d3.scaleOrdinal(['red','yellow','blue','orange','green']);

var pie = d3.pie();

var arc = d3.arc().innerRadius(0).outerRadius(radius);

var arcs = c.selectAll("arc").data(pie(data)).enter().append("c").attr("class", "arc");

arcs.append("path").attr("fill", function(d,i){
  return color(i);
}).attr("d", arc);
