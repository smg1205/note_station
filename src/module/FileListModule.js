import axios from "axios";
import {getToken} from "@/module/TokenModule.js";

async function GetDataList(){
    let ans = [];
    try{
        const response = await axios.post("http://localhost:8088/user/dataList", {
            token: getToken(),
        });
        ans = response.data.il;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    return ans;
}

export { GetDataList };
