import React from 'react'
import { Statistic } from 'semantic-ui-react';

function DisplayBalance(props) {
  const title = props.title;
  const value = props.value;
  const color = props.color || "black";
  const size = props.size || "tiny";
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{textAlign:"left"}}>
        {title}
      </Statistic.Label>
      <Statistic.Value>
        {value}
      </Statistic.Value>
    </Statistic>
  )
}

export default DisplayBalance
