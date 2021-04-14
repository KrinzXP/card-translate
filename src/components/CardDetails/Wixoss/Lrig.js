// import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';
import { Table, TableCell, TableHead, TableRow, TableBody, TableContainer, makeStyles, withStyles } from '@material-ui/core';
// import CardImg from '../../../assets/CardImg/Wixoss/WXEX2-51.jpg';


const HeaderCells = withStyles((theme) => ({
    root: {
        border: "1px solid #b39ddb",
    },
    head: {
      backgroundColor: '#b39ddb',
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

//Apply Styles to vertical cells and vertical headers
const VerticalStyleCells = withStyles((theme) => ({
    root: {
        border: "1px solid #b39ddb",
    },
    head: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    tableContainer: {
        width: '65%',
        margin: 'auto',
        borderCollapse: 'collapse',
    },
    table: {
        minWidth: 650,
        borderCollapse: 'collapse'
    },
    imageCell: {
        textAlign: 'center',
        verticalAlign: 'center',
    }, 
    effectHead: {
        textAlign: 'center',
        backgroundColor: '#b39ddb',
        fontWeight: 'bold',
        color: 'black',
    },
    tableHeader: {
        textAlign: 'center',
        backgroundColor: '#b39ddb',
        border: "1px solid #b39ddb",
        color: 'black',
    }
});

//Webpack function to search images based on CardId
// function importAllImages(imageList) {
//     let images = {};
//     imageList.
// }
// const images = 

//TODO: Remove the tail of the links past image format
const WxSigniDetail = () => {
    const classes = useStyles();
    return ( 
        <TableContainer component={Paper} className={classes.tableContainer} >
            <Table className={classes.table} size="small" aria-label="Sample Card Table">
                <TableHead>
                    <TableRow>
                        <VerticalStyleCells colSpan={3} className={classes.tableHeader}>
                            {/* TODO: replace this with data from DB */}
                            <p><h1>Seyuragi, Evil Sin of Fluctuation</h1></p>
                            <p><h1>彷徨変異の凶悪　セユラギ</h1></p>
                         </VerticalStyleCells>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <VerticalStyleCells rowSpan={9} className={classes.imageCell}>
                            <img src="https://static.wikia.nocookie.net/selector-wixoss/images/7/7e/WXK09-034.png" 
                                 alt="card" width="250" height="350"/>
                        </VerticalStyleCells>
                        <VerticalStyleCells variant="head">Card ID</VerticalStyleCells>
                        <VerticalStyleCells>SIGNI</VerticalStyleCells>
                    </TableRow>
                    <TableRow>
                        <VerticalStyleCells variant="head">Color</VerticalStyleCells>
                        <VerticalStyleCells>Black</VerticalStyleCells>   
                    </TableRow>
                    <TableRow>
                        <VerticalStyleCells variant="head">Card Type</VerticalStyleCells>
                        <VerticalStyleCells>SIGNI</VerticalStyleCells>
                    </TableRow>
                    <TableRow>
                        <VerticalStyleCells variant="head">Level</VerticalStyleCells>
                        <VerticalStyleCells>4</VerticalStyleCells>
                    </TableRow>
                    <TableRow>
                        <VerticalStyleCells variant="head">Limit</VerticalStyleCells>
                        <VerticalStyleCells>Alfou Limited</VerticalStyleCells>
                    </TableRow>
                    <TableRow>
                        <VerticalStyleCells variant="head">Formats</VerticalStyleCells>
                        <VerticalStyleCells></VerticalStyleCells>
                    </TableRow>
                    <TableRow>
                        <VerticalStyleCells variant="head">Power</VerticalStyleCells>
                        <VerticalStyleCells>12000</VerticalStyleCells>
                    </TableRow>
                    <TableRow>
                        <VerticalStyleCells variant="head">Mayu's Room</VerticalStyleCells>
                        <VerticalStyleCells>Banned</VerticalStyleCells>
                    </TableRow>
                    <TableRow>
                        <VerticalStyleCells variant="head">Sets</VerticalStyleCells>
                        <VerticalStyleCells>SIGNI</VerticalStyleCells>
                    </TableRow>
                    <TableRow>
                        <VerticalStyleCells colSpan={3} variant="head" className={classes.effectHead}>Effects</VerticalStyleCells>
                    </TableRow>
                    <TableRow>
                        <VerticalStyleCells colSpan={3}>
                            <p>Whole paragraphs of WTF effects</p>
                        </VerticalStyleCells>
                    </TableRow>
                </TableBody>
                
            </Table>
        </TableContainer>
        
    );
}

export default WxSigniDetail;