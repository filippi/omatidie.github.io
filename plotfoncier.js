d3.csv('https://raw.githubusercontent.com/filippi/ommatidie/main/scatterSetFoncierMOD.csv', function (err, rows) {
    function unpack(rows, key) {
        return rows.map(function (row) {
            return row[key];
        });
    }
    var trace1 = {
        x: unpack(rows, 'latitude'),
        y: unpack(rows, 'longitude'),
        z: unpack(rows, 'valeur_fonciere'),
        mode: 'markers',
        marker: {
            size: 12,
            line: {
                color: 'rgba(217, 217, 217, 0.14)',
                width: 0.5
            },
            opacity: 0.8
        },
        type: 'scatter3d'
    };



    
    var data = [trace1];
    var layout = {
        
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        },
        plot_bgcolor:"black",
        paper_bgcolor:"black",
        showLegend: false
    };

    //layout[:showLegend] = true

    var graphDiv = document.getElementById('myDiv')

    Plotly.newPlot(graphDiv, data, layout);

});
