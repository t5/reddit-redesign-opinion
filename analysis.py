import requests, string, statistics, csv, json, datetime, pytz
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import dateutil.parser

relevant_terms = ["new","reddit", "reddit's", "reddits"]
# AND
# website, redesign, design,

def contains(words, query_terms):
    # make lowercase, remove punctuation, split into words
    # then compare
    punctuation_table = str.maketrans({key: " " for key in string.punctuation})
    # if any of the query terms are in the string, return true
    for word in query_terms:
        if word.lower() in words.lower().translate(punctuation_table).split():
            return True
    return False

def get_comments(start_stamp, end_stamp, query):
    url = f"https://api.pushshift.io/reddit/search/comment/?q=\"{query}\"&fields=body&size=500&sort=desc&sort_type=score&after={start_stamp}&before={end_stamp}"
    print(url)
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

        print(start_stamp, end_stamp)

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

        print(mean, total_positives, total_negatives, total_neutrals)

        dates.append(dateutil.parser.parse(start_date.isoformat()).strftime("%Y-%m-%d"))
        print(start_date.isoformat(), round(mean,3), total_positives, total_neutrals, total_negatives, numComments)

        start_date += datetime.timedelta(days=5)

    return (scores, dates, num_positives, num_neutrals, num_negatives)

def sentiments():
    ret = {}
    redesign = {}
    design = {}
    website = {}
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
    scores, dates, pos, neut, neg = get_average_scores(start_date, end_date, "design")
    ret['"design"'] = scores
    design['x1'] = dates
    design['positive'] = pos
    design['negative'] = neg
    design['neutral'] = neut

    start_date = datetime.datetime(2018,1,1,0,0,tzinfo=pytz.utc)
    end_date = datetime.datetime(2018,8,25,tzinfo=pytz.utc)
    scores, dates, pos, neut, neg = get_average_scores(start_date, end_date, "website")
    ret['"website"'] = scores
    website['x1'] = dates
    website['positive'] = pos
    website['negative'] = neg
    website['neutral'] = neut

    start_date = datetime.datetime(2018,1,1,0,0,tzinfo=pytz.utc)
    end_date = datetime.datetime(2018,8,25,tzinfo=pytz.utc)
    scores, dates, pos, neut, neg = get_average_scores(start_date, end_date, "new reddit")
    ret['"new reddit"'] = scores
    newReddit['x1'] = dates
    newReddit['positive'] = pos
    newReddit['negative'] = neg
    newReddit['neutral'] = neut
    
    return ret, redesign, design, website, newReddit

def numberPosts(query):
    ret = {}
    start_date = datetime.datetime(2018,1,1,0,0,tzinfo=pytz.utc)
    end_date = datetime.datetime(2018,8,25,tzinfo=pytz.utc)
    scores, dates, pos, neut, neg = get_average_scores(start_date, end_date, query)
    ret['x1'] = dates
    ret['positive'] = pos
    ret['neutral'] = neut
    ret['negative'] = neg 

    return ret

# new reddit, new design, redesign, 

if __name__ == "__main__":
    """
    ret, redesign, design, website, newReddit = sentiments()
    with open("searchTerms.json", "w") as f:
        json.dump(ret, f)
    with open("redesign.json", "w") as f:
        json.dump(redesign, f)
    with open("design.json", "w") as f:
        json.dump(design, f)
    with open("website.json", "w") as f:
        json.dump(website, f)
    with open("newReddit.json", "w") as f:
        json.dump(newReddit, f)
    """
    with open("newReddit.json", "w") as f:
        ret = numberPosts("new reddit")
        json.dump(ret, f)
