module.exports = Phrase;

// Adds 'reverse' to all strings
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

// Adds 'blank' to all strings
String.prototype.blank = function() {
	return this.length === 0 || /^\s*$/.test(this);
}

// Adds a last element method to all strings.
String.prototype.last = function() {
	return this.slice(this.length - 1);
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	this.processor = function(string) {
		return string.toLowerCase();
	}

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	// Returns the letters in the content.
	// For example:
	//	new Phrase("Hello, world!").letters() === "Helloworld"
	this.letters = function letters() {
		const lettersRegEx = /[a-z]/i;
		return Array.from(this.content).filter(c => c.match(lettersRegEx)).join("");
	}

	// Returns true if the phrase is a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		if (this.letters()) {
			return this.processedContent() === this.processedContent().reverse();		
		} else {
			return false;
		}
	}

	// Makes a phrase LOUDER.
	this.louder = function louder() {
		return this.content.toUpperCase();
	}
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	this.processedContent = function processedContent() {
		return this.processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();