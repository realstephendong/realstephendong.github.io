
function length(ms) {
  return new Promise((resolve) => setTimeout(resolve,ms));

}

const phrases = ['HelloWorld', "print('Hi')", 'Greetings!', "printf('Hey');", "Howdy!", "What's up?", "Aloha!", "你好", "Bonjour!", "Ciao!"];
const el = document.getElementById("typewriter");

let typeDelay = 200;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];
    
    for (let i = 0; i<curWord.length; i++) {
      el.innerText = curWord.substring(0, i+1);
      await length(typeDelay);
    }

    await length(typeDelay * 8);

    for (let i = curWord.length; i>0; i--) {
        el.innerText = curWord.substring(0, i-1);
        await length(typeDelay/1.5);
    }
    
    await length(typeDelay * 2);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();