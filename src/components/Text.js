import React from 'react';
import {supported_font_size} from '../constants/constants'
import PropTypes from 'prop-types';
import cx from 'classnames';

export const FontSize = {
    'huge': 'hg',
    'large': 'lg',
    'medium': 'md',
    'small': 'sm',
    'tiny': 'tn'
};

class Text extends React.Component{

    render(){

        const props = this.props,
            {changeBGonHover, title='details', content, classes, fsize='medium'}=props;

        return(
            <div
        className={cx(`f-${FontSize[fsize]}`, classes)}
        title={title}
      >
        {content}
      </div>);
    }
}

export default Text;
