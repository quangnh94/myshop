(function () {

    this.template = function (selector, data) {
        var html = $(selector).html();
        Mustache.parse(html);
        return Mustache.render(html, data);
    };

    this.tmpl = function (template, data) {
        return new EJS({url: baseUrl + '/tpl' + template}).render(data);
    };
})();