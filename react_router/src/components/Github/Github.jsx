import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
      const data = useLoaderData();
    
    // const [data, setData] = useState({});
    
    // useEffect(() => {
    //     fetch("https://api.github.com/users/itsshivamdwivedi")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);

    return (
        <div className="text-center mg-4 bg-gray-400 text-white text-3xl">
            Github Followers: {data.followers}
            <img className="text-center" src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
    );
}

export default Github;
export const githubInfoLoader = async()=> {
   const response =await fetch('https://api.github.com/users/itsshivamdwivedi')
   return response.json()
}
