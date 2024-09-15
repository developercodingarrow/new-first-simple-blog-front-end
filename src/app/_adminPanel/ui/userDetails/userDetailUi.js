"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/userDetailui.module.css";
import userImg from "../../../../../public/web-static-img/auther-image.jpg";
import Image from "next/image";
import {
  CiHashtag,
  CiCalendar,
  CiMail,
  IoGlobeOutline,
  CiAt,
  SlSocialFacebook,
  SlSocialLinkedin,
  RiTwitterXLine,
  FaFacebookF,
  FaLinkedinIn,
  PiHandsPrayingThin,
} from "../../ApplicationIcons";
import {
  tableColumns,
  tableSampleData,
  blogtableColumns,
  superAdminblogColumns,
  blogsSampleData,
} from "../../jsonData/tableData";
import DynimicTable from "../../components/csr_components/table_elements/DynimicTable";
import { usePathname, useParams } from "next/navigation";
import { UserDetailAction } from "../../admin_actions/adminUserApi";
import useUserRoleColumns from "../../custome-hooks/useUserRoleColumns";

export default function UserDetailUi() {
  const userRole = "super-admin";
  const params = useParams();
  const { slug } = params;

  const [activeTable, setActiveTable] = useState("table2");
  const [drfatBlogs, setdrfatBlogs] = useState([]);
  const [publishedBlogs, setpublishedBlogs] = useState([]);
  const [totalPublishedBlogs, settotalPublishedBlogs] = useState("");
  const [totalDrfatBlogs, settotalDrfatBlogs] = useState("");
  const [userDetails, setUserDetails] = useState({
    createdAt: "",
    email: "",
    facebook: "",
    instagram: "",
    name: "",
    twitter: "",
    userImg: {
      url: "",
      altText: "",
    },
    userName: "",
  });

  const roleBasedColumns = useUserRoleColumns(userRole, blogtableColumns, {
    "super-admin": superAdminblogColumns,
  });

  const handelswith = () => {
    alert("switch toogle");
  };

  console.log(drfatBlogs);

  const handelUserDetail = async () => {
    try {
      const res = await UserDetailAction(slug);
      console.log(res);
      if (res.data.status === "success") {
        const blogs = res.data.result.blogs;
        const draft = blogs.filter((blog) => blog.status === "draft");
        const published = blogs.filter((blog) => blog.status === "published");
        setdrfatBlogs(draft);
        setpublishedBlogs(published);
        settotalPublishedBlogs(published.length);
        settotalDrfatBlogs(draft.length);
        const {
          createdAt,
          email,
          facebook,
          instagram,
          name,
          twitter,
          userImg,
          userName,
        } = res.data.result;
        setUserDetails({
          createdAt,
          email,
          facebook,
          instagram,
          name,
          twitter,
          userImg,
          userName,
        });
      } else if (res.data.status === "Error") {
        alert("error");
      }
    } catch (error) {
      console.log("error---", error);
    }
  };

  useEffect(() => {
    handelUserDetail();
  }, [slug]);

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.profile_container}>
          <div className={styles.user_img_profile}>
            <div className={styles.profile_box}>
              <div className={styles.profile_img_wrapper}>
                <Image
                  src={`/usersProfileImg/${userDetails.userImg.url} `}
                  className={styles.img_style}
                  width={500}
                  height={500}
                />
              </div>
              <div className={styles.user_name}>{userDetails?.name}</div>
            </div>
          </div>
          <section className={styles.details_section}>
            <div className={styles.user_detail_box}>
              <div className={styles.secton_medium_heading}>About</div>
              <div className={styles.detail_row}>
                <div className={styles.static_detail_text}>
                  <PiHandsPrayingThin />
                </div>
                <div className={styles.dynimic_detail_text}>28 jan 2024</div>
              </div>
              <div className={styles.detail_row}>
                <div className={styles.static_detail_text}>
                  <CiAt />
                </div>
                <div className={styles.dynimic_detail_text}>sandeep</div>
              </div>
              <div className={styles.detail_row}>
                <div className={styles.static_detail_text}>
                  <CiMail />
                </div>
                <div className={styles.dynimic_detail_text}>
                  sanjaychauhan@gmail.com
                </div>
              </div>
              <div className={styles.detail_row}>
                <div className={styles.static_detail_text}>
                  <CiCalendar />
                </div>
                <div className={styles.dynimic_detail_text}>28 jan 1993</div>
              </div>

              <div className={styles.detail_row}>
                <div className={styles.static_detail_text}>
                  <IoGlobeOutline />
                </div>
                <div className={styles.dynimic_detail_text}>
                  www.dakshtooling.com
                </div>
              </div>
            </div>
            <div className={styles.social_media_detail}>
              <div className={`${styles.social_icon_Box} ${styles.fb_color}`}>
                <FaFacebookF />
              </div>
              <div className={`${styles.social_icon_Box} ${styles.in_color}`}>
                <FaLinkedinIn />
              </div>
              <div
                className={`${styles.social_icon_Box} ${styles.twitter_x_color}`}
              >
                <RiTwitterXLine />
              </div>
            </div>
          </section>
        </div>
        <div className={styles.table_conatiner}>
          <div className={styles.stats_header}>
            <div className={styles.Togle_tab_wrapper}>
              <button
                className={`${styles.tab_button} ${
                  activeTable === "table1" ? styles.active : ""
                }`}
                onClick={() => setActiveTable("table1")}
              >
                published
              </button>
              <button
                className={`${styles.tab_button} ${
                  activeTable === "table2" ? styles.active : ""
                }`}
                onClick={() => setActiveTable("table2")}
              >
                draft
              </button>
            </div>
            <div className={styles.stats_container}>
              <div className={`${styles.stats_box} ${styles.published}`}>
                <span className={styles.stats_title}>Published </span>
                <span className={styles.stats_value}>10</span>
              </div>
              <div className={`${styles.stats_box} ${styles.draft}`}>
                <span className={styles.stats_title}>Draft </span>
                <span className={styles.stats_value}>5</span>
              </div>
            </div>
          </div>
          <div className={styles.table_wrapper}>
            {activeTable === "table1" && (
              <div>
                <DynimicTable
                  tableColumns={roleBasedColumns}
                  tableSampleData={publishedBlogs}
                  booleanSwithHandel={handelswith}
                />{" "}
              </div>
            )}
            {activeTable === "table2" && (
              <div>
                <DynimicTable
                  tableColumns={roleBasedColumns}
                  tableSampleData={drfatBlogs}
                  booleanSwithHandel={handelswith}
                />{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
