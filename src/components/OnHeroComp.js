

import React from 'react';
import './OnHeroComp.css';
import OnHeroContents from './OnHeroContents';



export default function OnHeroComp() {



        return(
        
        	
        
        
        
                <div className="OnheroNav"> 
		   <nav>
		   <ul>
		   <li>User Profile</li>
		   <li>Goal Tracking</li>
		   <li>Appointments</li>
		   <li>Selections</li>
		   <li>Finance</li>
		   <li>Settings</li>
		   </ul>
		   </nav>
		    
		   <div className="top-button" ><button type="button" className="buton">Primary</button> </div>
		   
		   <OnHeroContents />
		   
                </div>
        )

}
