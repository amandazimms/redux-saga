import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { removeEntryRedux } from '../Actions/Entries.Actions';
import { openEditModal } from '../Actions/Modals.Actions'

function EntryLine(props) {
  const id = props.entry.id;
  const description = props.entry.description;
  const value = props.entry.value;
  const isExpense = props.entry.isExpense || false;
  const editEntry = props.editEntry;

  const dispatch = useDispatch();

  return (
    <Segment color={isExpense ? 'red' : 'green'}>
    <Grid columns={3} textAlign="right">
      <Grid.Row>
        <Grid.Column width={8} textAlign="left">{description}</Grid.Column>
        <Grid.Column width={4} textAlign="right">{value}</Grid.Column>
        <Grid.Column width={4}>
          <Icon 
            name="edit" 
            bordered 
            onClick={ ()=>dispatch(openEditModal(id)) }/>
          <Icon name="trash" onClick={ ()=>dispatch(removeEntryRedux(id)) } bordered/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Segment>
  )
}

export default EntryLine
