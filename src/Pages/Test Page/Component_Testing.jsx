import React from 'react';
import "../pages_styles.css";   
import "../../components/components_styles.css"
import Page_Frame from '../../components/Organisim/Page_Frame';
import Main_Container from '../../components/Atoms/Main_Content/Main_Container';
import Stats_Container from '../../components/Atoms/Stats_Content/Stats_Container';
import Media_Container from '../../components/Atoms/Media_Content/Media_Container';
import UGC_Card from '../../components/Atoms/UGC_Cards/UGC_Cards';
const Component_Testing = () => {
    return (
        <>
  <Main_Container/>
  <Stats_Container/>
  <Media_Container/>
        <UGC_Card/>
        </>
    );
    }

    export default Component_Testing;