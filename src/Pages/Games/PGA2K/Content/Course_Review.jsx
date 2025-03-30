import Adding_Form from "../../../../components/Molecules/Form/Adding_Form"
import PGA_DD_Review_Score_1to5 from "../Data/Review_Data/PGA_DD_Review_Score_1to5.json"
import PGA_DD_Game_Version from "../Data/PGA_DD_Game_Version.json"
import PGA_DD_Play from "./../Data/Review_Data/PGA_DD_Play.json"
import Drop_Down from "../../../../components/Atoms/Drop_Down/Drop_Down";
import Text_Box from "../../../../components/Atoms/Input_Container/Text_Box";
const Course_Review = () => {
    
    return (
      <>
            <Adding_Form>
                
                {/* <Drop_Down label ="What Version is the Course on?" options={PGA_DD_Game_Version} />
                <Text_Box label="Course Name" placeholder="Course Name" />
                <Text_Box label="Designer" placeholder="Designer Name" />
                <Drop_Down label="Would you play this course again?" options={PGA_DD_Play} />
                <Drop_Down label="How would you rate the Fairways?" options={PGA_DD_Review_Score_1to5}/>
                <Drop_Down label="How would you rate the Greens?" options={PGA_DD_Review_Score_1to5} /> */}
                

        </Adding_Form>
      </>
    );

};
    export default Course_Review;
