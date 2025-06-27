import React from 'react';

const standingsData = [
    {
      groupName: 'Group A',
      teams: [
        { team: 'Team A', wins: 5, losses: 2, icon: '/path/to/teamA-icon.png' },
        { team: 'Team B', wins: 3, losses: 4, icon: '/path/to/teamB-icon.png' },
        { team: 'Team C', wins: 6, losses: 1, icon: '/path/to/teamC-icon.png' },
      ],
    },
    {
      groupName: 'Group B',
      teams: [
        { team: 'Team D', wins: 4, losses: 3, icon: '/path/to/teamD-icon.png' },
        { team: 'Team E', wins: 2, losses: 5, icon: '/path/to/teamE-icon.png' },
        { team: 'Team F', wins: 7, losses: 0, icon: '/path/to/teamF-icon.png' },
      ],
    },
    {
      groupName: 'Group C',
      teams: [
        { team: 'Team G', wins: 3, losses: 4, icon: '/path/to/teamG-icon.png' },
        { team: 'Team H', wins: 6, losses: 1, icon: '/path/to/teamH-icon.png' },
        { team: 'Team I', wins: 2, losses: 5, icon: '/path/to/teamI-icon.png' },
      ],
    },
    // Add more groups as needed
  ];
  const GroupStandings = () => {
    return (
      <div className="flex flex-wrap">
        {standingsData.map((group, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 p-2" key={index}>
            <div className="bg-tertiary p-4 rounded">
              <h2 className="text-2xl font-bold">{group.groupName}</h2>
              <table className="mt-4 w-full border border-primary">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Team</th>
                    <th className="px-4 py-2">Wins</th>
                    <th className="px-4 py-2">Losses</th>
                  </tr>
                </thead>
                <tbody>
                  {group.teams.map((team, teamIndex) => (
                    <tr
                      key={teamIndex}
                      className="hover:bg-black transition-colors duration-300 cursor-pointer"
                    >
                      <td className="px-4 py-2 flex items-center">
                        <img
                          className="w-6 h-6 mr-2"
                          src={team.icon} // Provide the path or URL of the team's icon image
                          alt={team.team}
                        />
                        {team.team}
                      </td>
                      <td className="px-4 py-2">{team.wins}</td>
                      <td className="px-4 py-2">{team.losses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default GroupStandings;
