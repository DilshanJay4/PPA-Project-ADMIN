import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import { useSelector } from "react-redux";


export default function Topbar() {
  const currentUser = useSelector((state) => state.user);
    
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Digit X Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={currentUser.img || 'https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png'} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
