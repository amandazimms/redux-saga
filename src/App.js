import { Button, Container, Form, Grid, GridColumn, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import DisplayBalances from './Components/DisplayBalances';
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
      
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Coffee</Grid.Column>
            <Grid.Column width={3} textAlign="right">$10</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Front end developer work</Grid.Column>
            <Grid.Column width={3} textAlign="right">$1000</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Mortgage</Grid.Column>
            <Grid.Column width={3} textAlign="right">$450</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="Add New Transaction" type="h3"/>
      <NewEntryForm/>
      </Container>
    </div>
  );
}

export default App;
