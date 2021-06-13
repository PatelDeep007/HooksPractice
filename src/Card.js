import React from 'react';
import './Card.css'
import {IoIosHeart,IoIosHeartEmpty} from 'react-icons/io';


const Card=({id,item,Favorites, FavoriteChange})=>{


var convertedTimeStamp= new Date(item["story"]["first-published-at"]);
var year=convertedTimeStamp.getFullYear();
var month = convertedTimeStamp.getMonth();
var day=convertedTimeStamp.getDate();

	return(
			<div className="Card db w30-ns">
			
				<div className =' bg-red db br3 pa3 ma2 bw2 shadow-5'>
				
				<div >
						
						{	(Favorites.includes(id.toString()))?
							(<IoIosHeart
							size={20}
							onClick={()=>{FavoriteChange(id,item)}}
							style={{color:'black'}}/>)
							:
						(<IoIosHeartEmpty 
							size={20}
							onClick={()=>{FavoriteChange(id,item)}}
							style={{color:'black'}}/>)
										
						}
					
				</div>
					<div >
						<h2>{item.story.headline}</h2>
						<p>{item.story.subheadline}</p>
						<p>Published on {day}/{month}/{year}</p>
					</div>
				</div>
			</div>
		);
}
export default Card;