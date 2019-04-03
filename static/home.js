var dict = [
  {"item" : "SUBURBAN",
  "count" : 20},
  {"item" : "PICKUP TRUCK",
    "count" : 19},
    {
      "item" : "4 DOOR SEDAN",
      "count" : 18
    }, {
            "item" : "DUMP",
            "count" : 17
          }, {
            "item" : "BICYCLIST",
            "count" : 16
          }, {
            "item" : "TAXI",
            "count" : 15
          }, {
            "item" : "2 DOOR SEDAN",
            "count" : 14
          }, {
            "item" : "UNKNOWN TRUCK",
            "count" : 13
          }, {
            "item" : "FLAT BED TRUCK",
            "count" : 12
          }, {
            "item" : "REFRIGERATOR TRUCK",
            "count" : 11
          }, {
            "item" : "DELIVERY TRUCK",
            "count" : 10
          }, {
            "item" : "CONVERTIBLE",
            "count" : 9
          }, {
            "item" : "VAN TRUCK",
            "count" : 8
          }, {
            "item" : "UNKNOWN VEHICLE",
            "count" : 7
          }, {
            "item" : "PEDESTRIAN",
            "count" : 6
          }, {
            "item" : "UTILITY",
            "count" : 5
          }, {
            "item" : "SEDAN",
            "count" : 4
          }, {
            "item" : "TRACTOR",
            "count" : 3
          }, {
            "item" : "BUS (OMNIBUS)",
            "count" : 2
          }, {
            "item" : "STAKE TRUCK",
            "count" : 1
          }
        ]

var crashes = {"Type": dict,
        "Action":[{
            "item" : "Changing Lanes",
            "count" : 20
          }, {
            "item" : "Going Straight Ahead",
            "count" : 19
          }, {
            "item" : "Parked",
            "count" : 18
          }, {
            "item" : "Entering Parked Position",
            "count" : 17
          }, {
            "item" : "Slowing or Stopping",
            "count" : 16
          }, {
            "item" : "Backing",
            "count" : 15
          }, {
            "item" : "Stopped in Traffic",
            "count" : 14
          }, {
            "item" : "Making Right Turn",
            "count" : 13
          }, {
            "item" : "Making Left Turn",
            "count" : 12
          }, {
            "item" : "Merging",
            "count" : 11
          }, {
            "item" : "Making U Turn",
            "count" : 10
          }, {
            "item" : "Unknown",
            "count" : 9
          }, {
            "item" : "Starting in Traffic",
            "count" : 8
          }, {
            "item" : "Starting from Parking",
            "count" : 7
          }, {
            "item" : "Other",
            "count" : 6
          }, {
            "item" : "Avoiding Object in Roadway",
            "count" : 5
          }, {
            "item" : "Overtaking/Passing",
            "count" : 4
          }, {
            "item" : "Not Applicable",
            "count" : 3
          }, {
            "item" : "Making Right Turn on Red",
            "count" : 2
          }, {
            "item" : "Police Pursuit",
            "count" : 1
          }
        ],

        "Direction": [{
            "item" : "West",
            "count" : 20
          }, {
            "item" : "East",
            "count" : 19
          }, {
            "item" : "North",
            "count" : 18
          }, {
            "item" : "South",
            "count" : 17
          }, {
            "item" : "Southwest",
            "count" : 16
          }, {
            "item" : "Unknown",
            "count" : 15
          }, {
            "item" : "Southeast",
            "count" : 14
          }, {
            "item" : "Northwest",
            "count" : 13
          }, {
            "item" : "Northeast",
            "count" : 12
          }, {
            "item" : "Not Applicable",
            "count" : 11
          }, {
            "item" : "Not Entered",
            "count" : 10
          }
      ],
      "Year":[{
            "item" : "2012",
            "count" : 20
          }, {
            "item" : "2014",
            "count" : 19
          }, {
            "item" : "2007",
            "count" : 18
          }, {
            "item" : "2011",
            "count" : 17
          }, {
            "item" : "2004",
            "count" : 16
          }, {
            "item" : "2001",
            "count" : 15
          }, {
            "item" : "2006",
            "count" : 14
          }, {
            "item" : "2008",
            "count" : 13
          }, {
            "item" : "1995",
            "count" : 12
          }, {
            "item" : "2010",
            "count" : 11
          }, {
            "item" : "2015",
            "count" : 10
          }, {
            "item" : "2013",
            "count" : 9
          }, {
            "item" : "2005",
            "count" : 8
          }, {
            "item" : "1997",
            "count" : 7
          }, {
            "item" : "1999",
            "count" : 6
          }, {
            "item" : "1998",
            "count" : 5
          }, {
            "item" : "2003",
            "count" : 4
          }, {
            "item" : "2000",
            "count" : 3
          }, {
            "item" : "1993",
            "count" : 2
          }, {
            "item" : "2002",
            "count" : 1
          }
      ],
      "State":[
      {
        "item" : "NY",
        "count" : 20
      }, {
        "item" : "CT",
        "count" : 19
      }, {
        "item" : "SC",
        "count" : 18
      }, {
        "item" : "NJ",
        "count" : 17
      }, {
        "item" : "PA",
        "count" : 16
      }, {
        "item" : "OK",
        "count" : 15
      }, {
        "item" : "TN",
        "count" : 14
      }, {
        "item" : "FL",
        "count" : 13
      }, {
        "item" : "MD",
        "count" : 12
      }, {
        "item" : "MA",
        "count" : 11
      }, {
        "item" : "ON",
        "count" : 10
      }, {
        "item" : "CA",
        "count" : 9
      }, {
        "item" : "VT",
        "count" : 8
      }, {
        "item" : "GA",
        "count" : 7
      }, {
        "item" : "NC",
        "count" : 6
      }, {
        "item" : "NH",
        "count" : 5
      }, {
        "item" : "VA",
        "count" : 4
      }, {
        "item" : "IN",
        "count" : 3
      }, {
        "item" : "TX",
        "count" : 2
      }, {
        "item" : "OH",
        "count" : 1
      }
    ],
    "Occupants":[
    {
        "item" : "4",
        "count" : 20
      }, {
        "item" : "6",
        "count" : 19
      }, {
        "item" : "8",
        "count" : 18
      }, {
        "item" : "0",
        "count" : 17
      }, {
        "item" : "5",
        "count" : 16
      }, {
        "item" : "2",
        "count" : 15
      }, {
        "item" : "10",
        "count" : 14
      }, {
        "item" : "3",
        "count" : 13
      }, {
        "item" : "9",
        "count" : 12
      }, {
        "item" : "1",
        "count" : 11
      }, {
        "item" : "12",
        "count" : 10
      }, {
        "item" : "7",
        "count" : 9
      }, {
        "item" : "16",
        "count" : 8
      }, {
        "item" : "11",
        "count" : 7
      }, {
        "item" : "13",
        "count" : 6
      }, {
        "item" : "14",
        "count" : 5
      }
    ],
    "Model":[
    {
        "item" : "CHEVR",
        "count" : 20
      }, {
        "item" : "HONDA",
        "count" : 19
      }, {
        "item" : "BUICK",
        "count" : 18
      }, {
        "item" : "BMW",
        "count" : 17
      }, {
        "item" : "HYUND",
        "count" : 16
      }, {
        "item" : "TOYOT",
        "count" : 15
      }, {
        "item" : "PONTI",
        "count" : 14
      }, {
        "item" : "FORD",
        "count" : 13
      }, {
        "item" : "DODGE",
        "count" : 12
      }, {
        "item" : "NISSA",
        "count" : 11
      }, {
        "item" : "LEXUS",
        "count" : 10
      }, {
        "item" : "JEEP",
        "count" : 9
      }, {
        "item" : "CHRYS",
        "count" : 8
      }, {
        "item" : "ACURA",
        "count" : 7
      }, {
        "item" : "MAZDA",
        "count" : 6
      }, {
        "item" : "GMC",
        "count" : 5
      }, {
        "item" : "VOLKS",
        "count" : 4
      }, {
        "item" : "KIA",
        "count" : 3
      }, {
        "item" : "ME/BE",
        "count" : 2
      }, {
        "item" : "SUBAR",
        "count" : 1
      }
    ],
    "Primary":[
    {
            "item" : "Unsafe Lane Changing",
            "count" : 20
          }, {
            "item" : "Pavement Slippery",
            "count" : 19
          }, {
            "item" : "Not Applicable",
            "count" : 18
          }, {
            "item" : "Driver Inattention/Distraction*",
            "count" : 17
          }, {
            "item" : "Unsafe Speed",
            "count" : 16
          }, {
            "item" : "Backing Unsafely",
            "count" : 15
          }, {
            "item" : "Passing or Lane Usage Improper",
            "count" : 14
          }, {
            "item" : "Failure to Yield Right-of-Way",
            "count" : 13
          }, {
            "item" : "Not Entered",
            "count" : 12
          }, {
            "item" : "Alcohol Involvement",
            "count" : 11
          }, {
            "item" : "Unknown",
            "count" : 10
          }, {
            "item" : "Reaction to Other Uninvolved Vehicle",
            "count" : 9
          }, {
            "item" : "Fell Asleep",
            "count" : 8
          }, {
            "item" : "Driver Inexperience*",
            "count" : 7
          }, {
            "item" : "Following Too Closely",
            "count" : 6
          }, {
            "item" : "Traffic Control Device Disregarded",
            "count" : 5
          }, {
            "item" : "Turning Improperly",
            "count" : 4
          }, {
            "item" : "Obstruction/ Debris",
            "count" : 3
          }, {
            "item" : "Failure to Keep Right",
            "count" : 2
          }, {
            "item" : "Tire Failure/Inadequate",
            "count" : 1
          }
    ],
    "Secondary":[
    {
                "item" : "Not Applicable",
                "count" : 20
              }, {
                "item" : "Obstruction/ Debris",
                "count" : 19
              }, {
                "item" : "Traffic Control Device Disregarded",
                "count" : 18
              }, {
                "item" : "Pavement Slippery",
                "count" : 17
              }, {
                "item" : "Driver Inattention/Distraction*",
                "count" : 16
              }, {
                "item" : "Backing Unsafely",
                "count" : 15
              }, {
                "item" : "Not Entered",
                "count" : 14
              }, {
                "item" : "Failure to Yield Right-of-Way",
                "count" : 13
              }, {
                "item" : "Following Too Closely",
                "count" : 12
              }, {
                "item" : "Unknown",
                "count" : 11
              }, {
                "item" : "Animal's Action",
                "count" : 10
              }, {
                "item" : "Turning Improperly",
                "count" : 9
              }, {
                "item" : "Reaction to Other Uninvolved Vehicle",
                "count" : 8
              }, {
                "item" : "Passing or Lane Usage Improper",
                "count" : 7
              }, {
                "item" : "Unsafe Lane Changing",
                "count" : 6
              }, {
                "item" : "Unsafe Speed",
                "count" : 5
              }, {
                "item" : "Outside Car Distraction*",
                "count" : 4
              }, {
                "item" : "Failure to Keep Right",
                "count" : 3
              }, {
                "item" : "Alcohol Involvement",
                "count" : 2
              }, {
                "item" : "View Obstructed/Limited",
                "count" : 1
              }

    ]}

for(var cat in crashes){
  //var data = [{"value":30, 'name':'one'}, {"value":50, 'name':'two'}, {"value": 20, 'name':'three'}, {'value':40, 'name':'four'}]
  //var cat = "Primary";
  var info = crashes[cat]
  var data = []
  for(i = 0; i < info.length; i++){
    data[i] = {"value":info[i]["count"], 'name': i}
  }
  console.log(cat)
  console.log(data)
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
}

svg = d3.select("body").select("svg")
svg.attr("width", "100%")
svg.attr("height", "100%")
groups = svg.selectAll("g");
for(i = 0; i < groups.length; i++){
  groups[i].attr("transform", "translate(" + i * 400 + ", 150)");
}
