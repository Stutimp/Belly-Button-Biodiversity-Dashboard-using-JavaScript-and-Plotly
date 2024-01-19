// // read the url of the JSON Data
// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// function init() {

//     d3.json(url).then(function(data) {
//         console.log(data);
//         let subjectid = data.names;
//         console.log(subjectid);
    
//         //Grabbing the reference to the dropdown select menu
//         let selector = d3.select("#selDataset");

        
//         // Using the list of sample names to populate the select options
//         subjectid.forEach((sampledata) => {
//             selector 
//             .append("option")
//             .text(sampledata)
//             .property("value", sampledata);

//         });
       
//          // Initialize the plots with the first sample ID
//          const firstSampleId = subjectid[0];
//          buildBarchart(data, firstSampleId);
//          buildBubblechart(data, firstSampleId);
//      });
//  }
       
        
//         // Use the first sample from the list to build the initial plot        
// function buildBarchart(data) {
//     let samples = data.samples;
//     let sample = samples[0];



//     // Combine the data into a single array of objects
//     let combinedData = sample.otu_ids.slice(0, 10).map((id, index) => ({
//     otu_idSample: id,
//     sample_valueSample: sample.sample_values[index],
//     otu_labelSample: sample.otu_labels[index]

//  }));
       
//     // Sort the combined data by sample_value in descending order
//     combinedData.sort((a, b) => b.sample_valueSample - a.sample_valueSample);
    
//     combinedData.reverse();
//     console.log(combinedData);
    
//         // Create separate arrays for the sorted data
//         let sortedIds = combinedData.map(d => `OTU ${d.otu_idSample}`);
//         let sortedValues = combinedData.map(d => d.sample_valueSample);
//         let sortedLabels = combinedData.map(d => d.otu_labelSample);
//         console.log(sortedIds);
//         console.log(sortedValues);
//         console.log(sortedLabels);
    
    
//         // Create a trace for the bar plot
//         let trace = {
//         x: sortedValues,
//         y: sortedIds,
//         text: sortedLabels,
//         type: 'bar',
//         orientation: 'h'
//     };
    
//         let plotData = [trace];
    
//         let layout = {
//         title: 'Top 10 OTUs',
//         xaxis: { title: 'Sample Values' },
//         yaxis: { title: 'OTU IDs' }

//     };
    
//         // Render the bar plot
//         Plotly.newPlot("bar", plotData, layout); 

//         buildBarchart(data);

//         }

//         // Creating a bubble chart displaying each sample

//         function buildBubblechart(data) {
//             let samplesArray = data.samples;
//             let sampleFirst = samplesArray[0];

//             // now creating seperate arrays for the data selected
//             let otu_Ids = sampleFirst.otu_ids;
//             let sample_values1 = sampleFirst.sample_values;
//             let otu_labels1 = sampleFirst.otu_labels;

   
//             let trace1 = {
//             x: otu_Ids,
//             y: sample_values1,
//             mode: 'markers',
//             marker: {
//             color: otu_Ids,
//             size: sample_values1,
//             sizemode: 'diameter',
//             colorscale: 'Earth'
//         },
//             text: otu_labels1
//     };

//             let plotData1 = [trace1];

//             let layout1 = {
//             title: 'Bubble Chart',
//             xaxis: {title: 'OTU IDs'},
//             yaxis: {title: 'Sample Values'},
//             showlegend: false,
        
//     };

//     // Render the bubble chart
//             Plotly.newPlot("bubble", plotData1, layout1);

             
//         buildBubblechart(data);
// };

//     // fetching new data each time
//         function optionChanged(newSampleData) {
//             buildBarchart(newSampleData);
//             buildBubblechart(newSampleData);

//         }


          
        
   
        
//     })};



   
// init();


const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function init() {
    d3.json(url).then(function(data) {
        let subjectid = data.names;
        
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
    });
}

function buildBarchart(data, id) {
    let sample = data.samples.filter(sample => sample.id === id)[0];

    // Process and sort data for bar chart
    let combinedData = sample.otu_ids.slice(0, 10).map((id, index) => ({
        otu_idSample: id,
        sample_valueSample: sample.sample_values[index],
        otu_labelSample: sample.otu_labels[index]
    })).sort((a, b) => b.sample_valueSample - a.sample_valueSample);

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
    });
}

// Initialize the dashboard
init();




