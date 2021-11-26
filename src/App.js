import { Button, Container, Form, Grid, GridColumn, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import DisplayBalances from './Components/DisplayBalances';
import MainHeader from './Components/MainHeader'
import NewEntryForm from './Components/NewEntryForm';
import { useState } from 'react';
import EntryLines from './Components/EntryLines';

function App() {

  var initialEntries = [
    {
      id:1,
      description:"VA Work",
      value:"$550",
      isExpense:false
    },
    {
      id:2,
      description:"Fiber Internet",
      value:"$60",
      isExpense:true
    },
    {
      id:3,
      description:"Vet Bill",
      value:"$92",
      isExpense:true
    },
    {
      id:4,
      description:"December Piano Lessons",
      value:"$975",
      isExpense:false
    }
  ]

  const [entries, setEntries] = useState(initialEntries);

  function deleteEntry(id){
    //Note that in react you shouldn't direclty mutate a state. Workaround:

    //filter out all NON matching IDs (those to NOT be deleted), store here
    const result = entries.filter(entry => entry.id !== id);
    //setEntries to those (all but the deleted one)
    setEntries(result);
  }

  function addEntry(description, value, isExpense){
    const result = entries.concat({id: 
      entries.length+1, //<- this is a temporary fix    
      description, //<- with ES6, this is equivalent to description: description
      value, //<- with ES6, this is equivalent to value: value
      isExpense //<-same
    });
    console.log('entries:', entries);
    console.log('result:', result);
    setEntries(result);                     
  }

  return (
    <div className="App">
      <Container>

        <MainHeader title="Budget"/>

        <Statistic size="small">
          <Statistic.Label>Your Balance:</Statistic.Label>
          <Statistic.Value>2,500.11</Statistic.Value>
        </Statistic>

        <DisplayBalances/>

      <MainHeader title="Transactions" type="h3"/>
      <EntryLines entries={entries} deleteEntry={deleteEntry}/>

      <MainHeader title="Add New Transaction" type="h3"/>
      <NewEntryForm addEntry={addEntry}/>
      
      </Container>
    </div>
  );
}

export default App;

