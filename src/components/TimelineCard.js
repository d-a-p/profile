import React from 'react';
import "../styles/timelineCard.scss";

const Tags = ({tags}) => tags.map((str, id) => <div key={id} className='tag'>{str}</div>);

const Links = ({links}) => links.map(({name, url},id) => (
	<a href={url} key={id} className="link" target="_blank">{name}</a>
));

class TimelineCard extends React.Component{

	render(){

		const {content} = this.props,
			{title, text, links, tags} = content;
		console.log(title, text, tags, links)
		return(<div className="timeline-card">
			<div className="tags">
				<Tags tags={tags} />
			</div>
			<h3 className="title">{title} </h3>
			<div className="text">{text}
			</div>
			<div className="links">
				<Links links={links} />
			</div>
			</div>

		);
	}
}


export default TimelineCard;