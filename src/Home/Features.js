import React from "react";
import CustomText from "../CustomComponents/CustomText";
import { Grid } from "@mui/material";
import { icons } from "../assets/Icons";
import Spacer from "../CustomComponents/Spacer";
import { images } from "../assets/Images";
import { FaMedal, FaTrophy } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { IoNewspaperSharp } from "react-icons/io5";
import { MdScoreboard } from "react-icons/md";
import { colors } from "../utils/Colors";

const Features = () => {
  const featureData = [
    {
      id: 1,
      name: "Medal",
      desc: "If you like the content then you should give out a medal! This is essentially the ‘Like’ button.",
      image: <FaMedal size={30} color={colors.white} />,
    },
    {
      id: 2,
      name: "Trophy",
      desc: "A trophy is used to signify a verified user. This is equivalent to a ‘Verification Tick‘.",
      image: <FaTrophy size={30} color={colors.white} />,
    },
    {
      id: 3,
      name: "Free Agents",
      desc: "When one door closes, another opens. The ideal platform to create new opportunities after you have parted ways with a professional club / organisation.",
      image: <img src={icons.releasedplayer} style={{height:35, width:35, colors:colors.white}} />,
    },
  ];

  const featureData1 = [
    {
      id: 1,
      name: "Advanced Search",
      desc: "This will help you to find exactly who or what you are looking for within our app.",
      image: <GiArchiveResearch size={30} color={colors.white} />,
    },
    {
      id: 2,
      name: "Qatapolt News",
      desc: "Keep track of our news page to stay in the loop for our latest updates for the Qatapolt Community.",
      image: <IoNewspaperSharp size={30} color={colors.white} />,
    },
    {
      id: 3,
      name: "Live Scores",
      desc: "Stay updated with the live scores from top leagues across the world such as the English Premier League.",
      image: <MdScoreboard size={30} color={colors.white} />,
    },
  ];
  return (
    <div>
      <Spacer height={60} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <CustomText
            title="Qatapolt Features"
            fontFamily={"Bold"}
            fontSize={19}
          />
          <CustomText
            title="Loren osum dolor sit arret, consecretur "
            fontFamily={"Light"}
            fontSize={17}
          />
          <CustomText
            title="adipiscing elit. sed do ensmod terr oor"
            fontFamily={"Light"}
            fontSize={17}
          />
        </div>
      </div>
      <Spacer height={40} />
      <div
        // container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignSelf: "center",
          padding: 50,
        }}
      >
        <div>
          {featureData.map((item) => (
            <div
              style={{
                width: 400,
                marginTop: 20,
                display: "flex",
                paddingBottom: 70,
                // backgroundColor:"pink",
              }}
            >
              <div
                style={{
                  minWidth: 60,
                  maxHeight: 50,
                  display: "flex",
                  justifyContent:"center", 
                  alignItems:"center",
                  backgroundColor: colors.green,
                }}
              >
                {item.image}
              </div>
              <Spacer width={50} />
              <div>
                <CustomText
                  title={item.name}
                  fontFamily={"Medium"}
                  textAlign={"left"}
                  fontSize={16}
                />
                <CustomText
                  title={item.desc}
                  fontSize={12}
                  fontFamily={"Light"}
                  textAlign={"left"}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <img
            src={images.mobileWallpaper}
            style={{ height: 400, objectFit: "contain" }}
          />
        </div>
        <div>
          {featureData1.map((item) => (
            <div
              style={{
                width: 400,
                marginTop: 20,
                display: "flex",
                paddingBottom: 70,
                // padding:20,
                // backgroundColor:"blue"
              }}
            >
             <div
                style={{
                  minWidth: 60,
                  maxHeight: 50,
                  display: "flex",
                  justifyContent:"center", 
                  alignItems:"center",
                  backgroundColor: colors.green,
                }}
              >
                {item.image}
              </div>
              <Spacer width={50} />
              <div>
                <CustomText
                  title={item.name}
                  fontFamily={"Medium"}
                  textAlign={"left"}
                  fontSize={15}
                />
                <CustomText
                  title={item.desc}
                  fontSize={12}
                  fontFamily={"Light"}
                  textAlign={"left"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
