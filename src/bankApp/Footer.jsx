import React, { useState } from 'react'
import "./styles/footer.css";

import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"

import { footerList } from './json/footer';
const Footer = () => {
    const [footr, setFootr] = useState(footerList);
    return (
        <>
            <section>
                <div className="footer">
                    {
                        footerList.map((El) => {
                            return <div className="footer-box">
                                <div className="footer-heading">
                                    <h4>{El.title}</h4>
                                </div>
                                <div className="footer-links">
                                    <li><a href="">{El.one}</a></li>
                                    <li><a href="">{El.two}</a></li>
                                    <li><a href="">{El.three}</a></li>
                                    <li><a href="">{El.four}</a></li>
                                    <li><a href="">{El.five}</a></li>

                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="social-access">
                    <h3>Social Access</h3>
                    <div className="social-links">

                        <FaYoutube />
                        <FaTwitter />
                        <FaInstagram />
                        <FaFacebook />
                    </div>
                </div>

            </section>
                        <div className="copyright">
                            Copyright © 2023 All rights reserved | made by MWA.
                        </div>
        </>
    )
}

export default Footer
