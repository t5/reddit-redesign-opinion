# Reddit Redesign Sentiment Analysis

A visualization of Reddit's opinion of the website's redesign using sentiment analysis. I analyzed the [VADER sentiment score](http://comp.social.gatech.edu/papers/icwsm14.vader.hutto.pdf) of Reddit comments relating to the redesign in 5 day intervals in 2018, and graphed the results. 

## Results

View it **[here](https://reddit-redesign-sentiments.herokuapp.com/)**.

## Installation

### Build the JSON data

You will need Python, and pip to install Requests, pytz, vaderSentiment, dateutil.

```
python analysis.py
```

### Graph data and run on localhost 

```
npm install
npm start
```

Navigate to http://localhost:3000 to view the site.

## Built With

* [Pushshift](https://github.com/pushshift/api) - Reddit data API
* [vaderSentiment](https://github.com/cjhutto/vaderSentiment) - Sentiment Analysis
* [C3.js](https://c3js.org/) - D3-based Chart Library
* [React](https://reactjs.org/) - UI Library
* [Semantic UI](https://react.semantic-ui.com/) - UI Library

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
