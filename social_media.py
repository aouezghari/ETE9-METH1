import json
import urllib.request


def getPost(post_id):
    url = f"https://jsonplaceholder.typicode.com/posts/{post_id}"

    with urllib.request.urlopen(url, timeout=10) as response:
        body = response.read().decode("utf-8")
        return json.loads(body)