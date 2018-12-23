import React from 'react';

import {Radar} from 'react-pathjs-chart';
import { TagCloud } from "react-tagcloud";

const customRenderer = (tag, size, color) => (
	<span key={tag.value}
style={{
	animation: 'blinker 3s linear infinite',
		animationDelay: `${Math.random() * 2}s`,
		fontSize: `${size}em`,
		border: `1px solid #ffffff36`,
		margin: '3px',
		padding: '3px',
		display: 'inline-block',
		color: '#138cc9',
}}>{tag.value}</span>
);



export default function SkillsandTopic(props) {

	const cData=props.chartData, wordCloud = props.wordCloud;
	return (
		<div className="skill-row mt2">
			<div className='skill-content'>
				<div className='skill-label mb ttl-b-bdr'>Skills</div>
				<Radar data={cData.data} options={cData.options} />
			</div>
			<div className= 'topic-content'>
				<div className='skill-label mb ttl-b-bdr'>Statisctics</div>
				<TagCloud minSize={1}
					maxSize={2}
					tags={wordCloud}
					renderer={customRenderer}
				/>
			</div>
		</div>
);
}

