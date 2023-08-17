const TeamCard = (props) => {
  const { imageUrl, name } = props;
  return (
    <div className="team-card">
      <img src={imageUrl} alt={name} className="team-logo" />
      <p className="team-name">{name}</p>
    </div>
  );
};

const SuperOverLeague = () => {
  return (
    <div className="super-over-league">
      <h1 className="league-heading">Super Over League</h1>
      <div className="teams-container">
        <TeamCard
          imageUrl="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
          name="RCB"
        />
        <TeamCard
          imageUrl="https://assets.ccbp.in/frontend/react-js/csk-img.png"
          name="CSK"
        />
      </div>
      {/* JSX syntax for HTML main heading element */}
      <h2 className="sub-heading">Welcome to the Exciting Matches!</h2>
      {/* JSX syntax for HTML image element */}
      <img
        src="https://assets.ccbp.in/frontend/react-js/super-over-image.png"
        alt="Super Over League"
        className="super-over-image"
      />
    </div>
  );
};

ReactDOM.render(<SuperOverLeague />, document.getElementById("root"));
