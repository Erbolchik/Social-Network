import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': 'd4cca4fe-2075-427d-b37b-1010abaaca7e' }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).
            then(response => {
                return response.data
            });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
        .then(response=>{
            return response.data
        })
    }


}
