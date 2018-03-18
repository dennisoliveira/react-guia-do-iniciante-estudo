import React from 'react';

var Panel = React.createClass({
    render: function () {
        return (
            <div className="comment panel panel-default">
                <div className="panel-heading">
                    {this.props.title}
                </div>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default Panel;