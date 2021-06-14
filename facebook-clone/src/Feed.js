import React,{ useState, useEffect} from 'react';
import "./Feed.css";
import Post from "./Post";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import db from './firebase';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db
            .collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
            });
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {
                posts.map((post) => (
                    <Post
                        key={post.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}
                    />
                ))
            }
        </div>

        // <Post
        //     profilePic="https://scontent.fixr3-1.fna.fbcdn.net/v/t31.18172-8/28238759_1798226253581141_5979560090295787346_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=YJnc02IECm4AX9RCamM&tn=dLuHXkVHJCvBlSNk&_nc_ht=scontent.fixr3-1.fna&oh=91f97da42bec268792ce7e06c2969beb&oe=60E203CC"
        //     message="Celebrating the start of true Hindavi Swarajya! "
        //     timestamp="this is a timestamp"
        //     username="ReSanskrit"
        //     image="https://scontent.fixr3-1.fna.fbcdn.net/v/t1.6435-9/p843x403/194724062_5517466004990462_1477361783230211422_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=a26aad&_nc_ohc=_Fku96MdqqgAX9uNnMg&tn=dLuHXkVHJCvBlSNk&_nc_ht=scontent.fixr3-1.fna&tp=6&oh=ed37247ba98cfe7d64ae35b243ae5b12&oe=60E1B289"
        // />
        // <Post
        //     profilePic="https://scontent.fixr3-1.fna.fbcdn.net/v/t1.6435-9/140625348_2804111763062310_6681354131213198999_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=i7YzlCBLan0AX9Mf_bC&_nc_ht=scontent.fixr3-1.fna&oh=3f2312ea50372fa3a273238b6930a419&oe=60E07E38"
        //     message="Men will be Men! "
        //     timestamp="this is a timestamp"
        //     username="Truly Desi"
        //     image="https://scontent.fixr3-1.fna.fbcdn.net/v/t1.6435-9/p843x403/190083303_2911237752349710_5374913140715042211_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=pGQrJMwhX9UAX_51Hp-&_nc_ht=scontent.fixr3-1.fna&tp=6&oh=341f92f766b66879f7dbd5c972c01266&oe=60E051B0"
        // />
    );
}

export default Feed;