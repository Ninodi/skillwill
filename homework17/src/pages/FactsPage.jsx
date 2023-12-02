import React from 'react'
import { useParams } from 'react-router-dom'

function FactsPage({facts}) {
  const {param} = useParams()

  console.log(facts) 
  const fact = facts.find((fact) => fact.id === parseInt(param));

  return (
    <div style={{maxWidth: "400px"}}>
      <h1>Facts</h1>
      {fact ? <p>{fact.fact}</p> : <p>Fact with that ID does not exist</p>}
    </div>
  )
}

export default FactsPage