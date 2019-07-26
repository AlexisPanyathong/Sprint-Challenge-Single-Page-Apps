import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import EpisodeList from "./EpisodeList";
import { Link } from "react-router-dom";


export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/characters'>Characters</Link>
        </li>
        <li>
          <Link to='/locations'>Locations</Link>
        </li>
        <li>
          <Link to='/episodes'>Episodes</Link>
        </li>
      </ul>
    </nav>
      <Switch>
        
          <Route path='/characters' component={CharacterList} />
          <Route path='/locations' component={LocationsList} />
          <Route path="/episodes" component={EpisodeList} />
          <Route component={WelcomePage} />
        
      </Switch>
      
    
    
  </div>

}
