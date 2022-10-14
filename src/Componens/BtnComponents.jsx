import React from "react";

function BtnComponents(props) {
  
  return (
    <>
      <div className="my-3">
        {props.status === 0 ? (
          <button className="btn btn-primary fw-bold" onClick={props.start}>
            Start
          </button>
        ) : (
          ""
        )}
        {props.status === 1 ? (
          <div>
            <button className="btn btn-primary fw-bold" onClick={props.stop}>
              Pause
            </button>
            <button
              className="btn btn-primary mx-1 fw-bold"
              onClick={props.reset}
            >
              Reset
            </button>
            <button
              className="btn btn-primary fw-bold"
              onClick={props.handleSaveModal}
            >
              Save
            </button>
          </div>
        ) : (
          ""
        )}

        {props.status === 2 ? (
          <div>
            <button className="btn btn-primary fw-bold" onClick={props.resume}>
              Resume
            </button>
            <button
              className="btn btn-primary mx-1 fw-bold"
              onClick={props.reset}
            >
              Reset
            </button>
            <button
              className="btn btn-primary fw-bold"
              onClick={props.handleSaveModal}
            >
              Save
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      
    </>
  );
}

export default BtnComponents;
