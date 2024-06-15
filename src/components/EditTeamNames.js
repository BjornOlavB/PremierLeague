import { useState, useEffect } from 'react';

const useEditTeamNames = (initialTeams) => {
  const [teams, setTeams] = useState(initialTeams);
  const [editingTeamId, setEditingTeamId] = useState(null);
  const [editedTeamName, setEditedTeamName] = useState("");

  useEffect(() => {
    const savedTeams = localStorage.getItem('teams');
    let teamsObject;

    if (savedTeams) {
      teamsObject = JSON.parse(savedTeams);
    } else {
      teamsObject = initialTeams;
    }

    setTeams(teamsObject);
  }, [initialTeams]);

  const handleEditClick = (teamId, currentName) => {
    setEditingTeamId(teamId);
    setEditedTeamName(currentName);
  };

  const handleNameChange = (event) => {
    setEditedTeamName(event.target.value);
  };

  const handleSaveClick = () => {
    setTeams((prevTeams) => {
      const updatedTeams = prevTeams.map(team => {
        if (team.team.id === editingTeamId) {
          return {
            ...team,
            team: {
              ...team.team,
              name: editedTeamName
            }
          };
        }
        return team;
      });
      localStorage.setItem('teams', JSON.stringify(updatedTeams));
      return updatedTeams;
    });
    setEditingTeamId(null);
  };

  return {
    teams,
    editingTeamId,
    editedTeamName,
    handleEditClick,
    handleNameChange,
    handleSaveClick
  };
};

export default useEditTeamNames;
