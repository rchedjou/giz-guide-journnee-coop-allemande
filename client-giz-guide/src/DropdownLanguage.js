import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// import Box from '@mui/material/Box';
//import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from "@mui/material";

const DropdownLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("fr");

    useEffect(() => {
        i18n.changeLanguage(language);
   }, [i18n,language]); 
  const handleLangChange = evt => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    // <select onChange={handleLangChange} value={language}>
    //   <option value="id">ID</option>
    //   <option value="en">EN</option>
    // </select>
    <Box sx={{
      width : "60",
      display : "flex",
      flexDirection : "row",
      justifyContent : "space-around",
      alignItems : "center"
    }}>
        {/* <InputLabel id="demo-simple-select-label">Langue</InputLabel> */}
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          onChange={handleLangChange}
        >
          <MenuItem value="en"><img src="https://hatscripts.github.io/circle-flags/flags/gb.svg"  alt="en" width="18" ></img></MenuItem>
          <MenuItem value="fr"><img src="https://hatscripts.github.io/circle-flags/flags/fr.svg" alt="fr" width="18"></img></MenuItem>
        </Select>
      </Box>
  );
};

export default DropdownLanguage;
