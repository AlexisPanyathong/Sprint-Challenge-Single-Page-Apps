import React from 'react'
import { Card, Name } from "./StyledWidgets";


export default function CharacterCard ({info}) {
  return (
    // <span>todo: location</span>
    <div className="character-card">
      <Card>
        <Name>
          {info.name}
        </Name>
      </Card>

    </div>
  )
}
