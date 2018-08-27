import React, { Component } from 'react';
import './App.css';
import { Divider, Header, Button, Tab,Container } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Setiment Scores of Comments Mentioning Keywords:', pane: {key: 'tab1', content: (
      <div>
          <div className="graph" id="chart"></div>
          <Divider/>
          <Button.Group className="ui container center aligned">
            <Button id="line">Line</Button>
            <Button id="area">Area</Button>
            <Button id="scatter">Scatter</Button>
            <Button id="bar">Bar</Button>
          </Button.Group>
      </div>
  )}},
  { menuItem: '"redesign"', pane: {key: 'tab2', content: (
      <div>
          <div className="graph" id="redesign"></div>
          <Divider/>
          <Button.Group className="ui container center aligned">
            <Button id="redesign_line">Line</Button>
            <Button id="redesign_pie">Pie</Button>
            <Button id="redesign_bar">Bar</Button>
          </Button.Group>
      </div>
  )}},
  { menuItem: '"new design"', pane: {key: 'tab3', content: (
      <div>
          <div className="graph" id="chart"></div>
          <Divider/>
          <Button.Group className="ui container center aligned">
            <Button id="line">Line</Button>
            <Button id="area">Area</Button>
            <Button id="scatter">Scatter</Button>
            <Button id="bar">Bar</Button>
          </Button.Group>
      </div>
  )}},
  { menuItem: '"new website"', pane: {key: 'tab4', content: (
      <div>
          <div className="graph" id="chart"></div>
          <Divider/>
          <Button.Group className="ui container center aligned">
            <Button id="line">Line</Button>
            <Button id="area">Area</Button>
            <Button id="scatter">Scatter</Button>
            <Button id="bar">Bar</Button>
          </Button.Group>
      </div>
  )}},
]

class App extends Component {
  render() {
    return (
      <Container>
        <Divider hidden />
        <Header as='h2'>Reddit Redesign Sentiment Analysis</Header>
        <p>The redesign is pretty controversial. Here's Reddit's sentiments on it.</p>
        <Tab menu={{ compact: true, stackable: true, pointing: true, attached: true}} panes={panes} renderActiveOnly={false}/>
      </Container>
    )
  }
}

export default App;
