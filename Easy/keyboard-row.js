// Optimization need -- Score - 44.25 | Runtime - 54 ms


var findWords = function(words) {
    let firstRow = ['q','w','e','r','t','y','u','i','o','p'];
    let secondRow = ['a','s','d','f','g','h','j','k','l'];
    let thirdRow = ['z','x','c','v','b','n','m'];
    let result = [];
    for(i=0;i<words.length;i++){
        let wordArr = words[i].split("");
        for(j=0;j<wordArr.length;j++){
            if(firstRow.includes(wordArr[0].toLowerCase())){
                if(!firstRow.includes(wordArr[j].toLowerCase())) break;
                else if(j == wordArr.length - 1) result.push(words[i]);
            }
            if(secondRow.includes(wordArr[0].toLowerCase())){
                if(!secondRow.includes(wordArr[j].toLowerCase())) break;
                else if(j == wordArr.length - 1) result.push(words[i]);
            }
            if(thirdRow.includes(wordArr[0].toLowerCase())){
                if(!thirdRow.includes(wordArr[j].toLowerCase())) break;
                else if(j == wordArr.length - 1) result.push(words[i]);
            }
        }
    }
    return result;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]));

