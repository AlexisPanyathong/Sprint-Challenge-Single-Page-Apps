import React from 'react'
import { CardTwo, Planet, Type } from "./StyledWidgets";

export default function LocationCard ({info}) {
  // image={image}

  return (
    // <span>todo: location</span>
    <div className="location-card">
      <CardTwo>
        <Planet>
          {info.name}
        </Planet>

        <Type>
          {info.type} - {info.dimension}
        </Type>


        {/* <Residents>
          {info.residents[0]}
        </Residents> */}

      </CardTwo>
    </div>


  )
}
