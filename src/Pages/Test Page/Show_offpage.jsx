


import T_Navbar from "../../components/Atoms/NavBar/T_Navbar";

const Show_offpage = () => { 
    const T_Links = [
        { label: "review", path: "/Course_review" }
    ]
    return (<>
        <T_Navbar links={T_Links} style={{gridColumn:"8/10", gridRow:"1/3"}} />
    </>)
}
export default Show_offpage;