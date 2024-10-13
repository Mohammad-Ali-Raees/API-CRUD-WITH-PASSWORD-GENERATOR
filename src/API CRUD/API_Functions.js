import axios from 'axios';



const Api_Data = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

//* GET ALL API DATA ROUTE
export const Get_All_Api_Data = () => {
    return Api_Data.get('posts');
}

//* DELETE DATA ROUTE
export const DeleteData = (id) => {
    return Api_Data.delete(`/posts/${id}`)
}

//* POST DATA ROUTE
export const AddData = (post) => {
    return Api_Data.post('/posts', post)
}


//* UPDATE DATA ROUTE
export const UpdateData = (id,post) => {
    return Api_Data.put(`/posts/${id}`, post)
}
