import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return (
            <div className="hello-world">
                <h2>Hello {this.props.name}</h2>
            </div>
        )
    }
}

export default HelloWorld;