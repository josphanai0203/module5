import logo from './logo.svg';
import './App.css';
import Student from './component/Student';

function App() {
  const students = [
    {
      id:1,
      name: 'John',
      age: 21,
      address:"Hà Nội"
    },
    {
      id:2,
      name: 'Vivi',
      age: 12,
      address:"Đà Nẵng"
    },
    {
      id:3,
      name: 'Thomas',
      age: 23,
      address:"Huế"
    }
  ]
  return (
    <table>
      <thead>
        <td>ID</td>
        <td>Name</td>
        <td>Age</td>
        <td>Address</td>
      </thead>
      <tbody>
        {students.map((e,i)=><Student id={e.id} name={e.name} age={e.age} address={e.address}/>)}
      </tbody>
    </table>
  );
}

export default App;
