let input = document.querySelector('.input');
let btn = document.querySelector('.button');

btn.addEventListener('click', bringWord);

function bringWord(word) {
    let data = input.value;
    axios({
        method: 'GET',
        url: 'https://api.dictionaryapi.dev/api/v2/entries/en/'+data,
    }).then(response => printScreen(response))
    .catch(hata => console.log(hata))
    .then(() => console.log("iş tmmdır"))
}

function printScreen(response) {
    document.querySelector('.sonuc').innerHTML = `
    <section class="section">
            <div class="container">
                <div class="block">
                    <article class="message is-success">
                        <div class="message-header">
                          <p>${response.data[0].word}</p><p> ${response.data[0].phonetic}</p>
                        </div>
                      </article>
                </div>
                <div class="block">
                    <article class="message is-warning has-text-centered">
                        <div class="message-header">
                          <p>${response.data[0].meanings[0].definitions[1].definition}</p>
                        </div>
                      </article>
                </div>
                <div class="block">
                <article class="message is-warning has-text-centered">
                    <div class="message-header">
                      <p>${response.data[0].meanings[0].definitions[0].definition}</p>
                    </div>
                  </article>
            </div>
                <div class="block">
                    <article class="message is-info has-text-centered">
                        <div class="message-header">
                          <p>${response.data[0].meanings[0].definitions[2].example}</p>
                        </div>
                      </article>
                </div>
                <div class="block">
                    <article class="message is-info has-text-centered">
                        <div class="message-header">
                          <p>${response.data[0].meanings[0].definitions[1].example}</p>
                        </div>
                      </article>
                </div>
                <div class="block">
                    <article class="message is-primary has-text-centered">
                        <div class="message-header">
                          <p>${response.data[0].meanings[0].synonyms[0]}</p>
                          <p>${response.data[0].meanings[0].synonyms[1]}</p>
                          <p>${response.data[0].meanings[0].synonyms[2]}</p>
                          <p>${response.data[0].meanings[0].synonyms[3]}</p>
                        </div>
                      </article>
                </div>
                <div class="block">
                    <article class="message is-danger has-text-centered">
                        <div class="message-header">
                          <p>${response.data[0].meanings[0].antonyms[0]}</p>
                          <p>${response.data[0].meanings[0].antonyms[1]}</p>
                          <p>${response.data[0].meanings[0].antonyms[2]}</p>
                          <p>${response.data[0].meanings[0].antonyms[3]}</p>
                        </div>
                      </article>
                </div>
            </div>
        </section>
    `;
    input.value = '';
}