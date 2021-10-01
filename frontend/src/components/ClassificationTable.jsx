import React from "react";

export default function ClassificationTable({ children: teams }) {
  const classTdNumber = "border border-gray-600 text-center";
  return (
    <div>
      <table className="border-2 border-green-700 content-center mx-auto w-9/12">
        <thead className="bg-green-200">
          <tr>
            <th className={classTdNumber}>Pos</th>
            <th className={classTdNumber}>Team</th>
            <th className={classTdNumber}>Score</th>
            <th className={classTdNumber}>Wins</th>
            <th className={classTdNumber}>Draws</th>
            <th className={classTdNumber}>Losses</th>
            <th className={classTdNumber}>Goals</th>
            <th className={classTdNumber}>Goals C</th>
            <th className={classTdNumber}>Diff</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, pos) => {
            const isEven = pos % 2 === 0;
            const classEven = isEven ? "bg-gray-300" : "bg-gray-100";
            return (
              <tr
                key={pos}
                className={`border-2 border-gray-600 ${classEven}`}
              >
                <td className={classTdNumber}>{`${pos + 1}º`}</td>
                <td>
                  <div className="flex">
                    <img src={team.imageUrl} alt={team.name} className="h-7 ml-4 mr-4"/>
                    <div className="">{team.name}</div>
                  </div>
                </td>
                <td className={classTdNumber}>{team.score}</td>
                <td className={classTdNumber}>{team.wins}</td>
                <td className={classTdNumber}>{team.draws}</td>
                <td className={classTdNumber}>{team.losses}</td>
                <td className={classTdNumber}>{team.goals}</td>
                <td className={classTdNumber}>{team.goalsConceded}</td>
                <td className={classTdNumber}>{team.goalDifference}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
