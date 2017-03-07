var randomWord = words[Math.floor(Math.random() * words.length)]; //get Random Word

var wordArray = randomWord.split("", 5); //Split Random Word for checking

function check(id) {
	var fields = [id + ".1", id + ".2", id + ".3", id + ".4", id + ".5"];
	var result = "";
	for (i = 0; i < fields.length; i++) {
		if (result == "") {
			result = document.getElementById(fields[i]).value;
		}
		else {
			result = result + document.getElementById(fields[i]).value;
		}
		if (result[i] == wordArray[i]) {
		}
	}

	return result;
}

