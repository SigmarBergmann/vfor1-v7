/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (typeof str !== 'string') {
    return null;
  }
  if (str === '') {
    return '';
  }
  let words = str.split(' ');
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.assert(
  longest('halló heimur!') === 'heimur!',
  'longest, skilar lengsta orðinu'
);
console.assert(
  longest(123) === null,
  'longest, skilar null því ekki strengur'
);



function shortest(str) {
  if (typeof str !== 'string') {
    return null;
  }
  if (str === '') {
    return '';
  }
  let words = str.split(' ');
  let shortestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }
  return shortestWord;
}
console.assert(
  shortest('halló heimur!') === 'halló',
  'shortest, skilar stysta orðinu'
);
console.assert(
  shortest(123) === null,
  'shortest, skilar null því ekki strengur'
);


function reverse(str) {
  if (isString(str)) {
    const split = str.split('');
    const reversed = split.reverse();

    return reversed.join('');
  }
  return null;
}
console.assert(
  reverse('halló') == 'óllah',
  'reverse: snýr við einföldum streng'
);
console.assert(
  reverse(false) == null,
  'reverse: ef ekki strengur, skila null'
);

// "halló" => false
// "hah" => true
// null / false / 0 => false
// "" => false
// Hah => true
function palindrome(str) {
  if (isString(str) && str !== '') {
    const reversed = reverse(str);
    return str.toLowerCase() === reversed.toLowerCase()
  }
  return false;
}
console.assert(
  palindrome('halló') === false,
  'palindrome: strengur, ekki'
);
console.assert(
  palindrome('hah') === true,
  'palindrome: strengur, er'
);
console.assert(
  palindrome('') === false,
  'palindrome: tómi strengur ekki'
);


function vowels(str) {
  if (isString(str) && str !== '') {
    const vowelsList = 'aeiouyáéýúíóöæ';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowelsList.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  return 0;
}
console.assert(
  vowels('halló heimur') === 5,
  'vowels: strengur, fjöldi sérhljóða'
);
console.assert(
  vowels(123) === 0,
  'vowels: ekki strengur'
);
console.assert(
  vowels('') === 0,
  'vowels: strengur, engir sérhljóðar'
);

function consonants(str) {
  if (isString(str) && str !== '') {
    const consonantsList = 'bdðfghjklmnpqrstvxþ';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (consonantsList.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  return 0;
}
console.assert(
  consonants('halló heimur') === 6,
  'consonants: strengur, fjöldi samhljóða'
);
console.assert(
  consonants('') === 0,
  'consonants: ekki strengur'
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert(
    "Sláðu inn streng með nokkrum orðum til að fá upplýsingar um:\n" +
    "- Lengsta orðið.\n" +
    "- Stysta orðið.\n" +
    "- Strenginn snúið við.\n" +
    "- Fjölda sérhljóða í streng.\n" +
    "- Fjölda samhljóða í streng.\n" +
    "- Hvort strengurinn sé samhverfur."
  );

  let input = prompt("Sláðu inn streng:");

  if (input !== null && input !== '') {
    let longestWord = longest(input);
    let shortestWord = shortest(input);
    let reversedString = reverse(input);
    let vowelCount = vowels(input);
    let consonantCount = consonants(input);
    let isPalindrome = palindrome(input);

    let results = `
      Lengsta orðið: ${longestWord}
      Stysta orðið: ${shortestWord}
      Snúinn strengur: ${reversedString}
      Fjöldi sérhljóða: ${vowelCount}
      Fjöldi samhljóða: ${consonantCount}
      ${isPalindrome ? "Strengurinn er samhverfur" : "Strengurinn er ekki samhverfur"}
    `;

    alert(results);

    let again = confirm("Viltu prófa aftur?");
    if (again) {
      start();
    }
  }
}