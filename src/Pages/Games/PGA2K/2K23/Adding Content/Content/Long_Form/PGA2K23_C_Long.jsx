import Drop_Down from "../../../../../../components/Drop_Down/Drop_Down";
import T_Navbar from "../../../../../../components/NavBar/T_Navbar";
import B_Navbar from "../../../../../../components/NavBar/B_Navbar";
import L_Navbar from "../../../../../../components/NavBar/L_Navbar";
import Text_Box from "../../../../../../components/Input_Container/Text_Box";
import Check_Box from "../../../../../../components/Check_Box/Check_Box";
import React from "react";



const PGA2K23_C_Long = () => {

return (
    <>

    <h3>Long Form for Content</h3>
<T_Navbar/>

<Form>
 <Text_Box>  {/* Course Name */}
</Text_Box>    

<Drop_Down/> {/* Designer Name */}
    

<Text_Box>  {/* What is the Par level*/}
</Text_Box>    

<Text_Box> {/*What is the distance of the course */}
</Text_Box>    

<Drop_Down/>  {/* How many holes */}
    

<Drop_Down/> {/*How Many Tees */}    

<Text_Box>  {/*1st Tee Distance */}
</Text_Box>    

<Text_Box>  {/*2th Tee Distance */}
</Text_Box>    

<Text_Box>   {/*3nd Tee Distance */}
</Text_Box>    

<Text_Box>   {/* 4rd Tee Distance */}
</Text_Box>    

<Text_Box>    {/* 5th Tee Distance */}
</Text_Box>    

<Check_Box/>    {/*HCP Rated */}
    

<Check_Box/>    {/*TGC Approved */}
    

<Check_Box/>    {/* Play through on the web */}
    

<Text_Box>    {/* Course Description */}
</Text_Box>    

<Drop_Down/>    {/* Course Theme */}
    

<Drop_Down/>    {/* How Many Pins */}
    

<Drop_Down/>    {/* Difficulty Level */}
    

<Drop_Down/>    {/* Course Type */}
    

<Drop_Down/>    {/* Designed by what?  LiDAR, GIS, or from the mind */}
    

<Drop_Down/>    {/* Solar System Location*/}
    

<Drop_Down/>    {/* Planet Location */}
    

<Text_Box>    {/* Country Location */}
</Text_Box>    

<Text_Box>    {/* State/ Province Loctaion */}
</Text_Box>    

<Text_Box>    {/* City Location*/}
</Text_Box>    

<Text_Box>    {/* County Location*/}
</Text_Box>    

<Check_Box/>    {/*Is it a real Course or based off a real course*/}
</Form>

<L_Navbar>    
</L_Navbar>













<B_Navbar/>
    </>

)

}

export default PGA2K23_C_Long;