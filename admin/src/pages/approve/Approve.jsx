import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Approve = () => {
  const [request, setRequest] = useState({});
  const [customer, setCustomer] = useState({});
  const [orderData, setOrderData] = useState({
    customer_id: 0,
    user_id: 0,
    car_id: 0,
    request_id: 0,
  });
  const [cars, setCars] = useState({});
  const { id } = useParams();
  const handleApprove = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      const newOrder = {
        customer_id: customer.id,
        user_id: user.id,
        car_id: 1,
        request_id: request.id,
      };
      setOrderData(newOrder);
      console.log(orderData);
      const order = await axios.post(
        "http://localhost:8888/api/orders/",
        orderData
      );
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getRequestInfo = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8888/api/requests/info/${id}`
        );
        setRequest(res.data);

        setCustomer(res.data.customer);

        const cars = await axios.get("http://localhost:8888/api/cars/active");
        setCars(cars.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getActiveCars = async () => {
      try {
        const cars = await axios.get("http://localhost:8888/api/cars/active");
        setCars(cars.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRequestInfo();
    // getActiveCars();
  }, []);
  console.log(cars);
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
        <div className="w-full p-2 bg-green-200 shadow-md rounded mt-4 text-white pl-12 bg-gradient-to-r from-cyan-500 to-blue-500">
          <h1 className="text-2xl font-semibold">Assign cars</h1>
          <form action="" className="flex gap-3 flex-col">
            <label for="cars">Assign a car:</label>
            <select name="car" id="car" className="text-black">
              {cars.length !== null &&
                cars.length > 0 &&
                cars.map((car, index) => (
                  <option key={index} value={car.id}>
                    {car.brand} - {car.drivePerLiter}
                  </option>
                ))}
            </select>
            <button
              className="p-2 bg-green-400 text-white"
              onClick={handleApprove}
              type="submit"
            >
              Approve
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Approve;
