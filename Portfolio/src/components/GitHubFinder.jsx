import React, { useState } from "react";

const GitHubFinder = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      setProfile(null);
      return;
    }
    setLoading(true);
    setError("");
    setProfile(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setProfile(data);
    } catch (err) {
      setError("User not found or API error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="github-finder-container active">
      <h2 className="heading">GitHub <span>Finder</span></h2>
      <div className="github-finder">
        <div className="github-search-box">
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
          />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
        <div id="github-profile" className="github-profile" style={{ display: profile || error ? "inline-block" : "none" }}>
          {error && <strong>{error}</strong>}
          {profile && (
            <>
              <img src={profile.avatar_url} alt={profile.login} />
              <h3>{profile.name || profile.login}</h3>
              <p><strong>Location:</strong> {profile.location || "N/A"}</p>
              <p><strong>Public Repos:</strong> {profile.public_repos}</p>
              <p><strong>Followers:</strong> {profile.followers}</p>
              <p><a href={profile.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a></p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default GitHubFinder;
