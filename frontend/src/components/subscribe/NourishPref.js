import React from "react";
import NourishCard from "../../common/NourishCard";
function NourishPref() {
  return (
    <div>
      <NourishCard
        title="Select your Nourish Preference"
        img1="img/form1.png"
        img2="img/elder.png"
        img3="img/mother.png"
        img4="img/child.png"
        img5="img/diabetic.png"
        img6="img/child.png"
        subtitle1="Daily Nourish"
        subtitle2="Elderly Nourish"
        subtitle3="Mother Nourish"
        subtitle4="Kids Nourish"
        subtitle5="Diabetic Nourish"
        subtitle6="Body Nourish"
        link1="/getstarted"
        link2="/foodtype"
      />
    </div>
  );
}

export default NourishPref;
