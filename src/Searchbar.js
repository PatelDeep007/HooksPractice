import React from 'react';

const Searchbar=({searchfield, searchChange})=>{
	return(

		<div className="pa2">
			<input className="pa3 ba b--green bg-washed-red " type='search' placeholder='Seach for headlines' onChange={searchChange} />
	
	</div>
	);
}
export default Searchbar;