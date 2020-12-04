import React from 'react'
import styled from 'styled-components'
import capitalize from 'capitalize-the-first-letter'
const TypeWrapper = styled.div`
    position: relative;
    left: 1rem;
    display: inline-flex;
    margin-bottom: 2rem;
`
const IconImage = styled.img`
    margin: 0 1rem;
`
const PokeTypes = ({types}) =>{
    return(

            <div>
                {types.map(type => {
                    let icon = type + '.png'
                    return (<TypeWrapper>
                        <h3 className={"mt-4"}>{capitalize(type)}</h3>
                        <IconImage src={'/assets/icons/'+icon}
                             alt=""/>
                    </TypeWrapper>)
                })}
            </div>

    )
}

export default PokeTypes