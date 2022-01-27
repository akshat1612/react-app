import React, { useState } from "react";
import { submitQueryForMessageHeader } from "./QueryService";

export default function MessageHeaders() {
  const [messageHeadersParams, setMessageHeadersParams] = useState({
    msg_src_sys: "",
    journal_id: "",
    msg_id: "",
  });

  const handleMessageHeadersChange = (event) => {
    const value = event.target.value;
    setMessageHeadersParams({
      ...messageHeadersParams,
      [event.target.name]: value,
    });
  };

  const submitQueryForResults = () => {
    console.log("Query has been submitted with params" + messageHeadersParams);
    console.log(messageHeadersParams);
    submitQueryForMessageHeader();
  };
  
  const clearAllFields = () => {
    setMessageHeadersParams({
        msg_src_sys: "",
        journal_id: "",
        msg_id: "",
      })
  };

  return (
    <>
      <div className="col-12 pt-3">
        <h4>Select Params -</h4>
        <table className="table table-bordered table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">Based on</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Source System</th>
              <td>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={messageHeadersParams.msg_src_sys}
                    name="msg_src_sys"
                    onChange={handleMessageHeadersChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">Message ID</th>
              <td>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={messageHeadersParams.msg_id}
                    name="msg_id"
                    onChange={handleMessageHeadersChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">Journal ID</th>
              <td>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={messageHeadersParams.journal_id}
                    name="journal_id"
                    onChange={handleMessageHeadersChange}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-12 pt-3">
        <button
          className={`btn btn-primary pl-3 `}
          disabled={
            messageHeadersParams.journal_id === "" &&
            messageHeadersParams.msg_id === "" &&
            messageHeadersParams.msg_src_sys === ""
              ? true
              : false
          }
          type="button"
          onClick={submitQueryForResults}
        >
          Submit
        </button>
        <button
          className={`btn btn-warning pl-3 ml-3 mx-3 `}
          type="button"
          onClick={clearAllFields}
        >
          Clear
        </button>
      </div>
    </>
  );
}