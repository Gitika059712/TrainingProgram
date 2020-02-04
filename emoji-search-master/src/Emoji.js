import React from "react";
import filterEmoji from "./filterEmoji";
import "./emoji.css";
import { useParams } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";

export const Emoji = () => {
  let { title } = useParams();
  let obj = filterEmoji(title, 1)[0];
  const codePointHex = obj.symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <div className="wrapper" key={title}>
      <img alt={obj.title} src={src} className="img" />
      <br />
      <br />
      <div className="symbol">{obj.symbol}</div>
      <br />
      <br />
      <div className="title1"> {obj.title}</div>
      <br />
      <div className="keyword">{obj.keywords}</div>
      <br />
      <br />
      <CopyToClipboard text={obj.symbol} className="btn">
        <button className="button copy-btn">Copy To Clipboard</button>
      </CopyToClipboard>
      <br />
      <br />
    </div>
  );
};
