import { resapi } from "../utils/resList";
import Rescard from "./Rescard";
import { useState } from "react";

const Body = () => {

    const [Listofrestarunts, filterRestro] = useState(resapi);

    return (
        <div className="body">
            <div className="filter">

                <button className="filter-btn" variant="primary"
                    onClick={() => {
                        const toratedRestro = resapi.filter((res) => res.avgRating > 4.2);
                        filterRestro(toratedRestro)
                    }

                    }
                >Filter Top Restarunts</button>
            </div>
            <br></br>
            <div className="res-container">
                {
                    Listofrestarunts.map((restdata) => (
                        <Rescard key={restdata.id} ResData={restdata} />
                    ))
                }

            </div>
        </div>
    )
}

export default Body;