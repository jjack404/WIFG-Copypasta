function submitTweet() {
    const tweetText = encodeURIComponent(document.getElementById('resultText').value);
    document.getElementById('tweetText').value = tweetText;
}