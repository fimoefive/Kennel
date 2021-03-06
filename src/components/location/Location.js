
import React from "react"
import "./Location.css"

export const LocationCard = (props) => (
    <section className="location">
        <h3 className="location__name">{props.name}</h3>
        <div className="location__address">{props.address}</div>
    </section>
)