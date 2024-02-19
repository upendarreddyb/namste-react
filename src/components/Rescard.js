import { IMG_URL } from "../utils/constants";

const Rescard = (props) => {
    const { ResData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId, sla } = ResData;

    return (
        <div className="res-card">
            <img className="res-logo" src={IMG_URL +
                cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export default Rescard;