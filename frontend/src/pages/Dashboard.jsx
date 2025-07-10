import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import salary from "../Images/salary.jpg";
import manage from "../Images/manage.jpeg";
import product from "../Images/product.jpg";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-6 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        
        {/* Card 1 */}
        <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-4">Student Administration</h2>
          <img
            src={manage}
            alt="Manage"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <Dropdown className="w-full">
            <Dropdown.Toggle variant="light" className="w-full text-sm font-medium">
              Student Administration
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-full">
              <Dropdown.Item onClick={() => navigate("/StudentAdd")}>
                Add New Students
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/StudentView")}>
                View Student
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Card 3 */}
        <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-4">Manage Subjects</h2>
          <img
            src={product}
            alt="Subjects"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <Dropdown className="w-full">
            <Dropdown.Toggle variant="light" className="w-full text-sm font-medium">
              Manage Subjects
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-full">
              <Dropdown.Item onClick={() => navigate("/subjectedit")}>
                Edit Subjects
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/subjectadd")}>
                Add New Subjects
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Card 2 */}
        <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-4">Calculate Fee</h2>
          <img
            src={salary}
            alt="Fee"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <Button className="w-full bg-white text-black font-semibold hover:bg-blue-100 transition" onClick={() => navigate("/fees")}>
            Calculate Fee
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
