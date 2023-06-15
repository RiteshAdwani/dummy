import React, { useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import channelImg from "../assets/channel-img.jpg";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Video = () => {
  const [showComments, setShowComments] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const videoDescription =
    "Piya re by darshan raval, a video by e positive entertainment #blue family #darshanraval Piya re by darshan raval, a video by e positive entertainment #blue family #darshanraval Piya re by darshan raval, a video by e positive entertainment #blue family #darshanraval";
  
  // Truncate the description if not expanded
  const truncatedDescription = showFullDescription
    ? videoDescription
    : videoDescription.substring(0, 100);

  return (
    <div className="video-page-wrapper gap-4">
      {/* Video */}
      <div className="video-content">
        <iframe
          src="https://www.youtube.com/embed/4KHsiBHyK6o"
          width="100%"
          className="current-video"
          title="ViewTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        />

        {/* Video Details*/}
        <p className="video-content-title pt-2 mb-0">Test Video</p>
        <div className="video-content-details d-flex justify-content-between align-items-center">
          <p className="video-content-views fs-6 pb-2 fw-light">
            7,948,154 views • Jun 8, 2023
          </p>
          <div className="mb-3 d-flex justify-content-center gap-2">
            <button className="video-content-btn d-flex gap-1">
              <ThumbUpOutlinedIcon />
              <p className="mb-0">Like</p>
            </button>
            <button className="video-content-btn d-flex gap-1">
              <ThumbDownOutlinedIcon />
              <p className="mb-0">Dislike</p>
            </button>
            <button className="video-content-btn d-flex gap-1">
              <ReplyOutlinedIcon className="pb-1" />
              <p className="mb-0">Share</p>
            </button>
            <button className="video-content-btn d-flex gap-1">
              <AddTaskOutlinedIcon />
              <p className="mb-0">Save</p>
            </button>
          </div>
        </div>
        <hr className="m-0" />

        {/* Channel Name and Video Description */}
        <div className="d-flex justify-content-between mt-3">
          <div className="video-description-content d-flex">
            <div className="channel-details">
              <img
                src={channelImg}
                alt="channel-img"
                height="45px"
                width="45px"
                className="channel-img"
              />
            </div>
            <div className="mx-3">
              <p className="video-channel-name mb-0">Indie Music Label</p>
              <p className="channel-subscriber-count">2M subscribers</p>
              <div
                className={`video-description-text ${
                  showFullDescription ? "expanded" : ""
                }`}
              >
                {truncatedDescription}
              </div>
              {!showFullDescription && (
                <div className="show-more-link" onClick={toggleDescription} role="button">
                  ... Show More
                </div>
              )}
              {showFullDescription && (
                <div className="show-less-link" onClick={toggleDescription} role="button">
                  Show Less
                </div>
              )}
            </div>
          </div>
          <div className="pt-1">
            <button className="subscribe-btn px-3 py-2 rounded-5">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <hr />

        <div className="d-flex justify-content-between mb-4">
          <div className="d-flex">
            <img
              src={channelImg}
              alt="channel-img"
              className="channel-img me-3"
            />
            <input
              type="text"
              placeholder="Add a comment..."
              className="add-comment-input"
            />
          </div>
          <button
            className="toggle-comments-btn px-sm-3 py-1 px-2 rounded-5"
            onClick={toggleComments}
          >
            {showComments ? "Close Comments" : "Show Comments"}
          </button>
        </div>

        {showComments && <Comments />}
      </div>

      <div className="video-recommendations">
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </div>
    </div>
  );
};

export default Video;
