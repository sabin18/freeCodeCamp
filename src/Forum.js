
import React from 'react';
import  './style.css';
import moment from 'moment';
import {style} from './ForumStyle'

const ForumTopic = ({index,topic, getUserFromID}) => {
    return (
      <div style={style.ForumTopic} className="forum-topic">
        <div style={style.Rank,style.TopicField} className="rank">{index}</div>
        <div style={style.Title,style.TopicField} className="topic-title"><a style={style.Link} href={`https://forum.freecodecamp.org/t/${topic.slug}`} target="_blank">{topic.title}</a></div>
        <div style={style.Posters} className="posters">
          <div style={style.Avatar} className="avatar">
            {
              topic.posters.map((poster) => {
                const user = getUserFromID(poster.user_id);
                return (
                 <a sytle={style.UserLink} href={`https://www.freecodecamp.org/forum/u/${user.username}`} target="_blank">
                    <img style={style.UserImage}title={user.username} src={`https://freecodecamp.org/forum${user.avatar_template.replace('{size}', 135)}`}/>
                  
                  </a>
                );
              })            
            }
          </div>
        </div>
        <div style={style.Count,style.TopicField} className="replies">{topic.reply_count}</div>
        <div style={style.Count,style.TopicField} className="views">{topic.views}</div>
        <div style={style.Count,style.TopicField} className="activity">{moment(topic.bumped_at).fromNow(true)}<i style={style.StyledTetx}>ago</i> </div>
      </div>
    )
  };

 

    export default ForumTopic;