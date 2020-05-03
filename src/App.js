import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import './bootstrap.css';
// import FirstComponent, { SecondComponent } from './components/learning/FirstComponent'
// import ThirdComponent, { FourthComponent } from './components/learning/ThirdComponent'
// import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <TodoApp/>
      </div>
    );
  }
}

// class MyLearning extends Component {
//   render() {
//     return (
//       <div className="myLearning">
//         {/* Hello World */}
//         <FirstComponent />
//         <SecondComponent />
//         <ThirdComponent />
//         <FourthComponent />
//       </div>
//     );
//   }
// }

export default App;
