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
    const season = parseInt(document.getElementById('seasonSelect').value, 10);
    const episode = parseInt(document.getElementById('episodeSelect').value, 10);
    let totalEpisodes = 0;

    for (let i = 1; i < season; i++) {
        totalEpisodes += episodeCounts[i];
    }
    totalEpisodes += episode; // Add episodes from the current season
    const totalMinutes = totalEpisodes * episodeDuration;

    // Convert minutes to days, hours, and minutes
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;

    const resultDiv = document.getElementById('result');
    if (days < 1) {
        if (hours < 1){
            resultDiv.textContent = `You have spent ${minutes} minute${minutes === 1 ? '' : 's'} watching Grey's Anatomy. That's ${totalEpisodes} episode${totalEpisodes === 1 ? '' : 's'}.`;
        } else if (hours >= 1) {
            resultDiv.textContent = `You have spent {hours} hour${hours === 1 ? '' : 's'} and ${minutes} minute${minutes === 1 ? '' : 's'} watching Grey's Anatomy. That's ${totalEpisodes} episodes.`;
        }
    } else if (days >= 1) {
        resultDiv.textContent = `You have spent ${days} day${days === 1 ? '' : 's'}, ${hours} hour${hours === 1 ? '' : 's'}, and ${minutes} minute${minutes === 1 ? '' : 's'} watching Grey's Anatomy. That's ${totalEpisodes} episodes.`;
    }
}

