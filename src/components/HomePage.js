import React from 'react';
import Card from './Card'
import style from '../styles/core..scss';
import pData from "../_data/_pdata";


const get_core_data = dataObj => (Object.keys(dataObj).map(key => ({title:key, content: dataObj[key]})));

const upperFirst = string => string[0].toUpperCase() + string.slice(1);

class HomePage extends React.Component{
    render(){
        const data = get_core_data(pData.right_pdata);
        return <Card data={upperFirst(data[0].content)} title={upperFirst(data[0].title)}/>;
    }
}

export default HomePage;
