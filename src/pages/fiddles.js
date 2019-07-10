import React, { useEffect,useState } from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card';

const FiddlesPage = () => {

  const[data,setData] = useState([])

  useEffect(() => {
    fetch('http://jsfiddle.net/api/user/rajrock38/demo/list.json')
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
        return <Card item={item}/>
      })}
      
    </Layout>
  )

}

export default FiddlesPage
