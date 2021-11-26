import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine(props) {
  const description = props.description;
  const amount = props.amount;
  const isExpense = props.isExpense || false;

  return (
    <Segment color={isExpense ? 'red' : 'green'}>
    <Grid columns={3} textAlign="right">
      <Grid.Row>
        <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
        <Grid.Column width={3} textAlign="right">{amount}</Grid.Column>
        <Grid.Column width={3}>
          <Icon name="edit" bordered/>
          <Icon name="trash" bordered/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Segment>
  )
}

export default EntryLine
