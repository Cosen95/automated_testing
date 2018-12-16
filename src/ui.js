import React, { PureComponent } from 'react';

class UITest extends PureComponent {
    static defaultProps = {
        title: 'This is UITEST Page',
        value: 0
    };

    constructor (props) {
        super(props);
        const { title, value } = this.props;
        this.state = {
            title,
            value
        }
    }

    handleAdd = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    handleChange = ev => {
        this.setState({
            value: ev.target.value
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.title
        })
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.title}</h1>
                <div className="counter">{this.state.value}</div>
                <input value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleAdd}>value ++</button>
            </div> 
        )
    }
}

export default UITest;