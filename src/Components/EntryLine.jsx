import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine(props) {
  const id = props.entry.id;
  const description = props.entry.description;
  const amount = props.entry.amount;
  const isExpense = props.entry.isExpense || false;
  const deleteEntry = props.deleteEntry;

  return (
    <Segment color={isExpense ? 'red' : 'green'}>
    <Grid columns={3} textAlign="right">
      <Grid.Row>
        <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
        <Grid.Column width={3} textAlign="right">{amount}</Grid.Column>
        <Grid.Column width={3}>
          <Icon name="edit" bordered/>
          <Icon name="trash" onClick={ ()=>deleteEntry(id) } bordered/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Segment>
  )
}

export default EntryLine
