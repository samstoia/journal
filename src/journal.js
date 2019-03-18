
export function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.getWordCount = function(){
    var bodyCount = this.body.split(' ').length;
    return bodyCount;
  };

Entry.prototype.getVowelCount = function(){
    var charArray = this.body.toLowerCase().split('');
    var counter = 0;
    var vowelArray = ['a','e','i','o','u']
    charArray.forEach(function(char){
      if(vowelArray.includes(char)){
        counter++;
      };
    });
    return counter;
};

Entry.prototype.getConsonantCount = function() {
  var charArray = this.body.toLowerCase().split('');
  var counter = 0;
  var consonantArray = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  charArray.forEach(function(char){
    if(consonantArray.includes(char)){
      counter++;
    };
  });
  return counter;
}

Entry.prototype.getTeaser = function() {
  var teaser = this.body.split(/[.?!]/);
  var firstSentence = teaser[0].split(' ');
  if(firstSentence.length<8){
    return firstSentence.join(' ');
  }
  else{
    var teaserOutput = firstSentence.slice(0, 8).join(' ');
    return teaserOutput;
  }
}
