const {
  reddit__question__banner,
  shareButtons,
  // nextPrevious,
  patreonLink,
} = require('../component/componentTemplates');

const practicesTemplate = (practice, practices) => `
  <div class="single__wrapper practices__wrapper">

  <h1 class="single__title">${practice.title} <img src="/images/logo.png" class="logo__square" alt=""/></h1>

  <div class="homepage__process single__homepage__process">
    <div class="homepage__process__title__container">
      <span><h3 class="homepage__process__title">tldr;</h3></span>
      <span><h3 class="homepage__process__subtitle">${practice.category}</h3></span>
    </div>
    <!-- <div style="display: flex;"> -->
      ${practice.what && `<div class="homepage__process__text homepage__process__text--practice"><b>What</b><p>${practice.what}</p></div>`}
      ${practice.how && `<div class="homepage__process__text homepage__process__text--practice"><b>How</b><p>${practice.how}</p></div>`}
      ${practice.when && `<div class="homepage__process__text homepage__process__text--practice"><b>When</b><p>${practice.when}</p></div>`}
      ${practice.duration && `<div class="homepage__process__text homepage__process__text--practice"><b>Duration</b><p>${practice.duration}</p></div>`}
    <!-- </div> -->
  </div>
  <span><span class="homepage__process__link">${practice.date}</span></span>
  </div>

  ${patreonLink()}

  <div class="single__wrapper">
    <div class="single__content">
      ${practice.content}

      partial "similar_practices.html", %{ practices: @practices, category: ${practice.categories} }
    </div>
    ${shareButtons(practice.permalink)}
  </div>

  ${reddit__question__banner()}

  <div class="single__wrapper">
    <div class="single__content">
      <h2 style="margin-bottom: 1.9rem;">Latest Posts</h2>
      ${latest_posts(practices)}

      <div class="button__wrapper">
        <a
          class="button"
          href="/practices"
          >Want More Practices?</a
        >
      </div>
    </div>
  </div>

  <div style="margin-top: 5rem;"></div>
`;

module.exports = practicesTemplate;