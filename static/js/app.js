const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// Initializing the dashboard with init()
function init() {
    d3.json(url).then(function(data) {
        let subjectid = data.names;
        // generating sample metadata, i.e, individual demographic information
        let metaDataArray = data.metadata;
        let metadataSample = metaDataArray[0];
        console.log(metadataSample);
        
        //populating dropdown selector with sample IDs.
        let selector = d3.select("#selDataset");
        subjectid.forEach((sampledata) => {
            selector.append("option")
                    .text(sampledata)
                    .property("value", sampledata);
        });


        // Initialize the plots with the first sample ID
        const firstSampleId = subjectid[0];
        buildBarchart(data, firstSampleId);
        buildBubblechart(data, firstSampleId);
        buildDemographicPanel(data, firstSampleId);
    });
} 

function buildDemographicPanel(data, id) {
    let demoinfo = d3.select("#sample-metadata");
    // Clearing existing data
    demoinfo.html("");  

    let metadataSample = data.metadata.find(sample => sample.id === parseInt(id));
    console.log(metadataSample);
    Object.entries(metadataSample).forEach(([key, value]) => {
        demoinfo.append("p").text(`${key}: ${value}`);
        console.log(demoinfo);
    });
}

function buildBarchart(data, id) {
    let sample = data.samples.filter(sample => sample.id === id)[0];

    // Process and sort data for bar chart
    let combinedData = sample.otu_ids.slice(0, 10).map((id, index) => ({
        otu_idSample: id,
        sample_valueSample: sample.sample_values[index],
        otu_labelSample: sample.otu_labels[index]
    })).sort((a, b) => b.sample_valueSample - a.sample_valueSample).reverse();

    // Create separate arrays for sorted data
    let sortedIds = combinedData.map(d => `OTU ${d.otu_idSample}`);
    let sortedValues = combinedData.map(d => d.sample_valueSample);
    let sortedLabels = combinedData.map(d => d.otu_labelSample);

    // Create a trace for the bar plot
    let trace = {
        x: sortedValues,
        y: sortedIds,
        text: sortedLabels,
        type: 'bar',
        orientation: 'h'
    };

    let plotData = [trace];

    let layout = {
        title: 'Top 10 OTUs',
        xaxis: { title: 'Sample Values' },
        yaxis: { title: 'OTU IDs' }
    };

    // Render the bar plot
    Plotly.newPlot("bar", plotData, layout); 
}

function buildBubblechart(data, id) {
    console.log(data);
    let sample = data.samples.filter(sample => sample.id === id)[0];

    // Create trace for bubble chart
    let trace1 = {
        x: sample.otu_ids,
        y: sample.sample_values,
        mode: 'markers',
        marker: {
            color: sample.otu_ids,
            size: sample.sample_values,
            sizemode: 'diameter',
            colorscale: 'Earth'
        },
        text: sample.otu_labels
    };

    let plotData1 = [trace1];

    let layout1 = {
        title: 'Bubble Chart',
        xaxis: {title: 'OTU IDs'},
        yaxis: {title: 'Sample Values'},
        showlegend: false
    };

    // Render the bubble chart
    Plotly.newPlot("bubble", plotData1, layout1);

}

function optionChanged(newSampleId) {
    // Fetch new data each time a new sample is selected
    d3.json(url).then(function(data) {
        buildBarchart(data, newSampleId);
        buildBubblechart(data, newSampleId);
        buildDemographicPanel(data, newSampleId);
    });
}

// Initialize the dashboard
init();




