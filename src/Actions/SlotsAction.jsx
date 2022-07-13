import axios from "axios"
import {BACKEND_URL} from '../constant'

export const getSlotsByLocation = async (locationCode) => {

    let postData = { locationCode: locationCode};
    const signupUser = await axios.post(`${BACKEND_URL}/api/users/getSlotByLocation`, postData)
    .catch(err => {return {status: 'ERROR'}})

    // console.log(signupUser)
    if (signupUser.status === 200){
        return signupUser.data;
    } else{
        return {status: 'ERROR'}
    }
}

export const getSlotsData = async (source, destination) => {

    let postData = { source: source, destination : destination};
    const slotsData = await axios.post(`${BACKEND_URL}/api/users/getSlots`, postData)
    .catch(err => {return {status: 'ERROR'}})

    // console.log(signupUser)
    if (slotsData.status === 200){
        return slotsData.data;
    } else{
        return {status: 'ERROR'}
    }
}
