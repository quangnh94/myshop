var administrator = {};

administrator.init = function () {
    setTimeout(function () {
        administrator.getItem();
    }, 200);
};

administrator.define = function (id, type) {
    var key_id = $('tr[auth-id=' + id + ']').attr('auth-id');
    var group_key = key_id.split('_')[0];

    var data = {};
    data.alias = $('tr[auth-id=' + id + '] input[name=alias]').val();
    data.group = $('tr[auth-id=' + group_key + '] select[name=group_id]').val();
    data.name = id;
    data.type = type;

    if (data.group == null) {
        popup.msg("Vui lòng tạo nhóm quyền trước khi thực hiện thao tác này");
        return false;
    }

    if (data.alias == '') {
        popup.msg("Vui lòng nhập tên quyền định nghĩa tiếng việt");
        return false;
    }

    $.ajax({
        url: baseUrl + 'administrator/defineauth',
        type: "post",
        data: data,
        beforeSend: function () {

        },
        complete: function () {
            $('tr[auth-id=' + id + ']').css('background', '#dff0d8');
        },
        success: function (result) {
            if (result.success) {

            }
        }
    });
};

administrator.getItem = function () {
    $.ajax({
        url: baseUrl + 'administrator/item',
        type: "post",
        success: function (result) {
            if (result.success) {
                $.each(result.data, function (key, val) {
                    $("tr[auth-id='" + val.name + "']").find('input[name=alias]').val(val.alias);
                    $("tr[auth-id='" + val.name + "']").find('select[name=group_id]').val(val.group_id);
                });
            }
        }
    });
};

administrator.assign = function (id) {
    $.ajax({
        url: baseUrl + 'administrator/getigroup',
        type: "post",
        data: {id: id},
        success: function (result) {
            if (result.success) {
                popup.open('assign-popup', 'Cấp quyền tài khoản', tmpl('/administrator/assign.tpl', result), [
                    {
                        title: '<span><i class="fa fa-check-square-o"></i> Chọn tất cả<span>',
                        style: 'btn btn-primary',
                        fn: function () {
                            $.each($('.body-assign input[type=checkbox]'), function () {
                                $(this).attr('checked', 'checked');
                            });
                        }
                    },
                    {
                        title: '<span data-rel="btn"><i class="fa fa-cog"></i> Cấp quyền<span>',
                        style: 'btn btn-success',
                        fn: function () {
                            var indexArr = [];
                            $.each($('.body-assign input[type=checkbox]'), function () {
                                if ($(this).is(':checked')) {
                                    if (indexArr.indexOf($(this).val()) == -1) {
                                        indexArr.push($(this).val());
                                    }
                                }
                            });

                            $.ajax({
                                url: baseUrl + 'administrator/assigndata',
                                type: "post",
                                data: {data: indexArr, id: id},
                                beforeSend: function () {
                                    $('span[data-rel=btn] i').removeClass('fa fa-cog').addClass('fa fa-cog fa-spin');
                                    $('#popup-cmd-assign-popup-1').prop('disabled', true);
                                },
                                complete: function () {
                                    $('span[data-rel=btn] i').removeClass('fa fa-cog fa-spin').addClass('fa fa-cog');
                                    $('#popup-cmd-assign-popup-1').prop('disabled', false);
                                },
                                success: function (resp) {
                                    if (resp.success) {
                                        popup.msg(resp.message);
                                    }
                                }
                            });
                        }
                    },
                    {
                        title: '<span><i class="fa fa-random"></i> Hủy bỏ<span>',
                        style: 'btn btn-danger',
                        fn: function () {
                            popup.close('assign-popup');
                        }
                    },
                ]);
            }

            if (typeof result.data != 'undefined' && result.data.assign != null) {
                $.each(result.data.assign, function (key, val) {
                    $('input[value="' + val.item_name + '"]').attr('checked', 'checked');
                });
            }

        }
    });

};
