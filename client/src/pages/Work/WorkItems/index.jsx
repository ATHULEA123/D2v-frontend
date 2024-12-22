import React, { useState } from "react";
import {Pageitems} from "../../../components";
import {Link} from "react-router-dom";
import {Spin} from "antd";

const Work = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const workData = [
    {
      type: "Project 2367",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      work_progress: "started",
    },
    {
      type: "Project 2367",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      work_progress: "Delivered",
    },
    {
      type: "Project 2367",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      work_progress: "Materials arraivied",
    },
    {
      type: "Project 2367",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      work_progress: "Estimation Conformed",
    },

    {
      type: "Project 2367",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      work_progress: "choose Estimation",
    },
  ];
  return (
    <>
      <Spin className="custom-spinner" spinning={loading} tip="Loading...">
        <div className="flex flex-col gap-4 ">
          {workData.map((data, index) => (
            <Link to="/pannel/workitem/2">
              <Pageitems data={data} type="work" />
            </Link>
          ))}
        </div>
      </Spin>
    </>
  );
};

export default Work;
