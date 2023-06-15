import React from 'react'
import channelImg from "../assets/channel-img.jpg";

const Comment = () => {
  return (
    <div className="my-2">
       <div className="d-flex">
        <img src={channelImg} alt="channel-img" className="channel-img me-3"/>
        <div>
          <div className="d-flex gap-2 align-items-center">
            <p className='fw-bolder mb-0'>User name</p>
            <p className='mb-0 comment-date'>3 days ago</p>
          </div>

          <div className='my-1 comment-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam! Alias libero ipsum, recusandae velit maxime enim ea cumque laboriosam numquam laborum temporibus similique ducimus animi perspiciatis eius esse odit.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
