import React, { Component } from 'react';
import './App.css';
import Person from './person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asd1', name: 'Max', age: 28 },
      { id: 'asd2', name: 'Manu', age: 29 },
      { id: 'asd3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  };

  deletePersonHandler = (i) => {
    // const persons = this.state.persons.slice(0);
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    console.log(persons);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((el) => {
      return el.id === id;
    });

    // personIndex에 부합하는 객체만 따로 뺴서 복사
    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    // 배열 완전 복사
    const persons = [...this.state.persons];

    // 인덱스와 맞는 원본배열에 조건에 부합한 person 객체 덮어치기
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return (
              <Person
                click={() => this.deletePersonHandler(i)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(e) => this.nameChangedHandler(e, person.id)}
              ></Person>
            );
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="button" onClick={() => this.togglePersonsHandler()}>
          Toggle persons
        </button>
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
