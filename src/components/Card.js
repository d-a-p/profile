import React from 'react';
import Text from './Text';
import style from '../styles/main.scss';
import {supported_font_size} from "../constants/constants";
import cx from 'classnames';


export const Header = ({title, showHeaderUnderLine, fsize}) => (
    <Text content={title}
          title={title}
          classes={cx('ttl-heavy', {'ttl-b-bdr pb': showHeaderUnderLine})}
          fsize={fsize}
    />
);

class Card extends React.Component{

    render(){
        const {data, title, hideHeader, hideHeaderUL} = this.props;
        return(<div className="card-data wide full-width default mb2 mt2 tc">
            {!hideHeader && (
                <Header fsize="large" className={cx('card-header')} title={title} showHeaderUnderLine={!hideHeaderUL}/>
            )}
            <Text className={cx('card-text')} content={data} title={title} classes={cx('mt')}/>
        </div>);
    }

}

export default Card;
