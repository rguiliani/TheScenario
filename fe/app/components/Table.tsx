import React from 'react'
import { Row } from './Row'

export function Table(props: { data: { _id: string, data?: string}[] | undefined }) {
  const rows = props.data && props.data.map((u, idx) => {
    return <Row key={idx} data={u} shade={idx % 2} />
  })

  return (<>{rows}</>)
}
