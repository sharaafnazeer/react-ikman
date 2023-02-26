import './description.css'
import {Button} from "reactstrap";
import {Fragment, useState} from "react";

const Description = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="container p-4 ps-10rem pe-10rem description">
            <div className="h6">About ikman, The Largest Marketplace in Sri Lanka!</div>
            <div>Sri Lanka’s household name for buying and selling anything to everything online. Do you want to buy a
                property? Check ikman! Do you want to sell a bike? Check ikman.
            </div>
            <div>ikman has the widest selection of items across Sri Lanka and over 50 different categories. Whether
                you're looking for a car, mobile phone, house, computer or pet, you will find the best deal on ikman.
                Our search and filters make it easy to find precisely what you're looking for!
            </div>

            {
                isExpanded && (
                    <Fragment>
                        <div className="h6">
                            Buy, Sell New and Used Items Or Land Jobs Through ikman
                        </div>
                        <div>
                            Every month hundreds of new users use ikman. SME’s and small businesses signup for memberships.
                            You can search & filter products & services from the comfort of your own home.
                        </div>
                        <div>
                            As one of the free advertising sites in Sri Lanka it has helped many people to find their
                            favourite phones, pets, cars, and properties. Or even the dream job through classified ads in no
                            time. This feature on ikman makes it easy for you to find exactly what you're looking for and
                            saves time.
                        </div>
                        <div>
                            You can sign up for a free account to start selling your items. It takes less than 2 minutes to
                            post an ad. Visit How to sell fast for some tips on creating great ads that generate a lot of
                            buyer interest. It goes without saying that when you have the membership, you are automatically
                            entitled to more perks.
                        </div>
                        <div>
                            If you have many items to sell, a membership would be the ideal choice. We also have some great
                            tools that help make your ad stand out. Check out the Ad Promotions page for more information.
                        </div>
                    </Fragment>
                )
            }

            <div>
                <Button color="link" className="btn-show-more" onClick={() => setIsExpanded(!isExpanded)}>
                    {
                        isExpanded ? (
                            <>
                                Show less <i className="bi bi-caret-up"></i>
                            </>
                        ) : (
                            <>
                                Show more <i className="bi bi-caret-down"></i>
                            </>
                        )
                    }
                </Button>
            </div>
        </div>
    )
}

export default Description;


// value ?
//     () :
//     ()
// == equal to if else

// value && () == equal to if