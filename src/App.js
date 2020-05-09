
import React from 'react';
import TaskItem from"./TaskItem/TaskItem";
import AddNewTask from "./AddNewTask/AddNewTask";
import OutstandingTaskCount from "./OutstandingTaskCount/OutstandingTaskCount";



function App() {
  const [ tasks, setTasks ] = useState([
    { text: "Paint and oil outdoor furniture", completed: false, id: '001' },
    { text: "Hang pictures in bedroom", completed: false, id: '002' },
    { text: "Order party decorations", completed: true, id: '003' },
    { text: "Order replacement printer toner", completed: true, id: '004' },
    { text: "Organise Metrolink refund", completed: true, id: '005' }
  ]);
  



  return (
    <div className="App">
      <header className = "App-header">
      <h1>Get Things Done.</h1>
      </header>
      <body>

        <AddNewTask />

        <OutstandingTaskCount/>

        <TaskItem />
        <TaskItem />
        <TaskItem />
      </body>
    </div>
  );
}

export default App;
