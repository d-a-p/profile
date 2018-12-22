import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../styles/Scroller.scss'
import ImageRenderer from "./ImageRenderer";

const getContent = (article, index) => ({});


class Scroller extends React.Component{
	constructor(props) {
		super(props);
		this.state = {content:props.content};
	}

	render(){
		const {classes, renderTextOnly, renderImageOnly } = this.props,
			{content=[]} = this.state;

		return (<Slider className="slider">
			{content.map((article, index) => (<div className="scroller-tile" key={index}>
			<div className='scroller-text'>
				<h2 className="scoller-header mb mt">{article.title}</h2>
				<div className="scoller-dtls">{article.description}</div>
			</div>
			<ImageRenderer iname={article.iname} />
		</div>))}
			</Slider>);
	}
}

export default Scroller;