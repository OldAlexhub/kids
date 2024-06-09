import React from "react";

const Media = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title text-center">Arabic Alphabets</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/ifktT2RAVtg"
                  title="YouTube video 1"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Numbers in Arabic</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/u95EEV1H2YM"
                  title="YouTube video 2"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
