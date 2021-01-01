import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fffdfa;
`;

export const MainContainer = styled.div`
  display: flex;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const HeaderContainer = styled.header`
  padding: 1rem;
`;

export const AsideContainer = styled.aside`
  width: 300px;
`;

export const ContentContainer = styled.main`
  flex: 1 0 0;
`;

export const DisplayContainer = styled.div`
  h1 {
    text-align: center;
  }
`;

export const TextGroupContainer = styled.div`
  width: 70%;
  max-width: 1000px;
  padding: 2rem;
  margin: 1rem auto;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  @media (max-width: 750px) {
    width: 90%;
  }
`;

export const TextTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;


export const TextContent = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
`;

export const SubContentContainer = styled.div`
  padding: 1rem;
`;

export const SubContentTitle = styled.h4`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const BreakdownContainer = styled.main`
  flex: 1 0 0;
  width: 80%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 100%;
  }

  h1 {
    text-align: center;
  }
`;

export const FullChartContainer = styled.div`
  width: 100%;
  height: 500px;
`;

export const SecondaryChartContainer = styled.div`
  width: 33%;
  height: 100%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;

  @media (max-width: 1700px) {
    flex-wrap: wrap;
  }
`;

export const CardContainer = styled.div`
  width: 33%;
  height: auto;
  overflow: auto;
  margin: 0.2rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  @media (max-width: 1700px) {
    width: 100%;
    height: 150px;
  }

  h3 {
    padding: 1rem;
    font-size: 2rem;
  }

  div {
    margin: 0 3rem;
    font-size: 1.3rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

export const GraphContainer = styled.div`
  display: flex;
  height: 350px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;