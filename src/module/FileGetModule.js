import axios from "axios";

export async function getFileContext(fileUrl) {
    const baseUrl = "http://localhost:8088/api/files/load/";
    try{
        return await axios.get(baseUrl + fileUrl)
            .then((response) => {
                return response.data;
            });
    }catch(err){
        return "# 无法加载当前文件";
    }
}