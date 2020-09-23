import React, { Component } from 'react';
import './App.css';


class App extends Component {
   constructor(){
     super();//hereda las propiedades del componente
     this.state = {
       notes: [
         {noteId:1, noteContent: 'nota1'},
         {noteId:2, noteContent: 'nota2'}
       ]
      };
    }
 render() {
  return (
    <div className="notes-container">
      <div className="notes-header">
      <h1>¡Notas Locas!</h1>     
      </div> 
      <div className ="notes-body">
        <ul>
      {this.state.notes.map(note => {
        return (
          <li key={note.noteId}>{note.noteContent }</li>
        )

      })
      }
      </ul>
      </div>
      <div className="notes-footer"></div>
    </div>
  );
    }
  }

export default App;
