import { useState } from "react";
import Drop_Down from "../../Atoms/Drop_Down/Drop_Down";
import Text_Box from "../../Atoms/Input_Container/Text_Box";
import Check_Box from "../../Atoms/Check_Box/Check_Box";
import "../../../components/components_styles.css";
import PropTypes from "prop-types";



const Add_Social_Tag = () => {
  const [socialTag, setSocialTag] = useState("");
  const [selectedSystem, setSelectedSystem] = useState("");
  const [selectedGame, setSelectedGame] = useState("");
  const [addAnother, setAddAnother] = useState(false);
  const [STindex, setSTindex] = useState([
    { socialTag: "", selectedSystem: "", selectedGame: "" },
  ]);
  const [removeST, setRemoveST] = useState([false]); // Initialize with one false for the first ST

  const handleAddsocialTag = () => {
    if (STindex.length < 50) {
      setSTindex((prevTags) => [
        ...prevTags,
        { socialTag, selectedSystem, selectedGame },
      ]);
      setRemoveST((prevRemoveST) => [...prevRemoveST, false]);
      setSocialTag("");
      setSelectedSystem("");
      setSelectedGame("");
    }
  };

  const handleRemoveSocialTag = (index) => {
    setSTindex((prevTags) => prevTags.filter((_, i) => i !== index));
    setRemoveST((prevRemoveST) => prevRemoveST.filter((_, i) => i !== index));
  };

  const handleCheckboxChange = (index) => {
    const updatedRemoveTags = [...removeST];
    updatedRemoveTags[index] = !updatedRemoveTags[index];
    setRemoveST(updatedRemoveTags);

    if (updatedRemoveTags[index]) {
      handleRemoveSocialTag(index);
    }
  };

  return (
    <div className="add-social-tag">
      {STindex.map((ST, index) => (
        <div key={index}>
          
              <Text_Box
                  id="social_url"
                  labelText="URL Channel"
                  placeholderText="URL of your channel"
                  value={ST.url || ""}
                  onChange={(value) => {
                      const updatedTag = [STindex];
                      updatedTags[index].url = value;
                      setSTindex(updatedTags);
                  }}/>
        //       {/* <Text_Box
        //     value={ST.socialTag || ""}
        //     onChange={(value) => {
        //       const updatedTags = [...STindex];
        //       updatedTags[index].socialTag = value;
        //       setSTindex(updatedTags);
        //     }}
        //   /> */}

          <Text_Box
            id="Channel"
            label="URL Channel"
            placeholder="URL of your channel"
            value=""
            onChange={handleChange}
          />

          <Text_Box
            id="SocialDNS"
            label="Site Name"
            placeholder="Twitch, Discord"
            value=""
            onChange={handleChange}
          />

          
          <Check_Box
            checked={removeST[index]}
            onChange={() => handleCheckboxChange(index)}
            label={`Remove ${ST.socialTag || "this social tag"}`}
          />
        </div>
      ))}
      <Check_Box
        checked={addAnother}
        onChange={handleAddsocialTag}
        label="Have another social Tag? Check this Box"
      />
    </div>
  );
};

Text_Box.PropTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
  name: PropTypes.string,
};

export default Add_Social_Tag;
