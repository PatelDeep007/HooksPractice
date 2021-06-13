
import React,{useState,useEffect} from 'react';
import Card from './Card';
import './Cards.css'


const Cards = ({items})=>{



const [Favorites, setFavorites] = useState([]);



const onFavoriteChange=(id,item)=>{	
	(Favorites.includes(id.toString()))?
	(setFavorites((Favorites)=>([...Favorites.filter((i)=>{return i!==id.toString()})])))
	:
	(setFavorites((Favorites)=>[...Favorites,id.toString()]))
	localStorage.setItem("Favorites",JSON.stringify(Favorites));
	var storage=localStorage.getItem('favItem'+id || 0);
	if(storage===null){
		localStorage.setItem(('favItem'+id),JSON.stringify(items));
		}
	else{
		localStorage.removeItem('favItem'+id);
	}
}


const getArray=JSON.parse(localStorage.getItem('Favorites') || 0);
useEffect(()=>{
	if(getArray!==0){
		setFavorites([...getArray])
	}
},[getArray])
	


	  return(
	  	<div className="Cards">
	  	
	{
		items.map((item,i)=>{
	  		return(
	  		<div> 
	  				{	
		  				 <Card 
		  				 id={i} 
		  				 item={item}
		  				 Favorites={Favorites} 
		  				 FavoriteChange={onFavoriteChange}
		  				 />
	  				}
	  		</div>
	  			);
	  })}
  </div>	  	
		);
}
export default Cards;
