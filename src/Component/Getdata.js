import React from "react";
import '../App.css';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ViewComments from './ViewComments';
import NewPost from './NewPost';


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



class App extends React.Component {



  constructor(props) {

    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      addModalShow: false,
      modelData: [],
      modelId: null,
      openForm: false
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

  openNewModel() {
    this.setState({ openForm: true})
  }

  openModel(id) {

    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(res => res.json())
    .then(json => {
      this.setState({
      modelData: json
      })
    });
    this.setState({ addModalShow: [id],  modelId: id})
  }
  render() {

    var { isLoaded, items } = this.state;
    var addModalClose = () => this.setState({ addModalShow: false });
    var FormClose = () => this.setState({ openForm: false });
    if (!isLoaded) {
      return <div className="center"><CircularProgress disableShrink /></div>;
    }



    else {

      return (
        <div className="App">
                  <StyledTableCell >
                    <ButtonToolbar>
                      <Button variant='danger' onClick={() => this.openNewModel()}>
                        Novi post
                      </Button>
                    </ButtonToolbar>
                    <NewPost show={this.state.openForm} onHide={FormClose} />
                  </StyledTableCell>
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
                    <ButtonToolbar >
                      <Button size="sm" variant='primary' onClick={() => this.openModel(item.id)}>
                        Komentari
                      </Button>
                    </ButtonToolbar>

                  </StyledTableCell>
                  <StyledTableCell align="left" className="tekst">{item.title}</StyledTableCell>
                  <StyledTableCell align="center" className="tekst">{item.body}</StyledTableCell>
                </StyledTableRow>
              ))}
              <ViewComments show={this.state.addModalShow} onHide={addModalClose} modelId={this.state.modelId} modelData={this.state.modelData}/>
            </TableBody>
          </Table>
        </div>

      );
    }



  }
}

export default App;