import profilePic from './assets/profile.jpg'

function Card (){
    return(
        <div className="card">
            <img className='card-img' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Imu Code </h2>
            <p className='card-text'>I want to be best web-developer Inshallah</p>
        </div>

    );

}

export default Card