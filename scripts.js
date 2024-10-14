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
  if(!isString(str)){
    return null
  }
  const words =  split(str);
  let longest_word = 0;
  for(let i = 0; i < words.length; i++){
    if(words[longest_word].length < words[i].length){
      longest_word = i;
    }
  }
  return words[longest_word];
}
console.assert(longest() === null, 'longest: skilar null fyrir ekkert');
console.assert(longest("shortword verylongword") === "verylongword", 'longest: lengsta orðinu í streng');

function shortest(str) {
  if(!isString(str)){
    return null
  }
  const words =  split(str);
  let shortest_word = 0;
  for(let i = 0; i < words.length; i++){
    if(words[shortest_word].length > words[i].length){
      shortest_word = i;
    }
  }
  return words[shortest_word];
}
console.assert(shortest() === null, 'shortest: skilar null fyrir ekkert');
console.assert(shortest("shortword verylongword") === "shortword", 'shortest: stysta orðinu í streng');

function reverse(str) {
  if(!isString(str)){
    return null
  }
  const stafir = str.split('').reverse().join('');
  return stafir
}
console.assert(reverse() === null, 'reverse: skilar null fyrir ekkert');
console.assert(reverse('reverse') === 'esrever', 'reverse: skilar "esrever" fyrir "reverse"');

function palindrome(str) {
  if(!isString(str)|| str == ''){
    return false
  }
  const _reverse = reverse(str);
  return (str == _reverse)
}
console.assert(palindrome() === false, 'palindrome: skilar false fyrir ekkert');
console.assert(palindrome("madam") === true, 'palindrome: skilar true fyrir "madam"');
console.assert(palindrome("some madam") === false, 'palindrome: skilar false fyrir "some madam"');

function vowels(str) {
  if(!isString(str)){
    return 0;
  }
  const stafir = str.split('');
  let c = 0;
  for(let i = 0; i < stafir.length; i++) {
    for(let j = 0; j<VOWELS.length; j++){
      if(stafir[i] == VOWELS[j]){
        c++;
      }
    }
  }
  return c;
}
console.assert(vowels() === 0, 'vowels: skilar 0 fyrir ekkert');
console.assert(vowels("bla blaa") === 3, 'vowels: skilar 3 fyrir "bla blaa');

function consonants(str) {
  if(!isString(str)){
    return 0;
  }
  const stafir = str.split('');
  let c = 0;
  for(let i = 0; i < stafir.length; i++) {
    for(let j = 0; j<CONSONANTS.length; j++){
      if(stafir[i] == CONSONANTS[j]){
        c++;
      }
    }
  }
  return c;
  // Útfæra
}
console.assert(consonants() === 0, 'consonants: skilar 0 fyrir ekkert');
console.assert(consonants("bla blaa") === 4, 'consonants: skilar 4 fyrir "bla blaa');

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert("Skrifaðu inn streng og ég mun segja þér gagnslausar upplýsingar um hann.")
  const strengur = prompt("Feed me strings!!");

  const _long = longest(strengur);
  const _short = shortest(strengur);
  const _reverse = reverse(strengur);
  const _palindrome = palindrome(strengur)?'já':'nei';
  const _vowels = vowels(strengur);
  const _consonants = consonants(strengur);

  alert(`
  Lengsti strengur: ${_long}
  Stysti strengur: ${_short}
  Reverse strengur: ${_reverse}
  Palindrom?: ${_palindrome}
  vowels?: ${_vowels}
  consonants?: ${_consonants}
  `);
}

