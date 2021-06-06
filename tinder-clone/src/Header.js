import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom"

function Header({ backButton }){
    const history = useHistory();
    return(
        <div className="header">
            {backButton ? (
             <IconButton onClick={() => history.replace(backButton)}> 
                <ArrowBackIosIcon fontSize="large" className="header__icon"></ArrowBackIosIcon>
                </IconButton>
                
            ) : (
        <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
            )}
        <Link to= "/">
        <img 
        className="header__logo"
        src="https://cdn.designrush.com/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png"
         alt="Tinder Logo"
         />
         </Link>
         <Link to="/chat">
         <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
        </Link>
        </div>
    );
}

export default Header;