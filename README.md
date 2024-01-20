## belly-button-challenge
## Module -14 challenge
In this assignment, I build an interactive dashboard to explore the  Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

### Overview on apps.js:
First I used the D3 library to read in  samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
Here I have  created an interactive visualization dashboard using D3.js and Plotly where the data selected from the dropdown menu, here 'id' will visualize our data in the form of bar and bubble charts accordingly and also displays the corresponding demographic information in the dashboard. 
- First I fetched the data from a given URL (a JSON File) using 'd3.json'and initialized the dashboard with init( ) function. 
- After the data is fetched, it's used to populate a dropdown menu with sample IDs and to initialize visualizations and demographic information for the first sample in the dataset.
- The script selects a dropdown element in the HTML (#selDataset) and populates it with options. Each option corresponds to a sample ID from the subjectid array, allowing the user to select different samples for visualization.
- Demographic Information Panel (buildDemographicPanel function) updates a specific HTML element (#sample-metadata) with demographic information of a selected sample. After that we used 'demoinfo.html("")' which clears any existing content in this element and then displays key-value pairs from the sample's metadata under Demographic info panel. 
- Both functions, 'buildBarchart function' and 'buildBubblechart function' here  process and sort the relevant data from the sample and uses Plotly to render the bar chart and bubble chart respectively.
- For bar chart, it displays the top 10 OTUs (Operational Taxonomic Units) for the selected sample. Whereas for the bubble chart, it visualizes each OTU as a bubble, with the bubble's size and color representing different data points (they are, otu_ids for color and sample_values for size).
- I then created 'optionChanged function' , which is triggered when the user selects a different sample ID from the dropdown.
- It then re-fetches the data and updates the bar chart, bubble chart, and demographic information to reflect the newly selected sample.
- The code concludes by calling the init function, setting up the initial state of the dashboard when the webpage is loaded.

### Overview on index.html
This 'index.html' file has a HTML code which is designed for the above "Belly Button Biodiversity Dashboard" which is generated to work in conjunction with the JavaScript code inside 'apps.js' file. 
- Here, ' <select id="selDataset" onchange="optionChanged(this.value)"></select> ' this html code helps create the dropdown menu  allowing users to select different Test Subject IDs. The onchange attribute is set to call the optionChanged JavaScript function, linking it to the interactive functionality of the dashboard.
- Likewise, this '<div id="sample-metadata" class="panel-body"></div>' part of html code is also designed for dynamic content updates via JavaScript, which helps in  displaying demographic information related to the selected Test Subject ID in the above generated dashboard.
- Finally we included the app.js script as a  reference file, which contains the core functionality of the dashboard, such as data fetching, processing, and event handling for the dropdown menu and visualizations.

Reference:
https://plotly.com/javascript/ (Plotly Documentation)

Thank you !

Stuti Poudel


