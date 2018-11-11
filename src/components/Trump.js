import React from 'react';

const Trump = (props) => {
	return(
		<div key={props.data.id} onClick={props.handleClick} className="trumps" id={props.data.id}><img src={props.data.img_source} alt={props.data.id}/></div>
	)
}

export default Trump;