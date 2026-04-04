'use client';

import { useState } from 'react';
import Dado from './components/Dado';

export default function JogoDados() {
  const [round, setRound] = useState(1);
  const [player1Dice, setPlayer1Dice] = useState([0, 0]);
  const [player2Dice, setPlayer2Dice] = useState([0, 0]);
  const [roundResult, setRoundResult] = useState(null);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [overallWinner, setOverallWinner] = useState(null);

  const rollDice = (player) => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    if (player === 1) {
      setPlayer1Dice([dice1, dice2]);
      setCurrentPlayer(2);
    } else {
      setPlayer2Dice([dice1, dice2]);
      // Both rolled, determine result
      const sum1 = player1Dice[0] + player1Dice[1];
      const sum2 = dice1 + dice2;
      let result;
      if (sum1 > sum2) {
        result = 'player1';
        setScores(prev => ({ ...prev, player1: prev.player1 + 1 }));
      } else if (sum2 > sum1) {
        result = 'player2';
        setScores(prev => ({ ...prev, player2: prev.player2 + 1 }));
      } else {
        result = 'tie';
      }
      setRoundResult(result);
      // Check if game over
      if (round === 5) {
        setGameOver(true);
        if (scores.player1 + (result === 'player1' ? 1 : 0) > scores.player2 + (result === 'player2' ? 1 : 0)) {
          setOverallWinner('player1');
        } else if (scores.player2 + (result === 'player2' ? 1 : 0) > scores.player1 + (result === 'player1' ? 1 : 0)) {
          setOverallWinner('player2');
        } else {
          setOverallWinner('tie');
        }
      } else {
        // Next round after a delay or immediately
        setTimeout(() => {
          setRound(round + 1);
          setPlayer1Dice([0, 0]);
          setPlayer2Dice([0, 0]);
          setRoundResult(null);
          setCurrentPlayer(1);
        }, 2000); // 2 seconds to show result
      }
    }
  };

  const resetGame = () => {
    setRound(1);
    setPlayer1Dice([0, 0]);
    setPlayer2Dice([0, 0]);
    setRoundResult(null);
    setScores({ player1: 0, player2: 0 });
    setCurrentPlayer(1);
    setGameOver(false);
    setOverallWinner(null);
  };

  const getResultText = (result) => {
    if (result === 'player1') return 'Jogador 1 Ganhou';
    if (result === 'player2') return 'Jogador 2 Ganhou';
    return 'Empatou';
  };

  const getOverallText = (winner) => {
    if (winner === 'player1') return 'Jogador 1 venceu a partida!';
    if (winner === 'player2') return 'Jogador 2 venceu a partida!';
    return 'Empate geral!';
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Jogo de Dados</h1>
      <h2>Rodada {round} de 5</h2>
      {!gameOver ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
            <div>
              <h3>Jogador 1</h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Dado valor={player1Dice[0]} />
                <Dado valor={player1Dice[1]} />
              </div>
              <p>Soma: {player1Dice[0] + player1Dice[1]}</p>
            </div>
            <div>
              <h3>Jogador 2</h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Dado valor={player2Dice[0]} />
                <Dado valor={player2Dice[1]} />
              </div>
              <p>Soma: {player2Dice[0] + player2Dice[1]}</p>
            </div>
          </div>
          {roundResult && <h3>Resultado da Rodada: {getResultText(roundResult)}</h3>}
          <div>
            <button onClick={() => rollDice(1)} disabled={currentPlayer !== 1}>Jogar para Jogador 1</button>
            <button onClick={() => rollDice(2)} disabled={currentPlayer !== 2}>Jogar para Jogador 2</button>
          </div>
        </>
      ) : (
        <>
          <h2>Fim do Jogo</h2>
          <h3>{getOverallText(overallWinner)}</h3>
          <p>Pontuação Final: Jogador 1: {scores.player1}, Jogador 2: {scores.player2}</p>
          <button onClick={resetGame}>Jogar Novamente</button>
        </>
      )}
    </div>
  );
}