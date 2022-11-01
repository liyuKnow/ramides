import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Approve = () => {
  const [request, setRequest] = useState({});
  const [customer, setCustomer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getRequestInfo = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8888/api/requests/info/${id}`
        );
        setRequest(res.data);

        setCustomer(res.data.customer);
      } catch (error) {
        console.log(error);
      }
    };

    getRequestInfo();
  }, []);
  console.log(request);
  return (
    <>
      <h1 className="text-3xl text-black pb-6">Approve Request</h1>
      <div className="p-6">
        <div className="w-full pl-12 p-2 bg-green-200 shadow-md rounded-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
          <h1 className="text-2xl font-semibold">Customer Detail</h1>
          {customer.length !== null && (
            <div>
              <h2>{customer.companyName}</h2>
              <h2>Company Agent</h2>
              <h2>
                {customer.firstName} {customer.lastName}
              </h2>
              <h2>{customer.companyName}</h2>
            </div>
          )}
        </div>
        <div className="w-full p-2 bg-green-200 shadow-md rounded mt-4 text-white pl-12 bg-gradient-to-r from-cyan-500 to-blue-500">
          <h1 className="text-2xl font-semibold">Customer Detail</h1>
          {request.length !== null && (
            <div>
              <h2>Item : {request.item}</h2>
              <h2>Tarif : {request.tariff}</h2>
              <h2>Number of Cars :{request.noOfCars}</h2>
              <h2>
                Starting Date :{new Date(request.startingDate).toLocaleString()}
              </h2>
              <h2>
                end Date :{new Date(request.startingDate).toLocaleString()}
              </h2>
              <h2>Starting Place :{request.startingPlace}</h2>
              <h2>Destination:{request.destination}</h2>
              <div>
                <h2>Remark :</h2>
                <p>{request.remark}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Approve;
