/* eslint eqeqeq: "off" */
import React, { useEffect } from 'react';

import { useUser } from '../../stores/user';
import { useLayout } from '../../stores/layout';


import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, Paper } from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import Form from '../../components/form/Form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';



function UserPag () {

	const {t} = useTranslation()
	const history = useHistory()
	const { state: user, fetchAll} = useUser();
	const { setTitle } = useLayout()
	const classes = useStyles();

	useEffect(() => {
		setTitle(t("pag.user.title"))
		fetchAll();
	}, [])

	const handleDelete = e => console.log("item.id")
	const handleClickRow = e => history.push("/profile")

	return (<Form
		renderFooter={
			<Button
				variant="contained"
				color="primary"
				startIcon={<AddIcon />}
				//onClick={() => dialogOpen()}
			>
				{t("pag.user.btt_new")}
			</Button>
		}
	>
		<TableContainer component={Paper}>
			{user.all ? (

				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>{t("pag.user.tbl.username")}</TableCell>
							<TableCell>{t("pag.user.tbl.role")}</TableCell>
							<TableCell align="center" className={classes.actionsCell}>
								{t("pag.user.tbl.actions")}
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{user.all.map(item => (

							<TableRow hover key={item.id}
								onClick={handleClickRow}
							>
								<TableCell >{item.username}</TableCell>
								<TableCell >{t(`app.roles.${item.role}`)}</TableCell>
								<TableCell align="center" className={classes.actionsCell}>
									<IconButton id="btt-delete"
										onClick={handleDelete}
									><DeleteIcon /></IconButton>
								</TableCell>
							</TableRow>

						))}
					</TableBody>
				</Table>

			) : (<div>...</div>)}
		</TableContainer>

		<EditDialog />
		
	</Form>)
}

export default UserPag

const useStyles = makeStyles({
	table: {
		//minWidth: 650,
	},
	container: {
		display: "flex",
		justifyContent: "flex-end",
		marginTop: "14px",
	},
	actionsCell: {
		width: "100px"
	} 
});