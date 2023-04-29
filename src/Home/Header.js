import React from "react";
import { images } from "../assets/Images";
import { icons } from "../assets/Icons";
import CustomText from "../CustomComponents/CustomText";
import { colors } from "../utils/Colors";
import Spacer from "../CustomComponents/Spacer";
import CustomButton from "../CustomComponents/CustomButton";
import { BsApple, BsAndroid2 } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { TfiDownload } from "react-icons/tfi";

const Header = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          paddingLeft: window.innerWidth <= 459 ? 10 : 110,
          marginTop: 20,
        }}
      >
        <img src={icons.logo} style={{ height: 65, width: 100 }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          position: "absolute",
          flexWrap: "wrap",
          marginTop: 70,
        }}
      >
        {window.innerWidth <= 459 ? (
          ""
        ) : (
          <div
            style={{
              width: 400,
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
              flexWrap: "wrap",
              // justifyContent: "center",
            }}
          >
            <CustomText
              color={colors.white}
              fontFamily={"Light"}
              fontSize={23}
              title="Qatapolt is the first social media app that is dedicated to turning dreams into reality within sport. Athletes can show their talent and get discovered by agents, scouts, clubs, etc. "
            />
            <Spacer height={10} />
            <CustomText
              color={colors.white}
              fontFamily={"Light"}
              fontSize={23}
              title="Qatapolt is also impeccable for sports fans because you can connect with your favourite athletes and other fans to discuss the latest in sport."
            />
            <Spacer height={10} />
            <div style={{ display: "flex", alignItems: "center" }}>
              <CustomButton
                title="Download"
                backgroundColor={colors.white}
                height={40}
                width={"30%"}
                borderRadius={10}
                fontFamily={"Medium"}
                icon={<HiDownload fontSize={16} />}
              />
              <Spacer width={10} />
              <BsApple color={colors.white} fontSize={20} />
              <Spacer width={10} />
              <BsAndroid2 color={colors.white} fontSize={20} />
            </div>
          </div>
        )}

        <div>
          <Spacer height={window.innerWidth <= 459 ? 60 : 0} />
          <img src={images.loginScreen} style={{ width: 230, height: 450 }} />
        </div>
      </div>
      <div>
        <img
          src={images.wallpaper}
          style={{
            width: "100%",
            height: window.innerWidth <= 459 ? 900 : 650,
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
};

export default Header;
