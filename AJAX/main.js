
function etsiTv () {
  const haku = document.getElementById('haku').value;
  fetch(`https://api.tvmaze.com/search/shows?q=${haku}`)
      .then(vastaus => vastaus.json())
      .then(sarjat => {
        console.log(sarjat);
        const app = document.getElementById('app');

    app.innerHTML = sarjat.map(({show}) => ` 
            <div class="grid-item">
            ${show.image ? `<img src="${show.image.medium}">` : ''}
            <div>
               <h5>${show.name}</h5>
               
               <p>Linkki sarjan sivulle:</p><a href="${show.url}">${show.url}</a>
               <p>Genre: ${show.genres}</p>
               <p>Summary: ${show.summary}</p>
               
               </div>
               
               </div>
               
             `).join('');
  })
}

const boxi = document.getElementById('nappula');
boxi.addEventListener('click', etsiTv);

