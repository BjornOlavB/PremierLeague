import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useFavorites from './useFavorites';
import Favourite from './Favourite';
import useEditTeamNames from './EditTeamNames';
import './Table.css';

const Table = ({ standings }) => {
  const [favorites, toggleFavorite] = useFavorites();
  const {
    teams,
    editingTeamId,
    editedTeamName,
    handleEditClick,
    handleNameChange,
    handleSaveClick,
  } = useEditTeamNames(standings.standings[0].table);

  const editButton = (team) => {
    if (editingTeamId === team.team.id) {
        return <button className='edit-button' onClick={handleSaveClick}>Save</button>;
    }else{
        return <button className='edit-button' onClick={() => handleEditClick(team.team.id, team.team.name)}>Edit</button>;
    }
  }

const teamNameChanger = (team) => {
  if (editingTeamId === team.team.id){
      return <input type="text" value={editedTeamName} onChange={handleNameChange}/>
 } else {
     return team.team.name
 }}

  return (   
    <div className="table-container">
      <table className="leaderboard">
      <thead>
        <tr>
          <th>Position</th>
          <th>Crest</th>
          <th>Team</th>
          <th>Win</th>
          <th>Draw</th>
          <th>Loss</th>
          <th>Points</th>
          <th>Favorite</th>
          <th>Config</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => (
          <tr key={team.team.id}>
            <td>{team.position}</td>
            <td className='crest'>              
                <img src={`http://localhost:5000/api/proxy-image?url=${encodeURIComponent(team.team.crest)}`} alt={`${team.team.name} crest`} />
            </td>
            <td className='newName'>
                {teamNameChanger(team)}
            </td>
            <td>{team.won}</td>
            <td>{team.draw}</td>
            <td>{team.lost}</td>
            <td>{team.points}</td>
            <td>
              <Favourite teamId={team.team.id} favorites={favorites} toggleFavorite={toggleFavorite} />
            </td>
            <td>
                {editButton(team)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
