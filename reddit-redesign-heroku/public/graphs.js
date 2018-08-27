window.onload=function() {
    document.getElementById("line").addEventListener("click", function() {
        chart.transform('line');
    });

    document.getElementById("area").addEventListener("click", function() {
        chart.transform('area');
    });

    document.getElementById("scatter").addEventListener("click", function() {
        chart.transform('scatter');
    });

    document.getElementById("bar").addEventListener("click", function() {
        chart.transform('bar');
    });

    var chart = c3.generate({
        bindto: '#chart',
        size: {
            height: 350
        },
        data: {
            xs: {
                '"new reddit"': 'x1',
                '"new design"': 'x1',
                '"redesign"': 'x1',
            },
            url: 'searchTerms.json',
            mimeType: 'json',
            type: 'line',
            axes: {
                scores: 'y',
                avg: 'y'
            }
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
                    position: "outer-right"
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
        grid: {
            y: {
                lines: [{value: 0}]
            }
        },
        legend: {
        }
    });
    }

    var newReddit = c3.generate({
        bindto: '#newReddit',
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
            url: 'newReddit.json',
            mimeType: 'json',
            types: {
                scores: 'line',
            },
            axes: {
                scores: 'y',
                avg: 'y'
            }
        },
        legend: {
            position: 'right'
        },
        point: {
            show: false
        },
        axis: {
            x: {
                label: {
                    text: 'Time (days)',
                    position: "outer-center"
                },
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d',
                    count: 8
                },
            },
            y: {
                label: {
                    text: "Number of comments",
                    position: "outer-middle"
                }
            },
        },
        grid: {
            y: {
                lines: [{value: 0}]
            }
        }
    }    
);
