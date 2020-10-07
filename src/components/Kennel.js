import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./Kennel.css";
import { AnimalCard } from "./animal/AnimalCard"
import "./animal/Animal.css";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";

export const Kennel = () => (
    <>
    <NavBar />
    <ApplicationViews />
    </>
)
