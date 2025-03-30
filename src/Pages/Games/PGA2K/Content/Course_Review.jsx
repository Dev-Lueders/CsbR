import Adding_Form from "../../../../components/Molecules/Form/Adding_Form"
import PGA_DD_Game_Version from "../Data/PGA_DD_Game_Version.json"
import Drop_Down from "../../../../components/Atoms/Drop_Down/Drop_Down";
import Text_Box from "../../../../components/Atoms/Input_Container/Text_Box";
const Course_Review = () => {
    
    return (
      <>
        <Adding_Form>
                <Drop_Down options={PGA_DD_Game_Version} />
                <Text_Box label="Course Name" placeholder="Course Name" />
                <Text_Box label="Designer" placeholder="Designer Name" />
                
        </Adding_Form>
      </>
    );

};
    export default Course_Review;
