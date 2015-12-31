import React, {Component} from 'react';

class ChannelForm extends Component {
    onSubmit (event) {
        event.preventDefault();
        const node = this.refs.channel;
        const channelName =  node.value;

        // Add new channel
        this.props.addChannel(channelName);

        // Clear input string
        node.value = "";
    }

    render () {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input
                    type="text"
                    ref="channel"
                />
            </form>
        )
    }
}

ChannelForm.propTypes = {
    addChannel: React.PropTypes.func.isRequired
};

export default ChannelForm;
