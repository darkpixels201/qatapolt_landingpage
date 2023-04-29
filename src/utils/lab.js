import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { colors } from "../../utils/Colors";
import Spacer from "../Spacer";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IoIosSearch } from "react-icons/io";
import "../../Assets/Style/style.css";
import CustomText from "../CustomText";
import "../../Assets/Style/font.css";
import {
  AiFillCaretDown,
  AiOutlinePaperClip,
  AiOutlineTags,
} from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CgFlagAlt } from "react-icons/cg";
import { BsCollectionPlay, BsEye } from "react-icons/bs";
import { RiCalendarCheckLine } from "react-icons/ri";
import { GiStarKey } from "react-icons/gi";
import { VscThreeBars } from "react-icons/vsc";
import Priority from "../Priority";
import CalendarComp from "../CalendarComp";

const CreateBottomTaskBody = ({
  setShow,
  newTask,
  addTask,
  taskDescription,
  setTaskDescription,
  setNewTask,
  priority,
  setPriority,
  setTaskPriority,
  setTaskDate,
  selectedDay,
  setSelectedDay,
  taskPriority,
  setCurrentTask,
  currentTask,
}) => {
  const useStyles = makeStyles(() => ({
    noBorder: {
      border: "none",
    },
  }));
  const classes = useStyles();
  const customer = ["To do", "Not started", "In Progress", "Pending"];
  const number = ["1", "2", "3", "4", "5", "6", "7"];
  const [currentNumber, setCurrentNumber] = useState(1);
  const [check, setCheck] = useState(-1);
  const [showFlag, setShowFlag] = useState(false);

  const handleChange = (e) => {
    setCurrentNumber(e.target.value);
  };
  // console.log("Current Customer", currentcustomer);
  return (
    <div>
      <div
        style={{
          width: 540,
          height: 520,
          backgroundColor: colors.white,
          boxShadow: "6px 6px 30px 0px rgba(0,0,0,0.72)",
        }}
      >
        <div
          style={{
            width: "auto",
            padding: 20,
            overflowX: "hidden",
            overflowY: "auto",
            textAlign: "justify",
            height: 480,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: colors.grey,
                  borderRadius: 20,
                  alignItems: "center",
                  alignSelf: "center",
                }}
              ></div>
              <Spacer width={5} />
              <div>
                <input
                  placeholder="Task name or type / for Commands"
                  style={{
                    border: "none",
                    borderColor: "none",
                    width: 250,
                    outline: "none",
                    backgroundColor: colors.white,
                    fontSize: 15,
                  }}
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </div>
            </div>
            <div>
              <RxCross2
                style={{
                  alignSelf: "center",
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                size={20}
                onClick={() => {
                  setShow(false);
                  setNewTask("");
                  setTaskDescription("");
                  setTaskPriority("");
                  setSelectedDay([]);
                }}
              />
            </div>
          </div>
          <Spacer height={20} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "60%",
                justifyContent: "space-between",
                // backgroundColor:"pink"
              }}
            >
              <div style={{ alignItems: "center", alignSelf: "center" }}>
                <CustomText title="In" color={colors.textGrey} fontSize={15} />
              </div>
              {/* <Spacer width={5} /> */}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={customer}
                sx={{ width: 190, fontSize: 10 }}
                size="small"
                defaultValue={customer[0]}
                renderInput={(params) => (
                  <TextField
                    // size="small"
                    {...params}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                          // border: "none"
                        },
                      },
                    }}
                  />
                )}
                currentTask={currentTask}
                onChange={(event, newValue) => setCurrentTask(newValue)}
              />
              <div style={{ alignItems: "center", alignSelf: "center" }}>
                <CustomText title="For" color={colors.textGrey} fontSize={15} />
              </div>
              <div
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: colors.purple1,
                  borderRadius: 50,
                  alignItems: "center",
                  alignSelf: "center",
                }}
              ></div>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <Select
                  value={currentNumber}
                  renderValue={(p) => p}
                  defaultValue={1}
                  onChange={handleChange}
                  sx={{
                    height: 30,
                    width: 58,
                    borderRadius: 1,
                    alignSelf: "flex-end",
                  }}
                >
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={40}>4</MenuItem>
                  <MenuItem value={50}>5</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          {/* Decsription */}
          <Spacer height={20} />
          <textarea
            style={{
              borderColor: colors.textGrey,
              color: colors.textGrey,
              paddingTop: 10,
              paddingLeft: 7,
              fontFamily: "Regular",
              outline: "none",
            }}
            placeholder="Description"
            rows="6"
            cols="72"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
          <Spacer height={20} />
          <div
            style={{
              width: "auto",
              paddingRight: 10,
              paddingLeft: 10,
              height: 30,
              backgroundColor: colors.lightWhite,
              border: "solid",
              borderRadius: 3,
              borderWidth: 0.2,
              borderColor: colors.textGrey,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <AiFillCaretDown fontSize={10} color={colors.textGrey} />
              <Spacer width={5} />
              <CustomText
                title="Show 1 empty field"
                fontSize={10}
                color={colors.textGrey}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px dotted #000",
              }}
            >
              <BsPlus fontSize={11} color={colors.textGrey} />
              <Spacer width={5} />
              <CustomText
                title="Add or Edit fields"
                fontSize={11}
                color={colors.textGrey}
              />
            </div>
          </div>

          {/* Sub task Check list */}

          <Spacer height={20} />
          <div
            style={{
              width: "100%",
              height: 30,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: 13,
                  height: 13,
                  backgroundColor: colors.grey,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <BsPlus fontSize={15} />
              </div>
              <Spacer width={5} />
              <CustomText title="Add Subtask" fontSize={12} />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: 13,
                  height: 13,
                  backgroundColor: colors.grey,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <BsPlus fontSize={15} />
              </div>
              <Spacer width={5} />
              <CustomText title="Add Checklist" fontSize={12} />
            </div>
          </div>

          <Spacer height={10} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: 140,
              justifyContent: "space-between",
            }}
          >
            <CustomText title="Attachments" fontSize={13} />
            <Select
              value={"Add"}
              renderValue={(p) => p}
              //   defaultValue={"Add"}
              //   onChange={handleChange}
              sx={{
                height: 20,
                width: 58,
                borderRadius: 1,
                alignSelf: "flex-end",
                fontSize: 8,
                borderColor: "red",
              }}
            >
              <MenuItem value={10}>Upload File</MenuItem>
              <MenuItem value={20}>Drop Box</MenuItem>
              <MenuItem value={30}>One Drive</MenuItem>
              <MenuItem value={40}>Box</MenuItem>
              <MenuItem value={50}>Google Drive</MenuItem>
              <MenuItem value={50}>New Google Docs</MenuItem>
            </Select>
          </div>

          <Spacer height={20} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AiOutlinePaperClip fontSize={15} />
            <Spacer width={5} />
            <CustomText
              title="Drag and Drop files to attach or "
              fontSize={12}
              color={colors.grey1}
            />
            <Spacer width={5} />
            <CustomText
              title={
                <>
                  <input
                    style={{
                      backgroundColor: "none",
                      color: colors.purple,
                      display: "none",
                    }}
                    type="file"
                    id="actual-btn"
                  />
                  <label
                    for="actual-btn"
                    style={{ color: colors.purple, cursor: "pointer" }}
                  >
                    Browse
                  </label>
                </>
              }
              fontSize={12}
            />
          </div>

          <Spacer height={60} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Priority
                setShow={setShowFlag}
                show={showFlag}
                setCheck={setCheck}
                check={check}
                setTaskPriority={setTaskPriority}
                priorityMargin={-245}
                taskPriority={taskPriority}
                priority={priority}
                activeCgFlagAltStyle={{
                  border: "1px dotted #000",
                  borderRadius: 30,
                  padding: 5,
                  borderColor: colors.grey3,
                }}
                CgFlagStyle={{
                  border: "1px dotted #000",
                  borderRadius: 30,
                  padding: 5,
                  borderColor: taskPriority,
                }}
              />
              <CalendarComp
                CalendarLeft={100}
                marginBottom={190}
                setTaskDate={setTaskDate}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                RiCalendarStyle={{
                  border: "1px dotted #000",
                  borderRadius: 30,
                  padding: 5,
                  borderColor: colors.grey3,
                }}
              />
              <AiOutlineTags
                style={{
                  border: "1px dotted #000",
                  borderRadius: 30,
                  padding: 5,
                  borderColor: colors.grey3,
                }}
                color={colors.grey1}
                fontSize={22}
              />
              <GiStarKey
                style={{
                  border: "1px dotted #000",
                  borderRadius: 30,
                  padding: 5,
                  borderColor: colors.grey3,
                }}
                color={colors.grey1}
                fontSize={22}
              />
              <VscThreeBars
                style={{
                  border: "1px dotted #000",
                  borderRadius: 30,
                  padding: 5,
                  borderColor: colors.grey3,
                }}
                color={colors.grey1}
                fontSize={22}
              />
              <BsEye
                style={{
                  border: "1px dotted #000",
                  borderRadius: 30,
                  padding: 5,
                  borderColor: colors.grey3,
                }}
                color={colors.grey1}
                fontSize={22}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                onClick={() => {
                  addTask();
                  if (newTask || taskDescription) {
                    setShow(false);
                    setNewTask("");
                    setTaskDescription("");
                    setTaskPriority("");
                    setSelectedDay([]);
                  }
                }}
                style={{
                  height: 35,
                  width: 120,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: colors.purple1,
                  cursor: "pointer",
                }}
              >
                <CustomText
                  title="Create Task"
                  color={colors.white}
                  fontSize={14}
                />
              </div>
              <Spacer width={2} />
              <div
                style={{
                  height: 35,
                  width: 20,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: colors.purple1,
                }}
              >
                <AiFillCaretDown color={colors.white} size={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBottomTaskBody;
