import React, { useEffect,useState } from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import List from '../components/list';

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
      { data.map((item) => {
        return <List item={item}/>
      })}
      
    </Layout>
  )

}

export default FiddlesPage
