import React from 'react';

class ToolTip extends React.Component {

    render(){
        return(
            <span className="tooltip">
                <div className="tooltipBubble tooltipPosition">Unpin note</div>
            </span>
        )
    }
}

export default ToolTip;