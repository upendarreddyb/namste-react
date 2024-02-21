import Rescard from "./Rescard";
import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Looks like you 're offline !! Please check your internet connection</h1>

    return Listofrestarunts.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex">
               
                <div className="search m-4 p-4 ">
                    <input className="border border-solid border-black" type="text" value={searchText} onChange={(e) =>
                        setSearchTeaxt(e.target.value)} />
                    <button className="px-5 py-1 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filterdrestro = Listofrestarunts.filter(
                            (response) => response.info.name.includes(searchText)
                        )
                        setfilterData(filterdrestro)
                    }
                    }
                    >Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                        onClick={() => {
                            const toratedRestro = Listofrestarunts.filter((res) => res.info.avgRating > 4.2);
                            setfilterRestro(toratedRestro)
                        }
                        }
                    >Top Restarunts</button>
                </div>

            </div>
            <br></br>
            <div className="flex flex-wrap">
                {
                    filterddata.map((restdata) => (
                        <Link key={restdata?.info.id} to={"/rescardmenu/" + restdata?.info.id}>
                            <Rescard ResData={restdata} />
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default Body;