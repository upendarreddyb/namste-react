import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import Logo from './assets/images/logo.png';


const resObj = {
    id: "82407",
    name: "Hotel Rumaan",
    locality: "Tolichowki",
    costForTwo: "₹300 for two",
    cuisines: [
        "Biryani",
        "Chinese",
        "Indian",
        "Kebabs",
        "Tandoor"
    ],
    avgRating: 4.3,
    totalRatingsString: "10K+",
    time:30
}
 const resapi=[
    {
        id: "690583",
        name: "Theobroma",
        cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
        locality: "GOLCONDA",
        areaName: "Film Nagar",
        costForTwo: "₹400 for two",
        cuisines: [
            "Desserts"
        ],
        avgRating: 4.6,
        parentId: "1040",
        avgRatingString: "4.6",
        totalRatingsString: "100+",
        sla: {
            deliveryTime: 41,
            lastMileTravel: 7.9,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "7.9 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-02-17 23:59:00",
            opened: true
        },
        badges: {
            textExtendedBadges: [
                {
                    iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
                    shortDescription: "Perfect Cake Delivery",
                    fontColor: "#7E808C"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                shortDescription: "Perfect Cake Delivery"
                            }
                        }
                    ]
                }
            }
        },
        aggregatedDiscountInfoV3: {
            header: "20% OFF",
            discountTag: "FLAT DEAL"
        },
        orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
    },
    {
        id: "52631",
        name: "McDonald's",
        cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
        locality: "Namishree Mantra Mall, Upperpally village",
        areaName: "Rambagh Colony",
        costForTwo: "₹400 for two",
        cuisines: [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
        ],
        avgRating: 4.2,
        parentId: "630",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
            deliveryTime: 36,
            lastMileTravel: 5.5,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "5.5 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-02-18 02:45:00",
            opened: true
        },
        badges: {
            textExtendedBadges: [
                {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                    fontColor: "#7E808C"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available"
                            }
                        }
                    ]
                }
            }
        },
        aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50"
        },
        orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
    },
    {
        id: "362596",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "M Cube Mall",
        areaName: "Attapur",
        costForTwo: "₹350 for two",
        cuisines: [
            "Burgers",
            "American"
        ],
        avgRating: 4,
        parentId: "166",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        sla: {
            deliveryTime: 27,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-02-18 05:00:00",
            opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
        },
        orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
    },
    {
        id: "662646",
        name: "Starbucks Coffee",
        cloudinaryImageId: "2418209798927d733a50f5d2ebcc2aee",
        locality: "Bhola Nagar",
        areaName: "Banjara Green Colony",
        costForTwo: "₹400 for two",
        cuisines: [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Bakery",
            "Ice Cream"
        ],
        avgRating: 4.5,
        parentId: "195515",
        avgRatingString: "4.5",
        totalRatingsString: "100+",
        sla: {
            deliveryTime: 48,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-02-17 23:00:00",
            opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
            }
        },
        orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
    },
    {
        id: "28108",
        name: "Al Rabea Al Arabi Cafeteria",
        cloudinaryImageId: "jnzmscxd37rbjmgciwt5",
        locality: "Mehdipatnam",
        areaName: "Mehdipatnam",
        costForTwo: "₹250 for two",
        cuisines: [
            "Arabian",
            "Lebanese"
        ],
        avgRating: 4.4,
        parentId: "7582",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
            deliveryTime: 34,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-02-18 00:30:00",
            opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
            }
        },
        orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
    },
    {
        id: "91408",
        name: "Mohammed's Shawarma",
        cloudinaryImageId: "gvzgp3zltwde3cvdm6j7",
        locality: "Nanal nagar",
        areaName: "Mehdipatnam",
        costForTwo: "₹150 for two",
        cuisines: [
            "Arabian"
        ],
        avgRating: 4.2,
        parentId: "19743",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
            deliveryTime: 35,
            lastMileTravel: 3.7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.7 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-02-18 00:00:00",
            opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40"
        },
        orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
    },
    {
        id: "655339",
        name: "KFC",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        locality: "Gudimalkapur",
        areaName: "Inner Ring Road",
        costForTwo: "₹400 for two",
        cuisines: [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
        ],
        avgRating: 4.2,
        parentId: "547",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
            deliveryTime: 34,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-02-17 23:00:00",
            opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50"
        },
        orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
    },
    {
        id: "45767",
        name: "Minerva Sweets",
        cloudinaryImageId: "rhhspxbln3f0fojleu0p",
        locality: "Opp Sarojini Devi Eye Hospital",
        areaName: "Humayun Nagar",
        costForTwo: "₹200 for two",
        cuisines: [
            "Sweets",
            "Desserts",
            "Snacks",
            "Fast Food"
        ],
        avgRating: 4.4,
        veg: true,
        parentId: "19873",
        avgRatingString: "4.4",
        totalRatingsString: "5K+",
        sla: {
            deliveryTime: 32,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-02-17 22:45:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "pureveg",
                                imageId: "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80"
        },
        orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
    },
    {
        id: "260218",
        name: "The Exotic Shawarma",
        cloudinaryImageId: "a2feeb23ecc230bd2b17cba73ebd2734",
        locality: "Sri Vasavi Grand Lane",
        areaName: "Mehdipatnam",
        costForTwo: "₹150 for two",
        cuisines: [
            "Arabian",
            "Momos",
            "Salads",
            "Fast Food"
        ],
        avgRating: 4.3,
        parentId: "18936",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
            deliveryTime: 34,
            lastMileTravel: 2.6,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.6 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-02-17 22:25:00",
            opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "25% OFF",
            subHeader: "UPTO ₹65"
        },
        orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
    }
 ]

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={Logo} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}

const Rescard = (props) => {
    const { ResData } = props;
    const{name,cuisines,avgRating,cloudinaryImageId,sla}=ResData;
    
    return (
        <div className="res-card">
            <img className="res-logo" src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+ 
                    cloudinaryImageId } />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

 
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search </div>
            <br></br>
            <div className="res-container">
                {
                    resapi.map((restdata)=>(
                        <Rescard key={restdata.id} ResData={restdata} />
                    ))
                }
              
            </div>
        </div>
    )
}
const Approot = () => {
    return <div className="app">
        <Header />
        { <Body /> }
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Approot />); 