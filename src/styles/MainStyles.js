import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fffdfa;
`;

export const MainContainer = styled.div`
  display: flex;
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
  margin: 0 auto;
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
`;

export const BarChartContainer = styled.div`
  width: 100%;
  height: 500px;
`;