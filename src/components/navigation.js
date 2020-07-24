import React,{useState} from "react";
import {Link} from "react-router-dom";
import {Avatar} from "antd";
const navLinks=[
    {
        title:'Home',
        path:'/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title:'Contact Us',
        path:'/contact-us'
    },
    {
        title:'login',
        path:'/login'
    }
] ;




 const Navigation = ({ user})=> {
     const [menuActive,setMenuActive]=useState(true);

    return <nav className={"site-navigation"}>
    <span className={"menu-title"}>My react Blog</span>

        <div className={`menu-content-container ${menuActive && 'active'}`}>
            <ul>
                {
                    navLinks.map((link,index)=>{
                        return <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>;

                    })

                }
            </ul>
            <span className={"menu-avatar-container"}>
             <Avatar  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={39}/>

                <span className={"menu-avatar-name"}> {`${user.firstName} ${user.lastName}`}</span>
            </span>
        </div>
        <i className={"ionicons icon  ion-ios-menu"} onClick={()=>(setMenuActive(!menuActive))}/>

    </nav>
};
export default Navigation;