import React from 'react';

class ToolTip extends React.Component {

    render(){
        
        const text = this.props.icon;
        return(
            <span className="tooltip">
                <div className="tooltipBubble tooltiptop">{text}</div>
            </span>
        )
    }
}

export default ToolTip;