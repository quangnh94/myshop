(function () {

    function Popup() {
        this.open = function (id, title, content, cmd, type) {
            if ($('#' + id).length > 0) {
                $('#' + id).remove();
            }
            if (type === '') {
                type = '';
            }

            $('body:first').append('<div aria-hidden="true" class="modal fade" id="' + id + '">\
                <div class="modal-dialog ' + type + '">\
                    <div class="modal-content">\
                        <div class="modal-header">\
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                            ' + (title === null || title === '' ? '' : '<h4 class="modal-title">' + title + '</h4>') + '\
                        </div>\
                        <div class="modal-body">' + content + '</div>\
                        <div class="modal-footer"></div>\
                    </div>\
                </div>\
            </div>');
            $('#' + id + ' .close').click(function () {
                popup.close(id);
            });

            if (cmd) {
                for (var i = 0; i < cmd.length; i++) {
                    $('#' + id + ' .modal-footer').append('<button type="button" class="btn ' + cmd[i].style + '" id="' + 'popup-cmd-' + id + '-' + i + '">' + cmd[i].title + '</button>');
                    $('#' + 'popup-cmd-' + id + '-' + i).click(cmd[i].fn);
                }
            }

            var option = {};
            //option.backdrop = 'static';
            $('#' + id).modal(option);

            $('body').keydown(function (e) {
                if (e.keyCode === 27) {
                    popup.close(id);
                }
            });

        };

        this.close = function (id) {
            $('#' + id).modal('hide');
        };


        this.msg = function (msg, fn) {
            this.open('popup-msg', 'Thông báo', '<div style="min-width: 300px">' + msg + '</div>', [{
                    title: "Đồng ý",
                    style: "btn-primary",
                    fn: function () {
                        if (fn) {
                            fn();
                        }
                        popup.close('popup-msg');
                    }
                }]);
        };

        this.confirm = function (msg, fn) {
            this.open('popup-confirm', 'Xác nhận', '<div class="container" style="min-width: 300px">' + msg + '</div>', [{
                    title: "Đồng ý",
                    style: "btn-primary",
                    fn: function () {
                        fn();
                        popup.close('popup-confirm');
                    }
                }, {
                    title: 'Từ chối',
                    fn: function () {
                        popup.close('popup-confirm');
                    }
                }]);
        };
    }

    function Loading() {
        this.show = function () {
            if ($('#loading').length <= 0) {
                $('body').append('<div id="loading" class="ajax-loader-bg"><div class="ajax-loader"></div></div>');
            }
        };
        this.hide = function () {
            $('#loading').remove();
        };

    }

    this.loading = new Loading();
    this.popup = new Popup();

})();