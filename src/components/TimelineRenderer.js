import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import TimelineCard from './TimelineCard';
import '../particles'
import Icon from './Icon';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.scss'

/*
props :
date,
position,


iconStyle,
icon,
iconOnClick

 */

class TimelineRenderer extends React.Component{ //change timelinedata classname




	render(){

		const {data=[]} = this.props;
		return(<div className="dark-bcg">
			<VerticalTimeline className='bb1'>
			{
				data.map(({axisdata, content}, index) => (
				<VerticalTimelineElement
					key={index}
					className="vertical-timeline-element--work ml1"
					date={axisdata.time}
					position={axisdata.position}
					iconStyle={{ background: 'rgb(33, 150, 243)', color: axisdata.icnclr }}
					icon={<Icon name={axisdata.icn} />}
				>
					<TimelineCard content={content}/>
				</VerticalTimelineElement>)
	)}

		</VerticalTimeline>
	</div>
	);
	}
}

export default TimelineRenderer;