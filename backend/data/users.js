import bcrypt from "bcryptjs";
const users=[
    {
        name:'Yash',
        email:'yashmht44@gmail.com',
        password:bcrypt.hashSync('2241164',10),
        isAdmin:true,
    },
    {
        name:'Balaji',
        email:'balajidnz295@gmail.com',
        password:bcrypt.hashSync('2241121',10),
        isAdmin:true,
    },
    {
        name:'User1',
        email:'user1@gmail.com',
        password:bcrypt.hashSync('123456',10),
        points:150,
        co2saved:2175,
        isAdmin:false,
    },
    {
        name:'User2',
        email:'user2@gmail.com',
        password:bcrypt.hashSync('123456',10),
        points:40,
        co2saved:743,
        isAdmin:false,
    },
    {
        name:'Ananya',
        email:'ananyashetty257@gmail.com',
        password:bcrypt.hashSync('2241114',10),
        isAdmin:true,
    }

];

export default users;
