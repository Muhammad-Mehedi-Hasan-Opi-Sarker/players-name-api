const load = () => {
    document.getElementById('showAll').innerHTML = "";
    const input = document.getElementById('search-feild');
    const search = input.value;
    input.value = "";
    const error = document.getElementById('error');
    if (search == "" || isNaN != search) {
        error.innerText = "Erorr"
    }
    else {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(response => response.json())
            .then(data => show(data.player))
        error.innerText = "";
    }
}
const show = (players) => {
    for (const player of players) {
        // console.log(player);
        const showAll = document.getElementById('showAll');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card text-center">
                <img class="w-70" src="${player.strThumb}" alt="">
                <h5>Name:${player.strPlayer}</h5>
                <h5>Country:${player.strNationality}</h5>
                <div><button onclick="seeDetails(${player.idPlayer})" class="bg-primary border-2">See details</button></div>
                </div>
                </div>
        `;
        showAll.appendChild(div);
    }
}
const seeDetails = id => {
    // console.log(info);
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => all(data.players[0]))
}
const all = info => {
    console.log(info);
    const details = document.getElementById('details');
    details.innerHTML = `
    <div>
     <img class="w-50" src="${info.strThumb}" alt="">
    <h5>Name:${info.strDescriptionDE}</h5>
    <h5>Country:${info.strNationality}</h5>
    <h5>Title:${info.strTeam}</h5>
    </div>
    `;
    details.appendChild()
}