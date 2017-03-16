var game = new Game();

function Game() {
	var randomWord = words[Math.floor(Math.random() * words.length)];
	console.log(randomWord);

	this.check = function(box) {
		var word = document.getElementById(box).value;

		if (word === randomWord) {
			alert('win');
			return;
		}

		for (var i = 0; i < word.length; i++) {
			for (var i = 0; i < randomWord.length; i++) {
				randomWord[i].charAt()
				
			}
				word[i].charAt()
					console.log(word[i].charAt(0));
		}
	}
}
