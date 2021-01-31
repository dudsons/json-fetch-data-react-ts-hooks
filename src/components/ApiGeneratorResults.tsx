import * as React from 'react'
import {useEffect, useState} from 'react'

interface IUser {
    id: number
    name:string
    surname:string
}

const ApiGeneratorResults = () => {
    const [users, setUser] = useState<IUser[]>();

    const getUserList = async () => {
        let response = await fetch("http://localhost:9001/api/test/users");
        let user = await response.json();
        setUser(user);
        console.log(users)
    };

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <div>
            {users?.map((user) => <div>{user.id}. {user.name} {user.surname}</div>)}
        </div>
    )
};

export default ApiGeneratorResults;