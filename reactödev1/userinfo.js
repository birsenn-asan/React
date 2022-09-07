import axios from "axios";

const getUser = async (userId) => {
    const url = "https://jsonplaceholder.typicode.com/users/";
    const res = await axios.get(url + userId);
    return res;
}

const getPosts = async (userId) => {
    const url = "https://jsonplaceholder.typicode.com/posts?userId=";
    const res = await axios.get(url + userId);
    return res;
}

const getData = async (userId) => Promise.all([getUser(userId), getPosts(userId)]).then(res => {
    const [user, posts] = res;
    return {userInfo: user.data, posts: posts.data};
}).catch(e => e.message)

export default getData;


