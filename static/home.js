
var w = 300,
      h = 300,
      r = 100
      color = d3.scaleOrdinal(d3.schemeCategory10)

for(var cat in crashes){
  //var data = [{"value":30, 'name':'one'}, {"value":50, 'name':'two'}, {"value": 20, 'name':'three'}, {'value':40, 'name':'four'}]
  //var cat = "Primary";
  console.log(cat)
  let info = crashes[cat]
  let data = []
  for(i = 0; i < info.length; i++){
    data[i] = {"value":info[i]["count"], 'name': i}
  }
  //console.log(cat)
  //console.log(data)

  data = d3.entries(data)
//create a div within div class home and create a svg within that new div
  let svg = d3.selectAll('body').selectAll('div').select("#home").insert("svg")
                                  .attr("width", w)
                                  .attr('height', h)
                                  .append('g')
                                      .attr('transform', `translate(${w / 2}, ${h / 2})`);



  console.log("SVG")
  console.log(svg)

  const pie = d3.pie().value((d)=>{console.log(d); return d.value.value}).sort(null)

  const arc = d3.arc().innerRadius(0).outerRadius(r)

  function update() {
      const path = svg.selectAll('path')
                      .data(pie(data))
      path.enter().append('path')
                  .attr('fill', (d, i)=>color(i))
                  .attr('d', arc)
                  .attr('stroke', 'white')
                  .attr('stroke-width', function() {
		 	              return `${Math.ceil(10 / data.length)}px`
                })
                  .append('text')
                  .text((d)=>{ console.log(d); return d.data.value.name})
  }
  update()
  let text = svg.insert("text").data(crashes).enter().append("text")
  console.log("data!!!")
  let textLabels = text.attr("x", 0).attr("y", 0).text((d)=>{console.log(d);return d[cat];}).attr("font-family", "sans-serif").attr("font-size", "20px").attr("fill", "black");
}

// NAVBAR STUFFS

// opening and closing
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbutt");
var sticky = navbar.offsetTop;

// sticky for scrolling
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// DONE WITH NAVBAR STUFFS

//svg = d3.select("body").select("svg")
//svg.attr("width", "100%")
//svg.attr("height", "100%")
//groups = svg.selectAll("g");
//for(i = 0; i < groups.length; i++){
  //groups[i].attr("transform", "translate(" + i * 400 + ", 150)");
//}
//var groups = document.getElementsByTagName("g")
//groups[1].setAttribute("transform", "translate(500, 150)")

/**
 * Expands the pie chart to a larger amount
 * @param {HTMLElement} e an element, can be either "path" or "svg"
 */
var expand = function(e) {
  r = 150
  if (e.tagName.toLowerCase() == "svg") {
    while (e.lastChild) {
      e.removeChild(e.lastChild)
    }
    
  }
}
