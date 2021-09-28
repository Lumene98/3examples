import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Icons from "../components/icons";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

const GridsContainer = styled.div`
  display: flex;
`;

const Grid = styled.div<{ first: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ first }) => (first ? "flex-start" : "flex-end")};
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Card = styled.a<{ selected?: boolean; computer?: boolean }>`
  display: flex;
  justify-content: center;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${({ selected }) => (selected ? "#000" : "#eaeaea")};
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 45%;

  ${({ computer }) =>
    computer
      ? ""
      : `:hover,
  :focus,
  :active {
    border-color: #000;
  }`}

  svg {
    width: 50px;
    height: 50px;
  }
`;

const Result = styled.div`
  display: flex;
  align-items: center;
  min-width: 300px;
  justify-content: center;
`;

const Home: NextPage = () => {
  const [playerMove, setPlayerMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("Choose to play");

  useEffect(() => {
    if (playerMove && computerMove) {
      if (playerMove == computerMove) {
        setResult("Even!");
      } else {
        switch (playerMove) {
          case "Paper":
            switch (computerMove) {
              case "Rock":
                setResult("Player won!");
              case "Scissors":
                setResult("Computer won!");
            }
          case "Rock":
            switch (computerMove) {
              case "Scissors":
                setResult("Player won!");
              case "Paper":
                setResult("Computer won!");
            }
          case "Scissors":
            switch (computerMove) {
              case "Paper":
                setResult("Player won!");
              case "Rock":
                setResult("Computer won!");
            }
        }
      }
    }

    setTimeout(() => {
      setComputerMove("");
      setPlayerMove("");
      setResult("Choose to play");
    }, 3000);
  });

  const handleSelect = (move: string) => {
    setPlayerMove(move);
    setComputerMove(Icons[Math.floor(Math.random() * Icons.length)].name);
  };

  return (
    <Container>
      <Head>
        <title>Rock paper scissors</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>Rock paper scissors</Title>

        <GridsContainer>
          <Grid first={true}>
            {Icons.map((Icon) =>
              Icon.name === playerMove ? (
                <Card
                  selected
                  onClick={() => handleSelect(Icon.name)}
                  key={Icon.name}
                >
                  <Icon></Icon>
                </Card>
              ) : (
                <Card onClick={() => handleSelect(Icon.name)} key={Icon.name}>
                  <Icon></Icon>
                </Card>
              )
            )}
          </Grid>

          <Result>
            <h1>{result}</h1>
          </Result>

          <Grid first={false}>
            {Icons.map((Icon) =>
              Icon.name === computerMove ? (
                <Card computer selected key={Icon.name}>
                  <Icon></Icon>
                </Card>
              ) : (
                <Card computer key={Icon.name}>
                  <Icon></Icon>
                </Card>
              )
            )}
          </Grid>
        </GridsContainer>
      </Main>
    </Container>
  );
};

export default Home;