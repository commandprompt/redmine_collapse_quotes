$(function() {
  let hist_selector = '#history > div.has-notes';
  // redmine v4 has different journal layout, try to autodetect the correct selector
  if($('#tab-content-history').length) {
    hist_selector = '#history > #tab-content-history > div.has-notes'
  }

  $(hist_selector).each(function(i) {
    $(this).find("blockquote").each(function(i) {
      q = $(this);
      if (q.height() < 100)
        return;

      a = '<a class="toggle-quoted-text quoted-text-collapsed" href="#" onclick="return toggleQuotedTextVisibility(this);">' + getShowQuotedTextString() + '</a>';
      q.before(a);
      q.hide();
    });
  });
});

function toggleQuotedTextVisibility(a) {
  a = $(a);
  q = a.next("blockquote");
  q.toggle();
  // reflect current visibility state
  if (q.is(':visible')) {
    a.text(getHideQuotedTextString());
    a.removeClass("quoted-text-collapsed");
    a.addClass("quoted-text-expanded");
  } else {
    a.text(getShowQuotedTextString());
    a.addClass("quoted-text-collapsed");
    a.removeClass("quoted-text-expanded");
  }
  return false;
}
