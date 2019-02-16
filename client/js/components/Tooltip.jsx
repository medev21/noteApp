import React from 'react';

class ToolTip extends React.Component {

    render(){

        const tooltipMsg = this.props.pinBool ? "Unpin note" : "Pin note";
        const icon = this.props.icon;
        const isIconDelete = this.props.icon == "Delete" ? true : false;

        return(
            <div>
                {isIconDelete ? (
                    <span className="tooltip">
                        <div className="tooltipBubble tooltipPosition">{icon}</div>
                    </span>
                ) : (
                    <span className="tooltip">
                        <div className="tooltipBubble tooltipPosition">{tooltipMsg}</div>
                    </span>
                )}
            </div>
        )
    }
}

export default ToolTip;