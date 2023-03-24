import React, { useEffect, useState } from "react";
import Button from "../../Component/Button";
import OverlayPopup from "../../Component/OverlayPopup";
import { getListJobs, postListJobs } from "../../utils";
import ListView from "./ListView";
import OverlayContent from "./OverlayContent";

const Home = () => {
  const [overlay, toggleOverlay] = useState(false);
  const [list, setList] = useState(null);
  const [, setListError] = useState(false);

  useEffect(() => {
    getAllListJobs();
  }, []);

  const getAllListJobs = () => {
    const response = getListJobs();
    response
      .then((res) => {
        setList(res.data);
        setListError(true);
      })
      .catch(() => {
        setList(null);
        setListError(true);
      });
  };

  const updateNewJob = (data) => {
    const option = { id: list.length + 1, createdAt: new Date(), ...data };
    const response = postListJobs(option);
    response
      .then(() => {
        toggleOverlay(false);
        getAllListJobs();
      })
      .catch((err) => {
        setListError(true);
      });
  };

  return (
    <div className="w-full h-screen overflow-hidde overflow-y-auto bg-[#D8D8D8]">
      <Button
        type='button'
        variant={"outlined"}
        onClick={() => toggleOverlay(!overlay)}
      >
        Create Job
      </Button>
      <ListView show={true} data={list} />
      <OverlayPopup show={overlay} onClose={() => toggleOverlay(false)}>
        <OverlayContent onFormSubmit={updateNewJob} />
      </OverlayPopup>
    </div>
  );
};

export default Home;
