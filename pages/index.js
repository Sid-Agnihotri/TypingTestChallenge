/** @format */
import React, { useState, useEffect } from "react";
import TryAgain from "../components/TryAgain/TryAgain";
import ChallengeContainer from "../components/ChallengeContainer/ChallengeContainer";
import textGenerator from "../utils/textGenerator";
import { testCalculator } from "../utils/testCalculator";
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
export default function Home() {
	const [randomText, setRandomText] = useState("");
	const [typedText, setTypedText] = useState("");
	const [startTimer, setStartTimer] = useState(false);
	const [elapsedTime, setElapsedTime] = useState(0);
	const [correctWords, setCorrectWords] = useState(0);
	const [initialTimer, setInitialTimer] = useState(60);
	const [selectedTimer, setSelectedTimer] = useState(60);
	const [wpm, setWpm] = useState(0);

	useEffect(() => {
		setRandomText(textGenerator());
	}, []);

	useEffect(() => {
		const { words, char } = testCalculator(randomText, typedText);

		const validWords = words();

		if (validWords) {
			setCorrectWords(validWords);
			setWpm(correctWords / (elapsedTime / 60));
		}
	}, [typedText]);

	const typeTextHandler = (e) => {
		setTypedText(e.target.value);

		if (!startTimer) {
			startTypingTimer();
		}
	};

	const handleTimer = (value) => {
		setInitialTimer(value);
		setSelectedTimer(value);
	};

	const startTypingTimer = () => {
		setStartTimer(true);
		const timer = setInterval(() => {
			if (selectedTimer > 0) {
				setElapsedTime(elapsedTime++);
				setSelectedTimer((selectedTimer = selectedTimer - 1));
			} else {
				clearInterval(timer);
			}
		}, 1000);
	};

	const triggerTryAgain = () => {
		setStartTimer(false);
		setSelectedTimer(60);
		setTypedText("");
		setWpm(0);
		setElapsedTime(0);
		setCorrectWords(0);
		setInitialTimer(60);
	};

	return (
		<div>
			<Grid container alignItems='center' justifyContent='center'>
				{selectedTimer > 0 ? (
					<div className={styles.main}>
						<ChallengeContainer
							randomText={randomText}
							setRandomText={setRandomText}
							typeTextHandler={typeTextHandler}
							startTimer={startTimer}
							handleTimer={handleTimer}
							selectedTimer={selectedTimer}
						/>
					</div>
				) : (
					<div className={styles.tryAgain}>
						<TryAgain
							triggerTryAgain={triggerTryAgain}
							wpm={wpm}
							correctWords={correctWords}
							typedText={typedText}
						/>
					</div>
				)}
			</Grid>
		</div>
	);
}
