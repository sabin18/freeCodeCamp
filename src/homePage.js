import React from 'react';
import  './style.css';
import moment from 'moment';
import ForumTopic from './Forum'

 class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      topics: [],
    };
  }

  componentDidMount() {

    fetch('https://buttercup-island.glitch.me/latest')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          users: data.users,
          topics: data.topic_list.topics,
        });
      });
  }

  getUserFromID(id) {
    return this.state.users.find(user => user.id === id);
  }


  render() {
    return (
      <div className="topics-list">
        <div className="title">
          <div className="title__field title__rank">#</div>
          <div className="title__field title__topic">Topic</div>
          <div id="replace title-replies" class="title__field title__replies">Repls.</div>
          <div className="title__field title__views">Views</div>
          <div className="title__field title__activity">Act.</div>
        </div>
        {
          this.state.topics.map((topic, index) => {
             return <ForumTopic index={index+1} topic={topic} getUserFromID={this.getUserFromID.bind(this)}/>;
          })
        }
      </div>
    );
  }
}

moment.locale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s:  '%ds',
    ss: '%ds',
    m:  '%dm',
    mm: '%dm',
    h:  '%dh',
    hh: '%dh',
    d:  '%d',
    dd: '%dd',
    M:  '%dM',
    MM: '%dM',
    y:  '%dy',
    yy: '%dY'
  }
});

export default Home;
