import React from 'react'
import Home from './Home'
import CreatePost from './CreatePost'
import ProfileLink from './ProfileLink';
import Notifications from './Notifications';
import Search from './Search';

const SidebarItems = () => {
  return (
    <>

        <Home/>
        <Search/>
        <Notifications/>
        <CreatePost/>
        <ProfileLink/>
    </>
  )
}

export default SidebarItems