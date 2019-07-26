import styled from "styled-components";

//CharacterCard

export const Card = styled.div`
    border-radius: 15px;
    box-shadow: 2px 2px 2px grey;
    border: 1px solid lightgrey;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-bottom: 60px;
`;

export const Image = styled.div`
    border: 1px solid light grey;
    
    
`;

export const Name = styled.h1`
    font-size: 25px;
    margin-left: 20px;

`;

export const Status = styled.h2`
    font-size: 18px;
    color: lightgrey;
    margin-left: 20px;
    margin-right: 20px;
`;

export const Species = styled.p`
    font-size: 18px;
    margin-left: 20px;
    margin-right: 20px; 
`;

export const Location = styled.p`
    font-size: 18px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const Origin = styled.p`
    font-size: 18px;
    margin-left: 20px;
    margin-right: 20px;
`;

//LocationCard

export const CardTwo = styled.div`
    border: 2px solid lightgrey;
    border-radius: 12px;
    width: 40%;
    height: 150px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-bottom: 60px;
`;

export const Planet = styled.h3`
    font-size: 20px;
    margin: 20px;;
`;

export const Type = styled.p`
    font-size: 15px;
    color: grey;
    margin-left: 20px;
    padding-bottom: 40px;
`;


export const Residents = styled.p`
    font-size: 20px;
    color: lightgrey;
`;

//EpisodeCard
export const CardThree = styled.div`
    border: 2px solid lightgrey;
    border-radius: 12px;
    width: 40%;
    height: 150px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-bottom: 50px;
    `;

export const AirDate = styled.p`
    font-size: 15px;
    margin-left: 20px;
    margin-right: 20px;

`;