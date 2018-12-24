import React                       from 'react';
import Card                        from './Card';
import pData                       from "../_data/_pdata";
import {get_core_data, upperFirst} from "../projUtils";
import TimelineRenderer            from "./TimelineRenderer";
import Scroller                    from './Scroller';
import style                       from '../styles/core.scss';
import SkillsandTopic              from './ContentRenderer';
import GlichText                   from "./GlichText";


class HomePage extends React.Component{
	componentDidMount(){
		const dap = function(){
			var canvasDiv = document.getElementsByClassName('dark-bcg')[0];
			var options = {
				particleColor: '#19191a',
				interactive: true,
				speed: 'medium',
				density: 'high'
			};
			var particleCanvas = new ParticleNetwork(canvasDiv, options);
		};
		setTimeout(dap,300);
	}


	render(){

        const data = get_core_data(pData.right_pdata);
	    return [
	    	<Scroller content={pData.scroller_data} headerClass='glitch'/>,
			<Card propclass="abt-stls" data={upperFirst(data[0].content)} title={upperFirst(data[0].title)}/>,
			<TimelineRenderer data={pData.timeline_data} />,
		    <SkillsandTopic
	            chartData={pData.skills}
	            wordCloud={pData.topic_cloud}
		    />,
		    <div className="cntc-row">
	            <Card propclass="cntk-stls" headerClass="mb" contentClass="link-font" data={data[1].content} title={upperFirst(data[1].title)} fsize='small'/>

			</div>,
	    <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="darshanparsana"><a class="LI-simple-link" href='https://in.linkedin.com/in/darshanparsana?trk=profile-badge'>Darshan Parsana</a></div>
    ]
    }
}

export default HomePage;