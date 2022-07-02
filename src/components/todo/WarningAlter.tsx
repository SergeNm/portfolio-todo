import React from "react";

const WarningAlter = () => {
  return (
    <div>
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
        role="alert"
      >
        <p className="font-bold">json-server should be running on port 3000</p>
        <p>install json server on your computer - <b><i>npm install -g json-server</i></b></p>
        <p>create db.json file in the root dir and start the server with: <b><i>npx json-server --watch db.json</i></b></p>
        <p>{'copy and paste the following json in db.json file: '}<b><i>{'{ "todos": [] }'}</i></b></p>
        <p>finally, refresh this page</p>
      </div>
    </div>
  );
};

export default WarningAlter;
