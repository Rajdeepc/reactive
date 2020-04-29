import React from "react"
import Layout from "../components/layout"
import { ExperimentsObject } from "../utils/constants"
import ExperimentsCards from "../components/experimentsCards"

const Experiments = () => {
  return (
    <Layout>
        {Object.keys(ExperimentsObject).map(key => {
          return (
            <div className="sections">
              <div className="row">
                <div className="col-md-12"><h3>{key}</h3></div>
              </div>
              <ExperimentsCards cardsArray={ExperimentsObject[key]} />
            </div>
          )
        })}
    </Layout>
  )
}

export default Experiments
