$(function () {
    var base = window.base_font_size || 16,
        selected = window.selected_font_size || 16;

    function load_css () {
        $.ajax({
            url: '/static/normalize.css/normalize.css',
            success: function (d) {
                var base_size = selected / base;
                var string = d.replace(/{{ base_font_size_px }}/g, (base_size * 16) + 'px').replace(/{{ base_font_size_em }}/g, base_size + 'em');
                $('#css .content').html(string);
                highlight();
            }
        });
    };

	
	
    (function () {
        var $base_table = $('.base-table'),
            $body_table = $('.body-table'),
            $custom_base = $('.custom-base'),
            $custom_px = $('.custom-px'),
            $custom_em = $('.custom-em'),
            $custom_result = $('.custom-result'),
            $convert_button = $('.convert-button');


        function build_table (root) {
            var html = [];
            for (var x = 6; x <= 24; x++) {
                html.push(
                    '<tr class="' + ((x + 1) % 2 ? 'odd' : 'even') + (selected == x ? ' selected' : '') + (root == x ? ' base' : '') + '">',
                        '<td>' + x + 'px</td>',
                        '<td>' + (x / root).toFixed(3) + 'em</td>',
                        '<td>' + (x / root * 100).toFixed(1) + '%</td>',
                        '<td>' + Math.round(x * .75) + 'pt</td>',
                    '</tr>'
                );
            }
            return html.join('');
        };
		

        function reset_calc () {
            $custom_base.val(selected);
            clear_calc();
        };
		
		

        function clear_calc () {
            $custom_px.val('');
            $custom_em.val('');
            $custom_result.text('');
        };

        function do_calc () {
            var px_val = $custom_px.val().replace(/[^0-9.]/g, ''),
                em_val = $custom_em.val().replace(/[^0-9.]/g, ''),
                base_val = $custom_base.val().replace(/[^0-9.]/g, '');

            if (base_val && px_val) {
                $custom_result.text((px_val / base_val).toFixed(3) + 'em');
            }
            else if (base_val && em_val) {
                $custom_result.text(parseInt(em_val * base_val) + 'px');
            }
            else {
                return;
            }
        };
        
        $base_table.find('tbody').html(build_table(base)).on('click', 'tr', function (e) {
            e.preventDefault();
            var $el = $(this);
            $el.addClass('selected').siblings().removeClass('selected');
            selected = $el.children('td:first').text().slice(0, -2);
            $body_table.find('tbody').html(build_table(selected));
            reset_calc();
        }).find('tr:eq(' + (selected - 6) + ')').trigger('click');
		
		
        $custom_px.on('focus', function (e) {
            clear_calc();
        }).on('keypress', function (e) {
            if (e.keyCode == 13) {
                do_calc();
            }
        });
		
		

        $custom_em.on('focus', function (e) {
            clear_calc();
        }).on('keypress', function (e) {
            if (e.keyCode == 13) {
                do_calc();
            }
        });

        $convert_button.on('click', function (e) {
            e.preventDefault();
            do_calc();
        });
    })();

	
    (function () {
        var current_page = '#convert';
        var $pages = $('.page');

        $('.menu').on('click', '.menu-item-link', function (e) {
            e.preventDefault();
            var $el = $(this);
            var page = $el.attr('href');
            if (page == current_page) {
                return;
            }
			
            $pages.addClass('hide').filter(current_page = page).removeClass('hide');
            $el.closest('li').addClass('current').siblings().removeClass('current');
            if (page == '#css') {
                load_css();
            }
        });
    })();
});