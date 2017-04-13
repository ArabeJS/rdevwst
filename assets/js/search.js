---
---

(function($) {
    $.fn.onEnter = function(func) {
        this.bind('keypress', function(e) {
            if (e.keyCode == 13) func.apply(this, [e]);
        });
        return this;
     };
})(jQuery);

$(document).ready(function() {
  var RDdata = [
    {% for post in site.posts %}
      {
        'title': "{{ post.title }}",
        'img':'{{ post.thumb }}',
        'url':'{{ site.baseurl }}{{ post.url }}'
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  $("#RD-si").onEnter( function() {
    var inp = $("#RD-si").val();
    var res = RDdata.search(inp);
    console.log(res);
  });

});
// develope with ❤ by RDev
