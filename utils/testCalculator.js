/** @format */

export const testCalculator = (randomText, typedtext) => {
	const typedtextChar = typedtext.split(" ");
	const randomCallength = randomText.split(" ").length;
	const randomCalText = randomText.split(" ");

	const words = () => {
		let correctWordsCount = 0;
		for (var i = 0; i < randomCallength; i++) {
			if (randomCalText[i] === typedtextChar[i]) {
				correctWordsCount++;
			}
		}

		return correctWordsCount;
	};

	return { words };
};
