// import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';
import { Table, TableCell, TableHead, TableRow, TableBody, TableContainer, makeStyles, withStyles } from '@material-ui/core';
import CardImg from '../../../assets/CardImg/Wixoss/WXEX2-51.jpg';


const VerticalStyleCellHead = withStyles((theme) => ({
    root: {
        border: "1px solid #b39ddb"
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
        margin: 'auto'
    },
    table: {
      minWidth: 650,
      borderCollapse: 'collapse'
    },

});



function createData(cardId, cardName, color) {
    return { cardId, cardName, color };
}

const gridSamples = [
    createData("WDK17-001", "Alfou", "Black"),
    createData("WDK17-002", "Tama", "White"),
    createData("WDK17-003", "Anne", "Green"),
];

const WxSigniDetail = () => {
    const classes = useStyles();
    return ( 
        <TableContainer component={Paper} className={classes.tableContainer} >
            <Table className={classes.table} size="small" aria-label="Sample Card Table">
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={3} align="center" >
                            <h2>Alfou</h2>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell rowSpan={10}>
                            <img src={CardImg} alt="card" width="250" height="350" align="center"/>
                        </TableCell>
                        <TableCell >Color</TableCell>
                        <TableCell>Black</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >Card Type</TableCell>
                        <TableCell>SIGNI</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >Card Type</TableCell>
                        <TableCell>SIGNI</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >Card Type</TableCell>
                        <TableCell>SIGNI</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >Card Type</TableCell>
                        <TableCell>SIGNI</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >Card Type</TableCell>
                        <TableCell>SIGNI</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >Card Type</TableCell>
                        <TableCell>SIGNI</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >Card Type</TableCell>
                        <TableCell>SIGNI</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >Card Type</TableCell>
                        <TableCell>SIGNI</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >Card Type</TableCell>
                        <TableCell>SIGNI</TableCell>
                    </TableRow>
                </TableBody>
                
                {/* <TableHead className={classes.tableHeader}>
                    <TableRow>
                        <StyledTableCell>Card ID</StyledTableCell>
                        <StyledTableCell >Name</StyledTableCell>
                        <StyledTableCell >Color</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {gridSamples.map((row) => (
                        <TableRow key={row.name}>
                            <StyledTableCell scope="row">
                                {row.cardId}
                            </StyledTableCell>
                            <StyledTableCell >{row.cardName}</StyledTableCell>
                            <StyledTableCell >{row.color}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody> */}
            </Table>
        </TableContainer>
        
    );
}

export default WxSigniDetail;