import styled from '@emotion/styled';

export const Stat = styled.section`width: 300px;`

export const StatTitle = styled.h2`text-align: center;
color: grey;
text-transform: uppercase;`

export const StatList = styled.ul`display: flex;
    list-style: none;
    padding:0;`

export const StatItem =styled.li`background-color: pink;
    width: 100%;
    flex-basis: calc((100% - 0px)/5)`

export const Label = styled.span`font-size: 14px;
    color: white;`

export const Percent = styled.span`font-size: 20px;
font-weight: 500;
    color: white;`