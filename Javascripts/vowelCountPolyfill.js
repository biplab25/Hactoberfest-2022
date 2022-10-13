const string="biplab"

// First it checks if `.filter` is available in browser

if(!String.prototype.vowelCount) {
  // implementation goes here
  String.prototype.vowelCount = function() {
    const vowels = ["a", "e", "i", "o", "u"]
    if (this === null) throw new TypeError;
    let count = 0;

    // loop through string to test if each character is a vowel

    for (let letter of this.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
  };
}
// calling function
const result = string.vowelCount();
console.log(result);
