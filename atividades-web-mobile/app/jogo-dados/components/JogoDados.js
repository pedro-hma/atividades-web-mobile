'use client';

import { useState } from 'react';
import Dado from './Dado';
import '../jogo.css';

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

      if (round === 5) {
        setGameOver(true);

        const finalP1 = scores.player1 + (result === 'player1' ? 1 : 0);
        const finalP2 = scores.player2 + (result === 'player2' ? 1 : 0);

        if (finalP1 > finalP2) setOverallWinner('player1');
        else if (finalP2 > finalP1) setOverallWinner('player2');
        else setOverallWinner('tie');
      } else {
        setTimeout(() => {
          setRound(prev => prev + 1);
          setPlayer1Dice([0, 0]);
          setPlayer2Dice([0, 0]);
          setRoundResult(null);
          setCurrentPlayer(1);
        }, 2000);
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

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Jogo de Dados</h1>
      <h2>Rodada {round} de 5</h2>

      {!gameOver && (
        <h3>
          Vez de: {currentPlayer === 1 ? 'Jogador 1' : 'Jogador 2'}
        </h3>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }}>
        
        {/* Jogador 1 */}
        <div>
          <h3>Jogador 1</h3>
          <Dado valor={player1Dice[0]} />
          <Dado valor={player1Dice[1]} />
          <p>Soma: {player1Dice[0] + player1Dice[1]}</p>
        </div>

        {/* Jogador 2 */}
        <div>
          <h3>Jogador 2</h3>
          <Dado valor={player2Dice[0]} />
          <Dado valor={player2Dice[1]} />
          <p>Soma: {player2Dice[0] + player2Dice[1]}</p>
        </div>

      </div>

      {/* RESULTADO DA RODADA */}
      {roundResult && (
        <h2>
          {roundResult === 'player1' && 'Jogador 1 venceu a rodada'}
          {roundResult === 'player2' && 'Jogador 2 venceu a rodada'}
          {roundResult === 'tie' && 'Empate'}
        </h2>
      )}

      {/* BOTÕES */}
      {!gameOver && (
        <div>
          <button
            className="btn-jogador1"
            onClick={() => rollDice(1)}
            disabled={currentPlayer !== 1}
          >
            Jogar para Jogador 1
          </button>

          <button
            className="btn-jogador2"
            onClick={() => rollDice(2)}
            disabled={currentPlayer !== 2}
          >
            Jogar para Jogador 2
          </button>
        </div>
      )}

      {/* RESULTADO FINAL */}
      {gameOver && (
        <div>
          <h2>
            {overallWinner === 'player1' && '🏆 Jogador 1 venceu o jogo!'}
            {overallWinner === 'player2' && '🏆 Jogador 2 venceu o jogo!'}
            {overallWinner === 'tie' && '🤝 Empate geral!'}
          </h2>

          <button onClick={resetGame}>
            Jogar Novamente
          </button>
        </div>
      )}
    </div>
  );
}