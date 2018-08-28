import requests, string, statistics, csv, json, datetime, pytz
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import dateutil.parser

def get_comments(start_stamp, end_stamp, query):
    url = f"https://api.pushshift.io/reddit/search/comment/?q=\"{query}\"&fields=body&size=500&sort=desc&sort_type=score&after={start_stamp}&before={end_stamp}"
    r = requests.get(url)
    comments = r.json()["data"]
    all_opinions = []
    for comment in comments:
        all_opinions.append(comment["body"])
    return all_opinions

def get_average_scores(start_date, end_date, query):
    end_stamp = start_date.timestamp()
    analyzer = SentimentIntensityAnalyzer()
    scores = []
    num_positives = []
    num_negatives = [] 
    num_neutrals = []
    dates = []

    while (start_date + datetime.timedelta(days=5)).timestamp() <= end_date.timestamp():
        start_stamp = int(start_date.timestamp())
        end_stamp = int((start_date + datetime.timedelta(days=5)).timestamp())

        comments = get_comments(start_stamp, end_stamp, query)
        numComments = len(comments)

        totalSum = 0
        total_positives = 0
        total_neutrals = 0
        total_negatives = 0
        for c in comments:
            score = analyzer.polarity_scores(c)
            
            totalSum += score["compound"]
            if score["compound"] > 0:
                total_positives += 1
            elif score["compound"] == 0:
                total_neutrals += 1
            else:
                total_negatives += 1

        if (numComments):
            mean = totalSum / numComments
        else:
            mean = 0
        scores.append(round(mean, 3))
        num_positives.append(total_positives)
        num_negatives.append(total_negatives)
        num_neutrals.append(total_neutrals)

        dates.append(dateutil.parser.parse(start_date.isoformat()).strftime("%Y-%m-%d"))

        start_date += datetime.timedelta(days=5)

    return (scores, dates, num_positives, num_neutrals, num_negatives)

def sentiments():
    ret = {}
    redesign = {}
    newDesign = {}
    newReddit = {}

    start_date = datetime.datetime(2018,1,1,0,0,tzinfo=pytz.utc)
    end_date = datetime.datetime(2018,8,25,tzinfo=pytz.utc)
    scores, dates, pos, neut, neg = get_average_scores(start_date, end_date, "redesign")
    ret['"redesign"'] = scores
    ret['x1'] = dates
    redesign['x1'] = dates
    redesign['positive'] = pos
    redesign['negative'] = neg
    redesign['neutral'] = neut

    start_date = datetime.datetime(2018,1,1,0,0,tzinfo=pytz.utc)
    end_date = datetime.datetime(2018,8,25,tzinfo=pytz.utc)
    scores, dates, pos, neut, neg = get_average_scores(start_date, end_date, "new design")
    ret['"new design"'] = scores
    newDesign['x1'] = dates
    newDesign['positive'] = pos
    newDesign['negative'] = neg
    newDesign['neutral'] = neut

    start_date = datetime.datetime(2018,1,1,0,0,tzinfo=pytz.utc)
    end_date = datetime.datetime(2018,8,25,tzinfo=pytz.utc)
    scores, dates, pos, neut, neg = get_average_scores(start_date, end_date, "new reddit")
    ret['"new reddit"'] = scores
    newReddit['x1'] = dates
    newReddit['positive'] = pos
    newReddit['negative'] = neg
    newReddit['neutral'] = neut
    
    return ret, redesign, newDesign, newReddit

if __name__ == "__main__":
    ret, redesign, newDesign, newReddit = sentiments()
    with open("searchTerms.json", "w") as f:
        json.dump(ret, f)
    with open("redesign.json", "w") as f:
        json.dump(redesign, f)
    with open("newDesign.json", "w") as f:
        json.dump(newDesign, f)
    with open("newReddit.json", "w") as f:
        json.dump(newReddit, f)
