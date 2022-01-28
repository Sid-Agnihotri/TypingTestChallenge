/** @format */

import React from "react";

import { Grid, Typography } from "@mui/material";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import Timer from "../Timers/Timer";

const TypingChallange = ({
	randomText,
	setRandomText,
	typeTextHandler,
	startTimer,

	handleTimer,
	selectedTimer,
	setTypedText,
}) => {
	return (
		<div>
			<Grid container spacing={2} justifyContent='center'>
				<Grid item>
					<Typography mt={3} mb={3} variant='h3'>
						Typing Test Challange
					</Typography>
				</Grid>
			</Grid>
			<Grid>
				<Timer handleTimer={handleTimer} selectedTimer={selectedTimer} />
			</Grid>
			<Grid container>
				<TypingChallenge
					randomText={randomText}
					setRandomText={setRandomText}
					typeTextHandler={typeTextHandler}
					startTimer={startTimer}
					handleTimer={handleTimer}
					setTypedText={setTypedText}
				/>
			</Grid>
		</div>
	);
};

export default TypingChallange;
