import React, {useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {indigo, purple} from '@material-ui/core/colors';
import pie from '../../OtherStuff/Init';
import {Grid} from "@material-ui/core";
import uOrder from "../../OtherStuff/Order";


const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },

}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    blue: {
        backgroundColor: indigo[600],
        margin: theme.spacing(2),
        marginLeft: "25px",
    },
}));

export function checkUnlocks() {

    if (pie.trans.qty >= uOrder[pie.upLvl].trans && pie.boards.qty >= uOrder[pie.upLvl].boards && pie.chips.qty >= uOrder[pie.upLvl].cpus && pie.cpus.qty >= uOrder[pie.upLvl].cpus)
    {

        pie.chips.changeQty(-uOrder[pie.upLvl].chips);
        pie.trans.changeQty(-uOrder[pie.upLvl].trans);
        pie.cpus.changeQty(-uOrder[pie.upLvl].cpus);
        pie.boards.changeQty(-uOrder[pie.upLvl].boards);
        pie.upLvl % 2 ? pie.listO_Open.push(uOrder[pie.upLvl].x) : pie.listO_Up.push(uOrder[pie.upLvl].x);
        pie.upLvl++;
    }

}

function test() {
    checkUnlocks();
}


export default function Unlocks(props: any) {
    const classes = useStyles();

    return (
        <Grid container>
            <div>
                <ColorButton variant="contained" color="primary" className={classes.blue} onClick={test}>
                    Unlocks
                </ColorButton>
            </div>
        </Grid>
    );
}
