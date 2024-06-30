import Image from "next/image";

const DesktopNavigation = () => {
  return (
    <div
      className="d-none d-xxl-flex justify-content-between"
      style={{
        width: "100%",
        paddingLeft: "97px",
        paddingRight: "97px",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <div className="group-1 d-flex align-items-center gap-4">
        <Image src="/assets/logo-large.png" width={293} height={60} />
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
              borderColor: "gray",
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
      <div
        className="group-2 d-flex gap-4 align-items-center"
        style={{
          color: "var(--primary-color)",
          fontSize: "18px",
        }}
      >
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              padding: "0",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            <i
              class="bi bi-compass-fill"
              style={{
                color: "var(--primary-color)",
              }}
            ></i>{" "}
            Explore
          </button>
          <ul class="dropdown-menu" 
          style={{padding: '4px 0', borderRadius: '0'}}
          >
            <li>
              <a class="dropdown-item" href="#">
                People - Community
              </a>
            </li>
            <hr style={{margin: '0'}} />
            <li>
              <a class="dropdown-item" href="#">
                Places - Venues
              </a>
            </li>
            <hr style={{margin: '0'}} />
            <li>
              <a class="dropdown-item" href="#">
                Programs - Events
              </a>
            </li>
            <hr style={{margin: '0'}} />
            <li>
              <a class="dropdown-item" href="#">
                Products - Store
              </a>
            </li>
            <hr style={{margin: '0'}} />
            <li>
              <a class="dropdown-item" href="#">
                Blogs
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              padding: "0",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            <i
              class="bi bi-star-fill"
              style={{
                color: "var(--primary-color)",
              }}
            ></i>{" "}
            Hobbies
          </button>
        </div>
        <i class="bi bi-bookmark-fill" />
        <i class="bi bi-bell-fill" />
        <i class="bi bi-cart-fill" />
        <button
          className="border-1 rounded"
          style={{
            borderColor: "var(--primary-color)",
            color: "var(--primary-color)",
            backgroundColor: "transparent",
            padding: "11px 32px",
            fontWeight: "600",
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

const MobileNavigation = () => {
  const btnStyle = {
    width: "24px",
    height: "24px",
  };

  return (
    <div className="d-xxl-none d-flex justify-content-between"
        style={{
            padding: '8px 22px'
        }}
    >
      <Image src="/assets/logo-large.png" width={156} height={32}></Image>
      <div
        className="btn-group d-flex gap-1"
        style={{
          color: "var(--primary-color)",
        }}
      >
        <i style={btnStyle} class="bi bi-search"></i>
        <i style={btnStyle} class="bi bi-bell-fill"></i>
        <i style={btnStyle} class="bi bi-list"></i>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
};

export default Navbar;
