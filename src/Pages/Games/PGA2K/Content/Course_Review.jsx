import Adding_Form from "../../../../components/Molecules/Form/Adding_Form";
import PGA_DD_Review_Score_1to5 from "../Data/Review_Data/PGA_DD_Review_Score_1to5.json";
import PGA_DD_Game_Version from "../Data/PGA_DD_Game_Version.json";
import PGA_DD_Play from "./../Data/Review_Data/PGA_DD_Play.json";
import Drop_Down from "../../../../components/Atoms/Drop_Down/Drop_Down";
import Text_Box from "../../../../components/Atoms/Input_Container/Text_Box";
import defProps from "../../../../components/Util/Props/def_Props/defProps_components";
import PropTypes from "prop-types";

const Course_Review = ({children, passProps, defProps,}) => {

  return (


    <>
      <Adding_Form
        style={{
          gridColumn: "1/37",
          gridRow: "1/37",
          passProps,
        }}
        id="frm_AddReview"
      >
        <Drop_Down
          label="What Version is the Course on?"
          options={PGA_DD_Game_Version}
          style={{ gridColumn: "20/30", gridRow: "5/10" }}
          isVisible={true}
        />
        <Text_Box
          label="Course Name"
          id="txt_crsNM_crsReview"
          placeholder="Course Name"
        />
        <Text_Box
          label="Designer"
          id="txt_dsnNM_crsReview"
          placeholder="Designer Name"
        />
        <Drop_Down
          id="dd_play_crsReview"
          label="Would you play this course again?"
          options={PGA_DD_Play}
          style={{ gridColumn: "10/20", gridRow: "9/13" }}
          isVisible={true}
        />
        <Drop_Down
          id="dd_rtFW_crsReview"
          label="How would you rate the Fairways?"
          options={PGA_DD_Review_Score_1to5}
          style={{ gridColumn: "13/16", gridRow: "18/23" }}
          isVisible={true}
        />
        <Drop_Down
          id="dd_rtGrn_crsReview"
          label="How would you rate the Greens?"
          options={PGA_DD_Review_Score_1to5}
          style={{ gridColumn: "13/16", gridRow: "23/28" }}
          isVisible={true}
        />
      </Adding_Form>
    </>
  );
};

Course_Review.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  ariaLabeledBy: PropTypes.string,
  gridPosition: PropTypes.object,
  opacity: PropTypes.number,
  zIndex: PropTypes.number,
  role: PropTypes.string,
  isVisible: PropTypes.bool,
  passProps: PropTypes.object,
};

Course_Review.defaultProps = {
  defProps: {},
};



export default Course_Review;
