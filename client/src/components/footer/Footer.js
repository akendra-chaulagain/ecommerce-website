import React from 'react'
import "./Footer.css"
import FaceBook from "@material-ui/icons/Facebook"
import Instagram from "@material-ui/icons/Instagram"
import Twitter from "@material-ui/icons/Twitter"
import LinkedIn from "@material-ui/icons/LinkedIn"
import WhatsApp from "@material-ui/icons/WhatsApp"
import Location from "@material-ui/icons/LocationOn"
import Phone from "@material-ui/icons/PhoneAndroidOutlined"
import Email from "@material-ui/icons/EmailOutlined"

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer">
                <div className="row">


                    {/* left side */}
                    <div className="col-md-4 leftSideFooter">
                        <h4>Contact</h4>
                        <div className="contactInfo mt-3">
                            <div className="location">
                                <span><Location />&nbsp;&nbsp;Kailali-09-Nepal,Siddhart Tole</span>
                            </div>
                            <div className="contact mt-3">
                                <span><Phone />&nbsp;&nbsp;9876545664</span>
                            </div>
                            <div className="email mt-3">
                                <span><Email />&nbsp;&nbsp;contact@gmail.com</span>
                            </div>

                        </div>

                    </div>


                    {/* middle side */}
                    <div className="col-md-4 middleSideContainer">
                        <h4>Useful Links</h4>
                        <div className="linkContainer">
                            <div className="row">
                                <div className="col-6 mt-2">
                                    <span>Home</span><br />
                                    <span>Man Fashion</span><br />
                                    <span>Order Tracking</span><br />
                                    <span>Order</span>
                                </div>
                                <div className="col-6 mt-2">
                                    <span>Cart</span><br />
                                    <span>Women Fashion</span><br />
                                    <span>My Account</span><br />
                                    <span>Privacy</span>
                                </div>
                            </div>
                        </div>

                    </div>



                    {/* right side */}
                    <div className="col-md-4 rightSideFooter">
                        <h4>ALL IN ONE</h4>
                        <p>This is the place where you can found all products.WE offers many new products to the customers.We alse give some special discount to the customers.On special offers we give almost 40% discount to all the customers. </p>
                        <div className="footerIcons">
                            <div className=" footerSocialMediaIcon  facebook">
                                <FaceBook />
                            </div>
                            <div className=" footerSocialMediaIcon instagram">
                                <Instagram />
                            </div>
                            <div className=" footerSocialMediaIcon twitter">
                                <Twitter />
                            </div>
                            <div className=" footerSocialMediaIcon linkedin">
                                <LinkedIn />
                            </div>
                            <div className=" footerSocialMediaIcon whatsapp">
                                <WhatsApp />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer