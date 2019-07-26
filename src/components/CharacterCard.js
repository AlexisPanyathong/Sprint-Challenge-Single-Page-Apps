import React from 'react'
// import { Card, Name } from 


export default function CharacterCard ({character}) {
  return (
    // <span>todo: location</span>
    <div className="character-card">
      <Card>
        <Name>
          {character.name}
        </Name>
      </Card>

    </div>
  )
}
