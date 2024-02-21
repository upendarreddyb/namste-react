import { IMG_URL } from "../utils/constants";

const Rescard = (props) => {
    console.log("props",props)
    const { ResData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId, sla } = ResData?.info;

    return (
        <div className="m-4 p-4 w-[250px] bg-gray-50 rounded-lg hover:bg-gray-200">
             <img className="rounded-lg" src={IMG_URL +
                cloudinaryImageId} /> 
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="break-words">{cuisines.join(",")}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{sla.deliveryTime} mins</h4> 
        </div>
    )
}

export default Rescard;