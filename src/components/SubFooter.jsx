import React from "react";

function SubFooter() {
  return (
    <div className="t-p-32-xl-100 d-flex flex-column flex-xl-row gap-4 justify-content-between">
      <div className="d-flex flex-column gap-2">
        <div style={{
            fontSize: '14px',
            fontWeight: '600'
          }}>Hobbycue</div>
        <div>
          <div>About Us</div>
          <div>Our Services</div>
          <div>Work with Us</div>
          <div>FAQ</div>
          <div>Contact us</div>
        </div>
      </div>
      <div className="d-flex flex-column gap-2">
        <div style={{
            fontSize: '14px',
            fontWeight: '600'
          }}>How Do I</div>
        <div>
          <div>Sign Up</div>
          <div>Add a Listing</div>
          <div>Claim Listing</div>
          <div>Post a Query</div>
          <div>Add a Blog Post</div>
          <div>Other Queries</div>
        </div>
      </div>
      <div className="d-flex flex-column gap-2">
        <div style={{
            fontSize: '14px',
            fontWeight: '600'
          }}>Quick Links</div>
        <div>
          <div>Listings</div>
          <div>Blog Posts</div>
          <div>Shop/Store</div>
          <div>Community</div>
        </div>
      </div>
      <div>
        <div>
          <h1 style={{
            fontSize: '14px',
            fontWeight: '600'
          }}>Social Media</h1>
          <div className="d-flex justify-content-between" style={{
            color: 'gray'
          }}>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-pinterest"></i>
          <i class="bi bi-google"></i>
          <i class="bi bi-youtube"></i>
          <i class="bi bi-telegram"></i>
          <i class="bi bi-envelope-fill"></i>
          </div>
        </div>
        <br />
        <div>
          <h1 style={{
            fontSize: '14px',
            fontWeight: '600'
          }}>Invite Friends</h1>
          <div className="search-bar">
            <input
              type="text"
              className="rounded-start border-start border-top border-bottom border-1"
              style={{
                height: "40px",
                outline: "none",
                paddingLeft: "6px",
                fontSize: "12px",
                width: "260px",
                borderColor: "var(--primary-color)",
                backgroundColor: "#F8F9FA",
              }}
              placeholder="Search here..."
            />
            <button
              className="text-light bg-purple border-0 rounded-end"
              style={{
                height: "40px",
                width: "40px",
                fontSize: "12px",
              }}
            >
              <i
                class="bi bi-search"
                style={{
                  height: "16px",
                  width: "16px",
                }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubFooter;
