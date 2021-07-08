import {Avatar, Link} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {amber, deepOrange} from "@material-ui/core/colors";
import {purple} from "@material-ui/core/colors";
import {Tooltip} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Fade} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width:500,
    },
    orange: {
        backgroundColor: deepOrange[500],
    },
    blue: {
        backgroundColor: amber[500]
    },
    purple: {
        backgroundColor: purple[800]
    },
    footer: {
        // backgroundColor:"gray",
        position:"relative",
        left: "0px",
        bottom: "0px",
        paddingTop:"50px"
    },
}));

function Footer() {
    const classes = useStyles();

    return (

        <div className={classes.footer}>
            {/*<h4>Made by Shelby Jordan, Jesus Ramirez Arroyo, Austin John Aaro and Cynthia Mohan </h4>*/}
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="flex-end"
            >
                <Tooltip title="Shelby Jordan" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                <Link href="https://github.com/Kingly77" color="inherit" underline={'none'} target="_blank" rel="noopener">
                    <Avatar alt="Shelby Jordan" src="/broken-image.jpg" variant="square" className={classes.blue}>
                        S
                    </Avatar>
                </Link>
                </Tooltip>
                <Tooltip title="Jesus Ramirez Arroyo" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                <Link href="https://github.com/JR1994-CA" color="inherit" underline={'none'} target="_blank" rel="noopener">
                    <Avatar alt="Jesus Ramirez Arroyo" variant="square" src="/broken-image.jpg" className={classes.orange}>J</Avatar>
                </Link>
                </Tooltip>
                {/*<Tooltip title="Austin John Aaro" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>*/}
                {/*<Link href="https://github.com/AustinJohnAaro"  color="inherit" underline={'none'} target="_blank" rel="noopener">*/}
                {/*    <Avatar alt="Austin John Aaro" src="/broken-image.jpg" variant="square">A</Avatar>*/}
                {/*</Link>*/}
                {/*</Tooltip>*/}
                <Tooltip title="Cynthia Mohan" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                <Link href="https://github.com/CynthiaMohan" color="inherit" underline={'none'} target="_blank" rel="noopener">
                    <Avatar alt="Cynthia Mohan" variant="square" className={classes.purple}
                            src="/static/images/avatar/4.jpg">C</Avatar>
                </Link>
                </Tooltip>
            </Grid>
        </div>
    );
}

export default Footer;