import React from 'react';
import './App.css';

class App extends React.Component {
    constructor()
    {
      super();
    
    this.state = {
      input:'',
      znak:'',
      broj1:'',
      rezultat:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
    this.manipulateChange= this.manipulateChange.bind(this);
    this.izracunajVrijednost = this.izracunajVrijednost.bind(this);
  }

  handleChange = (event) => {
    if(this.state.rezultat && !this.state.znak){
      this.setState({
        input: this.state.input + event.target.value,
        rezultat:''
      })
    }

    this.setState({
      input: this.state.input + event.target.value
    });
  }

  manipulateChange = (event) => {
    this.setState({
      znak: event.target.value,
      broj1: this.state.input,
      input:'',
    })
  }


  reset = () => {
    this.setState({
      input:'',
      znak:'',
      broj1:'',
      rezultat:''
    });
  }

  izracunajVrijednost = () => {
    if(this.state.znak === '-')
    {
          if(!this.state.rezultat)
          {
            this.setState({
                rezultat: Number(this.state.broj1) - Number(this.state.input),
                broj1:'',
                znak:'',
                input:''

      });
      }
      else {
        this.setState(state=> ({
          rezultat: state.rezultat - state.input,
          broj1:'',
          znak:'',
          input:''
        }));
      }
    }

    else if(this.state.znak === 'x')
    {
      if(!this.state.rezultat)
          {
            this.setState({
                rezultat: this.state.broj1 * this.state.input,
                broj1:'',
                znak:'',
                input:''

      });
      }
      else {
        this.setState(state=> ({
          rezultat: state.rezultat * state.input,
          broj1:'',
          znak:'',
          input:''
        }));
      }
    }
    else if(this.state.znak === '+')
    {
      if(!this.state.rezultat)
          {
            this.setState({
                rezultat: Number(this.state.broj1) + Number(this.state.input),
                broj1:'',
                znak:'',
                input:''

      });
      }
      else {
        this.setState(state=> ({
          rezultat: Number(state.rezultat) + Number(state.input),
          broj1:'',
          znak:'',
          input:''
        }));
      }
    }
    else if(this.state.znak === '/')
    {
      if(!this.state.rezultat)
          {
            this.setState({
                rezultat: this.state.broj1 / this.state.input,
                broj1:'',
                znak:'',
                input:''

      });
      }
      else {
        this.setState(state=> ({
          rezultat: state.rezultat / state.input,
          broj1:'',
          znak:'',
          input:''
        }));
      }
    }

    
  }


  

    render() {

      return (
  
      <div className="App">
        <h1>Calculator</h1>
        <div className="Calculator-box">
          <div className="racunanje">
            {
            this.state.rezultat ?
            this.state.rezultat : this.state.broj1 ?
            this.state.broj1 : null
            }
            </div>
          
          <div className="display-view">
              <div className="manipulacijaznak">{this.state.znak}</div>
              <div className="rezultat">
             {
                  this.state.rezultat ?
                  this.state.input
                  :
                  this.state.input ?
                  this.state.input :
                 0
            
              }</div>
            </div>
            
          <div className="Calculator-buttons">
          <button onClick={this.reset} className="AC">AC</button>
          <button value='/' onClick={e => this.manipulateChange(e)} className="manipulate">/</button>
          <button value='x' onClick={e => this.manipulateChange(e)} className="manipulate">x</button>
          <button value='7' onClick={e => this.handleChange(e)} className="broj">7</button>
          <button value='8' onClick={e => this.handleChange(e)} className="broj">8</button>
          <button value='9' onClick={e => this.handleChange(e)} className="broj">9</button>
          <button value='-' onClick={e => this.manipulateChange(e)} className="manipulate">-</button>
          <button value='4' onClick={e => this.handleChange(e)} className="broj">4</button>
          <button value='5' onClick={e => this.handleChange(e)} className="broj">5</button>
          <button value='6' onClick={e => this.handleChange(e)} className="broj">6</button>
          <button value='+' onClick={e => this.manipulateChange(e)} className="manipulate">+</button>
          <button value='1' onClick={e => this.handleChange(e)} className="broj">1</button>
          <button value='2' onClick={e => this.handleChange(e)} className="broj">2</button>
          <button value='3' onClick={e => this.handleChange(e)} className="broj">3</button>
          <button onClick ={this.izracunajVrijednost} className="equals">=</button>
          <button value='0' onClick={e => this.handleChange(e)} className="nula">0</button>
          <button value='.' onClick={e => this.handleChange(e)} className="broj">.</button>

          </div>
        </div>
      </div>
      );
    }
  };

export default App;
