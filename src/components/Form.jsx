"use client";
import React, { useState } from "react";

function Form() {
  const [state, setState] = useState("joinin");

  return (
    <div
      className="d-flex flex-column gap-3"
      style={{
        width: "100%",
      }}
    >
      <div className="selector d-flex gap-4 border-1">
        <span
          style={{
            fontSize: "20px",
            textDecoration: state === "signin" ? "underline" : "none",
            color: "var(--primary-color)",
            fontWeight: "600",
            cursor: "pointer",
            textUnderlineOffset: "6px",
          }}
          onClick={() => setState("signin")}
        >
          Sign In
        </span>
        <span
          style={{
            fontSize: "20px",
            textDecoration: state === "joinin" ? "underline" : "none",
            color: "var(--primary-color)",
            fontWeight: "600",
            cursor: "pointer",
            textUnderlineOffset: "6px",
          }}
          onClick={() => setState("joinin")}
        >
          Join In
        </span>
      </div>
      <div
        className="d-flex flex-column-reverse flex-xl-column gap-2"
        style={{
          width: "100%",
        }}
      >
        <div className="buttons d-flex flex-column gap-1">
          <button
            className="rounded-2"
            style={{
              width: "100%",
              padding: "10px 0",
              position: "relative",
              backgroundColor: "transparent",
              border: "2px solid var(--primary-color)",
              fontWeight: "600",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "10px",
              }}
            >
              <img
                src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
                width={"16"}
                height={"16"}
              />
            </span>
            Continue with google
          </button>
          <button
            className="rounded-2"
            style={{
              width: "100%",
              padding: "10px 0",
              position: "relative",
              backgroundColor: "transparent",
              border: "2px solid var(--primary-color)",
              fontWeight: "600",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "10px",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                width={"16"}
                height={"16"}
              />
            </span>
            Continue with facebook
          </button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              flexGrow: 1,
              height: "2px",
              backgroundColor: "#CED4DA",
            }}
          ></div>
          <span
            style={{
              padding: "0 10px",
              color: "#000",
              fontWeight: "600",
            }}
          >
            Or connect with
          </span>
          <div
            style={{
              flexGrow: 1,
              height: "2px",
              backgroundColor: "#CED4DA",
            }}
          ></div>
        </div>
        <form
          className="d-flex flex-column gap-3"
          style={{
            width: "100%",
          }}
        >
          <input
            type="email"
            placeholder="Email"
            className="rounded"
            style={{
              outline: "none",
              padding: "10px 6px",
              fontSize: "12px",
              border: "1px solid #EBEDF0",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded"
            style={{
              outline: "none",
              padding: "10px 6px",
              fontSize: "12px",
              border: "1px solid #EBEDF0",
            }}
          />
          {state === "signin" ? (
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-1 align-items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  value="rememberme"
                />
                <label for="remember" style={{ fontSize: "12px" }}>
                  {" "}
                  Remember me
                </label>
              </div>
              <div style={{ fontSize: "12px", cursor: "pointer" }}>
                Forgot Password?
              </div>
            </div>
          ) : (
            <div style={{ fontSize: "11px", textAlign: "center" }}>
              By continuing, you agree to our{" "}
              <span style={{ fontWeight: "600" }}>Terms of Service</span> and{" "}
              <span style={{ fontWeight: "600" }}>Privacy Policy</span>.
            </div>
          )}
          {state === "signin" ? (
            <button
              className="rounded"
              style={{
                padding: "10px 0",
                backgroundColor: "transparent",
                border: "2px solid black",
                fontWeight: "600",
              }}
            >
              Continue
            </button>
          ) : (
            <button
              className="rounded"
              style={{
                padding: "10px 0",
                backgroundColor: "var(--primary-color)",
                border: 'none',
                fontWeight: "600",
                color: 'white'
              }}
            >
              Agree and Continue
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form;
