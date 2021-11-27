import { Button, Container, Form, Grid, GridColumn, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import DisplayBalances from './Components/DisplayBalances';
import MainHeader from './Components/MainHeader'
import NewEntryForm from './Components/NewEntryForm';
import { useEffect, useState } from 'react';
import EntryLines from './Components/EntryLines';
import ModalEdit from './Components/ModalEdit';

function App() {

  var initialEntries = [
    {
      id:1,
      description:"VA Work",
      value:550,
      isExpense:false
    },
    {
      id:2,
      description:"Fiber Internet",
      value:60,
      isExpense:true
    },
    {
      id:3,
      description:"Vet Bill",
      value:92,
      isExpense:true
    },
    {
      id:4,
      description:"December Piano Lessons",
      value:975,
      isExpense:false
    }
  ]

  const [entries, setEntries] = useState(initialEntries);
  const [isOpen, setIsOpen] = useState(false);

  const [entryId, setEntryId] = useState();
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);

  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen])

  useEffect(() => {
    let _incomeTotal = 0;
    let _expenseTotal = 0;
    entries.map(entry => {
      if(entry.isExpense){
        return _expenseTotal += Number(entry.value);
      }
      return _incomeTotal += Number(entry.value)
    });
    setTotal(_incomeTotal - _expenseTotal);
    setExpenseTotal(_expenseTotal);
    setIncomeTotal(_incomeTotal);
    console.log('totalIncome:', incomeTotal, 'expense:', expenseTotal, 'grand total:', total);
  }, [entries]);

  function deleteEntry(id){
    //Note that in react you shouldn't direclty mutate a state. Workaround:
    //filter out all NON matching IDs (those to NOT be deleted), store here
    const result = entries.filter(entry => entry.id !== id);
    //setEntries to those (all but the deleted one)
    setEntries(result);
  }

  function editEntry(id){
    console.log('edit entry with id:', id); 
    if(id){
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function addEntry(){
    const result = entries.concat({id: 
      entries.length+1, //<- this is a temporary fix    
      description, //<- with ES6, this is equivalent to description: description
      value, //<- with ES6, this is equivalent to value: value
      isExpense //<-same
    });
    setEntries(result); 
    resetEntry();                    
  }

  function resetEntry(){
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <div className="App">
      <Container>

        <MainHeader title="Budget"/>

        <Statistic size="small">
          <Statistic.Label>Your Balance:</Statistic.Label>
          <Statistic.Value>{total}</Statistic.Value>
        </Statistic>

        <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>

      <MainHeader title="Transactions" type="h3"/>
      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry}/>

      <MainHeader title="Add New Transaction" type="h3"/>
      <NewEntryForm 
        addEntry={addEntry} 
        description={description} 
        value={value} 
        isExpense={isExpense}
        setDescription={setDescription} 
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      
      <ModalEdit 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}  
        editEntry={editEntry}
        description={description} 
        value={value} 
        isExpense={isExpense}
        setDescription={setDescription} 
        setValue={setValue}
        setIsExpense={setIsExpense}/>

      </Container>
    </div>
  );
}

export default App;

