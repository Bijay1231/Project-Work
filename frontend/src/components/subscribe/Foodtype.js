import React from "react";
import FoodtypeCard from "../../common/FoodtypeCard";
function Foodtype() {
  return (
    <div>
      <FoodtypeCard
        title="Select your Nourish Preference"
        img1="img/veg.png"
        img2="img/nonveg.png"
        img3="img/egg.png"
        subtitle1="Vegetarian"
        subtitle2="Non-Vegetarian"
        subtitle3="Eggetarian"
        link1="/nourish"
        link2="/signup"
      />
    </div>
  );
}

export default Foodtype;
