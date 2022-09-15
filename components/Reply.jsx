import React from "react";

export default function Reply(props) {
  return (
    <div>
      {props.reply.map((x) => (
        <div className="d-flex gap-2 my-2 ps-5" key={x.likeNum}>
          <img
            src={x.userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {x.username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{x.replyText}</span>
            {x.likeNum > 0 ? (
              <div className="d-flex align-items-center gap-1">
                <img src="/like.svg" width={20}></img>
                <span style={{ color: "#B0B3B8" }}>{x.likeNum} คน</span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
