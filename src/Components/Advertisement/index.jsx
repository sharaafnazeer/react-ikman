import './advertisement.css'
import {Button} from "reactstrap";
import {memo, useId} from "react";

const Advertisement = memo(function Advertisement() {

    const myId = useId();

    return (
        <div id={myId} className="container p-4 ps-10rem pe-10rem">
            <div className="main-container">
                <div className="display-ad-left">
                    <div>
                        <img alt="Money" height={150} width={150}
                             src="https://img.freepik.com/premium-vector/sack-money-big-pile-cash-money-icon-illustration-money-bag-flat-icon_385450-362.jpg"/>
                    </div>
                    <div className="display-ad-left-inner">
                        <div className="h5">Start making money!</div>
                        <div>
                            <div>
                                Do you have something to sell?
                            </div>
                            <div>
                                Post your first ad and start making money!
                            </div>
                        </div>
                        <div>
                            <Button className="display-ad-left-button">
                                <i className="bi bi-plus-circle-fill"></i>
                                {'  Post your add for free'}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="display-ad-right">
                    <div>
                        <img height={30} width={100}
                             src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
                             alt="Spotify"/>
                    </div>
                    <div>
                        <div>
                            Looking to hire or get hired in Sri Lanka ?
                        </div>
                        <div>
                            Get access to 400k+ CVs or browse through 4.5k+ job vacancies!
                        </div>
                    </div>

                    <div>
                        <Button className="display-ad-right-button">
                            {'Explore more  '}
                            <i className="bi bi-arrow-right-circle-fill"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Advertisement;