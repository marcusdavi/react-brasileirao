import {getUrlImage} from '../helpers/formatData'
import { getApiChampionshipYear } from "./httpService";

export async function getFinalClassification(year) {
  const championshipYear = await getApiChampionshipYear(year);
  const championshipFinal = formatFinalClassification(championshipYear);

  return championshipFinal;
}

function formatFinalClassification(championshipYear) {
  const finalScore = [];
  const finalRound = championshipYear[championshipYear.length - 1].partidas;
  finalRound.map((game) => {
    finalScore.push(getDataTeam(game, true));
    finalScore.push(getDataTeam(game, false));
    return finalScore;
  });
  const finalClassification = sortClassification(finalScore);
  return finalClassification;
}

function getDataTeam(game, isHome) {
  const name = isHome ? game.mandante : game.visitante;
  const teamTotalScore = isHome ? game.pontuacao_geral_mandante : game.pontuacao_geral_visitante;
  const score = teamTotalScore.total_pontos;
  const wins = teamTotalScore.total_vitorias;
  const draws = teamTotalScore.total_empates;
  const losses = teamTotalScore.total_derrotas;
  const goals = teamTotalScore.total_gols_marcados;
  const goalsConceded = teamTotalScore.total_gols_sofridos;
  const goalDifference = goals - goalsConceded;
  const imageUrl = getUrlImage(name);
  return {
    name,
    imageUrl,
    score,
    wins,
    draws,
    losses,
    goals,
    goalsConceded,
    goalDifference,
  };
}

function sortClassification(finalScore) {
  const classificationSort = finalScore.sort((a, b) => {
    return tiebreakerCriteria(a, b);
  });
  return classificationSort;
}

function tiebreakerCriteria(team1, team2) {
  if (team1.score === team2.score) {
    if (team1.wins === team2.wins) {
      if (team1.goalDifference === team2.goalDifference) {
        if (team1.goals === team2.goals) {
          return 0;
        } else {
          return team2.goals - team1.goals;
        }
      } else {
        return team2.goalDifference - team1.goalDifference;
      }
    } else {
      return team2.wins - team1.wins;
    }
  } else {
    return team2.score - team1.score;
  }
}
