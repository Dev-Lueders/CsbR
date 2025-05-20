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

      {/* <Text_Box
          label="Designer"
          id="txt_dsnNM_crsReview"
          placeholder="Designer Name"
          style={{ display: 'grid', gridColumn: "6/10", gridRow: "1/3" }}
          isVisible={true}
        /> */}

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
        id="dd_rtFW_crsReview"
        label="How would you rate the Fairways? "
        options={Object.values(PGA_DD_Review_Score_1to5)[0]}
        isVisible={true}
        style={{ display: "grid", gridColumn: "25/29", gridRow: "5/10" }}
      />
      {/* <Text_Box
          label="FWthgt_Thoughts"
          id="txt_FWThgt_crsFW"
          placeholder="Thoughts on the Fairways"
          style={{ display: 'grid', gridColumn: "5/10", gridRow: "1/15" }}
          isVisible={true}
        /> */}
      <Drop_Down
        id="dd_rtGrn_crsReview"
        label="How would you rate the Greens?"
        options={Object.values(PGA_DD_Review_Score_1to5)[0]}
        isVisible={true}
        style={{ display: "grid", gridColumn: "25/29", gridRow: "10/15" }}
      />
      {/* <Text_Box
          label="GRNthgt_Thoughts"
          id="txt_GRNThgt_crsGrn"
          placeholder="Thoughts on the Greens"
          style={{ display: 'grid', gridColumn: "2/2", gridRow: "10/12" }}
          isVisible={true}
        /> */}
      {/* <Text_Box
          label="Course_Thoughts"
          id="txt_crsThgt_crsReview"
          placeholder="Thoughts on the Course"
          style={{ display: 'grid', gridColumn: "2/2", gridRow: "10/12" }}
          isVisible={true}
        /> */}
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
