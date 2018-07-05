import React from 'react';
import Text from './Text';
import style from '../styles/main.scss';
import {supported_font_size} from "../constants/constants";



class HomePage extends React.Component{
    render(){
        return(<Text classes="cr f-lg" dc="Under Development" />);
    }
}

export default HomePage;
