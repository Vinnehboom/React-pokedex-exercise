import styled from "styled-components";
import React from "react";
import {Spinner} from "react-bootstrap";

const DynamicContent = () => {
    return(
        <div>
            <h1>My Fancy 'Dex</h1>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )

}

export default DynamicContent