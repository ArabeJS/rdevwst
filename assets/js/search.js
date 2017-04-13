---
---
  
  
(function($) {
  $.fn.tmpl = function(obj) {
    var _this = this,
      el = $(this);

    return (function() {
      var original = el.html();

      el.html(el.html().replace(/{{([^}}]+)}}/g, function(wholeMatch, key) {
        var substitution = obj[$.trim(key)];

        return typeof substitution == 'undefined' ? wholeMatch : substitution;
      }));

      return el.html() == original ? _this : $(el).tmpl(obj);
    })();
  };
})(jQuery);

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
    var reg = new RegExp(inp, "i");
    var res = '';
    $.each(RDdata, function(key, val){
      if (val.title.search(regex) != -1)) {
        res+= val.title;//$("#div1").load("demo_test.txt");
      }
    }
    console.log(res);
  });

});



// develope with ❤ by RDev ...
