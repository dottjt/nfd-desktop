const {
  reddit__question__banner,
  shareButtons,
  // nextPrevious,
} = require('./componentTemplates');


const articlesTemplate = (article, articles) => `
  <div class="single__wrapper practices__wrapper">
    <h1 class="single__title">${article.title} <img src="/images/logo.png" class="logo__square" alt=""/></h1>

    <div class="homepage__process single__homepage__process">
      <span><h3 class="homepage__process__title">
        tldr;
      </h3></span>

      ${article.tldr1 && `<p class="homepage__process__text homepage__process__text--practice">${article.tldr1}</p>`}
      ${article.tldr2 && `<p class="homepage__process__text homepage__process__text--practice">${article.tldr2}</p>`}
      ${article.tldr3 && `<p class="homepage__process__text homepage__process__text--practice">${article.tldr3}</p>`}
      ${article.tldr4 && `<p class="homepage__process__text homepage__process__text--practice">${article.tldr4}</p>`}
      ${article.tldr5 && `<p class="homepage__process__text homepage__process__text--practice">${article.tldr5}</p>`}
    </div>
    <span><span class="homepage__process__link">${article.date}</span></span>
  </div>

  <%= partial "links/patreon.html", assigns %>

  <div class="single__wrapper">
    <div class="single__content">
      ${article.content}
    </div>

    ${shareButtons()}
  </div>

  ${reddit__question__banner()}

  <div class="single__wrapper">
    <div class="single__content">

      <h2 style="margin-bottom: 1.9rem;">Latest Posts</h2>
      ${latest_posts(articles)}

      <div class="button__wrapper">
        <a
          class="button"
          href="/articles"
          >Want More Articles?</a
        >
      </div>

    </div>
  </div>

  <%= partial "subscriber/seven_day_kickstarter_banner.html", %{ conn: @conn, seven_day_kickstarter_changeset: @seven_day_kickstarter_changeset } %>
  <div style="margin-top: 5rem;"></div>
  <%= partial "links/loginregister.html", assigns %>
`

module.exports = articlesTemplate;
