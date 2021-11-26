import { Button, Container, Form, Grid, GridColumn, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import DisplayBalances from './Components/DisplayBalances';
import EntryLine from './Components/EntryLine';
import MainHeader from './Components/MainHeader'
import NewEntryForm from './Components/NewEntryForm';

function App() {
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
      
      <EntryLine description="Coffee" amount="$3" isExpense/>
      <EntryLine description="Front end developer work" amount="$1,500"/>
      <EntryLine description="Mortgage" amount="$950" isExpense/>

      <MainHeader title="Add New Transaction" type="h3"/>
      <NewEntryForm/>
      </Container>
    </div>
  );
}

export default App;
