import PGA_DD_Type from "../Data/PGA_DD_Type.json";
import PGA_DD_Theme from "../Data/PGA_DD_Theme.json";
import PGA_DD_Holes from "../Data/PGA_DD_Holes.json";
import PGA_DD_Review_Score_1to5 from "../Data/Review_Data/PGA_DD_Review_Score_1to5.json";
import PGA_DD_Review_Score_1to10 from "../Data/Review_Data/PGA_DD_Review_Score_1to10.json";
import PGA_DD_Game_Version from "../Data/PGA_DD_Game_Version.json";
import PGA_DD_Play from "./../Data/Review_Data/PGA_DD_Play.json";
import Drop_Down from "../../../../components/Atoms/Drop_Down/Drop_Down";
import Text_Box from "../../../../components/Atoms/Input_Container/Text_Box";
const Course_Review = () => {
  return (
    <>
      <Drop_Down
        label="What Version is the Course on? "
        options={Object.values(PGA_DD_Game_Version)[0]}
        isVisible={true}
        style={{
          display: "grid",
          gridColumn: "3/8",
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

      <Text_Box
        label="Designer"
        id="txt_dsnNM_crsReview"
        placeholder="Designer Name"
        style={{ display: "grid", gridColumn: "25/36", gridRow: "5/5" }}
        isVisible={true}
      />

      <Text_Box
        label="Course Name"
        id="txt_crsNM_crsReview"
        placeholder="Course Name"
        style={{ display: "grid", gridColumn: "25/36", gridRow: "6/6" }}
        isVisible={true}
      />
      <Text_Box
        label="Description"
        id="txt_crsDes_crsReview"
        placeholder="Course Description"
        style={{ display: "grid", gridColumn: "25/36", gridRow: "7/10" }}
        isVisible={true}
      />

      <Drop_Down
        id="dd_play_crsReview"
        label="Would you play this course again? "
        options={Object.values(PGA_DD_Play)[0]}
        isVisible={true}
        style={{
          display: "grid",
          gridColumn: "8/13",
          gridRow: "5/10",
          overflow: "visible",
        }}
      />

      <Drop_Down
        id="dd_theme_crsReview"
        label="What is the theme? "
        options={Object.values(PGA_DD_Theme)[0]}
        isVisible={true}
        style={{ display: "grid", gridColumn: "20/23", gridRow: "16/16" }}
      />

      <Drop_Down
        id="dd_rtFW_crsReview"
        label="How would you rate the Fairways? "
        options={Object.values(PGA_DD_Review_Score_1to5)[0]}
        isVisible={true}
        style={{ display: "grid", gridColumn: "20/25", gridRow: "5/10" }}
      />

      <Drop_Down
        id="dd_rtGrn_crsReview"
        label="How would you rate the Greens?"
        options={Object.values(PGA_DD_Review_Score_1to5)[0]}
        isVisible={true}
        style={{ display: "grid", gridColumn: "19/23", gridRow: "11/15" }}
      />

      <Drop_Down
        id="dd_type_crsReview"
        label="What Type of course is this?"
        options={Object.values(PGA_DD_Type)[0]}
        isVisible={true}
        style={{ display: "grid", gridColumn: "29/35", gridRow: "11/15" }}
      />

      <Text_Box
        label="GRNthgt_Thoughts"
        id="txt_GRNThgt_crsGrn"
        placeholder="Thoughts on the Greens"
        style={{ display: "grid", gridColumn: "3/18", gridRow: "10/18" }}
        isVisible={true}
      />

      <Text_Box
        label="TRPthgt_Thoughts"
        id="text_TRPTght_crsTrp"
        placeholderText="Thoughts on the Traps"
        style={{
          display: "grid",
          gridColumn: "3/18",
          gridRow: "19 / 27",
        }}
        isVisible={true}
      ></Text_Box>

      <Text_Box
        label="FWthgt_Thoughts"
        id="txt_FWThgt_crsReview"
        placeholder="Thoughts on the Fairways"
        style={{ display: "grid", gridColumn: "3/18", gridRow: "25/30" }}
        isVisible={true}
      />

      <Text_Box
        label="CRSthgt_Thoughts"
        id="txt_CRSThgt_crsReview"
        placeholder="Thoughts on the Course"
        style={{ display: "grid", gridColumn: "3/18", gridRow: "35/40" }}
        isVisible={true}
      />

      <Drop_Down
        id="dd_holes_crsReview"
        label="How many holes are in this course?"
        options={Object.values(PGA_DD_Holes)[0]}
        isVisible={true}
        style={{ display: "grid", gridColumn: "13/18", gridRow: "5/10" }}
      />

      <Drop_Down
        id="dd_rtCrs_crsReview"
        label="How would you rate the Course?"
        options={Object.values(PGA_DD_Review_Score_1to10)[0]}
        isVisible={true}
        style={{ display: "grid", gridColumn: "25/29", gridRow: "15/20" }}
      />
    </>
  );
};
export default Course_Review;
