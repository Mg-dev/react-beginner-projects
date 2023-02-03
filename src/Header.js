import './App.css';
const Header = ({selectedTeam, teamMemberCount }) => {
    return (
        <div className='container'>
            <div className='col-6 offset-3'>
            <h4><u>Team Member Allocation</u></h4>
            <p className=' text-primary'>{selectedTeam} has <strong style={{color : 'black'}}> {teamMemberCount} </strong> member</p>
            </div>
        </div>
    )
}

export default Header;