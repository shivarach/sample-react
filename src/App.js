import React from 'react';
import Form from './components/Form'
import AddAppointment from './appointment/AddAppointment.js'
import ViewAppointments from "./appointment/ViewAppointments";

// function App() {
//   return (
//     <div className="App">
//       <Form/>
//     </div>
//   );
// }

function App() {
    return (
        <div className="App">
            <p>Hello world</p>
            <AddAppointment/>
            <ViewAppointments/>
        </div>
    );
}

export default App;
