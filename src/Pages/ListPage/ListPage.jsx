import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineInfo, AiOutlineReload, AiOutlineSetting, AiOutlineStar } from "react-icons/ai";
import { FiFilter, FiPhoneCall } from "react-icons/fi";
import { FaRegCommentDots, FaRegTimesCircle, FaRegTrashAlt } from "react-icons/fa";
import { MdBlock, MdMoreHoriz, MdOutlineFiberSmartRecord } from "react-icons/md";
import { RxBox, RxCardStackPlus } from "react-icons/rx";
import { CiLineHeight, CiUser } from "react-icons/ci";
import "./listPage.css";
import ListFilterSidebar from "../../Components/ListFilterSidebar/ListFilterSidebar";
import ListHoverInfo from "../../Components/ListHoverInfo/ListHoverInfo";
import ActionBox from "../../Components/ActionBox/ActionBox";
import AgentBox from "../../Components/AgentBox/AgentBox";

const ListPage = () => {
  // All Toggle State Managment
  const [toggle, setToggle] = useState({
    action: false,
    assign: false,
  });
  return (
    <>
      <section className="list_page">
        <div className="list_header">
          <div className="list_header_left">
            <div className="list_header_left_button">
              <button className="stared">
                <AiOutlineStar />
              </button>
              <button className="all_ticket">All Tickets</button>
              <button className="header_filter">
                <FiFilter />
              </button>
              <button className="reload">
                <AiOutlineReload />
              </button>
            </div>
            <div className="header_selected_box">
              <button>
                <RxBox />
                <strong>10</strong>
              </button>
              <button>
                <CiUser />
                <strong>Assign To</strong>
              </button>
              <button>
                <RxCardStackPlus />
                <strong>Follow Up</strong>
              </button>
              <button>
                <FaRegTimesCircle />
                <strong>Close</strong>
              </button>
            </div>
          </div>
          <div className="list_header_right">
            <button className="total_count">Total Count</button>
            <button className="stared">All Tickets</button>
            <button className="classic_view">
              <FiFilter />
              Classic View
            </button>
            <button className="header_short">
              <MdMoreHoriz />
            </button>
            <button className="header_info">
              <AiOutlineInfo />
            </button>
          </div>
        </div>
        <div className="list_page_body">
          <div className="list_table">
            <ul>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div className="list_table_body">
                  <div className="list_input">
                    <div className="list_input_icon">
                      {/* <input type="checkbox" /> */}
                      <FiPhoneCall />
                    </div>
                    <div className="list_input_icon_check">
                      <RxBox />
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <div className="action_button">
                    <a href="/">
                      Developer Achem
                      <div className="list_hover">
                        <ListHoverInfo />
                      </div>
                    </a>
                    <div className="list_info_button">
                      <a href="/">#001</a>
                      <a href="/">Developer Achem</a>
                      <a href="/">016658</a>
                      <p>1 days ago</p>
                      <p>10 mar 11:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiUser />
                  </button>
                  <button>
                    <RxCardStackPlus />
                  </button>
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <FaRegTimesCircle />
                  </button>
                </div>
                <div
                  className="list_table_body"
                  //   onClick={() => (toggle.action ? setToggle({ action: false }) : setToggle({ action: true }))}
                >
                  <button className="list_action_button">
                    Open
                    <div className="list_action_hover">
                      <ActionBox />
                    </div>
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <CiLineHeight />
                  </button>
                </div>
                <div className="list_table_body">
                  <button>
                    <FaRegCommentDots />
                  </button>
                </div>
                <div className="list_table_body">
                  <button
                    className="list_assigned_member"
                    // onClick={() => (toggle.assign ? setToggle({ assign: false }) : setToggle({ assign: true }))}
                  >
                    ACM
                    <div className="list_assign_hover">
                      <AgentBox />
                    </div>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="list_page_sidebar">
            <ListFilterSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default ListPage;
