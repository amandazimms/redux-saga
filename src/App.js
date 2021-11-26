import { Button, Container, Form, Grid, GridColumn, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import MainHeader from './Components/MainHeader'
function App() {
  return (
    <div className="App">
      <Container>

        <MainHeader title="Budget"/>

        <Statistic size="small">
          <Statistic.Label>Your Balance:</Statistic.Label>
          <Statistic.Value>2,500.11</Statistic.Value>
        </Statistic>

        <Segment textAlign="center">
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size="tiny" color="green">
                  <Statistic.Label style={{textAlign:"left"}}>
                    Income: 
                  </Statistic.Label>
                  <Statistic.Value>
                    1,045.50
                  </Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
              <Statistic size="tiny" color="red">
                  <Statistic.Label style={{textAlign:"left"}}>
                    Expenses: 
                  </Statistic.Label>
                  <Statistic.Value>
                    400.50
                  </Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

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

      <Form unstackable>
        <Form.Group>
          <Form.Input 
            icon="tags"
            width={12}
            label="Description"
            placeholder="New shiny thing"
          />
          <Form.Input
            icon="dollar" 
            iconPosition="left"
            width={4}
            label="Value"
            placeholder="100.00"
          />
        </Form.Group>
        <Button.Group style={{marginTop: 20}}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary>OK</Button>
        </Button.Group>
      </Form>
      </Container>
    </div>
  );
}

export default App;
