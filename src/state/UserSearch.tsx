import {useState} from 'react';

const users = [
    {name: 'Sam', age :20 },
    {name: 'George', age: 32},
    {name: 'Jim', age: 54}
]; 

const UserSerach: React.FC= () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string , age: number}| undefined >();

    const onClick = () => {
        const foundUser = users.find((user)=> {
            return user.name === name; 
        });

        setUser(foundUser);

    };

    return <div> 
        User Search 
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div> 
            {user && user.name}
            {user && user.age}
        </div>
        </div>
};

export default UserSerach;