import styled from "styled-components";

//CharacterCard
export const Card = styled.div`
    border: 2px solid black;
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-bottom: 60px;
`;

export const Image = styled.div`
    border: 1px solid red;
    
`;

export const Name = styled.h1`
    font-size: 25px;
`;

export const Status = styled.h2`
    font-size: 18px;
    color: lightgrey;
`;

export const Species = styled.p`
    font-size: 18px;
    
`;

export const Location = styled.p`
    font-size: 18px;
    
`;

export const Origin = styled.p`
    font-size: 18px;
    
`;

//LocationCard

export const CardTwo = styled.div`
    border: 2px solid black;
    width: 30%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-bottom: 60px;
`;

export const Planet = styled.h3`
    font-size: 30px;
`;

export const Type = styled.p`
    font-size: 20px;
    color: lightgrey;
`;


// export const Residents = styled.p`
//     font-size: 20px;
//     color: lightgrey;
// `;