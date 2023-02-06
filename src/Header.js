import './App.css';
const Header = ({selectedTeam, teamMemberCount }) => {
    return (
        <div>
            <div className=' text-center'>
            <h5 className=''><u>Team Member Allocation</u></h5>
            <p className=' text-primary'>{selectedTeam} has <strong style={{color : 'black'}}> {teamMemberCount} </strong> member</p>
            </div>
        </div>
    )
}

export default Header;