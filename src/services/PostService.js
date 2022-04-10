import Axios from "axios"

export default class PostService {
    static getAllPosts() {
       return Axios.get('http://localhost:3004/posts')
    }
    static getPost(id) {
        return Axios.get(`http://localhost:3004/posts/${id}`)
     }
     static deletePostById(id) {
        return Axios.delete(`http://localhost:3004/posts/${id}`)
     }
}