import React from 'react';
import './HostSideBar.css';

function sideBar() {
    return (
        <div className="side-bar-container">
            <div className="personal-information-tab"><div className="side-bar-menu"><a href=''><i class="far fa-user" /><div>Personal Information</div></a></div></div>
            <div className="change-password-tab"><div className="side-bar-menu"><a href=''><i class="fas fa-unlock-alt" /><div>Change Password</div></a></div></div>
            <div className="add-attraction-tab"><div className="side-bar-menu"><a href=''><i class="fas fa-hotel" /><div>Add Attraction</div></a></div></div>
            <div className="log-out-tab"><div className="side-bar-menu"><a href=''><i class="fas fa-sign-out-alt" /><div>Log Out</div></a></div></div>
        </div>
   );
}

export default sideBar;
