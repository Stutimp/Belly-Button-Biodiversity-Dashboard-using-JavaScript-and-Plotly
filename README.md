# Belly Button Biodiversity Dashboard using Javascript and Plotly

## Project Overview
In this assignment, I build an interactive dashboard to explore the  Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Dashboard Overview
The dashboard allows users to:

- View a horizontal bar chart displaying the top 10 OTUs found in an individual.
- Explore a bubble chart that displays each sample.
- See the demographic information for the selected individual.

### Overview on apps.js:
 I created an interactive visualization dashboard using D3.js and Plotly, where data selected from a dropdown menu (specifically, the id field) is visualized through bar and bubble charts. Additionally, the corresponding demographic information is displayed on the dashboard.

- **Fetching Data:**

The data is sourced from a JSON file located at the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json. The D3 library (d3.json) is used to fetch this data, which is then used to initialize the dashboard via the init() function.

- **Dropdown Menu Population:**

After fetching the data, a dropdown menu is populated with sample IDs. The dropdown allows users to select different samples for visualization. The script selects the dropdown element in the HTML (#selDataset) and populates it with options corresponding to the id field in the dataset. The init() function is responsible for setting up the initial visualizations and demographic information for the first sample in the dataset.

- **Demographic Information Panel:**

The buildDemographicPanel() function updates the HTML element (#sample-metadata) with the demographic information of the selected sample. Before displaying the new information, the function clears any existing content using d3.select("#sample-metadata").html(""). It then appends key-value pairs from the selected sample's metadata to the Demographic Info panel.

- **Bar Chart:**

The buildBarChart() function processes and sorts the relevant data to display the top 10 OTUs (Operational Taxonomic Units) for the selected sample. Plotly is used to render this horizontal bar chart.

- **Bubble Chart:**

The buildBubbleChart() function creates a bubble chart where each OTU is visualized as a bubble. The size of each bubble represents sample_values, while the color corresponds to otu_ids. Plotly is used to render the bubble chart.

- **Updating Visualizations:**

The optionChanged() function is triggered when the user selects a different sample ID from the dropdown menu. This function updates the bar chart, bubble chart, and demographic information to reflect the newly selected sample by calling the relevant functions.

- **Initialization:**

Finally, the init() function is called at the end of the script to set up the initial state of the dashboard when the webpage is first loaded.



### Overview of index.html
The index.html file contains the HTML structure for the "Belly Button Biodiversity Dashboard." This file is designed to work in conjunction with the JavaScript code in the app.js file to create an interactive visualization experience.

-  **Dropdown Menu:**

The HTML code <select id="selDataset" onchange="optionChanged(this.value)"></select> is used to create a dropdown menu that allows users to select different Test Subject IDs. The onchange attribute is set to call the optionChanged JavaScript function, which ensures that the dashboard updates dynamically based on the selected sample ID.

- **Demographic Information Panel:**

The code <div id="sample-metadata" class="panel-body"></div> is a placeholder for the demographic information associated with the selected Test Subject ID. This div element is dynamically populated with content via JavaScript, specifically by the buildDemographicPanel function in app.js.

- **Including JavaScript:**

The app.js script is included at the end of the HTML file as a reference, ensuring that the core functionality of the dashboard—such as data fetching, processing, and event handling for the dropdown menu and visualizations—executes properly when the page loads.

# Deployment
The app is successfully deployed on GitHub Pages. You can view the live site here. The link to the deployment is this : https://stutimp.github.io/belly-button-challenge/

## How to Use the Dashboard

- Select an individual from the dropdown menu.
- The bar chart, bubble chart, and demographic information will update automatically.
- Hover over the bar chart and bubble chart to view detailed information about each OTU.

# Troubleshooting

- If the charts do not load, please ensure that the samples.json file is accessible via the provided URL.
- Please Check the browser console for any error messages to help diagnose issues.

### References:

- https://plotly.com/javascript/ (Plotly Documentation)
- D3.js Documentation

### Acknowledgments
- Data Source: Belly Button Biodiversity Dataset
- Module 14 Challenge from the Data Analytics Bootcamp

Thank you !

Author 

Stuti Poudel


