import React from "react";

function Feature2() {
  return (
    <div
      className="t-p-32-xl-100"
      style={{
        backgroundColor: "#F7FDFF",
      }}
    >
      <div
        className="w-100 rounded-2"
        style={{
          border: "1px solid #CED4DA",
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        <div style={{ fontWeight: "600", fontSize: "24px" }}>
          <span style={{ color: "#0096C8" }}>
            <i class="bi bi-plus-circle"></i>
          </span>{" "}
          &nbsp; Add you own
        </div>
        <br />
        <p style={{ fontSize: "18px" }}>
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </p>
        <button
          className="rounded-2"
          style={{
            padding: "5px",
            backgroundColor: "transparent",
            border: "1px solid var(--primary-color)",
            color: "var(--primary-color)",
          }}
        >
          Add new
        </button>
      </div>
    </div>
  );
}

export default Feature2;
