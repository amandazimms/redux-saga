import React, { useState } from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import ModalEdit from './ModalEdit';

function EntryLine(props) {
  const id = props.entry.id;
  const description = props.entry.description;
  const value = props.entry.value;
  const isExpense = props.entry.isExpense || false;
  const editEntry = props.editEntry;
  const deleteEntry = props.deleteEntry;

  return (
    <Segment color={isExpense ? 'red' : 'green'}>
    <Grid columns={3} textAlign="right">
      <Grid.Row>
        <Grid.Column width={8} textAlign="left">{description}</Grid.Column>
        <Grid.Column width={4} textAlign="right">{value}</Grid.Column>
        <Grid.Column width={4}>
          <Icon name="edit" bordered onClick={ ()=>editEntry(id) }/>
          <Icon name="trash" onClick={ ()=>deleteEntry(id) } bordered/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Segment>
  )
}

export default EntryLine
