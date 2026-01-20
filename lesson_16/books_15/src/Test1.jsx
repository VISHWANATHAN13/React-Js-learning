import { useQuery } from '@tanstack/react-query'
import React from 'react'
import './App.css'

const Test1 = () => {
    const repo1 = useQuery({
        queryKey: ['githubUser'],
        queryFn: async () => {
            const res = await fetch('https://api.github.com/users/VISHWANATHAN13')
            //   if (!res.ok) {
            //     throw new Error('Fetch failed')
            //   }
            return res.json()
        }
    })
    const repo2=useQuery({
        queryKey:['githuRepo'],
        queryFn: async()=>{
        const res = await fetch("https://api.github.com/repos/VISHWANATHAN13/AI_Document_Analyzer-using-NLP");
        return res.json();
        }
    })

    if (repo1.isLoading || repo2.isLoading) return <h1>Loading...</h1>
    if (repo1.error || repo2.error) return <h1>An error occurred!!!</h1>

    console.log(repo1.data);
    console.log(repo2.data);

    const user = repo1.data;
    const repo = repo2.data;

    return <div>
        <h1>Username:  {user.login} </h1> <br />
        <p>Avatar URL: {user.avatar_url} </p>
        <p>Subscriptions URL:  {user.subscriptions_url} </p>
        <p>User view type:  {user.user_view_type} </p>
        <br /><br />
        <h1>Id: {repo.id} </h1>
        <p>Full name: {repo.full_name} </p>
        <p>HTML URL: {repo.html_url} </p>
    </div>
}

export default Test1
