const result = document.querySelectorAll('.result');
const jchar = document.getElementById('jchar');
const romaji = document.getElementById('romaji');

const goodCount = document.getElementById('goodCount');
const badCount = document.getElementById('badCount');
let goodScore = 0;
let badScore = 0;

const createKana = (romaji, katakana) => ({ romaji, katakana });
const kanas = [
  // あ　い　う　え　お
  createKana('a', 'あ'),
  createKana('i', 'い'),
  createKana('u', 'う'),
  createKana('e', 'え'),
  createKana('o', 'お'),
  // か　き　く　け　こ
  createKana('ka', 'か'),
  createKana('ki', 'き'),
  createKana('ku', 'く'),
  createKana('ke', 'け'),
  createKana('ko', 'こ'),
  //　さ　し　す　せ　そ
  createKana('sa', 'さ'),
  createKana('shi', 'し'),
  createKana('su', 'す'),
  createKana('se', 'せ'),
  createKana('so', 'そ'),
  //　た　ち　つ　て　と
  createKana('ta', 'た'),
  createKana('chi', 'ち'),
  createKana('tsu', 'つ'),
  createKana('te', 'て'),
  createKana('to', 'と'),
  //　な　に　ぬ　ね　の
  createKana('na', 'な'),
  createKana('ni', 'に'),
  createKana('nu', 'ぬ'),
  createKana('ne', 'ね'),
  createKana('no', 'の'),
  //　は　ひ　ふ　へ　ほ
  createKana('ha', 'は'),
  createKana('hi', 'ひ'),
  createKana('fu', 'ふ'),
  createKana('he', 'へ'),
  createKana('ho', 'ほ'),
  //　ま　み　む　め　も
  createKana('ma', 'ま'),
  createKana('mi', 'み'),
  createKana('mu', 'む'),
  createKana('me', 'め'),
  createKana('mo', 'も'),
  //　や　ゆ　よ
  createKana('ya', 'や'),
  createKana('yu', 'ゆ'),
  createKana('yo', 'よ'),
  //　ら　り　る　れ　ろ
  createKana('ra', 'ら'),
  createKana('ri', 'り'),
  createKana('ru', 'る'),
  createKana('re', 'れ'),
  createKana('ro', 'ろ'),
  //　わ　を　ん
  createKana('wa', 'わ'),
  createKana('wo', 'を'),
  createKana('n', 'ん')
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

      document.getElementById("input_field").value = ''
      getRandomKana();
    }
});

getRandomKana();

result.forEach(fb => fb.addEventListener('transitionend', (e) => {
  fb.classList.remove('bad');
  fb.classList.remove('good');
}));
