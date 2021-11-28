import { Container, Statistic } from 'semantic-ui-react';
import './App.css';
import DisplayBalances from './Components/DisplayBalances';
import MainHeader from './Components/MainHeader'
import NewEntryForm from './Components/NewEntryForm';
import { useEffect, useState } from 'react';
import EntryLines from './Components/EntryLines';
import ModalEdit from './Components/ModalEdit';
import { useSelector } from 'react-redux';

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const [entry, setEntry] = useState();

  const {isOpen, id} = useSelector(state => state.modals);

  const entries = useSelector(state => state.entries);//<-entries here corresponds to configureStore's key

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
   }, [isOpen, id, entries]);

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
  }, [entries]);

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
      <EntryLines entries={entries} />

      <MainHeader title="Add New Transaction" type="h3"/>
      <NewEntryForm />
      
      <ModalEdit isOpen={isOpen} {...entry} />

      </Container>
    </div>
  );
}

export default App;

