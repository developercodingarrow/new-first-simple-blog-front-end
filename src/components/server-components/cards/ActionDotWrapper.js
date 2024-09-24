"use client";
import React, { useContext } from "react";
import ActionDot from "../../client-components/action-dot/ActionDot";

import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
import { AuthContext } from "@/src/app/_contextApi/authContext";

export default function ActionDotWrapper(props) {
  const { elementID } = props;
  const { authUser } = useContext(AuthContext);

  const { handelOpenModel, setisReportModel } = useContext(ModelsContext);

  const handelOpenreportModel = async (actionId) => {
    handelOpenModel(setisReportModel, actionId);
  };
  const blogReportAction = [
    { label: "Report", handler: handelOpenreportModel },
  ];
  return (
    <div>
      <ActionDot
        actionList={blogReportAction}
        actionId={elementID}
        left="-30px"
      />
    </div>
  );
}
