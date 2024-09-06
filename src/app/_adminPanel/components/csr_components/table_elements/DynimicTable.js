"use client";
import React, { useState } from "react";
import styles from "./css/dynmicTable.module.css";
import { FaArrowRight } from "react-icons/fa";
import userImg from "../../../../../../public/web-static-img/auther-image.jpg";
import Image from "next/image";
import TableCheckBox from "./tableCheckBox";
import TableUserAvatar from "./tableUserAvatar";
import TableDate from "./tableDate";
import TableEmail from "./tableEmail";
import TableStatus from "./tableStatus";
import TableViewBtn from "./tableViewBtn";
import TableSingleImg from "./tableSingleImg";
import TableBlodtext from "./tableBlodtext";
import TableBooleanText from "./tableBooleanText";
import TableNumberText from "./tableNumberText";
import TablemultiStatus from "./tablemultiStatus";
import TableBooleanSwitch from "./tableBooleanSwitch";
import { IoIosArrowRoundDown } from "../../../ApplicationIcons";
import TableDeleteIcon from "./TableDeleteIcon";

export default function DynimicTable(props) {
  const {
    tableColumns,
    tableSampleData,
    booleanSwithHandel,
    handelSingleDelete,
  } = props;

  console.log(tableSampleData);
  const handelCheckBox = () => {
    alert("handel Check box");
  };

  const handeleuserAvaotor = () => {
    alert("user avator");
  };

  const handlers = {
    checkbox: handelCheckBox,
    userAvator: handeleuserAvaotor,
    view: handelCheckBox,
    booleanSwicth: booleanSwithHandel,
    deleteIcon: handelSingleDelete,
  };
  const actionhandler = {
    view: booleanSwithHandel,
  };
  return (
    <div className={styles.table_container}>
      <table className={styles.user_table}>
        <thead>
          <tr>
            {tableColumns.map((column, index) => {
              return (
                <th key={column.id}>
                  <span className={styles.th_span_style}>
                    {column.label}
                    {column.icon && (
                      <span className={styles.iconStyle}>
                        {" "}
                        <IoIosArrowRoundDown />{" "}
                      </span>
                    )}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableSampleData.map((row, no) => (
            <tr key={row.id}>
              {tableColumns.map((column) => {
                const { content, className } = renderCellContent(
                  column.component,
                  no,
                  row,
                  row[column.key],
                  handlers[column.component],
                  actionhandler
                );

                return (
                  <td
                    key={column.label}
                    className={`${styles.td_style} ${styles[className]}`}
                  >
                    {" "}
                    {content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const renderCellContent = (
  componentType,
  indexNo,
  completeData,
  elemnetdata,
  handler,
  handlers
) => {
  let content = null;
  let className = "";

  switch (componentType) {
    case "number":
      content = indexNo + 1;
      className = "numberCell";
      break;
    case "text":
      content = "text content";
      className = "text-cell";
      break;
    case "blodText":
      content = <TableBlodtext data={elemnetdata} />;
      className = "text-cell";
      break;

    case "email":
      content = <TableEmail data={elemnetdata} />;
      className = "text-cell";
      break;

    case "status":
      content = <TableStatus data={elemnetdata} />;
      className = "text-cell";
      break;

    case "dateElement":
      content = <TableDate data={elemnetdata} />;
      break;
    case "boolean":
      content = <TableBooleanText data={elemnetdata} />;

      break;
    case "numberText":
      content = <TableNumberText data={elemnetdata} />;

      break;
    case "checkbox":
      if (handler) {
        content = <TableCheckBox />;
        className = "checkBoxtr_style";
      }
      break;

    case "view":
      if (handler) {
        content = <TableViewBtn data={elemnetdata} path={"user-details"} />;
      }
      break;

    case "deleteIcon":
      if (handler) {
        content = <TableDeleteIcon data={elemnetdata} handler={handler} />;
      }
      break;
    case "userAvator":
      if (handler) {
        content = (
          <TableUserAvatar
            name={completeData.name}
            userName={completeData.userName}
            imgData={elemnetdata}
          />
        );
      }
      break;

    case "singleImg":
      content = <TableSingleImg />;

      break;

    case "multiStatus":
      content = <TablemultiStatus data={elemnetdata} />;
      break;

    case "booleanSwicth":
      if (handler) {
        content = (
          <TableBooleanSwitch
            data={elemnetdata}
            completeData={completeData}
            handler={handler}
          />
        );
      }
      break;

    default:
      content = elemnetdata;
      break;
  }

  return {
    content,
    className,
  };
};