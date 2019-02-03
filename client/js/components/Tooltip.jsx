import React from 'react';

class ToolTip extends React.Component {

    render(){

        const tooltipMsg = this.props.pinBool ? "Unpin note" : "Pin note";

        return(
            <span className="tooltip">
                <div className="tooltipBubble tooltipPosition">{tooltipMsg}</div>
            </span>
        )
    }
}

export default ToolTip;