const prompt = require('prompt-sync')();

let User=[{
    id:1,
    email:"anurag123@gmail.com",
    password:"nfdfnd@039"
},{
    id:2,
    email:"rounak4949@gmail.com",
    password:"94rnfndsfn@jvd"
}]
id=3

function createUser(){
    const email=prompt('Enter email ');
    const password=prompt('Enter password ');
    
    User.push({
        id:id,
        email:email,
        password:password
    })
    id+=1
}

function getUsers(){
    console.log(User)
}

function updateUser(){
    const id=prompt("enter id of the user ")
    const email=prompt("enter updated email ")
    const password=prompt("enter updated password ")
    for(let i=0;i<User.length;i++){
        if(User[i].id==id){
            User[i].email=email
            User[i].password=password
        }
        
    }
}


function deleteUser(){
    const id=prompt("enter id of the user ")
    for(let i=0;i<User.length;i++){
        if(User[i].id==id){
            User.splice(i,1)
        }
    }


}

while (true){
    console.log("Enter Value")
    console.log("1 : Create User")
    console.log("2 : Get all Users")
    console.log("3 : Update User")
    console.log("4 : Delete User")
    const value=prompt()
    switch (value){
        case '1':
            createUser()
            break
        case '2':
            getUsers()
            break
        case '3':
            updateUser()
            break
        case '4':
            deleteUser()
            break
        
        default:
            console.log("enter valid input ")
    }


}