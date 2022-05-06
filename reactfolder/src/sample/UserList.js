import React, {useEffect, useRef, useState} from 'react';

function CreateUser({nextId, users, setUsers}){
    const [inputs, setInputs] = useState({
        username:'',
        email:''
    })
    const {username, email} = inputs;
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const userInput = {
            id:nextId.current,
            username,
            email
        }
        setUsers([
            ...users,
            userInput
        ])
        setInputs({
            username:'',
            email:''
        })
        nextId.current += 1;
    }
    

    return(
        <>
        <form onSubmit={onSubmit}>
            <input
                name="username"
                placeholder="user name"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="email"
                onChange={onChange}
                value={email}
            />
            <button>Register</button>
        </form>
        </>
    )
}

function User({users, onRemove, onToggle}){
    useEffect(()=>{
        console.log('user 값이 설정됨');
        console.log('설정됨 - ', users);
        return () => {
        console.log('user 가 바뀌기 전..');
        console.log('바뀌기전 - ',users);
        };
    },[users])

    return(
        <>
        {
            users.map((item) => (
                <div key={item.id}>
                    <b
                        style={{
                            cursor:'pointer',
                            color: item.active ?'green' :'black'
                        }}
                        onClick={()=>onToggle(item.id)}
                    >
                        {item.username}
                    </b> 
                    <span>({item.email})</span> 
                    <button onClick={()=>{onRemove(item.id)}}>Remove</button>
                </div>
            ))
        }
        </>
    );
}

function countActiveUsers(users){
    return users.filter(user => user.active).length
}

function UserList(){
    const [users, setUsers] = useState([
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          active: true
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active: false
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active: false
        }
    ]);
    const nextId = useRef(4);
    const onRemove = (id) => {
        setUsers(
            users.filter(
                (user) => user.id !== id
            )
        )
    }
    const onToggle = (id) => {
        setUsers(
            users.map((item) => (
                item.id === id
                ?{...item, active:!item.active}
                :item
            ))
        )
    }
    const count = countActiveUsers(users);

    return(
        <>
            <CreateUser 
                nextId={nextId} 
                users={users} 
                setUsers={setUsers}
            />
            <User users={users} onRemove={onRemove} onToggle={onToggle}/>
            <div>
                active users : {count}
            </div>
        </>
    );
}
export default UserList;