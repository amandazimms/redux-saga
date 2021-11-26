import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
  return (
    <Segment textAlign="center">
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>

          <DisplayBalance title="Income" value="7,801" color="green" size="small"/>

        </Grid.Column>
        <Grid.Column>
        
          <DisplayBalance title="Expenses" value="622" color="red" size="small"/>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default DisplayBalances
