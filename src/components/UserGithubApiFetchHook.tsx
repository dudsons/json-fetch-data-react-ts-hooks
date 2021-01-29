import * as Eeact from 'react'
import {useEffect, useState} from "react";
type IUser = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string | null;
    blog: string | null;
    location: string | null;
    email: string | null;
    hireable: string | null;
    bio: string;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
};

const UserGithubApiFetchHook = ()=> {
    const [user, setUser] = useState<IUser>();

    const getUser = async () => {
        let response = await fetch("https://api.github.com/users/nas5w");
        let user = await response.json();
        setUser(user);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <div>{user?.name}</div>
        </div>
    )
};

export default UserGithubApiFetchHook;