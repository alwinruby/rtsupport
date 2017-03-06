import React, {Component} from 'react';
import Channel from './Channel.jsx';

class ChannelList extends Component{
  render(){
    return (
      <ul>{
        this.props.channels.map( chan =>{
          <Channel
            channel={chan}
            key={chan.id}
          />
        })
      }</ul>
    )
  }
}

ChannelList.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired
}

export default ChannelList
