import axios from "axios";

export const getDrinkingData = async()=>{

    try{
        const responce = await axios.get("/api/drink")
        return responce;

    }
    catch(err){
        console.log(err)
    }
}

export const getFoodingData = async()=>{
    try{
        const foodRespocne = await axios.get("/api/food")
        return foodRespocne;
    }
    catch(err){
        console.log(err)
    }
}


export const getBrunchingdata = async()=>{

    try{
        const responce = await axios.get("/api/brunch")
        return responce;

    }
    catch(err){
        console.log(err)
    }
}