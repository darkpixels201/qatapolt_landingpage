import { Grid } from "@mui/material";
import React from "react";
import { icons } from "../assets/Icons";
import CustomText from "../CustomComponents/CustomText";
import Spacer from "../CustomComponents/Spacer";

const Body = () => {
  const BodyData = [
    {
      id: 1,
      name: "Arena",
      desc:"Explore and customise your timeline to enjoy the Qatapolt experience. This is essentially the ‘Home’ button.",
      image: icons.arena,
    },
    {
      id: 2,
      name: "Meaasge",
      desc:"Communicate with other users with our private message feature. Take advantage of the group chat feature where you can speak with multiple users in the same chat.",
      image: icons.message,
    },
    {
      id: 3,
      name: "Profile",
      desc:"This is your blank canvas to paint a picture that lets other users into your world. Your profile page will store all of your posts and allow you to edit your profile picture, bio, etc. ",
      image: icons.star,
    },
    {
      id: 4,
      name: "Watchlist",
      desc:"Keep track of your favourite players via a private watchlist that only you can see. This feature was heavily requested by scouts and agents, so their peers are unable to scope out their findings.",
      image: icons.profile,
    },
  ];

  return (
    <div>
      <Grid container>
        {BodyData.map((item) => (
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                // height: 120,
                width: 180,
                borderRadius: 10,
                padding: 10,
                boxShadow: "2px 1px 15px -1px rgba(0,0,0,0.10)",
                backgroundColor:"#ffff"

              }}
            >
              <img src={item.image} style={{width:55, height:55}} />
              <Spacer height={10} />
              <CustomText title={item.name} fontFamily={"Regular"} />
              <Spacer height={10} />
              <CustomText
                title={item.desc}
                fontSize={13}
                fontFamily={"Light"}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Body;
