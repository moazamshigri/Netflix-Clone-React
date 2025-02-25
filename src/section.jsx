function Section() {
    return (
      <>
      <div className="separation sep01">
      </div>
        <section className="_01">
          <div className="writing">
            <h1>Enjoy on your TV</h1>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className="secimg">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="TV"
            />
            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </section>
  
        <div className="separation sep02"></div>
  
        <section className="_02">
          <div className="secimg">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="Mobile Download"
            />
          </div>
          <div className="writing">
            <h1>
              Download your <br /> Shows to Watch <br /> Offline
            </h1>
            <p>Save your favorites easily and always have something to watch.</p>
          </div>
        </section>
  
        <div className="separation sep03"></div>
  
        <section className="_03">
          <div className="writing">
            <h1>
              Create Profiles for <br /> Kids
            </h1>
            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </div>
          <div className="secimg">
            <img
              src="https://occ-0-5343-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
              alt="Kids Profile"
            />
          </div>
        </section>
  
        <div className="separation"></div>
  
        <div className="sec04">
          <p className="para">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="hero4">
            <input type="email" placeholder="Email Address" />
            <button className="btn">Get Started</button>
          </div>
        </div>
  
        <div className="separation"></div>
      </>
    );
  }
  
  export default Section;
  