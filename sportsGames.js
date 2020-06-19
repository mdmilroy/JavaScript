const team = {
    _players: [
      {
        firstName: 'Pete', 
        lastName: 'Wheeler', 
        age: 54
      },
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'Sammy',
        lastName: 'Sosa',
        age: 55
      }
      ],
    _games: [
      {
        opponent: 'Celtics',
        teamPoints: 50,
        opponentPoints: 60
      },
      {
        opponent: 'Titles',
        teamPoints: 80,
        opponentPoints: 40
      },
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      }
      ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
     let player = {
       firstName,
       lastName,
       age
     }; 
     this._players.push(player);
    },
  
    addGame(opponent,teamPoints,opponentPoints ) {
     let game = {
       opponent,
       teamPoints,
       opponentPoints
     }; 
     this._games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('first', 100, 70);
  team.addGame('second', 70, 100);
  team.addGame('third', 50, 51);
  console.log(team.games);
  
  
  
  
  
  
  
  
  
  
  
  