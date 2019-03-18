import './styles.css';
import { Entry } from './journal.js';

$(document).ready(function() {
  $("#entryForm").submit(function(event)  {
    event.preventDefault();
    var postTitle = $("#title").val();
    var postBody = $("#body").val();
    var entry = new Entry(postTitle, postBody);
    $("#titleOutput").text(entry.title);
    $("#bodyOutput").text(entry.body);

    $("#bodyCount").text(entry.getWordCount());

    $("#vowelCount").text(entry.getVowelCount());

    $("#consonantCount").text(entry.getConsonantCount());

    $("#teaserText").text(entry.getTeaser());
  });
});
