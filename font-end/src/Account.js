import React from 'react'
import Header from './Component/Header';
import UserChangePassword from './components/UserChangePassword';
import NavUser from './Component/NavUser';

function Account() {
    return (
        <>
            <NavUser/>
            <UserChangePassword/>
        </>
    )
}

export default Account
