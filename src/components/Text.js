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
            {changeBGonHover, fs, dc, classes}=props;

        return(
            <div
        className={cx('f_'+fs, classes)}
        title={dc}
        onMouseOver={changeBGonHover}
      >
        {dc}
      </div>);
    }
}

export default Text;
