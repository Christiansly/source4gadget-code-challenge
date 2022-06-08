import React from 'react'
import Row from './Row'

function Rows({data, columnPercents, columns}) {
  return (
    data.map((d, index) => <Row data={d} columns={columns}/>)
  )
}

export default Rows