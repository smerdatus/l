import React, { Component } from 'react';
import Year2016 from './Year2016';
import Year2017Q1 from './Year2017Q1';
import Year2017Q2 from './Year2017Q2';
import Year2017Q3 from './Year2017Q3';
import Year2017Q4 from './Year2017Q4';
import Year2018Q1 from './Year2018Q1';
import Year2018Q2 from './Year2018Q2';
import Year2018Q3 from './Year2018Q3';
import Year2018Q4 from './Year2018Q4';
import Year2019 from './Year2019';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: 'hide'
    };
  }

  renderButtons = () => {
    return (
        <div style={ { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: 20 } }>
            <div onClick={ () => this.setState({ person: 'hide' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Hide</button>
            </div>
            <div onClick={ () => this.setState({ person: 'Year2016' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">2016</button>
            </div>
            <div onClick={ () => this.setState({ person: 'Year2017Q1' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">2017Q1</button>
            </div>
            <div onClick={ () => this.setState({ person: 'Year2017Q2' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">2017Q2</button>
            </div>
            <div onClick={ () => this.setState({ person: 'Year2017Q3' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">2017Q3</button>
            </div>
            <div onClick={ () => this.setState({ person: 'Year2017Q4' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">2017Q4</button>
            </div>
            <div onClick={ () => this.setState({ person: 'Year2018Q1' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">2018Q1</button>
            </div>
            <div onClick={ () => this.setState({ person: 'Year2018Q2' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">2018Q2</button>
            </div>
            <div onClick={ () => this.setState({ person: 'Year2018Q3' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">2018Q3</button>
            </div>
            <div onClick={ () => this.setState({ person: 'Year2018Q4' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">2018Q4</button>
            </div>
            <div onClick={ () => this.setState({ person: 'Year2019' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">2019</button>
            </div>
        </div>
      );
  }

  render() {
    if (this.state.person === 'hide') {
      return (
          <div>
              {this.renderButtons()}
          </div>
      )
    } else if (this.state.person === 'Year2016') {
        return (
            <div>
                {this.renderButtons()}
                <Year2016 />
            </div>
          );
      } else if (this.state.person === 'Year2017Q1') {
        return (
            <div>
                {this.renderButtons()}
                <Year2017Q1 />
            </div>
          );
      } else if (this.state.person === 'Year2017Q2') {
        return (
            <div>
                {this.renderButtons()}
                <Year2017Q2 />
            </div>
          );
      } else if (this.state.person === 'Year2017Q3') {
        return (
            <div>
                {this.renderButtons()}
                <Year2017Q3 />
            </div>
          );
      } else if (this.state.person === 'Year2017Q4') {
        return (
            <div>
                {this.renderButtons()}
                <Year2017Q4 />
            </div>
          );
      } else if (this.state.person === 'Year2018Q1') {
        return (
            <div>
                {this.renderButtons()}
                <Year2018Q1 />
            </div>
          );
      } else if (this.state.person === 'Year2018Q2') {
        return (
            <div>
                {this.renderButtons()}
                <Year2018Q2 />
            </div>
          );
      } else if (this.state.person === 'Year2018Q3') {
        return (
            <div>
                {this.renderButtons()}
                <Year2018Q3 />
            </div>
          );
      } else if (this.state.person === 'Year2018Q4') {
        return (
            <div>
                {this.renderButtons()}
                <Year2018Q4 />
            </div>
          );
      } else if (this.state.person === 'Year2019') {
      return (
          <div>
              {this.renderButtons()}
              <Year2019 />
          </div>
        );
      } else {
      return (
          <div>Error</div>
      )
    }
  }
}
