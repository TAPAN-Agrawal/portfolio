import React from "react";
import classes from './Navbar.module.css'
import { Col, Row } from 'antd';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineProject } from 'react-icons/ai';
import { ImFileText2 } from 'react-icons/im';
import { MdOutlineContactMail } from 'react-icons/md';
import {LuLaptop2} from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {

    const navigate = useNavigate()

    return <div className={classes.main_container}>
        <Row>
            <Col span={4} offset={4} className={classes.navlinks}>
                <div className={classes.nav_items}>
                    <div className={classes.imgs}>
                        <img src="https://img.icons8.com/?size=1x&id=t4YbEbA834uH&format=png" className={classes.logo} />
                    </div>
                    <div className={classes.img_text}>Dev._io</div>
                </div>
            </Col>
            <Col span={2} offset={7} className={classes.navlinks}>
                <div className={classes.nav_items}>
                    <div>
                        <AiOutlineHome />
                    </div>
                    <div className={classes.nav_text} onClick={() => { navigate('/') }}>
                        Home
                    </div>
                </div>
            </Col>
            <Col span={2} className={classes.navlinks}>
                <div className={classes.nav_items}>
                    <div>
                        <AiOutlineUser />
                    </div>
                    <div className={classes.nav_text} onClick={() => { navigate('/about') }}>
                    About
                    </div>
                </div>
            </Col>
            <Col span={2} className={classes.navlinks}>
                <div className={classes.nav_items}>
                    <div>
                        <LuLaptop2 />
                    </div>
                    <div className={classes.nav_text} onClick={() => { navigate('/skill') }}>
                        Skills
                    </div>
                </div>
            </Col>
            <Col span={2} className={classes.navlinks}>
                <div className={classes.nav_items}>
                    <div>
                        <AiOutlineProject />
                    </div>
                    <div className={classes.nav_text } onClick={() => { navigate('/project') }} >
                        Project
                    </div>
                </div>
            </Col>
            <Col span={2} className={classes.navlinks}>
                <div className={classes.nav_items}>
                    <div>
                        <ImFileText2 />
                    </div>
                    <div className={classes.nav_text} onClick={()=>{navigate('/testmonial')}}>
                       Feed
                    </div>
                </div>
            </Col>
            <Col span={2} className={classes.navlinks}>
                <div className={classes.nav_items}>
                    <div>
                        <MdOutlineContactMail />
                    </div>
                    <div className={classes.nav_text} onClick={() => { navigate('/contact') }}>
                        ContactUs
                    </div>

                </div>
            </Col>
        </Row>
    </div>;
}

export default Navbar;
