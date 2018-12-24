import React from 'react';
import styles from '../styles/glichText.scss';

class GlichText extends React.Component{
	render(){
		const {classes, content} = this.props;
		return (<div className="box">
					<div className="glitch">
					{content}
				</div>
			</div>);
	}
}

export default GlichText;