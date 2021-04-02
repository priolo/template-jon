import { FormControl, Grid, IconButton, InputAdornment, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
/* eslint eqeqeq: "off", react-hooks/exhaustive-deps: "off"*/
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useUser } from '../../stores/user';
import { USER_ROLES } from "../../stores/user/utils"
import { Close as CloseIcon } from '@material-ui/icons'


function UserWriterSelector({
	label,
	value,
	onChange,
	disabled,
}) {

	const classes = useStyles()
	const { state: user, fetchAll } = useUser()

	const handleClickClear = e => onChange("")
	const handleChange = e => onChange(e.target.value)


	return (
		<Grid container alignItems="center">
			<Grid item xs>
				<FormControl fullWidth>
					<InputLabel>{label}</InputLabel>

					<Select fullWidth
						value={value}
						onChange={handleChange}
						disabled={disabled}
						endAdornment={<InputAdornment className={classes.selectAdornment} position="end">
							{value && (<IconButton size="small" onClick={handleClickClear}>
								<CloseIcon fontSize="small" />
							</IconButton>)}
						</InputAdornment>}
					>
						{user.all
							.filter(user => user.role != USER_ROLES.CUSTOMER)
							.map((user) => (
								<MenuItem key={user.id} value={user.id}>
									{user.email}
								</MenuItem>
							))
						}
					</Select>

				</FormControl>
			</Grid>
			<Grid item >

			</Grid>
		</Grid>
	)
}

export default UserWriterSelector





const useStyles = makeStyles(theme => ({
	selectAdornment: {
		marginRight: theme.spacing(3),
	},
}));