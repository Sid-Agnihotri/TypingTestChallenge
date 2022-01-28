/** @format */

import React, { useState } from "react";
import {
	Grid,
	Typography,
	Button,
	Modal,
	Box,
	TextField,
	List,
	ListItem,
} from "@mui/material";

const Timer = ({ handleTimer, selectedTimer }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [open, setOpen] = useState(false);
	const [customTime, setCustomTime] = useState(0);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const selectNumber = (e, index) => {
		setSelectedIndex(index);
		handleTimer(e.target.value);
	};

	const handleCustomTime = () => {
		setSelectedIndex(3);
		handleTimer(customTime * 60);
		handleClose();
	};
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	const timeInMins = () => {
		var minutes = Math.floor(selectedTimer / 60);
		var seconds = selectedTimer - minutes * 60;

		return (
			<>
				{minutes < 10 ? `0${minutes}` : minutes}:
				{seconds < 10 ? `0${seconds}` : seconds}
			</>
		);
	};
	return (
		<Grid container direction='row' alignItems='center'>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'
						sx={{ marginBottom: "10px" }}>
						Enter the desired time
					</Typography>
					<Grid container justifyContent='flex-start' spacing='5'>
						<Grid item xs={12}>
							<TextField
								id='outlined-number'
								label='Minute'
								type='number'
								fullWidth
								onChange={(e) => setCustomTime(e.target.value)}
								onKeyDown={(e) => {
									if (e.key == "Enter") {
										handleCustomTime();
									}
								}}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item>
							<div>
								<Button variant='contained' onClick={handleCustomTime}>
									Confirm
								</Button>
							</div>
						</Grid>
					</Grid>
				</Box>
			</Modal>
			<Grid item>
				<Typography textAlign='left'>Choose the desired time: </Typography>
			</Grid>
			<Grid item>
				<List>
					<ListItem>
						<Button
							onClick={(e) => selectNumber(e, 0)}
							variant={selectedIndex === 0 ? "contained" : "text"}
							value='60'>
							1 Min
						</Button>
						<Button
							onClick={(e) => selectNumber(e, 1)}
							value='120'
							variant={selectedIndex === 1 ? "contained" : "text"}>
							2 Mins
						</Button>
						<Button
							onClick={(e) => selectNumber(e, 2)}
							value='300'
							variant={selectedIndex === 2 ? "contained" : "text"}>
							5 Mins
						</Button>
						<Button
							onClick={handleOpen}
							variant={selectedIndex === 3 ? "contained" : "text"}>
							Custom
						</Button>
					</ListItem>
				</List>
			</Grid>
			<Grid item xs={12} sx={{ textAlign: "center" }} mb={3}>
				<Typography variant='h3' sx={{ color: "green" }}>
					{timeInMins()}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Timer;
