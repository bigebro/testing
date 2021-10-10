let ceaserCipher = (str) => {
  //Deciphered reference letters
  let decoded = {
    a: 'b', b: 'c', c: 'd',
    d: 'e', e: 'f', f: 'g',
    g: 'h', h: 'i', i: 'j',
    j: 'k', k: 'l', l: 'm',
    m: 'n', n: 'o', o: 'p',
    p: 'q', q: 'r', r: 's',
    s: 't', t: 'u', u: 'v',
    v: 'w', w: 'x', x: 'y',
    y: 'z', z: 'a'    
  }
  
  //convert the string to lowercase
  str = str.toLowerCase();
  
  //decipher the code
  let decipher = '';
  for(let i = 0 ; i < str.length; i++){
    decipher += decoded[str[i]];
  }
  
  //return the output
  return decipher;
}
  
module.exports = ceaserCipher;