// import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';
import { Table, TableCell, TableHead, TableRow, TableBody, TableContainer, makeStyles, withStyles } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
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
        width: '75%',
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

const GridTable = () => {
    const classes = useStyles();
    return ( 
        <TableContainer component={Paper} className={classes.tableContainer} >
            <Table className={classes.table} size="small" aria-label="Sample Card Table">
                <TableHead className={classes.tableHeader}>
                    <TableRow>
                        <StyledTableCell >Card ID</StyledTableCell>
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
                </TableBody>
            </Table>
        </TableContainer>
        
    );
}

export default GridTable;