import React from 'react';
import ReactDOM from 'react-dom';
import { Divider, Header, Button, Tab,Container } from 'semantic-ui-react'
import './index.css';

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
  { menuItem: '"new reddit"', pane: {key: 'tab2', content: (
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
  { menuItem: '"redesign"', pane: {key: 'tab1', content: (
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

const ContainerExampleContainer = (
  <Container>
    <Divider hidden />
    <Header as='h2'>Reddit Redesign Sentiment Analysis</Header>
    <p>The redesign is pretty controversial. Here's Reddit's sentiments on it.</p>
    <Tab panes={panes} renderActiveOnly={false}/>
  </Container>
)

ReactDOM.render(ContainerExampleContainer, document.getElementById('root'));
