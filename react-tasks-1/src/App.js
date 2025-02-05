import CurdForm from './components/CrudForm'
import './App.css';
import CrudTable from './components/CurdTable'
import { useState } from 'react';

function App() {

  const userData =[{Name:"Name"}, {Name:"Age"}]

  const [user, set_user]=useState([]);
  const[newuser, set_newuser]=useState([])

  
  const handelInput=(e)=>{
    console.log(e.target.value);
    set_user({...user,[e.target.name]:e.target.value})
    console.log(user)

  }

  const handelEdit=(id)=>{
    console.log(id);
    let edit=newuser.find(ele=>ele.id==id)
    console.log(edit)
  }

  const handelSubmit=()=>{
    let user_name=user.Name
    let user_age=user.Age
    set_newuser([...newuser,{id:newuser.length+1,Name:user_name,Age:user_age}])
    console.log(newuser);
    set_user([{Name:"",Age:""}])
  }

  return (
    <div className="App">
      <CurdForm userdata={userData} new_data={user} get_input={handelInput} />
      <button onClick={handelSubmit}>Submit</button>
      <CrudTable user={newuser} edit={handelEdit}/>
    </div>
  );
}

export default App;
