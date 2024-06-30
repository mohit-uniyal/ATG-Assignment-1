import React from 'react'

function Testimonials() {
  return (
    <div
      className="t-p-32-xl-100"
    >
      <div
        className="w-100 rounded-2"
        style={{
          border: "1px solid #CED4DA",
          padding: "20px",
          backgroundColor: "#F7F5F9",
        }}
      >
        <div style={{ fontWeight: "600", fontSize: "24px" }}>
          <span style={{ color: "var(--primary-color)" }}>
          <i class="bi bi-chat-quote-fill"></i>
          </span>{" "}
          &nbsp; Testimonials
        </div>
        <br />
        <p style={{ fontSize: "18px" }}>
        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>
        <br />
        <div className='d-flex justify-content-between flex-column-reverse gap-1 flex-xl-row'>
            <img src="/assets/audio-track.png" alt="" className='w-100-xl-75' />
            <img src="/assets/profile.png" alt="" className='w-100-xl-24' />
        </div>
      </div>
    </div>
  )
}

export default Testimonials