import React from 'react'
import { useLocation } from 'react-router-dom'
import Notification from '../../svgs/Notification'
import Photo from '../../svgs/Photo'
import "./Header.css"
function Header() {
    let location = useLocation()
  return (
    <div className="header h-16 w-full justify-between flex flex-row items-center pl-8 pr-3">
        <div>{location?.pathname === "/search-post" ? "Dashboard > Search": "Dashboard"}</div>
        <div className="flex flex-row items-center gap-5"><Notification /><div className="rounded-full bg-slate-500 h-8 w-8"><img className="rounded-full w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/55be1107e4b09f3341f406a1/0b75f8b0-18a6-488c-ba98-7498ee9367d6/Houston+Portraits+Photographer.jpg" /></div></div>
    </div>
  )
}

export default Header

