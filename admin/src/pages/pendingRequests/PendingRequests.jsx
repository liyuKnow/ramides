import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PendingTable from "./PendingTable";
import axios from "axios";

const PendingRequests = () => {
  return (
    <>
      <h1 className="text-3xl text-black pb-6">Pending Request</h1>

      <div className="p-6">
        <PendingTable />
      </div>
    </>
  );
};

export default PendingRequests;
