import React from 'react';
const pathToImages = require.context('../assets/', true);
// true here is for use subdirectories, you can also specify regex as third param

class ImageRenderer extends React.Component{
	render(){
		const {iname='dap_pp', classes} = this.props,
			isrc = pathToImages(`./${iname}.jpg`, true);
		return (<img src={isrc} alt={iname} />);
	}
}

export default ImageRenderer;