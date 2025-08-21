import profilePic from "./assets/user.png";

const Leftbar = () => {
return(
    <nav className="profile">
            <div className="profileicon">
                <img src={profilePic} alt="Profile" className="profile-img" />
                <h3>Gokul..</h3>
            </div>
            <div className="profileicon">
                <img src={profilePic} alt="Profile" className="profile-img" />
                <h3>Arjun Reddy</h3>
            </div>
            <div className="profileicon">
                <img src={profilePic} alt="Profile" className="profile-img" />
                <h3>🍻 Boomer Uncle 🍻</h3>
            </div>
            <div className="profileicon">
                <img src={profilePic} alt="Profile" className="profile-img" />
                <h3>🔥 Thalaivaa 🔥</h3>
            </div>
            <div className="profileicon">
                <img src={profilePic} alt="Profile" className="profile-img" />
                <h3>😶‍🌫️ Silent Killer 😶‍🌫️</h3>
            </div>
            <div className="profileicon">
                <img src={profilePic} alt="Profile" className="profile-img" />
                <h3>🤪 College Bro 🤪</h3>
            </div>
            <div className="profileicon">
                <img src={profilePic} alt="Profile" className="profile-img" />
                <h3>Drama Queen 👑</h3>
            </div>
    </nav>
)
}

export default Leftbar;