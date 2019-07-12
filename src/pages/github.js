import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/list"
import Loader from "../components/loader"

const GitHubPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/Rajdeepc/repos")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
  }, [])

  return (
    <Layout>
      {data.length > 0 ? (
        data.map((item, i) => {
          return (
            <div>
              <List key={item.id} item={item} />
              {!(data.length === i + 1) && <hr></hr>}
            </div>
          )
        })
      ) : (
        <Loader />
      )}
    </Layout>
  )
}

export default GitHubPage
