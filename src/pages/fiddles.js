import React, { useEffect,useState } from "react";

import Layout from "../components/layout";
import Card from '../components/card';
import Loader from '../components/loader';

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
      <div className="text-right">{data.length} fiddles</div>
      { data.length > 0 ? data.map((item,i) => {
        return (
          <div>
            <Card item={item} key={item.id}/>
            { (data.length === i + 1) && <hr></hr>}
        </div>
        )
      }): <Loader/>}
      
      </Layout>
  )

}

export default FiddlesPage
