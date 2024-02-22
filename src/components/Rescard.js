import { IMG_URL } from "../utils/constants";

const Rescard = (props) => {
    console.log("props", props)
    const { ResData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId, sla } = ResData?.info;

    return (
        <div className="m-4 p-4 w-[250px] bg-gray-50 rounded-lg scale-5 hover:scale-90 ease-in duration-200">
            <img className="rounded-lg " src={IMG_URL +
                cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="break-words">{cuisines.join(",")}</h4>
            <h4>{avgRating} Rating</h4>
            <h4 >{sla.deliveryTime} mins</h4>
        </div> 
    )
}

/* hegher order Components */
export const PromotedResturent = (Rescard) => {
    return (props) => {
        return (
            <div>
                <small className=" absolute text-white m-4 p-0 bg-black rounded-lg">Promoted</small>
                <Rescard {...props} />
            </div>
        )
    }

}

export default Rescard;