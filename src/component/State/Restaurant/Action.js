import axios from "axios";

import{
CREATE_EVENT_FAILURE,
CREATE_EVENT_REQUEST,
CREATE_EVENT_SUCCESS,
DELETE_EVENT_FAILURE,
DELETE_EVENT_REQUEST,
DELETE_EVENT_SUCCESS,
GET_ALL_EVENT_FAILURE,
GET_ALL_EVENT_REQUEST,
GET_ALL_EVENT_SUCCESS,
GET_RESTAURANT_EVENT_FAILURE,
GET_RESTAURANT_EVENT_REQUEST,
GET_RESTAURANT_EVENT_SUCCESS,
GET_RESTAURANT_CATEGORY_FAILURE,
GET_RESTAURANT_CATEGORY_REQUEST,
GET_RESTAURANT_CATEGORY_SUCCESS,
GET_RESTAURANT_BY_ID_FAILURE,
GET_RESTAURANT_BY_ID_REQUEST,
GET_RESTAURANT_BY_ID_SUCCESS,
UPDATE_RESTAURANT_STATUS_FAILURE,
UPDATE_RESTAURANT_STATUS_REQUEST,
UPDATE_RESTAURANT_STATUS_SUCCESS,
GET_ALL_RESTAURANT_REQUEST,
GET_ALL_RESTAURANT_SUCCESS,
GET_ALL_RESTAURANT_FAILURE,
GET_RESTAURANT_BY_USER_ID_REQUEST,
GET_RESTAURANT_BY_USER_ID_SUCCESS,
GET_RESTAURANT_BY_USER_ID_FAILURE,
CREATE_RESTAURANT_REQUEST,
CREATE_RESTAURANT_SUCCESS,
CREATE_RESTAURANT_FAILURE,
DELETE_RESTAURANT_REQUEST,
DELETE_RESTAURANT_SUCCESS,
DELETE_RESTAURANT_FAILURE,
CRAETE_CATEGORY_REQUEST,
CRAETE_CATEGORY_SUCCESS,
CRAETE_CATEGORY_FAILURE,

} from "./ActionTypes"
import { api } from "../../config/api";


 export const getAllRestaurantAction = (token) =>{
    return async(dispatch)=>{
        dispatch({type:GET_ALL_RESTAURANT_REQUEST});
        try{
            const {data} = await api.get(`api/restaurants`,{
                headers:{
                    Authorization:`Bearer ${token}`
    },
    });
    dispatch({type:GET_ALL_RESTAURANT_SUCCESS,payload:data});
    console.log("all restaurant",data);
        } catch(error){
             console.log("catch error",error);
            dispatch({type:GET_ALL_RESTAURANT_FAILURE,payload:error});
            console.log("error",error);
        }
    }}
export const getRestaurantById=(restaurantId,reqData)=>{
        return async (dispatch)=>{
            dispatch({type:GET_RESTAURANT_BY_ID_REQUEST});
            try{
                const response =await api.get(`api/restaurants/${restaurantId}`,{
                    headers:{
                        Authorization:`Bearer ${reqData.jwt}`,
    },
});
dispatch({type:GET_RESTAURANT_BY_ID_SUCCESS,payload:response.data});
            }catch(error){
                dispatch({type:GET_RESTAURANT_BY_ID_FAILURE,payload:error});
                console.log("error",error);
            };
        };
    };
 export const getRestaurantByUserId=(jwt)=>{
        return async(dispatch)=>{
            dispatch({type:GET_RESTAURANT_BY_USER_ID_REQUEST});
            try{
                const {data}=await api.post(`/api/admin/restaurants/user`,{
                    headers:{
                        Authorization:`Bearer ${jwt}`,
    },
});
dispatch({type:GET_RESTAURANT_BY_USER_ID_SUCCESS,payload:data});
            }
            catch(error){
                console.log("catch error",error);
                dispatch({type:GET_RESTAURANT_BY_USER_ID_FAILURE,payload:error.message});
                console.log("error",error);
            };
        };
    };
 export const createRestaurant=(reqData)=>{
         console.log("token----------",reqData.token);
        return async(dispatch)=>{
            dispatch({type:CREATE_RESTAURANT_REQUEST});
            try{
                const {data}=await axios.post('/api/admin/restaurants'
                ,
                    reqData.data,{
                    headers:{
                        Authorization:`Bearer ${reqData.token}`,
        },
    });
    dispatch({type:CREATE_RESTAURANT_SUCCESS,payload:data});
    console.log("create restaurant",data);
            }
            catch(error){
                dispatch({type:CREATE_RESTAURANT_FAILURE,payload:error.message});
                console.log("error",error);
            };
        };
    };
export const updateRestaurant=({restaurantId, restaurantData, jwt})=>{
        return async(dispatch)=>{
            dispatch({type:UPDATE_RESTAURANT_STATUS_REQUEST});
            try{
                const response =await axios.put(`/api/admin/restaurants/${restaurantId}`,restaurantData,{
                    headers:{
                        Authorization:`Bearer ${jwt}`,
        },
    });
    dispatch({type:UPDATE_RESTAURANT_STATUS_SUCCESS,payload:response.data});
} catch(error){
    dispatch({type:UPDATE_RESTAURANT_STATUS_FAILURE,payload:error});
    console.log("error",error);
};
};
};
export const deleteRestaurant=(restaurantId, jwt)=>{
    return async(dispatch)=>{
        dispatch({type:DELETE_RESTAURANT_REQUEST});
        try{
            const response =await api.delete(`/api/admin/restaurants/${restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
    },
});
dispatch({type:DELETE_RESTAURANT_SUCCESS,payload:response.restaurantId});
        }
        catch(error){
            dispatch({type:DELETE_RESTAURANT_FAILURE,payload:error});
            console.log("error",error);
        };
    };
};
export const updateRestaurantStatus=({restaurantId,  jwt})=>{
    return async(dispatch)=>{
        dispatch({type:UPDATE_RESTAURANT_STATUS_REQUEST});
        try{
            const response =await api.put(`/api/admin/restaurants/${restaurantId}/status`,{},{
                headers:{
                    Authorization:`Bearer ${jwt}`,
    },
}
);
console.log("ressssss",response.data);
dispatch({type:UPDATE_RESTAURANT_STATUS_SUCCESS,payload:response.data});
}
catch(error){
    dispatch({type:UPDATE_RESTAURANT_STATUS_FAILURE,payload:error});
    console.log("error",error);
};
};
};

export const createEventAction=({reqData, jwt, restaurantId})=>{
    return async(dispatch)=>{
        dispatch({type:CREATE_EVENT_REQUEST});
        try{
            const {data}=await api.post(`/api/admin/restaurants/${restaurantId}/event`,reqData,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
    },
});
dispatch({type:CREATE_EVENT_SUCCESS,payload:data});
console.log("create event",data);
        }
        catch(error){
            dispatch({type:CREATE_EVENT_FAILURE,payload:error});
            console.log("error",error);
        };
    };
};

export const getAllEvent=({jwt})=>{
    return async(dispatch)=>{
        dispatch({type:GET_ALL_EVENT_REQUEST});
        try{
            const {response}=await api.get(`/api/event`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
    },
});
console.log("get all event",response.data);
dispatch({type:GET_ALL_EVENT_SUCCESS,payload:response.data});
console.log("all event",response.data);
        }
        catch(error){
            dispatch({type:GET_ALL_EVENT_FAILURE,payload:error});
            console.log("error",error);
        };
    };
};

export const deleteEventAction=({eventId, jwt})=>{
    return async(dispatch)=>{
        dispatch({type:DELETE_EVENT_REQUEST});
        try{
            const {response}=await api.delete(`/api/admin/event/${eventId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
    },
});
console.log("delete event",response.data);
dispatch({type:DELETE_EVENT_SUCCESS,payload:eventId});
        }
        catch(error){
            dispatch({type:DELETE_EVENT_FAILURE,payload:error});
            console.log("catch  -",error);
        };
    };
};

export const getRestaurantEvent=({restaurantId, jwt})=>{
    return async(dispatch)=>{
        dispatch({type:GET_RESTAURANT_EVENT_REQUEST});
        try{
            const {response}=await api.get(`/api/admin/restaurants/${restaurantId}/event`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
    },
});
console.log("get restaurant event",response.data);
dispatch({type:GET_RESTAURANT_EVENT_SUCCESS,payload:response.data});
console.log("restaurant event",response.data);
        }
        catch(error){
            dispatch({type:GET_RESTAURANT_EVENT_FAILURE,payload:error});
            console.log("error",error);
        };
    };
};

export const createCategoryAction = ({ reqData, jwt, restaurantId }) => {
    return async (dispatch) => {
        dispatch({ type: CRAETE_CATEGORY_REQUEST });
        try {
            const { response } = await api.post(
                `/api/admin/restaurants/${restaurantId}/category`,
                reqData,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("create category", response.data);
            dispatch({ type: CRAETE_CATEGORY_SUCCESS, payload: response.data });
            console.log("create category", response.data);
        } catch (error) {
            console.log("catch -", error);
            dispatch({ type: CRAETE_CATEGORY_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const getRestaurantCategory=({restaurantId, jwt})=>{
    return async(dispatch)=>{
        dispatch({type:GET_RESTAURANT_CATEGORY_REQUEST});
        try{
            const {response}=await api.get(`/api/admin/restaurants/${restaurantId}/category`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
    },
});
console.log("get restaurant category",response.data);
dispatch({type:GET_RESTAURANT_CATEGORY_SUCCESS,payload:response.data});
console.log("restaurant category",response.data);
        }
        catch(error){
            dispatch({type:GET_RESTAURANT_CATEGORY_FAILURE,payload:error});
            console.log("error",error);
        };
    };
};
