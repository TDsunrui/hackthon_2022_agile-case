import { Image } from "antd";

import "./index.scss";

function Conversation() {

  return (
    <div className="conversation">
      <Image preview={false} src={require("@/source/images/conversation1.jpg")}></Image>
      <Image preview={false} src={require("@/source/images/conversation2.jpg")}></Image>
    </div>
  );
}

export default Conversation;
