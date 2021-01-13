export default {
  shouldRender(attrs, ctx) {
    return ctx.siteSettings.multilingual_enabled &&
           ctx.siteSettings.multilingual_guest_language_switcher === "footer";
  }
}