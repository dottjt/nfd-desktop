const headTemplate = './headTemplate';
const headerTemplate = './headerTemplate';
const footerTemplate = './footerTemplate';

const layoutTemplate = (content) => `
  <!DOCTYPE html >
  <html lang="en">

    ${headTemplate()}

    <body>
      <div id="mobile__menu__overlay__background__id" class="mobile__menu__overlay__background"></div>

      ${headerTemplate()}

      <main role="main" class="main" id="content">
        ${content}
      </main>
      ${footerTemplate()}

      <script type="text/javascript" src="<%= Routes.static_path(@conn, "/js/app.js") %>"></script>
    </body>

  </html>
`;
