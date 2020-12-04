import capitalize from "capitalize-the-first-letter";
import React from "react";
import styled from 'styled-components'

const MoveWrapper = styled.ul`

    list-style: none;
    column-count: 2;
    text-align: left;
    
`

const MoveList = ({moves}) => {
    const moveTotal = moves.length
    const movesAmount = Math.min(4, moveTotal);
    const movesArray = []

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const allMoves = moves.map(prop => prop.move.name)
    for (let i = 0; i < movesAmount; i++) {
        shuffleArray(allMoves)
        movesArray.push(allMoves.pop().split('-').join(' '));
    }
    return (
        <MoveWrapper>
            {movesArray.map(move => (<li>{capitalize(move)}</li>))}
        </MoveWrapper>
    )
}

export default MoveList