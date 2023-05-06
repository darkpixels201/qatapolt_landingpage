import React from "react";
import { images } from "../assets/Images";

import { Grid, TextField } from "@mui/material";
import { icons } from "../assets/Icons";
import CustomText from "../CustomComponents/CustomText";
import Spacer from "../CustomComponents/Spacer";
import CustomSearchFilter from "../CustomComponents/CustomSearchFilter";
import CustomButton from "../CustomComponents/CustomButton";
import { colors } from "../utils/Colors";

const ContactUs = () => {
  const BodyData = [
    {
      id: 1,
      name: "Arena",
      desc: "Explore and customise your timeline to enjoy the Qatapolt experience. This is essentially the ‘Home’ button.",
      image: icons.greenProfile,
    },
    {
      id: 2,
      name: "Meaasge",
      desc: "Communicate with other users with our private message feature. Take advantage of the group chat feature where you can speak with multiple users in the same chat.",
      image: icons.mobile,
    },
    {
      id: 3,
      name: "Profile",
      desc: "This is your blank canvas to paint a picture that lets other users into your world. Your profile page will store all of your posts and allow you to edit your profile picture, bio, etc. ",
      image: icons.rocket,
    },
  ];

  return (
    <div>
      <div style={{ position: "absolute", overflow: "hidden" }}>
        <img
          src={images.contactWallpaper}
          style={{
            width: window.innerWidth <= 459 ? "110%" : "100%",
            height: window.innerWidth <= 459 ? 600 : 650,
            objectFit: "cover",
          }}
        />
      </div>
      <Spacer height={100} />
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          alignContent: "center",
          width: "100%",
          height: 400,
          // backgroundColor:"red"
        }}
      >
        {/* <CustomSearchFilter /> */}
        {/* <CustomText title="Email Address" /> */}
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            style={{
              border: "none",
              height: 50,
              width: 400,
              fontSize: 18,
              outline: "none",
              color: "#333",
              paddingLeft: 10,
              fontFamily: "Medium",
            }}
            placeholder="Enter your email address"
          />
          <CustomButton
            title="SUBSCRIBE"
            width={window.innerWidth <= 459 ? "50%" : "12%"}
            height={53}
            borderRadius={1}
            backgroundColor={"#333"}
            color={colors.white}
            fontFamily={"Bold"}
          />
        </div>
      </div>
      {/* style={{ position: "absolute" }} */}
      <Spacer height={400} />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        alignSelf={"center"}
        // style={{ position: "absolute" }}
        // spacing={-1}
      >
        {BodyData.map((item) => (
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 210,
                width: 190,
                borderRadius: 10,
                padding: 10,
                boxShadow: "2px 1px 15px -1px rgba(0,0,0,0.10)",
                backgroundColor: "#ffff",
                marginBottom: 20,
              }}
            >
              <img
                src={item.image}
                style={{
                  width: 55,
                  height: 55,
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              />
              <Spacer height={10} />
              <CustomText
                title={item.name}
                fontFamily={"Regular"}
                textAlign="left"
              />
              <Spacer height={10} />
              <CustomText
                title={item.desc}
                fontSize={13}
                fontFamily={"Light"}
                textAlign="left"
              />
            </div>
          </Grid>
        ))}
        <div
          style={{
            // width: "50%",
            // display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
          }}
        >
          <Spacer height={20} />
          <CustomText title="10k+ Experts Trust Us" fontFamily="Medium" />
          <Spacer height={10} />
          <div
            style={{
              // width: "50%",
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
              alignContent: "center",
            }}
          >
            <CustomText
              title="Lorem ipsum dolor sit amet, consectetur ad pi-scing elit, sed do elus-mod
              incididunt ut abore et vociore magna"
              fontFamily="Light"
            />
          </div>
        </div>
      </Grid>

      <Spacer height={30} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          // width:"100%",
          flexWrap: "wrap",
          marginLeft: window.innerWidth <= 459 ? 20 : 90,
          // alignContent:"center",
          // alignSelf:"center"
          // backgroundColor:"red",
        }}
      >
        <div
          style={{
            width: window.innerWidth <= 459 ? "90%" : 450,
            height: "auto",
            boxShadow: "2px 1px 15px -1px rgba(0,0,0,0.10)",
            display: "flex",
            paddingBottom: 10,
            marginBottom: window.innerWidth <= 459 ? 20 : 0,
          }}
        >
          <img src={icons.comma} style={{ height: 50, width: 50 }} />
          <CustomText
            fontSize={13}
            paddingTop={20}
            paddingRight={30}
            textAlign={"left"}
            title="SCOUT: I used to travel up North on cold rainy days just to be disappointed by a player I heard about through the grapevine. With Qatapolt I can make an informed judgment from the videos players post on their profiles before leaving my house!"
          />
        </div>
        <Spacer height={window.innerWidth <= 459 ? 100 : 0} />
        <div
          style={{
            width: window.innerWidth <= 459 ? "90%" : 450,
            height: "auto",
            boxShadow: "2px 1px 15px -1px rgba(0,0,0,0.10)",
            display: "flex",
            // justifyContent:"center"
          }}
        >
          <img src={icons.comma} style={{ height: 50, width: 50 }} />
          <CustomText
            fontSize={13}
            paddingTop={20}
            textAlign={"left"}
            paddingRight={30}
            title="PLAYER: My parents can’t afford to pay the weekly fees from my local team so it was hard to get seen before. I got my friends to film clips from my school football games to put on Qatapolt and I have been offered trials from two professional teams already! "
          />
        </div>
        <Spacer height={window.innerWidth <= 459 ? 100 : 0} />
      </div>

      <Spacer height={30} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginLeft:window.innerWidth <= 459 ? 20 : 0
        }}
      >
        <div
          style={{
            width: "32%",
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <img src={icons.profileImage} style={{ height: 100, width: 100 }} />
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }} >
            <CustomText title="Waqas Abbass"fontSize={14}  />
            <CustomText title="Designer" fontSize={12}  />
          </div>
        </div>
        <div
          style={{
            width: "32%",
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <img src={icons.profileImage} style={{ height: 100, width: 100 }} />
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }} >
            <CustomText title="Umair Abbass" fontSize={14} />
            <CustomText title="Developer" fontSize={12}  />
          </div>
        </div>
      </div>
      <Spacer height={100} />
    </div>
  );
};

export default ContactUs;
