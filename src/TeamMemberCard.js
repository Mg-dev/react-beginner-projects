import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const TeamMemberCard = ({employee, handleEmployeeCardClick, selectedTeam}) => {
    return (
        <div key={employee.id} id={employee.id} className={ employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2' } style={{cursor: 'pointer'}} onClick={handleEmployeeCardClick}>
                                    { (employee.gender === 'male') ?
                                        <img src={maleProfile} alt="male employee" className='card-img-top'/>
                                        :
                                        <img src={femaleProfile} alt="female employee" className='card-img-top'/>
                                    }
                                    
                                    <div className='card-body'>
                                        <h3 className='text-danger'>{employee.fullName}</h3>
                                        <p>{employee.designation}</p>
                                    </div>
                                </div>
    )
}

export default TeamMemberCard;