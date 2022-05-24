import React, { useEffect, useState } from 'react';

const Filters = () => {
    const [selectedTag, setSelectedTag] = useState("all")
    // useEffect(()=> {
    //     console.log("document is ready");
    // }, [])
    // useEffect(()=>{
    //     console.log("selectedTag has changed");
    // }, [selectedTag])

    return (
        <div className='container mt-3 mb-3 d-flex justify-content-between'>
            <div>
<span onClick={()=> setSelectedTag("all")}  className={selectedTag === "all" ? "btn btn-dark" : "btn btn-light"}>All</span>
<span onClick={()=> setSelectedTag("man")}className={selectedTag === "man" ? "btn btn-dark" : "btn btn-light"}>Man</span>
<span onClick={()=> setSelectedTag("woman")}className={selectedTag === "woman" ? "btn btn-dark" : "btn btn-light"}>Woman</span>
<span onClick={()=> setSelectedTag("kids")}className={selectedTag === "kids" ? "btn btn-dark" : "btn btn-light"}>Kids</span>
            </div>
         <input placeholder="Search" />
        </div>
    );
};

export default Filters;