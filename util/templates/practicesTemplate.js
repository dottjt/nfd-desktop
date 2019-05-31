

const practicesTemplate = () => `
  <div class="single__wrapper practices__wrapper">

  <h1 class="single__title"><%= @item["title"] %> <img src="/images/logo.png" class="logo__square" alt=""/></h1>

  <div class="homepage__process single__homepage__process">
    <div class="homepage__process__title__container">
      <span><h3 class="homepage__process__title">tldr;</h3></span>
      <span><h3 class="homepage__process__subtitle"><%= @item["category"] %></h3></span>
    </div>
    <!-- <div style="display: flex;"> -->
      <%= if @item["what"] do %><div class="homepage__process__text homepage__process__text--practice"><b>What</b><p><%= raw @item["what"] %></p></div><% end %>
      <%= if @item["how"] do %><div class="homepage__process__text homepage__process__text--practice"><b>How</b><p><%= raw @item["how"] %></p></div><% end %>
      <%= if @item["when"] do %><div class="homepage__process__text homepage__process__text--practice"><b>When</b><p><%= raw @item["when"] %></p></div><% end %>
      <%= if @item["duration"] do %><div class="homepage__process__text homepage__process__text--practice"><b>Duration</b><p><%= raw @item["duration"] %></p></div><% end %>
    <!-- </div> -->
  </div>
  <span><span class="homepage__process__link"><%= @item["date"] %></span></span>
  </div>

  <%= partial "links/patreon.html", assigns %>

  <div class="single__wrapper">
  <div class="single__content">
    <%= raw @item["content"] %>

    <%= partial "similar_practices.html", %{ practices: @practices, category: @item["categories"] } %>
  </div>

  <%= partial "share_buttons.html", %{permalink: @item["permalink"] } %>
  <%= partial "next_prev_buttons.html", %{nextArticle: @nextArticle, previousArticle: @previousArticle } %>
  </div>

  <%= partial "reddit_question_banner.html", assigns %>

  <div class="single__wrapper">
  <div class="single__content">
    <h2 style="margin-bottom: 1.9rem;">Latest Posts</h2>
    <%= partial "latest_posts.html", %{ items: @articles } %>

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
`;

module.exports = practicesTemplate;