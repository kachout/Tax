const axios = require('axios')
const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

 const getTodoById = async (id) => {
    
    const myTodo = await axios.get(`${baseUrl+'/'+id}`);
    console.log('todo',myTodo.data)
     return myTodo.data
};

module.exports = { getTodoById}