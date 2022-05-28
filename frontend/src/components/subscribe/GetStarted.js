import React from "react";
import { Steps, Button, message } from "antd";
import SubscribeCard from "../../common/SubscribeCard";

function GetStarted(props) {
  const { Step } = Steps;
  const steps = [
    {
      title: "First",
      content: "First-content",
    },
    {
      title: "Second",
      content: "Second-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];

  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <SubscribeCard
        title="Set your Goals"
        img1="img/form1.png"
        img2="img/mg.png"
        img3="img/im.png"
        img4="img/wm.png"
        subtitle1="Weight Loss"
        subtitle2="Healthy Eating"
        subtitle3="Improve Immunity"
        subtitle4="Muscle Gain"
        link1="/subscribe"
        link2="/nourish"
      />
    </div>
  );
}

export default GetStarted;
