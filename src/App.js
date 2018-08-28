import React, { Component } from "react";
import "./App.css";
import { Divider, Header, Button, Tab, Container } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Average Setiment Scores of Comments Mentioning Keywords:",
    pane: {
      key: "tab1",
      content: (
        <div>
          <div className="graph" id="chart" />
          <Divider />
          <Button.Group className="ui container center aligned">
            <Button id="line">Line</Button>
            <Button id="area">Area</Button>
            <Button id="scatter">Scatter</Button>
            <Button id="bar">Bar</Button>
          </Button.Group>
        </div>
      )
    }
  },
  {
    menuItem: '"redesign"',
    pane: {
      key: "tab2",
      content: (
        <div>
          <div className="graph" id="redesign" />
          <Divider />
          <Button.Group className="ui container center aligned">
            <Button id="redesign_line">Line</Button>
            <Button id="redesign_pie">Pie</Button>
            <Button id="redesign_bar">Bar</Button>
          </Button.Group>
        </div>
      )
    }
  },
  {
    menuItem: '"new design"',
    pane: {
      key: "tab3",
      content: (
        <div>
          <div className="graph" id="newDesign" />
          <Divider />
          <Button.Group className="ui container center aligned">
            <Button id="newDesign_line">Line</Button>
            <Button id="newDesign_pie">Pie</Button>
            <Button id="newDesign_bar">Bar</Button>
          </Button.Group>
        </div>
      )
    }
  },
  {
    menuItem: '"new reddit"',
    pane: {
      key: "tab4",
      content: (
        <div>
          <div className="graph" id="newReddit" />
          <Divider />
          <Button.Group className="ui container center aligned">
            <Button id="newReddit_line">Line</Button>
            <Button id="newReddit_pie">Pie</Button>
            <Button id="newReddit_bar">Bar</Button>
          </Button.Group>
        </div>
      )
    }
  }
];

class App extends Component {
  render() {
    return (
      <Container>
        <Divider fitted hidden />
        <Header as="h2">Reddit Redesign Sentiment Analysis</Header>
        <p>
          The redesign is pretty controversial. Here's the{" "}
          <a href="http://comp.social.gatech.edu/papers/icwsm14.vader.hutto.pdf">
            VADER sentiment scores
          </a>{" "}
          of Reddit comments over time.
        </p>
        <Tab
          menu={{
            compact: true,
            stackable: true,
            pointing: true,
            attached: true
          }}
          panes={panes}
          renderActiveOnly={false}
        />
        <Divider fitted hidden />
        <p className="centerThis">
          Created with <a href="https://www.python.org/">Python</a>,{" "}
          <a href="https://github.com/pushshift/api">Pushshift</a>,{" "}
          <a href="https://github.com/cjhutto/vaderSentiment">vaderSentiment</a>
          , <a href="https://c3js.org/">C3.js</a>,{" "}
          <a href="https://reactjs.org/">React</a>,{" "}
          <a href="https://react.semantic-ui.com/">Semantic UI</a>
        </p>
        <Divider fitted hidden />
      </Container>
    );
  }
}

export default App;

