import React,{useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/RushikeshGadkar906')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center p-5 bg-gray-600 text-3xl text-white'>
        User followers : {data.followers}

        <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const GithubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/RushikeshGadkar906');
    return response
}