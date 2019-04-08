var w = 300,
      h = 300,
      r = 100,
      mover = false,
      navOpen = false,
      color = d3.scaleOrdinal(d3.schemeCategory10)
var Data = []
for (var a in crashes) {
  let ab = crashes[a]
  for (i = 0; i < ab.length; i++) {
    Data[i] = { "value":ab[i]['count'], 'name': ab[i]['item']}
  }
}
Data = d3.entries(Data)
console.log(Data)
  for(var cat in crashes){
    //var data = [{"value":30, 'name':'one'}, {"value":50, 'name':'two'}, {"value": 20, 'name':'three'}, {'value':40, 'name':'four'}]
    //var cat = "Primary";
    // console.log(crashes)
    // let info = crashes[cat]
    // let data = []
    // for(i = 0; i < info.length; i++){
    //   data[i] = {"value":info[i]["count"], 'name': info[i]['item']}
    // }
    ////console.log(cat)
    ////console.log(data)

    // data = d3.entries(data)
    // console.log(data)
  //create a div within div class home and create a svg within that new div
    let svg = d3.selectAll('body').selectAll('div').select("#home").insert("svg")
                                    .attr("width", w)
                                    .attr('height', h)
                                    .append('g')
                                        .attr('transform', `translate(${w / 2}, ${h / 2})`);



    //console.log("SVG")
    //console.log(svg)

    const pie = d3.pie().value((d)=>{/**console.log(d);*/ return d.value.value}).sort(null)

    const arc = d3.arc().innerRadius(0).outerRadius(r)

    function update() {
        const path = svg.selectAll('path')
                        .data(pie(Data))
        path.enter().append('path')
                    .attr('fill', (d, i)=>color(i))
                    .attr('d', arc)
                    .attr('stroke', 'white')
                    .attr('stroke-width', function() {
                      return `${Math.ceil(10 / Data.length)}px`
                  })

    }
    update()
    const text = svg.selectAll('text').data(Data)
    text.enter().append('text')
                  .text((d)=>{ return d.value.name})
                  .attr('x', 150)
                  .attr('y', 150)
                  .attr('fill', 'black')
  }

  var svg = document.getElementsByTagName('svg')
  for (i = 0; i < svg.length; i++) {
    var text = d3.select(svg[i]).selectAll('text').data(Data)
    var text_length = 150 - 3 * text['_groups'][0][i].innerHTML.length
    // console.log(text_length)
    // console.log(text['_groups'][0][i])
    d3.select(svg[i]).append('text').text(text['_groups'][0][i]['innerHTML']).attr('x', ()=>text_length).attr('y', 280).attr('fill', 'black')
  }


// NAVBAR STUFFS

// opening and closing
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  var svg = document.getElementsByTagName('svg')
  for (i = 0; i < svg.length; i++) {
    d3.select(svg[i]).select('rect').attr('fill', '#999999')
  }
  navOpen = true
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
  var svg = document.getElementsByTagName('svg')
  for (i = 0; i < svg.length; i++) {
    d3.select(svg[i]).select('rect').attr('fill', 'white')
  }
  navOpen = false
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
 * @param {PointerEvent} e an element, can be either "path" or "svg"
 */
var expand = function(e) {
  // console.log(e)
  if (mover) {
    r = 100
  }else{
    r = 125
  }
  if (e['target'].tagName == "svg") {
    console.log("here")
    while (e['target'].lastChild) {
      e['target'].removeChild(e['target'].lastChild)
    }
    d3.select(e['target']).append('rect').attr('x', 0).attr('y', 0).attr('width', w).attr('height', h).attr('fill', ()=>navOpen ? '#999999' : 'white')
    let chosen = d3.select(e['target']).append('g').attr('transform', `translate (${w / 2}, ${h / 2})`)
    const pie = d3.pie().value((d)=>d.value.value).sort(null)
    const arc = d3.arc().innerRadius(0).outerRadius(r)
    function update() {
      const path = chosen.selectAll('path')
                      .data(pie(Data))
      path.enter().append('path')
                  .attr('fill', (d, i)=>color(i))
                  .attr('d', arc)
                  .attr('stroke', 'white')
                  .attr('stroke-width', function() {
                    return `${Math.ceil(10 / Data.length)}px`
                })
    }
    update()
    const textA = chosen.selectAll('text').data(Data)
    textA.enter().append('text')
                  .text((d)=>{ return d.value.name})
                  .attr('x', 150)
                  .attr('y', 150)
                  .attr('fill', 'black')
    mover = !mover
  }
  var svg = document.getElementsByTagName('svg')
  // console.log(svg)
  var text = d3.select(e['target']).selectAll('text').data(Data)
  // console.log(text)
  for (i = 0; i < svg.length; i++) {
    if (e['target'] == svg[i]) {
      // console.log(`got an i of ${i}`)
      var text_length = 150 - 3 * text['_groups'][0][i].innerHTML.length
      // console.log(text['_groups'][0][i].innerHTML)
      var shift = mover ? 290 : 280
      d3.select(svg[i]).append('text').text(text['_groups'][0][i]['innerHTML']).attr('x', ()=>text_length).attr('y', shift).attr('fill', 'black')
    }
  }
}

var s = document.getElementsByTagName('svg')
for (i = 0; i < s.length; i++) {
  s[i].addEventListener('mouseenter', expand)
  s[i].addEventListener('mouseleave', expand)
}