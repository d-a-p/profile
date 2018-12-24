import React from 'react';
import Text from './Text';
import style from '../styles/main.scss';
import {supported_font_size} from "../constants/constants";
import cx from 'classnames';


export const Header = ({title, showHeaderUnderLine, fsize, headerClass}) => (
    <Text content={title}
          title={title}
          classes={cx('ttl-heavy wfont', {'ttl-b-bdr pb': showHeaderUnderLine}, headerClass)}
          fsize={fsize}
    />
);

class Card extends React.Component{

    render(){
        const {data, title, hideHeader, hideHeaderUL, headerClass, propclass, contentClass, fsize} = this.props;
        return(<div className={cx("card-data wide default mb2 mt2 tc", propclass)}>
            {!hideHeader && (
                <Header fsize="large" className={cx('card-header')} title={title} showHeaderUnderLine={!hideHeaderUL} headerClass={headerClass}/>
            )}
            <Text  content={data} title={title} classes={cx('mt wfont abt-stls', contentClass)} fsize={fsize}/>
        </div>);
    }

}

export default Card;
