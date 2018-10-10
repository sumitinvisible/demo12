const MessageMixer = {};
MessageMixer.encode=function (string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};
MessageMixer.replaceAllOccurrences=function (string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};
MessageMixer.replaceFirstOccurence=function(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};
MessageMixer.reverseAllWords=function (sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = MessageMixer.reverseWord(words[i]);
    }
   return words.join(" ");
};
MessageMixer.capitalizeFirstCharacterOfWords=function (string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};
module.exports = MessageMixer;


function d(...h){
    
console.log(h)
}
d(6,8,8);