import React from 'react';
//import Card from './Card'
import style from '../styles/core.scss';
import pData from "../_data/_pdata";
// import {get_core_data, upperFirst} from "../projUtils";
// import TimelineCard from './TimelineCard';
import TimelineRenderer from "./TimelineRenderer";
//import Scroller from './Scroller'

///
///return [<Scroller content={pData.scroller_data}/>,
///<Card data={upperFirst(data[0].content)} title={upperFirst(data[0].title)}/>    ];

class HomePage extends React.Component{

    render(){

        //const data = get_core_data(pData.right_pdata);
	    return (<TimelineRenderer
				data={pData.timeline_data}
		    />);
    }
}

export default HomePage;
