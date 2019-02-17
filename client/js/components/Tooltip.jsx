import React from 'react';

class ToolTip extends React.Component {

    render(){

        const text = this.props.icon;
        const style = this.props.position;

        return(
            <span className="tooltip">
                <div className={`tooltipBubble ${style}`}>{text}</div>
            </span>
        )
    }
}

export default ToolTip;