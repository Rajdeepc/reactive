import React, { useEffect,useState } from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card';

const FiddlesPage = () => {

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
    <Layout>
      <SEO title="Page two" />
      <p>My Github Repos</p>
      { data.map((item) => {
        return <p>{item.name}</p>
      })}
      
    </Layout>
  )

}

export default FiddlesPage
