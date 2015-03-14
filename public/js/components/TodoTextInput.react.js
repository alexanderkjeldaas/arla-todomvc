import React from 'react';
import Component from './Component.js';

const ENTER_KEY_CODE = 13;

export default class TodoTextInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: props.value || ''
        };
    }

    save() {
        this.props.onSave(this.state.value);
        this.setState({
            value: ''
        });
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this.save();
        }
    }

    render() {
        return (
            <input
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                onBlur={this.save.bind(this)}
                onChange={this.onChange.bind(this)}
                onKeyDown={this.onKeyDown.bind(this)}
                value={this.state.value}
                autoFocus={true}
            />
        );
    }


}
