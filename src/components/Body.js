import Rescard from "./Rescard";
import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [Listofrestarunts, setfilterRestro] = useState([]);
    const [searchText, setSearchTeaxt] = useState("");
    const [filterddata, setfilterData] = useState([]);

    useEffect(() => {
        fetchswiggi()
    }, [])

    const fetchswiggi = async () => {
        const response = await axios.get(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
        })
        setfilterRestro(response.data?.data?.cards[4]?.card.card.gridElements?.infoWithStyle?.restaurants);
        setfilterData(response.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("updated data", response.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    return Listofrestarunts.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" variant="primary"
                    onClick={() => {
                        const toratedRestro = Listofrestarunts.filter((res) => res.info.avgRating > 4.2);
                        setfilterRestro(toratedRestro)
                    }

                    }
                >Filter Top Restarunts</button>

                <div className="search">
                    <input type="text" value={searchText} onChange={(e) =>
                        setSearchTeaxt(e.target.value)} />
                    <button onClick={() => {
                        console.log("searchText", searchText);
                        const filterdrestro = Listofrestarunts.filter(
                            (response) => response.info.name.includes(searchText)
                        )
                        console.log("filterdrestro", filterdrestro);
                        setfilterData(filterdrestro)
                    }
                    }
                    >Search</button>
                </div>

            </div>
            <br></br>
            <div className="res-container">
                {
                    filterddata.map((restdata) => (
                        <Link key={restdata?.info.id} to={"/rescardmenu/" + restdata?.info.id}>
                            <Rescard  ResData={restdata} />
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default Body;