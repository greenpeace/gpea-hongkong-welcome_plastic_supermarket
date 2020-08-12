const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
// @see https://github.com/chrisvfritz/prerender-spa-plugin

const extraScripts = `
    <script>
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-M6LZL75");
    </script>
`;

module.exports = {
  // options...
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://api.greenpeace.org.hk/2020/petition/zh-hk.2020.oceans.plastic_supermarket.general.signup.na.mc/"
      : "/",
  outputDir: "build",
  assetsDir: "static",
  filenameHashing: true,
  configureWebpack: {
    plugins:
      process.env.NODE_ENV === "production"
        ? [
            new PrerenderSPAPlugin({
              // Required - The path to the webpack-outputted app to prerender.
              staticDir: path.join(__dirname, "build"),
              // Required - Routes to render.
              routes: ["/"],
              //
              postProcess(renderedRoute) {
                renderedRoute.html = renderedRoute.html.replace(
                  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                  ""
                );
                const bodyEnd = renderedRoute.html.indexOf("</body>");
                renderedRoute.html =
                  renderedRoute.html.substr(0, bodyEnd) +
                  extraScripts +
                  renderedRoute.html.substr(bodyEnd);
                return renderedRoute;
              }
            })
          ]
        : []
  },
  devServer: {
    disableHostCheck: true
  }
};
