import styled from "styled-components";
import React from "react";
import {Spinner} from "react-bootstrap";

const LoaderWrapper = styled.div`
    position: relative;
    left: 48%;
    top: 20%;
    font-size: 5rem;

`

const DynamicContent = () => {
    return(
        <div>
            <LoaderWrapper>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </LoaderWrapper>

        </div>
    )

}

export default DynamicContent