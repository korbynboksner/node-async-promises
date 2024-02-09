$("#oneCardSubmit").on("click", async function(e) {
    e.preventDefault();
    let deck = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    
    let card = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)

    console.log(card.cards[0].value,'of', card.cards[0].suit)
})

$("#twoCardSubmit").on("click", async function(e) {
    e.preventDefault();
    let deck = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)

    let card = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=2`)

    console.log(card.cards[0].value,'of', card.cards[0].suit)
    console.log(card.cards[1].value,'of', card.cards[1].suit)

})

let deckId;

window.onload = async function() {

    let gendeck = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)

    deckId = gendeck.deck_id
    console.log(`Deck set with ID: ${deckId}`);
};

$("#drawSubmit").on("click", async function(e) {
    e.preventDefault();

    let card = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)

    $("#location").append(`<img src='${card.cards[0].image}'>`);

})