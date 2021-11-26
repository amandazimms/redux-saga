import { Container, Grid, GridColumn, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>

        <Header as="h1">Budget</Header>

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

      <Header as="h3">Transactions</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column>Coffee</Grid.Column>
            <Grid.Column>$10</Grid.Column>
            <Grid.Column>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      </Container>
    </div>
  );
}

export default App;
