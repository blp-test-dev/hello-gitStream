import feedparser
import json
import os

def get_latest_stories(feed_url, num_stories=10):
    feed = feedparser.parse(feed_url)
    latest_stories = []

    for entry in feed.entries[:num_stories]:
        story = {
            'title': entry.title,
            'link': entry.link,
            'published': entry.published
        }
        latest_stories.append(story)

    return latest_stories

def save_stories_to_json(stories, json_file):
    with open(json_file, 'w') as outfile:
        json.dump(stories, outfile, indent=2)

if __name__ == '__main__':
    rss_feed_url = 'https://example.com/rss_feed'  # Replace this with the RSS feed URL
    output_json_file = 'latest_stories.json'

    latest_stories = get_latest_stories(rss_feed_url)
    save_stories_to_json(latest_stories, output_json_file)

    print(f'{len(latest_stories)} latest stories saved to {output_json_file}')

