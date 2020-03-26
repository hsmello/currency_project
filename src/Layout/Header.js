import React from 'react';
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return(
        <header>
          <FontAwesomeIcon 
                icon={faHandHoldingUsd}
                // color="green" 
                size="4x"
            /> 
            <h1> Fanu's Currency Converter </h1> 
        </header>
    )
};

export default Header