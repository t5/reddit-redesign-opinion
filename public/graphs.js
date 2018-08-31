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
        ratio: 0.13
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
        },
        min: 0,
        padding: {
          bottom: 0
        }
      },
    },
    grid: {
      x: {
        lines: [{
            value: "2018-01-08",
            text: '~1000 beta testers get access',
            position: 'start',
            class: 'black'
          },
          {
            value: "2018-03-08",
            text: 'All Mods get access',
            position: 'start'
          },
          {
            value: "2018-04-02",
            text: 'Random users start getting access',
            position: 'start'
          },
          {
            value: "2018-06-21",
            text: 'Logged-in users retain old design',
            position: 'start'
          },
        ]
      }
    }
  });

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
        ratio: 0.13
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
  });

  newDesign = c3.generate({
    bindto: '#newDesign',
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
      url: 'json/newDesign.json',
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
        ratio: 0.13
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
  });

  newReddit = c3.generate({
    bindto: '#newReddit',
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
      url: 'json/newReddit.json',
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
        ratio: 0.13
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
  });
};

function prepChartButton(id, graph_name) {
  document.getElementById(id).addEventListener("click", function() {
    chart.transform(graph_name);
    var lines = document.getElementsByClassName("c3-xgrid-lines");
    if (graph_name == 'bar') {
      lines[0].style.cssText = "visibility: hidden;";
    } else {
      lines[0].style.cssText = "visibility: visible;";
    }
  });
}

function prepRedesignButton(id, graph_name) {
  document.getElementById(id).addEventListener("click", function() {
    redesign.transform(graph_name);
  });
}

function prepNewDesignButton(id, graph_name) {
  document.getElementById(id).addEventListener("click", function() {
    newDesign.transform(graph_name);
  });
}

function prepNewRedditButton(id, graph_name) {
  document.getElementById(id).addEventListener("click", function() {
    newReddit.transform(graph_name);
  });
}

window.onload = function() {
  prepChartButton('line', 'line');
  prepChartButton('area', 'area');
  prepChartButton('scatter', 'scatter');
  prepChartButton('bar', 'bar');

  prepRedesignButton('redesign_line', 'line');
  prepRedesignButton('redesign_pie', 'pie');
  prepRedesignButton('redesign_bar', 'bar');

  prepNewDesignButton('newDesign_line', 'line');
  prepNewDesignButton('newDesign_pie', 'pie');
  prepNewDesignButton('newDesign_bar', 'bar');

  prepNewRedditButton('newReddit_line', 'line');
  prepNewRedditButton('newReddit_pie', 'pie');
  prepNewRedditButton('newReddit_bar', 'bar');
  reloadGraphs();
}
