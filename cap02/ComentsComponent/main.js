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

var Comment = React.createClass({
    render: function () {
        return (
            <Panel title={this.props.author}>
                {this.props.children}
            </Panel>
        );
    }
});

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

var CommentForm = React.createClass({

    handleSubmit: function (e) {

        console.log('Handle event Submit');

        // Cancela a propagação do evento
        e.preventDefault();

        var author = this.refs.author.value.trim();
        var text   = this.refs.text.value.trim();

        if(!text || !author) {
            return;
        }

        // TODO: Precisa atualizar o DATA
        // Chama um método onCommentSubmit
        this.props.onCommentSubmit({author: author, text: text});

        this.refs.author.value = '';
        this.refs.text.value   = '';
        return;

    },

    render: function () {
        return (
          <form className="commentForm" onSubmit={this.handleSubmit}>

              <div className="form-group">
                  <label htmlFor="name">Author:</label>
                  <input type="text" className="form-control" ref="author" />
              </div>

              <div className="form-group">
                  <label htmlFor="text">Text:</label>
                  <textarea className="form-control" rows="3" ref="text"></textarea>
              </div>

              <input type="submit" value="Post" className="btn" />

          </form>
        );
    }
});

var CommentBox = React.createClass({

    getInitialState: function () {
        return {data: this.props.data} // Recebe de props de envia para state
    },

    handleCommentSubmit: function (comment) {

        //this.props.data.push(comment);
        //console.log(this.props.data);

        var dataNew = this.state.data;
        dataNew.push(comment);
        this.setState({data: dataNew});

        console.log(this.state.data);
    },

    render: function () {
        return (
            <div className="commentBox">

                <Panel title="Comments">
                    <CommentList data={this.state.data} />
                </Panel>

                <Panel title="Add a Comment">
                    <CommentForm onCommentSubmit={this.handleCommentSubmit} />
                </Panel>

            </div>
        );
    }
});

// Utlizando dados dinâmicos
var data = [
    {"author": "Dennis", "text": "Hello React"},
    {"author": "Daniel", "text": "Hello World"}
];

// Renderização final
ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content')
);