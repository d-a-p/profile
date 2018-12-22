import React from 'react';
import Card from './Card';
import pData from "../_data/_pdata";
import {get_core_data, upperFirst} from "../projUtils";
import TimelineCard from './TimelineCard';
import TimelineRenderer from "./TimelineRenderer";
import Scroller from './Scroller';
import style from '../styles/core.scss';


///
///return [<Scroller content={pData.scroller_data}/>,
///<Card data={upperFirst(data[0].content)} title={upperFirst(data[0].title)}/> ,
// <TimelineRenderer data={pData.timeline_data} />  ];

class HomePage extends React.Component{

    render(){

        const data = get_core_data(pData.right_pdata);
        console.log(data)
	    return [
	    	<Scroller content={pData.scroller_data}/>,
			<Card propclass="abt-stls" data={upperFirst(data[0].content)} title={upperFirst(data[0].title)}/>,
			<TimelineRenderer data={pData.timeline_data} />,
		    <div className="cntc-row">
	            <Card propclass="cntk-stls" data={upperFirst(data[1].content)} title={upperFirst(data[1].title)}/>,
	            <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="darshanparsana"><a class="LI-simple-link" href='https://in.linkedin.com/in/darshanparsana?trk=profile-badge'>Darshan Parsana</a></div>
			</div>
    ];
    }
}

export default HomePage;
