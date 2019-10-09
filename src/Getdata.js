import React, { Component } from "react";
import './App.css';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  

class App extends React.Component {


    
    constructor(props) {
        
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      }
    }

    componentDidMount() {

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        });

    }

    render() {

      var { isLoaded, items } = this.state;

      if(!isLoaded) {
        return <div className="center"><CircularProgress disableShrink /></div>;
      }

      else {

        return (
          <div className="App">

            <Table >
            <TableHead>
                <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell align="center">Akcije</StyledTableCell>
                    <StyledTableCell align="center">Naslov</StyledTableCell>
                    <StyledTableCell align="center">Opis</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map(item => (
                    <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row" >
                        {item.id}.
                    </StyledTableCell>
                    <StyledTableCell>
                    <Button variant="contained" color="primary" onClick={() => this.setState({showModal: true})} className={useStyles.button}>
                        Detalji
                    </Button>
                    </StyledTableCell>
                    <StyledTableCell align="left" className="tekst">{item.title}</StyledTableCell>
                    <StyledTableCell align="center" className="tekst">{item.body}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
            </Table>
          </div>
        );
      }

    }
}

export default App;