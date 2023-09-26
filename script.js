
let candidates = [];

function updateResults() {
    const candidatesContainer = document.querySelector('.candidates');
    candidatesContainer.innerHTML = '';


    const totalVotes = candidates.reduce((total, candidate) => total + candidate.votes, 0);


    const winner = candidates.reduce((prev, current) => (current.votes > prev.votes ? current : prev), { votes: -1 });


    document.getElementById('total-votes').textContent = totalVotes;
    document.getElementById('winner').textContent = winner.name;

  
    candidates.forEach(candidate => {
        const candidateCard = document.createElement('div');
        candidateCard.classList.add('candidate-card');
        candidateCard.innerHTML = `
            <h3>${candidate.name}</h3>
            <p>Votes: ${candidate.votes}</p>
        `;
        candidatesContainer.appendChild(candidateCard);
    });
}


document.getElementById('add-candidate-btn').addEventListener('click', () => {
    const candidateNameInput = document.getElementById('candidate-name');
    const candidateVotesInput = document.getElementById('candidate-votes');

    const name = candidateNameInput.value.trim();
    const votes = parseInt(candidateVotesInput.value);

    if (name && !isNaN(votes)) {
    
        candidates.push({ name, votes });

    
        updateResults();

       
        candidateNameInput.value = '';
        candidateVotesInput.value = '';
    } else {
        alert('Please enter a valid candidate name and votes.');
    }
});


updateResults();

