document.getElementById("countButton").onclick = function countLetter() {  
    
    let typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    
    let currentLetter = []
    const letterCounts = {};
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }
        
    }

    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", "); 
        span.appendChild(textContent); 
        document.getElementById("lettersDiv").appendChild(span); 
    }

    words = typedText.split(/\s/);

    let currentWord = []
    const letterWords = {};
    for (let i = 0; i < words.length; i++) {
        currentWord = words[i];
        if (letterWords[currentWord] === undefined) {
            letterWords[currentWord] = 1; 
        } else { 
            letterWords[currentWord]++; 
        }
        
    }

    for (let word in letterWords) { 
        const span = document.createElement("span"); 
        const textContent = document.createTextNode('"' + word + "\": " + letterWords[word] + ", "); 
        span.appendChild(textContent); 
        document.getElementById("wordsDiv").appendChild(span); 
    }
}
