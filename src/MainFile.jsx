function MainFile(){
    return(<div className="main">
        <div className="nav">
            <div className="logo"><img src="assets/Images/logo.svg" alt=""/></div>
            <div className="signin"><button>Sign In</button></div>
        </div>
        <div className="box"></div>
        <div className="hero">
            <div className="hero1 mar">Unlimited movies, TV shows, and more</div>
            <div className="hero2 mar">Watch anywhere. Cancel anytime.</div>

            <div className="hero3 mar">Ready to watch? Enter your email to create or restart your membership.</div>
            <div className="hero4">
                <input type="text" placeholder="Email Address"/><button className="btn">Get Started</button>
            </div>
        </div>
       </div>
       );
}
export default MainFile;