import React from "react"
import Layout from "../components/layout"
import * as vscodedata from "../constants/vscode.json"
import { FaDownload } from "react-icons/fa"

const VSCodePage = () => {
  console.log(vscodedata.vscodeplugins)
  return (
    <Layout>
      <div className="row">
        {vscodedata.vscodeplugins && vscodedata.vscodeplugins.length
          ? vscodedata.vscodeplugins.map(plugin => {
              return (
                <div className="col-lg-3">
                  <a className="card" href={plugin.url}>
                    <div className="card-body">
                      <div className="image-wrapper text-center">
                        <img src={plugin.img} alt="" />
                      </div>
                      <div className="text-center">{plugin.name}</div>
                      <div className="author-row">
                        <span className="author-text">{plugin.author} </span>
                        <span className="installs-text">
                          <FaDownload /> {plugin.installs}
                        </span>
                      </div>
                      <p>{plugin.desc}</p>
                      <div>
                        <span className="stars-text">{plugin.stars}</span>{" "}
                        <span className="license-text">{plugin.license}</span>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })
          : null}
      </div>
    </Layout>
  )
}

export default VSCodePage
