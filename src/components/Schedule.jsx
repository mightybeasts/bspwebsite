import React from 'react';

const schedule = [
  {
    teamA: {
      name: 'Team A',
      icon: '/team-a-icon.png',
    },
    teamB: {
      name: 'Team B',
      icon: '/team-b-icon.png',
    },
    date: '2023-06-25',
    time: '15:00',
  },
  {
    teamA: {
      name: 'Team C',
      icon: '/team-c-icon.png',
    },
    teamB: {
      name: 'Team D',
      icon: '/team-d-icon.png',
    },
    date: '2023-06-26',
    time: '14:30',
  },
  {
    teamA: {
      name: 'Team E',
      icon: '/team-e-icon.png',
    },
    teamB: {
      name: 'Team F',
      icon: '/team-f-icon.png',
    },
    date: '2023-06-27',
    time: '16:15',
  },
  // Add more matches with teamA, teamB, date, and time as needed
];

const Schedule = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Tournament Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {schedule.map((match, index) => (
          <div
            key={index}
            className="bg-tertiary p-4 rounded-lg shadow flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex items-center mb-4 md:mb-0">
              <img src={match.teamA.icon} alt={match.teamA.name} className="w-10 h-10 mr-2" />
              <p className="font-semibold">{match.teamA.name}</p>
            </div>
            <div className="flex items-center justify-center mb-4 md:mb-0">
              <p className="text-2xl font-bold">vs</p>
            </div>
            <div className="flex items-center">
              <p className="font-semibold">{match.teamB.name}</p>
              <img src={match.teamB.icon} alt={match.teamB.name} className="w-10 h-10 ml-2" />
            </div>
            <div className="flex flex-col items-center mt-4 md:mt-0">
              <p className="text-gray-500">{match.date}</p>
              <p className="text-gray-500">{match.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
