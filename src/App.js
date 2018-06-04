import React, { Component } from 'react';
import './App.css';

import { Navbar, Icon, CardTitle } from 'react-materialize'
import NavItem from 'react-materialize/lib/NavItem';
import Card from 'react-materialize/lib/Card';

class App extends Component {
  render() {
    return (
      <div className="container">

        <Navbar brand='logo' className="orange" right>
          <NavItem><Icon>alarm_add</Icon></NavItem>
          <NavItem><Icon>view_module</Icon></NavItem>
        </Navbar>

        <div className="row">
          <div className="col s12 m6 l4">
            <Card
              className="small"
              header={<CardTitle image='https://react-materialize.github.io/img/sample-1.jpg'>Tytuł</CardTitle>}
              actions={[<a href='#'>Link</a>]}>
              Tekst
            </Card>
          </div>
          <div className="col s12 m6 l4">
            <Card
              className="small"
              header={<CardTitle image='https://react-materialize.github.io/img/sample-1.jpg'>Tytuł</CardTitle>}
              actions={[<a href='#'>Link</a>]}>
              Tekst
            </Card>
          </div>
          <div className="col s12 m6 l4">
            <Card
              className="small"
              header={<CardTitle image='https://react-materialize.github.io/img/sample-1.jpg'>Tytuł</CardTitle>}
              actions={[<a href='#'>Link</a>]}>
              Tekst
            </Card>
          </div>


          {/* cards */}
        </div>
      </div>
    );
  }
}

export default App;
