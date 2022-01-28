/** @format */

import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

const TypingChallenge = ({
	randomText,
	setRandomText,
	typeTextHandler,
	startTimer,
}) => {
	const customTextHandler = (e) => {
		setRandomText(e.target.value);
	};
	return (
		<>
			<Grid item xs={12} sx={{ textAlign: "center" }} mb={3}>
				<p>{startTimer ? "" : "Start typing to start the test"}</p>
			</Grid>
			<Grid container item direction='row' spacing={2}>
				<Grid item xs={6}>
					<TextField
						id='outlined-multiline-static'
						multiline
						rows={10}
						fullWidth
						onChange={customTextHandler}
						defaultValue={randomText}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						id='outlined-multiline-static'
						multiline
						rows={10}
						fullWidth
						placeholder='Start typing here to start the test'
						onChange={(e) => typeTextHandler(e)}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default TypingChallenge;
