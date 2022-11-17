import axios from 'axios'


let getUser = (number) => {
     return new Promise(async (resolve, reject) => {
          let { data } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
          resolve(data);
     })
}
let getPost = (number) => {
     return new Promise(async (resolve, reject) => {
          let { data } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number);
          resolve(data);
     })
}

export async function getData(userId) {
     try {
          let user = await getUser(userId);
          let post = await getPost(userId);
          let array = [user, post]
          return array
     }
     catch (e) {
          console.log(e);
     }
}
