import React from 'react';
import Comment from './Comment';

var CommentList = React.createClass({
    render: function () {

        // Um componente é basicamente um objeto no jsx
        /*var myComments = [];
        for(let i=0; i<5; i++){
            myComments.push(<Comment author="Teste">Teste</Comment>);
        }*/

        return (
            <div className="commentList">

                {this.props.data.map(function (c) {
                    return (
                        <Comment author={c.author}>
                            {c.text}
                        </Comment>
                    )
                })}

            </div>
        );
    }
});

export default CommentList;