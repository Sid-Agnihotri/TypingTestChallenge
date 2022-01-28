/** @format */
import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const TryAgain = ({ triggerTryAgain, wpm, correctWords, typedText }) => {
	return (
		<Grid
			container
			direction='column'
			sx={{ textAlign: "center" }}
			mt={8}
			spacing={3}>
			<Grid item>
				<Typography variant='h3' mb={3}>
					Your Score -{" "}
				</Typography>
				<Typography variant='h5'>
					<b>Character:</b> {typedText.length}
				</Typography>
				<Typography variant='h5'>
					<b>Words per minute:</b> {wpm.toFixed(2) >= 0 ? wpm.toFixed(2) : "0"}
				</Typography>
				<Typography variant='h5'>
					<b>Accuracy: </b>
					{correctWords >= 0
						? ((correctWords / typedText.length) * 100).toFixed(2)
						: "0"}
				</Typography>
			</Grid>
			<Grid item>
				<Button mt={2} variant='contained' onClick={() => triggerTryAgain()}>
					Start Again
				</Button>
			</Grid>
		</Grid>
	);
};

export default TryAgain;
