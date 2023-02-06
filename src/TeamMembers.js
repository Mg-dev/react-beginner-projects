import TeamMemberCard from "./TeamMemberCard";
const TeamMembers = ({employees, handleEmployeeCardClick, selectedTeam}) => {
    return (
        employees.map(e=>
            <TeamMemberCard 
                employee={e}
                handleEmployeeCardClick={handleEmployeeCardClick}
                selectedTeam={selectedTeam}
                />
        )
    )
}

export default TeamMembers;