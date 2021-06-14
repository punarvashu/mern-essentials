import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className ="storyReel">
          <Story
             image="https://imgeng.jagran.com/images/2020/jul/ms-dhoni-11594086856905.jpg"
             profileSrc="https://images.indianexpress.com/2020/10/148841-clraytzonv-1602133322.jpg"
             title="MS Dhoni"  
           />
           <Story
             image="https://media.vanityfair.com/photos/558abba4320a56cf42417570/master/pass/robert-downey-jr-the-avengers.jpg"
             profileSrc="https://media.vanityfair.com/photos/558abba4320a56cf42417570/master/pass/robert-downey-jr-the-avengers.jpg"
             title="Robert Downey Jr."  
           />
           <Story
             image="https://i.pinimg.com/originals/85/ce/e6/85cee64394a6abc9e6e6a584e08cbc3e.jpg"
             profileSrc="https://watchersonthewall.com/wp-content/uploads/2017/08/Tyrion-Lannister-Eastwatch.jpg"
             title="Tyrion Lannister"  
           />
           <Story
             image="https://i.ytimg.com/vi/Sm3jHz8T6N4/maxresdefault.jpg"
             profileSrc="https://i.pinimg.com/564x/f7/b3/df/f7b3df953180a0a244be58fa567565d0.jpg"
             title="Cersei Lannister"  
           /> 
           <Story
             image="https://i.ytimg.com/vi/wjcaRxRHwCc/maxresdefault.jpg"
             profileSrc="https://cdn.vox-cdn.com/thumbor/zulBdr9mPi1FuaNJkdrQMy58NqA=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/2912184/Jon-Snow-Kit-Harington_510.0.jpeg"
             title="John Snow"
            />
        </div>
    )
}

export default StoryReel
