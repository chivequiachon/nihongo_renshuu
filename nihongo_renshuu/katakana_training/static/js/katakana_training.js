const result = document.querySelectorAll('.result');
const jchar = document.getElementById('jchar');
const romaji = document.getElementById('romaji');

const goodCount = document.getElementById('goodCount');
const badCount = document.getElementById('badCount');
let goodScore = 0;
let badScore = 0;

var seconds = 5;

const createKana = (romaji, katakana) => ({ romaji, katakana });
const kanas = [
  // ｱ ｲ ｳ ｴ ｵ
  createKana('a', 'ア'),
  createKana('i', 'イ'),
  createKana('u', 'ウ'),
  createKana('e', 'エ'),
  createKana('o', 'オ'),
  // ｶ ｷ ｸ ｹ ｺ
  createKana('ka', 'カ'),
  createKana('ki', 'キ'),
  createKana('ku', 'ク'),
  createKana('ke', 'ケ'),
  createKana('ko', 'コ'),
  //　サ　シ　ス　セ　ソ
  createKana('sa', 'サ'),
  createKana('shi', 'シ'),
  createKana('su', 'ス'),
  createKana('se', 'セ'),
  createKana('so', 'ソ'),
  //　タ　チ　ツ　テ　ト
  createKana('ta', 'タ'),
  createKana('chi', 'チ'),
  createKana('tsu', 'ツ'),
  createKana('te', 'テ'),
  createKana('to', 'ト'),
  //　ナ　ニ　ヌ　ネ　ノ
  createKana('na', 'ナ'),
  createKana('ni', 'ニ'),
  createKana('nu', 'ヌ'),
  createKana('ne', 'ネ'),
  createKana('no', 'ノ'),
  //　ハ　ヒ　フ　ヘ　ホ
  createKana('ha', 'ハ'),
  createKana('hi', 'ヒ'),
  createKana('fu', 'フ'),
  createKana('he', 'ヘ'),
  createKana('ho', 'ホ'),
  //　マ　ミ　ム　メ　モ
  createKana('ma', 'マ'),
  createKana('mi', 'ミ'),
  createKana('mu', 'ム'),
  createKana('me', 'メ'),
  createKana('mo', 'モ'),
  //　ヤ　ユ　ヨ
  createKana('ya', 'ヤ'),
  createKana('yu', 'ユ'),
  createKana('yo', 'ヨ'),
  //　ラ　リ　ル　レ　ロ
  createKana('ra', 'ラ'),
  createKana('ri', 'リ'),
  createKana('ru', 'ル'),
  createKana('re', 'レ'),
  createKana('ro', 'ロ'),
  //　ワ　ヲ　ン
  createKana('wa', 'ワ'),
  createKana('wo', 'ヲ'),
  createKana('n', 'ン')
];

const getJChar = () => {
  return jchar.textContent;
}

const getRomaji = () => {
  return romaji.textContent;
}

const getRandomKana = () => {
  const currentJChar = getJChar();
  const currentRomaji = getRomaji();
  let newJChar = '';
  let newRomaji = '';
  do {
    const randIndex = Math.floor( Math.random() * kanas.length );
    newJChar = kanas[randIndex].katakana;
    newRomaji = kanas[randIndex].romaji;
  } while ( currentJChar === newJChar );
  jchar.textContent = newJChar;
  romaji.textContent = newRomaji;
} 

document.getElementById("input_field")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      const romaji = document.getElementById("input_field").value;
      const currentRomaji = getRomaji();
      const goodAnswer = romaji === currentRomaji;
      
      if ( goodAnswer ) {
        jchar.classList.add('good');
        goodCount.textContent = ++ goodScore;
      } else {
        jchar.classList.add('bad');
        badCount.textContent = ++ badScore;
      }

      seconds = 5;
      document.getElementById("input_field").value = ''
      getRandomKana();
    }
});

getRandomKana();

result.forEach(fb => fb.addEventListener('transitionend', (e) => {
  fb.classList.remove('bad');
  fb.classList.remove('good');
}));

// Update the count down every 1 second
setInterval(function() {
  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML = seconds + "s";
  if (seconds == 0) {
    seconds = 5;
    jchar.classList.add('bad');
    badCount.textContent = ++ badScore;
    document.getElementById("input_field").value = ''
    getRandomKana();
  } else {
    seconds--;
  }
}, 1000);
