import React, { useEffect,useState } from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import List from '../components/list';

const GitHubPage = () => {

  const[data,setData] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/Rajdeepc/repos')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data);
      })

  }, [])

  return (
    <div>
      { data.map((item) => {
        return <List item={item}/>
      })}
      </div>
   
  )

}

export default GitHubPage
