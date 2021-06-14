import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

const MessageSender = () => {
    // eslint-disable-next-line
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        // prevent the default submit action
        // submit action triggers the page reload
        e.preventDefault();
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput("");
        setImageUrl("");
    }

    // const avatar_image = "https://avatars.githubusercontent.com/u/37947493?v=4";
    const avatarImage = user.photoURL;
    // const statusInput = "What's on your mind";
    const statusInput = `What's on your mind, ${user.displayName}`;
    const userImageUrl = "Image URL (Optional)";

    return (
        <div className="messageSender">
            <div className="messageSender-top">
                <Avatar src={avatarImage} className="messageSender-top-avatar" />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={statusInput}
                        className="messageSender-top-status-input" />
                    <input placeholder={userImageUrl} className="messageSender-top-image-input" />
                    <button type="submit" hidden onClick={handleSubmit}>HIDE ME</button>
                </form>
            </div>
            <div className="messageSender-bottom">
                <div className="messageSender-bottom-icon">
                    <VideocamIcon className="messageSender-bottom-icon-videocam" />
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender-bottom-icon">
                    <PhotoLibraryIcon className="messageSender-bottom-icon-photolibrary" />
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender-bottom-icon">
                    <InsertEmoticonIcon className="messageSender-bottom-icon-emoticon" />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
