const headerTemplate = () => `
  <nav class="header">
    <!-- <%#=/*  <a href="/" class="header__logo__wrapper">
      <h1 class="header__logo">NeverFap <span class="deluxe__font">Deluxe</span> <i class="em em-rainbow"></i></h1>
    </a>  %> -->
    <ul class="header__links">

      <!-- HOME -->
      <a id="link__home" class="header__link__wrapper" href="/">
        <li class="header__link">Home</li>
      </a>
      <div class="header__sub header__banner__home">
        <div class="header__module" style="cursor: initial;">
          <div style="display: flex; align-items: flex-start; justify-content: space-between;">
            <h3 class="h3__yus h3__header" style="margin-bottom: 1.1rem;">NeverFap <span class="deluxe__font--only">Deluxe</span></h3>
            <h3 class="h3__reade h3__header">The Reade &copy;</h3>
          </div>
          <h2>The King Of Porn Addiction Recovery. <i class="em em-crown"></i></h2>
        </div>
        <div class="header__module" style="cursor: initial;">
          <p>NeverFap Deluxe is a porn addiction recovery process which focuses on the use of meditation and awareness in order to develop control over our minds.</p>
        </div>
      </div>


      <!-- Guide -->
      <a id="link__guide" class="header__link__wrapper header__link__wrapper--main" href="/guide">
        <li class="header__link">Guide</li>
      </a>
      <div class="header__sub header__banner__guide">
        <a href="/guide" class="header__module header__module--flex">
          <h3 class="h3__yus">
            NeverFap Deluxe Guide
            <span class="h3__tiny">/guide</span>
          </h3>
        </a>
        <a href="/summary" class="header__module header__module--flex">
          <h3 class="h3__yus">
            NeverFap Deluxe Summary
            <span class="h3__tiny">/summary</span>
          </h3>
        </a>
        <a href="/seven-day-neverfap-deluxe-kickstarter/" class="header__module header__module--flex">
          <h3 class="h3__yus">
            7 Day NeverFap Deluxe Kickstarter
            <span class="h3__tiny">/seven-day-neverfap-deluxe-kickstarter</span>
          </h3>
        </a>
      </div>


      <!-- Articles -->
      <a id="link__articles" class="header__link__wrapper" href="/articles">
        <li id='articles__click' class="header__link">Articles</li>
      </a>

      <!-- @conn.assigns.item -->
      <div class="header__sub header__banner__articles">
        <a href="/articles" class="header__module header__module--flex">
          <h3 class="h3__yus">
            NeverFap Deluxe Articles
            <span class="h3__tiny">/articles</span>
          </h3>
        </a>
        <a href="/quotes" class="header__module header__module--flex">
          <h3 class="h3__yus">
            NeverFap Deluxe Quotes
            <span class="h3__tiny">/quotes</span>
          </h3>
        </a>
      </div>


      <!-- Practices -->
      <a id="link__practices" class="header__link__wrapper header__link__wrapper--main" href="/practices">
        <li class="header__link">Practices</li>
      </a>
      <div class="header__sub header__banner__practices">
        <a href="/practices" class="header__module">
          <h3 class="h3__yus">
            NeverFap Deluxe Practices
            <span class="h3__tiny">/practices</span>
          </h3>
        </a>
        <a href="/meditation" class="header__module">
          <h3 class="h3__yus">
            NeverFap Deluxe Guided Meditations
            <span class="h3__tiny">/meditation</span>
          </h3>
        </a>
      </div>

      <!-- PODCAST -->
      <a id="link__podcast" class="header__link__wrapper header__link__wrapper--disappear" href="/podcast">
        <li class="header__link">Podcast</li>
      </a>
      <div class="header__sub header__banner__podcast">
        <a href="/podcast" class="header__module">
          <h3 class="h3__yus">
            NeverFap Deluxe Podcast
            <span class="h3__tiny">/podcast</span>
          </h3>
        </a>

        <div class="header__module" style="cursor: initial;">
          <p>Available on iTunes, Spotify and Castbox.</p>
        </div>
      </div>

      <!-- COMMUNITY -->
      <a id="link__community" class="header__link__wrapper header__link__wrapper--disappear" href="/community">
        <li class="header__link">Community</li>
      </a>
      <div class="header__sub header__banner__community">
        <div class="header__module" style="cursor: initial;">
          <a class="header__discord__button" href="<%= Application.get_env(:nfd, :social_discord_url) %>"><img class="header__discord__button__logo" src="/images/discord__logo.png"/></a>
          <a class="header__discord__button" href="<%= Application.get_env(:nfd, :social_reddit_url) %>"><img class="header__reddit__button__logo" src="/images/reddit__logo.png" /></a>
          <a class="header__discord__button" href="<%= Application.get_env(:nfd, :social_instagram_url) %>"><img class="header__instagram__button__logo" src="/images/instagram__logo.png"/></a>
          <a class="header__discord__button" href="<%= Application.get_env(:nfd, :social_facebook_url) %>"><img class="header__facebook__button__logo" src="/images/facebook__logo.png"/></a>
          <a class="header__discord__button" href="<%= Application.get_env(:nfd, :social_twitter_url) %>"><img class="header__twitter__button__logo" src="/images/twitter__logo__blue.png" /></a>
          <a class="header__discord__button" href="<%= Application.get_env(:nfd, :social_patreon_url) %>"><img class="header__patreon__button__logo" src="/images/patreon__logo.jpg" /></a>
        </div>

        <a href="/accountability-program" class="header__module">
          <h3 class="h3__yus">
            #accountability program
            <span class="h3__tiny">/accountability-program</span>
          </h3>
        </a>
        <a href="/new-neverfapper-reddit-guidelines" class="header__module">
          <h3 class="h3__yus">
            r/NeverFapDeluxe
            <span class="h3__tiny">/new-neverfapper-reddit-guidelines</span>
          </h3>
        </a>
      </div>


      <!-- ABOUT -->
      <a id="link__about" class="header__link__wrapper header__link__wrapper--disappear" href="/about">
        <li class="header__link">About</li>
      </a>
      <div class="header__sub header__banner__about">
        <a href="/about" class="header__module">
          <h3 class="h3__yus">
            About NeverFap Deluxe
            <span class="h3__tiny">/about</span>
          </h3>
        </a>
        <a href="/contact" class="header__module">
          <h3 class="h3__yus">
            Contact Daddy Reade
            <span class="h3__tiny">/contact</span>
          </h3>
        </a>
      </div>
    </ul>

    <!-- "mobile_menu_overlay.html" -->
  </nav>

  <script src='<%= Routes.static_path(@conn, "/js/header.js") %>'></script>
`;