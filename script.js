const episodeCounts = {
    1: 9, 2: 27, 3: 25, 4: 17, 5: 24, 6: 24, 7: 22, 8: 24, 9: 24,
    10: 24, 11: 25, 12: 24, 13: 24, 14: 24, 15: 25, 16: 21, 17: 17,
    18: 20, 19: 20, 20: 5
};
const episodeDuration = 43; // average duration in minutes per episode

window.onload = function() {
    const seasonSelect = document.getElementById('seasonSelect');
    const episodeSelect = document.getElementById('episodeSelect');

    for (let season in episodeCounts) {
        let option = document.createElement('option');
        option.value = season;
        option.textContent = "Season " + season;
        seasonSelect.appendChild(option);
    }

    seasonSelect.onchange = function() {
        episodeSelect.innerHTML = ''; // Clear previous episodes
        let episodeCount = episodeCounts[this.value];
        for (let i = 1; i <= episodeCount; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.textContent = "Episode " + i;
            episodeSelect.appendChild(option);
        }
    };

    seasonSelect.onchange(); // Populate episodes for the default season selection
};

function calculateTime() {
    const season = document.getElementById('seasonSelect').value;
    const episode = document.getElementById('episodeSelect').value;
    const totalEpisodes = parseInt(episode, 10);
    const totalMinutes = totalEpisodes * episodeDuration;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Total watch time: ${totalMinutes} minutes for ${totalEpisodes} episodes.`;
}
