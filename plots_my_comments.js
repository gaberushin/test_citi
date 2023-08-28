// -------------------------------------------------------------------------
// Context: This code is part of a classroom lesson that teaches students how to use 
// D3.js and Plotly to visualize data. Specifically, this code aims to demonstrate
// how to read a JSON file, sort the data, and then create a bar chart using Plotly.
// The data represents the miles driven by different cars owned by employees.
//
// Summary: 
// The script reads data from a JSON file containing car information such as 
// license_plate and miles driven. It sorts the cars based on miles driven, takes 
// the top 10 cars, and visualizes this information as a horizontal bar chart.
//
// Breakdown:
// 1. Read the JSON file asynchronously using D3.js.
// 2. Sort the array of cars based on the miles attribute.
// 3. Slice the array to get the top 10 cars based on miles.
// 4. Reverse the sorted array for better visualization in Plotly.
// 5. Create a trace for the bar chart.
// 6. Create a layout for the chart.
// 7. Render the chart using Plotly.
// -------------------------------------------------------------------------

// Use D3 to read the JSON file.
// The data from the JSON file is arbitrarily named importedData as the argument.
d3.json("data/data.json").then((importedData) => {
    // Store the imported data in a variable.
    let data = importedData;
  
    // Sort the data array using the miles attribute.
    data.sort(function(a, b) {
      return parseFloat(b.miles) - parseFloat(a.miles);
    });
  
    // Take the top 10 cars based on miles.
    data = data.slice(0, 10);
  
    // Reverse the array to suit Plotly's defaults.
    data = data.reverse();
  
    // Trace1 for the car miles data.
    let trace1 = {
      x: data.map(row => row.miles),          // Miles data for the x-axis
      y: data.map(row => row.license_plate),  // License plate data for the y-axis
      text: data.map(row => row.license_plate), // Text information for each bar
      name: "Car Miles",                      // Label for the data
      type: "bar",                            // Type of chart
      orientation: "h"                        // Horizontal orientation
    };
  
    // Data array for the plot.
    let chartData = [trace1];
  
    // Layout information for the plot.
    let layout = {
      title: "Car Miles for Employee Used Cars",  // Title of the plot
      margin: {                                   // Margins for the plot
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }
    };
  
    // Render the plot to the div tag with id "plot".
    Plotly.newPlot("plot", chartData, layout);
  });
  