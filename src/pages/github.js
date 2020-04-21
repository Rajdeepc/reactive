import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import List from "../components/list"
import Loader from "../components/loader"
import "./page.css"

const GitHubPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/Rajdeepc/repos?type=owner&sort=created")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
  }, [])

  return (
    <Layout>
      <div className="row">
        {data.length > 0 ? (
          data.map((item, i) => {
            return (
              <div className="col-md-4">
                <div className="card-box">
                  <List key={item.id} item={item} />
                </div>
              </div>
            )
          })
        ) : (
          <Loader />
        )}
      </div>
    </Layout>
  )
}

export default GitHubPage
