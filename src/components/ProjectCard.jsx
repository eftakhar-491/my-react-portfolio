import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ data }) {
  return (
    <>
      <div className="w-[300px] h-72 flex justify-between flex-col p-3 border rounded-lg shadow-xl">
        <img className="rounded-lg" src={data?.image[0]} alt="" />
        <h1 className="text-xl font-bold mt-3 ">{data?.name}</h1>
        <div>
          {data?.technologies?.map((tech, i) => (
            <span key={i + "t"} className="text-orange-700 text-sm">
              {tech} |{" "}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-3">
          <Link
            to={data?.url}
            target="_blank"
            className="border hover:bg-orange-800 active:scale-95 border-orange-700 px-4 py-1 rounded-lg  flex-1 text-center"
          >
            Visit Site
          </Link>
          <Link
            to={`/details/${data?.id}`}
            className="flex-shrink-0 border active:scale-95 hover:bg-orange-800 border-orange-700 px-4 py-1 rounded-lg flex-1 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}
