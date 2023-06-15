import React from "react";
import thumbnail from "../assets/thumbnail.jpg";
import channelImg from "../assets/channel-img.jpg";
import { Link } from "react-router-dom";

type cardProps = {
  type: string
}

const Card = ({ type }: cardProps) => {
  return (
    <Link to="/video/test" className="video-page-link text-decoration-none">
      <div className={`${type === "sm" ? "video-card-sm d-flex" : "video-card"}`}>
        <img
          className={`card-img-top ${type === "sm" ? "thumbnail-img-sm rounded-2" : "w-100 thumbnail-img rounded-4"}`}
          src={thumbnail}
          alt="Thumbnail"
        />
        <div className="card-details py-2">
          <div className="d-flex">
            {type === "lg" && <img src={channelImg} alt="channel-img" className="channel-img" />}
            <div className="ms-3">
              <p className="mb-0 video-title-text">Video Title</p>
              <p className="my-1 channel-name-text">Channel Name</p>
              <p className="mb-0 video-info-text">75K views • 11 months ago</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
