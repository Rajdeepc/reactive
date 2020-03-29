import React from "react"
import CustomDate from "../components/customDate"
import { GoRepoForked, GoStar } from "react-icons/go"

const List = props => (
  <>
    <div className="card-header">
      <h3
        style={{
          marginBottom: 0,
          lineHeight: "30px",
          fontWeight: 900,
        }}
      >
        <a target="_blank" rel="noopener noreferrer" href={props.item.html_url}>
          {props.item.name}
        </a>
      </h3>
    </div>
    <div className="card-body">
      <p className="card-text">
        {props.item.description ? props.item.description : ""}
      </p>
    </div>
    <div className="card-footer">
      <div
        style={{
          fontSize: "18.96px",
          color: "rgba(0,0,0,0.8)",
          marginBottom: 0,
        }}
      >
        <small style={{ color: "rgba(0, 0, 0, 0.54)" }}>
          Last Updated:{" "}
          {props.item.updated_at ? CustomDate(props.item.updated_at) : ""}
        </small>
        <div> Language: {props.item.language}</div>
      </div>
      <div>
        <GoStar /> &nbsp;
        {props.item.stargazers_count} <GoRepoForked />
        &nbsp;
        {props.item.forks_count}
      </div>
    </div>
  </>
)

export default List
