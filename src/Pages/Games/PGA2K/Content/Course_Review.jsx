import PGA_DD_Type from "../Data/PGA_DD_Type.json";
import PGA_DD_Theme from "../Data/PGA_DD_Theme.json";
import PGA_DD_Holes from "../Data/PGA_DD_Holes.json";
import PGA_DD_Review_Score_1to5 from "../Data/Review_Data/PGA_DD_Review_Score_1to5.json";
import PGA_DD_Review_Score_1to10 from "../Data/Review_Data/PGA_DD_Review_Score_1to10.json";
import PGA_DD_Game_Version from "../Data/PGA_DD_Game_Version.json";
import PGA_DD_Play from "./../Data/Review_Data/PGA_DD_Play.json";
import Drop_Down from "../../../../components/Atoms/Drop_Down/Drop_Down";
import Text_Box from "../../../../components/Atoms/Input_Container/Text_Box";
import T_Navbar from "../../../../components/Atoms/NavBar/T_Navbar";
import Generic_Form from "../../../../components/Molecules/Form/Generic_Form";
const Course_Review = () => {
  // const T_NavLink = [
  //   { path: "/Login_Page", label: "Login" },
  //   { path: "/profile", label: "Profile" },
  //   { path: "/course", label: "Add Course" },
  //   { label: "Home", path: "/" },
  // ];

  return (
    <>
      <Generic_Form>
        <Text_Box
          label="Designer"
          id="txt_dsnNM_crsReview"
          placeholder="Designer Name"
          style={{
            gridColumn: "25/36",
            gridRow: "5/6",
          }}
          isVisible={true}
        />

        <Text_Box
          label="Course Name"
          id="txt_crsNM_crsReview"
          placeholder="Course Name"
          style={{
            gridColumn: "25/36",
            gridRow: "6/7",
          }}
          isVisible={true}
        />
        <Text_Box
          label="Description"
          id="txt_crsDes_crsReview"
          placeholder="Course Description"
          style={{
            gridColumn: "25/36",
            gridRow: "7/10",
          }}
          isVisible={true}
        />

        <Drop_Down
          label="What Version is the Course on? "
          options={Object.values(PGA_DD_Game_Version)[0]}
          isVisible={true}
          style={{
            gridColumn: "19/27",
            gridRow: "5/10",
            position: "relative",
            overflow: "visible",
          }}
        />

        {/* <Text_Box
          label="Course Name"
          id="txt_crsNM_crsReview"
          placeholder="Course Name"
          style={{ display: 'grid', gridColumn: "25/30", gridRow: "15/25" }}
        /> */}

        <Drop_Down
          id="dd_play_crsReview"
          label="Would you play this course again? "
          options={Object.values(PGA_DD_Play)[0]}
          isVisible={true}
          style={{
            gridColumn: "28/36",
            gridRow: "10/14",
            overflow: "visible",
          }}
        />

        <Drop_Down
          id="dd_theme_crsReview"
          label="What is the course theme? "
          options={Object.values(PGA_DD_Theme)[0]}
          isVisible={true}
          style={{
            gridColumn: "12/17",
            gridRow: "8/14",
          }}
        />

        <Drop_Down
          id="dd_rtFW_crsReview"
          label="Overall, How would you rate the Fairways? "
          options={Object.values(PGA_DD_Review_Score_1to5)[0]}
          isVisible={true}
          style={{
            gridColumn: "19/27",
            gridRow: "25/35",
          }}
        />

        <Drop_Down
          id="dd_rtGrn_crsReview"
          label="Overall, How would you rate the Greens?"
          options={Object.values(PGA_DD_Review_Score_1to5)[0]}
          isVisible={true}
          style={{
            gridColumn: "19/27",
            gridRow: "12/18",
          }}
        />

        <Drop_Down
          id="dd_type_crsReview"
          label="What Type of course would you classify this as?"
          options={Object.values(PGA_DD_Type)[0]}
          isVisible={true}
          style={{
            gridColumn: "3/12",
            gridRow: "8/14",
          }}
        />

        <Text_Box
          label="GRN_Thoughts"
          id="txt_Thgt_crsGrn"
          placeholder="Thoughts on the Greens"
          style={{
            gridColumn: "3/18",
            gridRow: "12/16",
          }}
          isVisible={true}
        />

        <Text_Box
          label="TRP_Thoughts"
          id="txt_Thgt_crsTrp"
          placeholderText="Thoughts on the Traps"
          style={{
            gridColumn: "3/18",
            gridRow: "17/22",
          }}
          isVisible={true}
        ></Text_Box>

        <Text_Box
          label="FW_Thoughts"
          id="txt_FW_crsFW"
          placeholder="Thoughts on the Fairways"
          style={{
            gridColumn: "3/18",
            gridRow: "25/30",
          }}
          isVisible={true}
        />

        <Text_Box
          label="CRS_Thoughts"
          id="txt_CRS_crsCRS"
          placeholder="Thoughts on the Course"
          style={{
            gridColumn: "3/18",
            gridRow: "33/38",
          }}
          isVisible={true}
        />

        <Drop_Down
          id="dd_holes_crsReview"
          label="How many holes are in this course?"
          options={Object.values(PGA_DD_Holes)[0]}
          isVisible={true}
          style={{
            gridColumn: "12/20",
            gridRow: "5/20",
          }}
        />

        <Drop_Down
          id="dd_rtCrs_crsReview"
          label="Overall, How would you rate the Course?"
          options={Object.values(PGA_DD_Review_Score_1to10)[0]}
          isVisible={true}
          style={{
            gridColumn: "19/27",
            gridRow: "33/36",
          }}
        />
      </Generic_Form>
    </>
  );
};
export default Course_Review;
