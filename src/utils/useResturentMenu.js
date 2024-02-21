import { useState, useEffect } from "react";
import axios from "axios";

const useresturentMenu = (resId) => {
   const [resinfo,setresinfo]=useState(null)

    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        const data = await axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resId);
        
        console.log("usedata", data);
        setresinfo(data.data);
    }

    return resinfo;

}

export default useresturentMenu;