function reloadGraphs() {
    chart = c3.generate({
        bindto: '#chart',
        size: {
            height: 350
        },
        data: {
            xs: {
                '"redesign"': 'x1',
                '"new design"': 'x1',
                '"new reddit"': 'x1',
            },
            url: 'json/searchTerms.json',
            mimeType: 'json',
            type: 'line',
        },
        bar: {
            width: {
                ratio: 0.15
            }
        },
        point: {
            show: false
        },
        axis: {
            x: {
                label: {
                    text: 'Date',
                },
                type: 'timeseries',
                tick: {
                    count: 6,
                    format: '%Y/%m/%d',
                },
            },
            y: {
                label: {
                    text: "Normalized, weighted composite sentiment score",
                    position: "outer-middle"
                }
            },
        },
    });}

    redesign = c3.generate({
        bindto: '#redesign',
        size: {
            height: 350
        },
        data: {
            xs: {
                'positive': 'x1',
                'neutral': 'x1',
                'negative': 'x1',
            },
            colors: {
                'positive': '#3b9926',
                'neutral': '#1360c4',
                'negative': '#d30c2a',
            },
            url: 'json/redesign.json',
            mimeType: 'json',
            types: {
                scores: 'line',
            },
            axes: {
                scores: 'y',
                avg: 'y'
            }
        },
        bar: {
            width: {
                ratio: 0.10
            }
        },
        legend: {
            position: 'bottom'
        },
        point: {
            show: false
        },
        axis: {
            x: {
                label: {
                    text: 'Date',
                },
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d',
                    count: 6
                },
            },
            y: {
                label: {
                    text: "Number of comments",
                    position: "outer-middle"
                }
            },
        },
    }    
);

function prepChartButton(id, graph_name) {
    document.getElementById(id).addEventListener("click", function() {
        chart.transform(graph_name);
    });
}

function prepRedesignButton(id, graph_name) {
    document.getElementById(id).addEventListener("click", function() {
        redesign.transform(graph_name);
    });
}

window.onload=function() {
    prepChartButton('line','line');
    prepChartButton('area', 'area');
    prepChartButton('scatter', 'scatter');
    prepChartButton('bar', 'bar');

    prepRedesignButton('redesign_line', 'line');
    prepRedesignButton('redesign_pie', 'pie');
    prepRedesignButton('redesign_bar', 'bar');

    reloadGraphs();
}
