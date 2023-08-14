import React from "react";

import  PropTypes  from "prop-types";

import {  ErrorMessageStyles } from "./style";

export function ErrorMessage({children}) {
    return <ErrorMessageStyles>{children }</ErrorMessageStyles>
    
}

ErrorMessage.propType = {
    children: PropTypes.string
}