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
  console.log(customer);
  return (
    <>
      <h1 className="text-3xl text-black pb-6">Approve Request</h1>
      <div className="p-6">
        <div className="w-full p-2 bg-green-200 shadow-md rounded ">
          <h1 className="text-2xl font-semibold">Customer Detail</h1>
          {customer.length > 0 &&
            customer?.map((cust, index) => (
              <div key={index}>
                <h2>{cust.companyName}</h2>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Approve;
