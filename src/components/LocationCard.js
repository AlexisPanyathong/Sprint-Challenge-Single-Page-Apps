import React from 'react'
import { Card, Planet, Type, Dimension } from "./StyledWidgets";

export default function LocationCard ({info}) {
  // image={image}

  // name, type, dimension, residents

  return (
    // <span>todo: location</span>
    <div className="location-card">
      <Card>
        <Planet>
          {info.name}
        </Planet>

        <Type>
          {info.type}
        </Type>

        <Dimension>
          {info.dimension}
        </Dimension>

        {/* <Residents>
          {info.residents[0]}
        </Residents> */}

      </Card>
    </div>


  )
}
