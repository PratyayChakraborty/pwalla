import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import MainLayout from "../pages/MainLayout";
import SingleUser from "../pages/SingleUser";
import Police from "../pages/Police";
import Complains from "../pages/Complains";
import Emergency from "../pages/Emergency";
import Message from "../pages/Messeage";
import Rating from "../pages/Rating";
import Logs from "../pages/Logs";
import Update from "../pages/Update";

const AllRoutes = () => {
    return (
        <Routes>
              {/* <Route path="/login" element={<Login />}></Route> */}
            <Route index element={<Login />}></Route>
            {/* <Route path="/admin" element={<Dashboard />}></Route> */}
            <Route path="/" element={<MainLayout />}>
                
                <Route path="/Dashboard" element={<Dashboard />}></Route>

                <Route path="/users" element={<Users />}></Route>
                <Route path="/police" element={<Police />}></Route>
                {/* <Route path="/users/:id" element={<SingleUser/>} /> */}
                
                <Route path="/Complains" element={<Complains />} />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/messages" element={<Message />} />
                <Route path="/rating" element={<Rating />} />
                <Route path="/update" element={<Update />} />

                <Route path="/logs" element={<Logs />} />
                





            </Route>
          


        </Routes>
    )
}

export default AllRoutes
