// Render direto
// ReactDOM.render(
//   <h1>Hello World!</h1>,
//   document.getElementById('main')
// );

// Render a partir de uma classe/componente
var HelloWorld = React.createClass({
    render: function () {
        return (
            <p>
                Hello World,
                <span className='label label-primary'>{this.props.name}</span>
            </p>
        );
    }
});

ReactDOM.render(
    <HelloWorld name='Daniel'/>,
    document.getElementById('main')
);

