import React from 'react'
import Cell from './Cell'

function Row({data, columnPercent, columns}) {
  for (const item in data) {
    console.log(data[item])
  }
  return (
    <div>
      {
        columns.map((c) => <Cell />)
      }
    </div>
  )
}

export default Row