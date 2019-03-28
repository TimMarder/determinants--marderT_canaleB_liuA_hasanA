# determinants--marderT_canaleB_liuA_hasanA
Team Determinants -- Tim Marder, Britni Canale, Alex Liu, Ahnaf Hasan

## Dataset
### [Motor Vehicle Crashes - Vehicle Information: Three Year Window](https://data.ny.gov/api/views/xe9x-a24f/rows.json?accessType=DOWNLOAD)
This dataset contains information about car crashes reported in New York State. It provides information such as car brand, model year, primary and secondary cause, actions surrounding the crash, and more.

## Presentation
### Home Page
The initial display will be of a series of pie charts or bar charts that show basic distribution of data by category. These will be shown in a grid to give the user an initial overview of the data being presented.

### Interactivity
To interact with the page, users can click on pie charts that interest them, which will expand them to full size, or they can select a category from a menu. This will display a full page chart with more specific information about the data. Users can then select additional categories and compare data from each to see what overlaps.

### Why this dataset?
This dataset will not only give users broad information about car crashes, but it will allow users to see more complex relationships that exist between different attributes of car crashes that the dataset provides. Users can see links between, for example, model year and primary cause of crash, which might reveal interesting things that would lead to more questions.

## D3 Utilization
We will be using [D3.js](www.d3js.org) to manipulate the DOM elements and have real-time updated visuals. The home page will have a [Population Pyramid](https://bl.ocks.org/mbostock/4062085) or a [Collapsible Force Layout](https://bl.ocks.org/mbostock/4062085) of various information such as car brand, model, year, etc.

## Visualization
Data will be represented in pie charts or other types of charts. Users will be able to interact with the charts to see a more detailed version or change the category that they are viewing.

<img src = "Design.pdf" width="751" height="238">
