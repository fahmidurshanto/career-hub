import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import JobDetail from "./components/JobDetail/JobDetail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied-jobs",
        loader: () => fetch("featuredJobs.json"),
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/job/:id",
        element: <JobDetail></JobDetail>,
        loader: () => fetch("featuredJobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
