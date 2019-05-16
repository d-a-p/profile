import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../styles/Scroller.scss'
import ImageRenderer from "./ImageRenderer";
import Icon from './Icon';
import cx from 'classnames';

const getContent = (article, index) => ({});


class Scroller extends React.Component{
	constructor(props) {
		super(props);
		this.state = {content:props.content};
	}

	render(){
		const {classes, renderTextOnly, renderImageOnly, headerClass } = this.props,
			{content=[]} = this.state;

		return (<Slider className="slider">
			{content.map((article, index) => (<div className="scroller-tile" key={index}>
			<div className='scroller-text'>
				<div className='header'><h2 className={cx("scoller-header mb mt", headerClass)}>{article.title}</h2></div>
				<div className="scoller-dtls">{article.description}</div>
				<div className='social-icns'>
					<a href='https://www.facebook.com/d4dap' target='None'><Icon name='fb'/></a></div>
			</div>
			<ImageRenderer iname={article.iname} />
		</div>))}
			</Slider>);
	}
}

export default Scroller;