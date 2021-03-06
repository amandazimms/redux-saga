import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances(props) {
  const incomeTotal = props.incomeTotal;
  const expenseTotal = props.expenseTotal;

  return (
    <Segment textAlign="center">
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>

          <DisplayBalance title="Income" value={incomeTotal} color="green" size="small"/>

        </Grid.Column>
        <Grid.Column>
        
          <DisplayBalance title="Expenses" value={expenseTotal} color="red" size="small"/>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default DisplayBalances
