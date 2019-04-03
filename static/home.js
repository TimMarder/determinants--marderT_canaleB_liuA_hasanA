var data = [{"value":30, 'name':'one'}, {"value":50, 'name':'two'}, {"value": 20, 'name':'three'}, {'value':40, 'name':'four'}]
const w = 300,
        h = 300,
        r = 100
        color = d3.scaleOrdinal(d3.schemeCategory10)

data = d3.entries(data)

var svg = d3.selectAll('body').select('svg')
                                .attr("width", w)
                                .attr('height', h)
                                .append('g')
                                    .attr('transform', `translate(${w / 2}, ${h / 2})`)

const pie = d3.pie().value((d)=>{console.log(d); return d.value.value}).sort(null)

const arc = d3.arc().innerRadius(0).outerRadius(r)

function update() {
    const path = svg.selectAll('path')
                    .data(pie(data))
    path.enter().append('path')
                .attr('fill', (d, i)=>color(i))
                .attr('d', arc)
                .attr('stroke', 'white')
                .attr('stroke-width', '6px')
                .append('text')
                .text((d)=>{ console.log(d); return d.data.value.name})
}
update()
