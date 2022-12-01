import { useContext } from "react";
import Security from "./Security";
import Metrics from "./Metrics";
import { Context } from "../src/context";

export const ResultsBox = () => {
  const {isSecurity} = useContext(Context)

  //isSecurity is initialized as false so that the Metrics page is initially displayed
  return (
    isSecurity ? <Security /> : <Metrics />
  )
}