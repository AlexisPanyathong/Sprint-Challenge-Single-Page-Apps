import React from 'react'
import { Card, Name, Status, Species, Location, Origin, Image } from "./StyledWidgets";


export default function CharacterCard ({info}) {
  return (
    // <span>todo: location</span>
      <div className="character-card">

      <Card>
        <Image>
          {info.image}
        </Image>

        <Name>
          {info.name}
        </Name>

        <Status>
          {info.status}
        </Status>

        <Species>
          Species: {info.species}
        </Species>

        <Location>
          Location: {info.location.name}
        </Location>

        <Origin>
          Origin: {info.origin.name}
        </Origin>
        
      </Card>


    </div>
  )
}
