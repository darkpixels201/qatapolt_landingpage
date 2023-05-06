import React from "react";
import '../assets/Style/font.css'

function CustomText({...props}) {
  return (
    <div onClick={props.onClick} disabled={!props.onClick} >
      <div>
        <div
          style={{
            color: props.color || "black",
            fontSize: props.fontSize || 20,
            margin: props.margin,
            marginTop: props.margin,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            paddingLeft:props.paddingLeft,
            paddingTop:props.paddingTop,
            paddingRight:props.paddingRight,
            alignSelf: props.alignSelf || "flex-start",
            fontWeight: props.fontWeight,
            fontStyle: props.fontStyle,
            textAlign: props.textAlign,
            alignItems:props.alignItems,
            fontFamily: props.fontFamily || "Regular",
            textAlign: props.textAlign,
            lineHeight:props.lineHeight,
            float: props.float,
            listStyle: props.listStyle,
            position: props.position,
            left: props.left,
            textDecoration: props.textDecoration,
            maxLines: props.maxLines, 
            textTransform: props.textTransform,
            transform: props.transform ,
            cursor: props.cursor,
          }}
        >
          {props.title}
          {props.value}
        </div>
      </div>
    </div>
  );
}

export default CustomText;
