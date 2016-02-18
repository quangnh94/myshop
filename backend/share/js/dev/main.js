$(document).ready(function () {
    /* Xóa index không cần thiết */
    $('li[data-item=home_index]').remove();

    /* Thực hiện các bước tạo menu */
    $.each($('li[data-nav]'), function () {
        $.each($(this).find('li'), function () {
            var li = this;
            var flag = false;
            $.each(assignments, function () {
                if (this.item_name.indexOf($(li).attr('data-item') !== -1)) {
                    flag = true;
                    return false;
                }
            });

            if (!flag)
                $(li).remove();
        });

        if ($(this).find('li').length == 0) {
            $(this).remove();
        } else
            $(this).fadeIn('slow');
    });

    var url = window.location;
    var element = $('ul.treeview-menu a').filter(function () {
        return this.href == url || url.href.indexOf(this.href.split('/')[this.href.split('/').length - 1]) >= 0;
    }).addClass('active').parent().parent().parent();

    if (element.is('li')) {
        element.addClass('active');
    }

});