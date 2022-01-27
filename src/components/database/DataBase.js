import React from "react";
import MessageHeaders from "./MessageHeaders";
import {Routes, Route, Link } from "react-router-dom";
import CashFlows from "./CashFlows";
import LiquidityPosition from "./LiquidityPosition";
import NakMessage from "./NakMessage";

export default function DataBase() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="pt-4 text-center"> Database Utils</h1>
        <div className="col-12">
          <Link to="/messageheaders">
            <button
              type="button"
              className="btn btn-primary pt-2 pl-2 my-2 mx-2"
            >
              Message Headers
            </button>
          </Link>
          <Link to="/cashflows">
            <button
              type="button"
              className="btn btn-primary pt-2 pl-2 my-2 mx-2"
            >
              Cash Flows
            </button>
          </Link>
          <Link to="/liquidityposition">
            <button
              type="button"
              className="btn btn-primary pt-2 pl-2 my-2 mx-2"
            >
              Liquidity Position
            </button>
          </Link>
          <Link to="/nakmessage">
            <button
              type="button"
              className="btn btn-primary pt-2 pl-2 my-2 mx-2"
            >
              Nak Messages
            </button>
          </Link>
        </div>
        
          <Routes>
            <Route path="/messageheaders" element={<MessageHeaders />} />
            <Route path="/cashflows" element={<CashFlows />} />
            <Route path="/liquidityposition" element={<LiquidityPosition />} />
            <Route path="/nakmessage" element={<NakMessage />} />
          </Routes>
        <div className="col-12 pt-3">
          <h4>Results</h4>
          <div>results</div>
        </div>
        {/* <div className="pt-3 col-12">
          <div className="form-group">
            <label className="h4" htmlFor="queryArea">
              Enter query below
            </label>
            <textarea
              className="form-control"
              id="queryArea"
              rows="3"
            ></textarea>
          </div>
        </div> */}
      </div>
    </div>
  );
}
