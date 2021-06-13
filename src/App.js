import React from 'react';
import Cards from './Cards';
import Searchbar from './Searchbar';
import axios from "axios";

import { useState, useEffect } from "react";

const dummyAPI ="https://cors-anywhere.herokuapp.com/ace.qtstage.io/api/v1/collections/entertainment";




const App=()=>{


const [items, setItems] = useState(null);
const [searchfield,setSearchField]=useState('');

useEffect(() => {
   getStoryWithAxios();
  },[]);


const getStoryWithAxios = async () => {
	  	const response = await axios.get(dummyAPI);
	  	const allItems=response.data.items;
	  	setItems(allItems);
	  	};

 const onSearchChange=(event)=>{
 	setSearchField(event.target.value);
 	}
 
		return(
			<div >
			<div>
			<h1 className="light-gray">NewsLaundry Assignment</h1>
			</div>
			<div>			
			 <Searchbar  searchChange={onSearchChange}  />	
			</div>
			<div>
			{Boolean(items) && <Cards items={items.filter((item)=>{
   		return item.story.headline.toLowerCase().includes((searchfield).toString().toLowerCase())
   	})}/>}
			</div>
			</div>
		);
	}

export default App;