import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Helmet } from "react-helmet-async";
export default function ProjectsDetails() {
  const [det, setDet] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setDet(data));
  }, []);
  const data = det.filter((item) => item.id === Number(id))[0];

  return (
    <>
      <Helmet>
        <title>Eftakhar | Details</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="mt-20 w-11/12 lg:w-4/5  mx-auto text-white flex lg:flex-row flex-col items-center ">
        <div className="w-11/12 lg:w-1/2">
          <Swiper
            className="w-full"
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
          >
            {data?.image?.map((img, i) => (
              <SwiperSlide className=" w-full">
                {" "}
                <img src={img} alt="" className="rounded-lg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-11/12 lg:mt-0 mt-6 lg:w-1/2 ml-3">
          <div>
            <span className="text-2xl font-bold">Tecnology: </span>
            <span className="flex flex-wrap gap-2">
              {data?.technologies?.map((tech, i) => (
                <span
                  key={i + "tt"}
                  className="border border-orange-700 px-4 text-sm py-[4px] rounded-xl"
                >
                  {tech}
                </span>
              ))}
            </span>
          </div>
          <h1 className="text-2xl font-bold mt-3">{data?.name}</h1>
          <p className="text-sm">{data?.description}</p>
          <p className="text-2xl">key feture:</p>
          <ul className="list-disc ml-5">
            {data?.keyFeatures?.map((k, i) => (
              <li key={i + "f"}>{k}</li>
            ))}
          </ul>
          <p className="text-2xl">What To Improve:</p>
          <ul className="list-disc ml-5">
            {data?.whatToImprove?.map((k, i) => (
              <li key={i + "f"}>{k}</li>
            ))}
          </ul>
          <div>
            <Link
              to={data?.url}
              target="_blank"
              className="border hover:bg-orange-800 active:scale-95 border-orange-700 px-4 py-1 rounded-lg mr-4 mt-5 inline-block"
            >
              Visit Site
            </Link>
            <Link
              to={data?.gitRepo}
              target="_blank"
              className="border hover:bg-orange-800 active:scale-95 border-orange-700 px-4 py-1 rounded-lg mr-4 mt-5 inline-block"
            >
              GitHub Repo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
