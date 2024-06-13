import React, { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch("https://api.github.com/users/itsshivamdwivedi")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <div className="text-center mg-4 bg-gray-400 text-white text-3xl">
            Github Followers: {data.followers}
        </div>
    );
}

export default Github;
