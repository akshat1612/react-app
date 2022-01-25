import React, { useState } from "react";

export default function DataBase() {
  const [messageHeadersParams, setMessageHeadersParams] = useState({
    msg_src_sys: "",
    journal_id: "",
    msg_id: "",
  });

   const handleMessageHeadersChange = (event) => {
       console.log(event.target.value);
    const value = event.target.value;
    setMessageHeadersParams({
      ...messageHeadersParams,
      [event.target.name]: value,
    });
    console.log(messageHeadersParams);
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="pt-4 text-center"> Database Utils</h1>
        <div className="col-12">
          <input
            className="btn btn-primary pt-2 pl-2 my-2 mx-2"
            type="button"
            value="Message Headers"
          />
          <input
            className="btn btn-primary pt-2 pl-2 my-2 mx-2"
            type="button"
            value="Cash Flows"
          />
          <input
            className="btn btn-primary pt-2 pl-2 my-2 mx-2"
            type="button"
            value="Liquidity Position"
          />
          <input
            className="btn btn-primary pt-2 pl-2 my-2 mx-2"
            type="button"
            value="Nak Messages"
          />
        </div>
        <div className="pt-3 col-12">
          <input
            className="btn btn-success pt-2 pl-2 my-2 mx-2"
            type="button"
            value="Select"
          />
        </div>
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
