(function () {
    $(function () {
        $('.site__content-wrap').each(function () {
            if (document.body.offsetWidth > 900) {
                var aside = $('.site__aside').height();
                var wrap = $('.site__content-wrap').height();
                if (aside > wrap) {
                    $(this).css('height', aside);
                }
            }
        });
        $('.sub-menu').each(function () {
            subMenu($(this));
        });
    });
    $(window).on({
        'resize': function () {
            if ($(window).width() > 1006) {
                siteHeight()
            } else {
                $('.site__content-wrap').css('min-height', '100%')
            }
        }, 'load': function () {
            if ($(window).width() > 1006) {
                siteHeight()
            }
        }
    });
    function siteHeight() {
        var elemHeight = $('.site__aside').outerHeight();
        $('.site__content-wrap').css({'min-height': '100%'});
    }

    $(".scrool-to-bottom").click(function () {
        $("html, body").animate({scrollTop: $(document).height()}, 600);
    })
    $(".scrool-to-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 500);
    })
    var subMenu = function (obj) {
        var _obj = obj, _site = $('.site'), _btn = obj.parent('li'), _window = $(window), _windowWidth = $(window).width();
        var _addEvents = function () {
            _windowWidth = $(window).width();
            _window.on({
                resize: function () {
                    if (_windowWidth <= 749) {
                        $('.header__menu li').removeClass('active');
                        $('.header__menu li ul').css('display', 'none');
                    }
                }
            });
            _btn.on({
                click: function () {
                    if (_btn.hasClass('active')) {
                        _obj.slideUp(500);
                        _btn.removeClass('active');
                    } else {
                        $('.header__menu li').removeClass('active');
                        $('.header__menu li ul').slideUp(500);
                        $(this).addClass('active');
                        _obj.slideDown(500);
                    }
                    return false
                }
            });
        }, _init = function () {
            _addEvents();
        };
        _init();
    };
})();
var toc_clicks = 1;
var par_clicks = 1;
var kw_clicks = 0;
var arr_blanks = [];
var block_classname = 'img_block';
var stop_img = 0;
var lock_img = 0;
var prefix = $('.base').html();
$(document).ready(function () {
    function ucfirst(str) {
        var text = str;
        var parts = text.split(' '), len = parts.length, i, words = [];
        for (i = 0; i < len; i++) {
            var part = parts[i];
            var first = part[0].toUpperCase();
            var rest = part.substring(1, part.length);
            var word = first + rest;
            words.push(word);
        }
        return words.join(' ');
    };
    $('.cke_dialog_ui_input_text').attr('disabled');
    $('.cke_dialog_ui_input_text').attr('value', '#');
    $('.cke_dialog_ui_input_text').val('#');
    $('#cke_22').click(function () {
        $('.cke_dialog_ui_input_text').val('#');
    });
    var arr = ["uk", "usa", "aus", "can", "af", "ger", "all", "recommended", "new", "popular", "safeestonlinecasinos", "ios_apple", "android", "noDepositBonus", "freeplay", "spins", "bingo", "blackjack", "classicslots", "craps", "keno", "other", "roulette", "scrachcards", "tablegames", "videopoker", "videoslots", "flashcasinos", "ecogra", "livedealer", "maccasinos", "paypal", "linuxcasinos"];
    var soft_arr = ["amuzi", "b3w", "betonsoft", "betsoftgaming", "boss", "cgt", "cozy", "cryptologic", "dg", "game_os", "globotech", "gtech", "hpg", "igsonline", "igt", "isoftbet", "merkurgaming", "microgaming", "nektan", "neogames", "netent", "nextgen", "novomatic", "nuworks", "orax", "parlaygames", "playtech", "probability", "realtime", "rival", "skillonnet", "slotland", "theartofgame", "topgame", "ultraplay", "vig", "wazdan", "wgs", "wm"];
    var menu_id = '';
    var term_click = 0;
    var toc_clicks = 1;
    var par_clicks = 1;
    var kw_clicks = 0;
    var height = $('.header').innerHeight();
    $('.more_progs').click(function () {
        if ($('.more_progs').text() == 'More Softwares') {
            $('#hidden_li').show();
            $('.more_progs').html('Less Softwares');
            if (document.body.offsetWidth >= 900) {
                var aside = $('.site__aside').height();
                var wrap = $('.site__content-wrap').height();
                if (aside > wrap) {
                    $('.site__content-wrap').css('height', aside);
                }
            }
        }
        else if ($('.more_progs').text() == 'Less Softwares') {
            $('#hidden_li').hide();
            $('.more_progs').html('More Softwares');
            if (document.body.offsetWidth >= 900) {
                $('.site__content-wrap').attr('style', '');
            }
        }
    });
    $('.related__game').mouseover(function () {
        $(this).children().children().children().css('color', 'white');
    });
    $('.related__game').mouseleave(function () {
        $(this).children().children().children().css('color', '#666');
    });
    $(window).scroll(function () {
        if (stop_img === 0) {
            handle_img();
        }
    });
    $('.hover_li').mouseover(function () {
        if (document.body.offsetWidth >= 900) {
            $(this).children().eq(2).show();
            $(this).children().eq(1).removeClass('triangle_arrow_down');
            $(this).children().eq(1).addClass('triangle_arrow_up');
            $(this).children().eq(1).html('&#9650;');
            $(this).css('background', '#920071');
            $(this).children().eq(1).css('background-repeat', 'no-repeat');
        }
    });
    $('.hover_li').click(function () {
        var content = $(this).children().eq(2);
        if (document.body.offsetWidth < 900) {
            if ($(this).children().eq(1).hasClass('triangle_arrow_up')) {
                console.dir('here');
                var copy = $(this).next();
                $(this).css('background', '#C1008D');
                $(this).children().eq(1).css('background-repeat', 'no-repeat');
                $(this).next().remove();
                console.dir(content);
                $(copy).insertAfter($(this).children().eq(1));
                $(this).children().eq(1).removeClass('triangle_arrow_up');
                $(this).children().eq(1).addClass('triangle_arrow_down');
                $(this).children().eq(1).html('&#9660;');
                $(this).children().eq(2).hide();
            } else {
                $(this).children().eq(2).show();
                $(this).children().eq(1).removeClass('triangle_arrow_down');
                $(this).children().eq(1).addClass('triangle_arrow_up');
                $(this).children().eq(1).html('&#9650;');
                $(this).css('background', '#920071');
                $(this).children().eq(1).css('background-repeat', 'no-repeat');
                $(content).insertAfter($(this));
            }
        }
    });
    $('.hover_li').mouseleave(function () {
        if (document.body.offsetWidth >= 900) {
            $(this).children().eq(2).hide();
            $(this).css('background', 'initial');
            $(this).children().eq(1).removeClass('triangle_arrow_up');
            $(this).children().eq(1).addClass('triangle_arrow_down');
            $(this).children().eq(1).html('&#9660;');
            $(this).children().eq(1).css('background-repeat', 'no-repeat');
            $(this).css('background', '#c1008d');
        }
    });
    $('.login_btn').click(function () {
        var username = $('.username').val();
        var password = $('.password').val();
        $.ajax({
            url: prefix + 'ajax.php?username=' + username + '&password=' + password + '',
            type: 'get'
        }).done(function (data) {
            if (data == '') {
                $('#login_err').show();
            }
            else {
                $('.hide_admin').show();
                $('.admin_wrap').html(data);
                $('#login_err').hide();
                bind_image_btn();
                bind_add_par_btn();
            }
        });
    });
    $('.login_cat__btn').click(function () {
        var username = $('.username').val();
        var password = $('.password').val();
        $.ajax({
            url: prefix + 'ajax.php?username=' + username + '&password=' + password + '&type=categories',
            type: 'get'
        }).done(function (data) {
            if (data == '') {
                $('#login_err').show();
            }
            else {
                $('.hide_admin').show();
                $('.admin_wrap').html(data);
                $('#login_err').hide();
            }
        });
    });
    $('.login_terms_btn').click(function () {
        var username = $('.username').val();
        var password = $('.password').val();
        $.ajax({
            url: prefix + 'ajax.php?username=' + username + '&password=' + password + '&type=terms',
            type: 'get'
        }).done(function (data) {
            if (data == '') {
                $('#login_err').show();
            }
            else {
                $('.hide_admin').show();
                $('.admin_wrap').html(data);
                $('#login_err').hide();
                bind_sb_new(term_click);
            }
        });
    });
    $('#mobile_fr').click(function () {
        var program = $('.mobile_span').attr('id');
        var program_big = ucfirst(program);
        program_big = program_big.replace(/-/g, ' ');
        $.ajax({url: prefix + 'ajax.php?filter=friendly&soft=' + program, type: 'get'}).done(function (data) {
            $('.list_holder').html(data);
            $('.mobile_title').html('Moblie Friendly ' + program_big + ' Casinos');
            bind_mobile_filter(program);
        });
    });
    $('.open-menu').click(function () {
        if (document.body.offsetWidth < 900) {
            if ($(this).hasClass('close-menu')) {
                $(this).removeClass('close-menu');
                $('.site__header').css('height', 'inherit');
                $('.site__header').css('overflow-y', 'visible');
                $('.nav').slideUp('500');
                $('.back2top').css('z-index', '9999');
                $('.header__search').attr('style', '');
                $('.header_searchbox').attr('style', '');
                $('.header_searchbox').removeClass('place_holder_search');
                $('body').css('overflow', 'visible');
                $('.open-menu').append('<style>.open-menu:before{border-top: 2px solid #fff !important;}</style>');
                $('.open-menu').append('<style>.open-menu:after{border-top: 2px solid #fff !important;}</style>');
                $('.open-menu').append('<style>.open-menu span{border-top: 2px solid #fff !important;}</style>');
                $('.open-menu').css('top', '17px');
                $('.open-menu').css('right', '10px');
            } else {
                var height = $('.nav').height() + $('.social_mobile').height();
                console.dir($('.social_mobile').height());
                if ($('.triangle_arrow').hasClass('triangle_arrow_up')) {
                    height = '100%';
                }
                if ($(".nav").height() > $(window).height()) {
                    height = '100%';
                }
                $('.site__header').css('height', height);
                $('.site__header').css('overflow-y', 'scroll');
                $('.header__search').css('margin-left', '0px');
                $('.header__search').css('height', '42px');
                $('.header__search').css('top', '5px');
                $('.header__search').css('left', '-9px');
                $('.header_searchbox').css('height', '42px');
                $('.header__menu').css('top', '-19px');
                $('.header_searchbox').addClass('place_holder_search');
                $('.header_searchbox').css('border', '3px solid #d3d3d3');
                $('.header_searchbox').css('background-position', '99% 56%');
                $('.header_searchbox').css('background-size', '19px');
                $('.header_searchbox').css('padding-top', '9px');
                $('.header_searchbox').css('background-image', 'url("../files/img/Search_03.png")');
                $('body').css('overflow', 'hidden');
                $(this).addClass('close-menu');
                $('.nav').slideDown('500');
                $('.back2top').css('z-index', '1');
                $('.open-menu').append('<style>.open-menu:before{border-top: 0px solid #fff !important;}</style>');
                $('.open-menu').append('<style>.open-menu:after{border-top: 0px solid #fff !important;}</style>');
                $('.open-menu').append('<style>.open-menu span{border-top: 0px solid #fff !important;}</style>');
                $('.open-menu').css('top', '8px');
                $('.open-menu').css('right', '4px');
            }
        }
    });
    $('#all_li').bind('click', function () {
        var program = $('.mobile_span').attr('id');
        var program_big = ucfirst(program);
        program_big = program_big.replace(/-/g, ' ');
        $.ajax({url: prefix + 'ajax.php?filter=all&soft=' + program, type: 'get'}).done(function (data) {
            $('.list_holder').html(data);
            $('.mobile_title').html('List of All ' + program_big + ' Casino Sites')
        });
    });
    $('.rb_input').hover(function () {
        $(this).attr('checked', false);
    })
    $('.all_reviews').on({
        'click': function () {
            $('html, body').animate({scrollTop: 2500}, 600);
        }
    });
    $('.add-review').click(function () {
        if (document.body.offsetWidth >= 900) {
            var offset = 300;
        } else if (document.body.offsetWidth < 768) {
            var offset = 170;
        } else {
            var offset = 110;
        }
        $('html, body').animate({scrollTop: offset}, 600);
    });
    $('.add_h2').click(function () {
        $('.h2_div').append('<input type="text" class="h2_input"><input type="button" value="Add Text" class="add_h2_text"><br>');
        add_h2_text();
    });
    $('.add_h3').click(function () {
        $('.h3_div').append('<input type="text" class="h3_input"><input type="button" value="Add Text" class="add_h3_text"><br>');
        add_h3_text();
    });
    $('.add_list').click(function () {
        $('.list_div').append('<input type="text" class="list_input"><br>');
    });
    $('.add_list_text').bind('click', function () {
        var final_val = '';
        var class_num = document.getElementsByClassName("list_input");
        var length = class_num.length;
        for (var i = 0; i < length; i++) {
            var val = $(class_num[i]).val();
            if (val != '') {
                final_val += '<li class="contents-item">' + val + '</li>';
            }
        }
        $('.list_div').html('');
        if (final_val != '') {
            var ul = '<ul class="table-of-contents">' + final_val + '</ul>';
            $('.text_area').val($('.text_area').val() + ul);
        }
    });
    $('.add_p').click(function () {
        $('.p_div').append('<input type="text" class="p_input"><input type="button" value="Add Text" class="add_p_text"><br>');
        add_p_text();
    });
    $('.cke_button__link').bind('click', function () {
    });
    $('#cke_182_label').bind('click', function () {
    });
    $('.gold_medal').click(function () {
        $('.silver_medal').removeClass('medal_selected');
        $('.bronze_medal').removeClass('medal_selected');
        $('.black_medal').removeClass('medal_selected');
        $('.gold_medal').toggleClass('medal_selected');
    });
    $('.edit_guide').click(function () {
        var selected_id = $('.guide_ids option:selected').attr('value');
        if (selected_id == 0) {
            $('#select_error').show();
        } else {
            $('#select_error').hide();
            var title = $('.guide_ids option:selected').text();
            var id = $('.guide_ids option:selected').val();
            var title_link = title.replace(/ /g, '-');
            $.ajax({url: "edit_guide.php", type: 'get', cache: false, data: "edit=" + id}).done(function (data) {
                $('.admin_wrap').html(data);
                bind_add_par();
                bind_add_image();
                $('.add_guide').attr('value', 'Save Changes');
                $('.green').remove();
                $('#delete_guide').show();
                $('form').attr('action', 'guide-receive.php?edit=' + id + '');
                $('#edit_title_guide').html('Edit Guide ' + title);
            });
        }
    });
    $('.header__search').click(function () {
        if ($(this).parent().hasClass('mobile-menu')) {
            $('.open-menu').addClass('close-menu');
        }
    });
    $('.add_par_btn').bind('click', function (event) {
        var id = $(this).attr('id');
        var parent = $('#' + id).parent();
        var amount_count = $("[class~='p_order']").length;
        var amount = amount_count + 1;
        $('<br><div class="par_div" id="pr_div_' + amount + '"><div class="par_border"><label class="lable_wrap">Order:</label><input type="text" class="input_wrap p_order" name="p_order[' + par_clicks + '][order]" id="p_order" value="' + amount + '"><br><label class="lable_wrap">Type:</label><input type="text" class="input_wrap" name="p_order[' + par_clicks + '][type]" id="p_type" value="-1"><br><br><label class="lable_wrap">Inner:</label><input type="text" class="input_wrap" name="p_order[' + par_clicks + '][inner]" id="p_inner" value="0"><br><label class="lable_wrap">Title:</label><input type="text" class="input_wrap p_title" name="p_order[' + par_clicks + '][title]" id="p_title"><textarea rows="4" cols="50" name="p_order[' + par_clicks + '][content]" id="g_par_' + amount + '" class="comments__form-message" required=""></textarea><script>	CKEDITOR.replace("g_par_' + amount + '",{height: "300",width: "100%"});</script><br></div><br><input type="button" value="x" id="close_par_row_' + amount + '"  onclick="close_par_div(pr_div_' + amount + ')"/><label class="big_label">Delete Paragraph</label><input class="add_par" id="add_par_' + amount_count + '" type="button" value="+"><label class="label_admin">Add Paragraph</label><input class="add_iamge" id="add_image_' + amount_count + '" type="button" value="+"><label class="lable_wrap">Add Image</label></div><div class="cb"></div><br>').insertAfter(parent);
        $('.cke_dialog_ui_input_text').val('#');
        var order_arr = $("[class~='p_order']");
        for (var i = 0; i < order_arr.length; i++) {
            var item = i + 1;
            $(order_arr[i]).val('' + item);
        }
        par_clicks += 1;
        bind_add_par();
        bind_add_image();
    });
    $('.popup-term').mouseover(function () {
        $(this).children().show();
        $(this).children().css('visibility', 'visible');
    });
    $('.popup-term').mouseleave(function () {
        $(this).children().hide();
        $(this).children().css('visibility', 'hidden');
    });
    $('#btn_sb_new').click(function () {
        term_click += 1;
        var html = $('#select_new_id_0').html();
        $('.cat_div_new').append('<div class="term_inner_div new_inner_div"><select name="new_cat_name[' + term_click + '][name]" class="cat_sb category_select pos_select" id="select_new_id_' + term_click + '">' + html + '</select><input class="cat_post term_post cat_sb term_name" type="text" name="new_cat_name[' + term_click + '][term]" id="term_new_id_' + term_click + '" value="" onclick="bind_add_new_term(' + term_click + ');"><textarea class="cat_post term_post cat_sb term_text" name="new_cat_name[' + term_click + '][meaning]" id="text_new_id_' + term_click + '" value="" onclick="bind_add_new_term(' + term_click + ');"></textarea><input class="cat_post term_post cat_sb term_link" id="link_new_id_' + term_click + '" type="text" name="new_cat_name[' + term_click + '][link]" value=""><input class="term_cb" type="checkbox" name="new_term_cb" id="new_term_cb_' + term_click + '"/><br><span class="error pos_err" id="cat_err_' + term_click + '">Term must have an associated category!</span></div>');
    });
    $('#cke_22').bind('click', function () {
        $('.cke_dialog_ui_input_text').val('#');
    });
    $('.add_toc').click(function () {
        toc_clicks += 1;
        $('.toc_div').append('<div id="tc_div' + toc_clicks + '"><label class="lable_wrap">Inner:</label><input type="text" class="input_wrap" name="toc_inner" id="toc_inner" value="0"><label class="lable_wrap">Order:</label><input type="text" class="input_wrap" value="' + toc_clicks + '" name="toc_order" id="toc_order"><label class="lable_wrap">Tag:</label><input type="text" class="input_wrap" name="toc_tag" id="toc_tag"><label class="lable_wrap">Content:</label><input type="text" class="input_wrap" name="toc_content" id="toc_content"><input type="button" value="x" id="close_toc_row_' + toc_clicks + '"  onclick="close_toc_div(tc_div' + toc_clicks + ')"/></div>');
    });
    $('.add_keyword').click(function () {
        kw_clicks += 1;
        $('.keywords_div').append('<div id="kw_div_' + kw_clicks + '"><label class="lable_wrap">Keyword:</label><input type="text" class="input_wrap" name="g_keyword" id="g_keyword"><label class="lable_wrap">Link:</label><input type="text" class="input_wrap" name="g_link" id="g_link"><input type="button" value="x" id="close_kw_row_' + kw_clicks + '" onclick="close_kw_div(kw_div_' + kw_clicks + ')"/></div>');
    });
    $('.add_guide').mouseover(function () {
        var toc = '';
        var par = '';
        var keywords = '';
        var par_order = $("[name='p_order']");
        var par_content = $("[class~='comments__form-message']");
        var par_title = $("[name='p_title']");
        var keyword = $("[name='g_keyword']");
        var link = $("[name='g_link']");
        var j = 0;
        for (var i = 0; i < par_order.length; i++) {
            var par_order_val = $(par_order[i]).val();
            var par_tag_val = $(par_title[i]).val();
            var par_content_val = $(par_content[i]).val();
            var par_title_val = $(par_title[i]).val();
            par += par_order_val + '*' + par_tag_val + '*' + par_content_val + '*' + par_title_val + '|';
            if (par_title_val !== '') {
                j++;
                toc += j + '*' + par_tag_val + '*' + par_title_val + '|';
            }
        }
        par = par.substring(0, par.length - 1);
        toc = toc.substring(0, toc.length - 1);
        for (var i = 0; i < keyword.length; i++) {
            var keyword_val = $(keyword[i]).val();
            var link_val = $(link[i]).val();
            keywords += keyword_val + '*' + link_val + '|';
        }
        keywords = keywords.substring(0, keywords.length - 1);
        $('.post_par').val(par);
        $('.post_toc').val(toc);
        $('.post_keywords').val(keywords);
    });
    $('.item_text > .software_holder').addClass('holder');
    var readMoreButtonHtml = $('.show-all-text').clone().wrap('<div>').parent().html();
    readMoreButtonHtml = $(readMoreButtonHtml).addClass('read-more-button-inner').hide().wrap('<div>').parent().html();
    $('.holder').find('br').first().after(readMoreButtonHtml);
    $('.show-all-text').not('.read-more-button-inner').addClass('read-more-button-outer');
    $('.read-more-button-inner').find('.read_more_text').text('READ MORE');
    $('.read-more-button-outer').find('.read_more_text').text('READ LESS');
    $('.read-more-button-outer').find('.arrow_text').removeClass('arrow_mobile');
    $('.read-more-button-outer').find('.arrow_text').addClass('arrow_mobile_up');
    $('body').on('click', '.read-more-button-outer', function () {
        $('.holder').find('br').first().hide();
        $('.read-more-button-outer').hide();
        $('.read-more-button-inner').show();
        $('.holder').find('.read-more-button-inner').nextAll().hide();
        $('.text-more').hide();
        $('.medal_panel').hide();
        $('#read-more-clear-after-outer-button').hide();
    });
    $('body').on('click', '.read-more-button-inner', function () {
        $('.holder').find('br').first().show();
        $('.read-more-button-inner').hide();
        $('.holder').find('.read-more-button-inner').nextAll().show();
        $('.read-more-button-outer').show();
        $('.text-more').show();
        $('.medal_panel').show();
        $('#read-more-clear-after-outer-button').show();
    });
    function initializeReadMoreFeature() {
        if ($(window).width() < 750) {
            $('.item_text').css('padding-bottom', '30px');
            $('.read-more-button-outer').show();
            $('.read-more-button-outer').click();
        } else {
            $('.item_text').css('padding-bottom', '20px');
            $('.read-more-button-inner').click();
            $('.read-more-button-outer').hide();
        }
    }

    initializeReadMoreFeature();
    var theWindowWidth;
    $(window).on('load', function () {
        theWindowWidth = $(window).width();
    });
    $(window).on('resize', function () {
        if (theWindowWidth != $(window).width()) {
            theWindowWidth = $(window).width();
            initializeReadMoreFeature();
        }
    });
    $('.subscribe_btn').click(function () {
        var email = $('.subscribe_mail').val();
        var result = check_mail(email);
        if (result == true) {
            $('.subs_mail_error').html('* Invalid Email');
            $('.subs_mail_error').show();
        }
        else {
            $('.subs_mail_error').hide();
            $.ajax({url: prefix + 'ajax.php?subscribe=' + email + '', type: 'get'}).done(function (data) {
                if (data == '') {
                    $('.subs_mail_error').html('* Already Registered');
                    $('.subs_mail_error').show();
                }
                else {
                    $('.subscribe_mail').attr('value', '');
                    $('.subs_mail_error').addClass('mark');
                    $('.subs_mail_error').html('Subscribed');
                    $('.subs_mail_error').show();
                }
            });
        }
    });
    $('.new_prog_li').click(function (e) {
        var val = $(this).html();
        $.ajax({url: prefix + 'ajax.php?new_program=' + val, type: 'get', cache: false}).done(function (data) {
            $('.list_holder > li').each(function () {
                if (!$(this).hasClass('item__table-header')) {
                    $(this).remove();
                }
            });
            $('.list_holder > li.item__table-header').after($(data).find('.list_holder').html());
            bindTooltipForCasinoTags();
            bindTooltipForMoreSoftware();
            $('.mobile_title').html('List of all the Newest ' + val + ' Casinos');
            var year = new Date().getFullYear();
            if (val == 'All Softwares' || val === 'All%20Softwares') {
                $('h1').html('<span class="content__item-icon content__item-icon_table about_logo new_icon_new"></span>New Online Casinos ' + year + '');
            } else {
                $('h1').html('<span class="content__item-icon content__item-icon_table about_logo new_icon_new"></span>New ' + val + ' Casinos ' + year + '');
            }
            var aside = $('.site__aside').height();
            var wrap = $('.site__content-wrap').height();
            if (aside > wrap) {
                $('.site__content-wrap').css('height', aside);
            }
        });
    });
    $('.silver_medal').click(function () {
        $('.gold_medal').removeClass('medal_selected');
        $('.bronze_medal').removeClass('medal_selected');
        $('.black_medal').removeClass('medal_selected');
        $('.silver_medal').toggleClass('medal_selected');
    });
    $('.bronze_medal').click(function () {
        $('.silver_medal').removeClass('medal_selected');
        $('.gold_medal').removeClass('medal_selected');
        $('.black_medal').removeClass('medal_selected');
        $('.bronze_medal').toggleClass('medal_selected');
    });
    $('.black_medal').click(function () {
        $('.silver_medal').removeClass('medal_selected');
        $('.bronze_medal').removeClass('medal_selected');
        $('.gold_medal').removeClass('medal_selected');
        $('.black_medal').toggleClass('medal_selected');
    });
    $('.form_input').focus(function () {
        $(this).css('background', 'white');
        $(this).css('border', '1px solid #e600a8');
    });
    $('.form_input').blur(function () {
        $(this).attr('style', '');
    });
    $('body').on('click', '.medal_points', function (event) {
        $(this).addClass('selected');
        var url = window.location.href;
        url = url.replace(prefix, '');
        if (/^casino\-reviews\//.test(url)) {
            event.preventDefault();
            $(this).find('input[type="radio"]').prop('checked', true);
            var medal = $(this).attr('id');
            medal = medal.replace('_score', '');
            var casinoName = url.match(/\/(.+)\-review$/);
            casinoName = casinoName[1];
            $.ajax({
                'method': 'GET',
                'cache': false,
                'url': prefix + 'ajax.php',
                'data': {'method': 'userRateCasino', 'casinoName': casinoName, 'medal': medal}
            }).done(function (serverResponse) {
                serverResponse = $.trim(serverResponse);
                serverResponse = JSON.parse(serverResponse);
                switch (serverResponse.status) {
                    case'success':
                        $('#server-response-casino-medal-rating').css('color', 'green');
                        $.ajax({
                            'method': 'GET',
                            'cache': false,
                            'url': prefix + 'ajax.php',
                            'data': {'method': 'outputCasinoReviewRanking', 'name': casinoName}
                        }).done(function (responseServer) {
                            $('#review-second-left').find('.add-your__rating').html($(responseServer).find('#review-second-left').find('.add-your__rating').html());
                            $('#review-second-add-your-rating').html($(responseServer).find('#review-second-add-your-rating').html());
                            $('#review-second-left').find('.votes').html($(responseServer).find('#review-second-left').find('.votes').html());
                            $('.casinio-review-first-section-with-stats').html($(responseServer).find('.casinio-review-first-section-with-stats').html());
                        });
                        setTimeout(function () {
                            bindTooltipForCasinoTags();
                        }, 400);
                        break;
                    case'failure':
                        $('#server-response-casino-medal-rating').css('color', 'red');
                        break;
                }
                $('#server-response-casino-medal-rating').html(serverResponse.message);
                if ($(window).width() > 768) {
                    $('#review-second-left, #review-second-right').css('height', '300px');
                } else {
                    $('#review-second-left-wrap').css('height', 'auto');
                    $('#review-second-left').css('height', 'auto');
                }
            });
        }
    });
    $('.add_game_comments').click(function () {
        var game_name = $(this).attr('id');
        var name = $('#name_comment').val();
        var email = $('#mail_comment').val();
        var review = $('.cke_editable_inline').html();
        var error = false;
        var mood = 0;
        if ($('#gold_score').hasClass('selected') == true) {
            mood = 1;
        }
        else if ($('#silver_score').hasClass('selected') == true) {
            mood = 2;
        }
        else if ($('#bronze_score').hasClass('selected') == true) {
            mood = 3;
        }
        else if ($('#black_score').hasClass('selected') == true) {
            mood = 4;
        }
        if (mood == 0) {
            error = true;
            $('.medal_error').show();
        }
        else {
            $('.medal_error').hide();
        }
        if (name == '') {
            error = true;
            $('.name_error').show();
        }
        else {
            $('.name_error').hide();
        }
        if (email.indexOf('.') == -1 || email.indexOf('@') == -1) {
            error = true;
            $('.mail_error').show();
        }
        else {
            $('.mail_error').hide();
        }
        if (error !== true) {
            $.ajax({
                url: prefix + "ajax.php",
                type: 'get',
                data: "game_name=" + game_name + "&name=" + name + "&email=" + email + "&comment=" + review + "&mood=" + mood
            }).done(function (data) {
                var data_arr = data.split('|');
                var real_data = data_arr[0];
                var count = data_arr[1];
                var gold_class = data_arr[2];
                var silver_class = data_arr[3];
                var bronze_class = data_arr[4];
                var black_class = data_arr[5];
                var name = data_arr[6];
                var date = data_arr[7];
                var comment = data_arr[8];
                var score_class = data_arr[9];
                var score = data_arr[10];
                var gold_votes = data_arr[11];
                var silver_votes = data_arr[12];
                var bronze_votes = data_arr[13];
                var black_votes = data_arr[14];
                var rank_medals = '<li class="medal_points" id="gold_score"><input id="choice-a" type="radio" name="g"><label for="choice-a"><span class="medal medal_gold add-your__rating_medal"></span><span class="add-your__rating-checked"></span></label></li><li class="medal_points" id="silver_score"><input id="choice-b" type="radio" name="g"><label for="choice-b"><span class="medal medal_silver add-your__rating_medal"></span><span class="add-your__rating-checked"></span></label></li><li class="medal_points" id="bronze_score"><input id="choice-c" type="radio" name="g"><label for="choice-c"><span class="medal medal_bronze add-your__rating_medal"></span><span class="add-your__rating-checked"></span></label></li><li class="medal_points" id="black_score"><input id="choice-d" type="radio" name="g"><label for="choice-d"><span class="medal medal_black add-your__rating_medal"></span><span class="add-your__rating-checked"></span></label></li>';
                $(real_data).hide().appendTo(".comments_holder").fadeIn(1000);
                $('.dungeons-rating').children().removeClass();
                $('.dungeons-rating').children().addClass(score_class);
                $('.score_place').html(score);
                $('.comments-count').html(count + ' COMMENTS');
                $('.comment_amount').html(count);
                $('.votes_amount').html(count);
                $('#name_comment').val('');
                $('#mail_comment').val('');
                $('.cke_editable ').html('');
                $('.comments-login').html(name);
                $('.comments-time').html(date);
                $('.commnet_place').html(comment);
                var gold_class_remove = $('.scale_gold').attr('class').split(' ')[2];
                $('.scale_gold').removeClass(gold_class_remove);
                var silver_class_remove = $('.scale_silver').attr('class').split(' ')[2];
                $('.scale_silver').removeClass(silver_class_remove);
                var bronze_class_remove = $('.scale_bronze').attr('class').split(' ')[2];
                $('.scale_bronze').removeClass(bronze_class_remove);
                var black_class_remove = $('.scale_blank').attr('class').split(' ')[2];
                $('.scale_blank').removeClass(black_class_remove);
                $('.scale_gold').addClass(gold_class);
                $('.scale_silver').addClass(silver_class);
                $('.scale_bronze').addClass(bronze_class);
                $('.scale_blank').addClass(black_class);
                $('.gold_votes_place').html(gold_votes);
                $('.silver_votes_place').html(silver_votes);
                $('.bronze_votes_place').html(bronze_votes);
                $('.black_votes_place').html(black_votes);
                $('.span_empty').hide();
                $('.comment_div').remove();
                $('.add-your__rating').html(rank_medals);
                $('.medal_points').bind('click', function () {
                    $(this).addClass('selected');
                });
            });
        }
    });
    $('#add_guide_comment').click(function () {
        var guide_id = $(this).attr('guide_id');
        var name = $('#guide_name_comment').val();
        var email = $('#guide_email_comment').val();
        var review = $('#guide_comment').val();
        var error = false;
        if (name == '') {
            error = true;
            $('.guide_name_error').show();
        }
        else {
            $('.guide_name_error').hide();
        }
        if (email.indexOf('.') == -1 || email.indexOf('@') == -1) {
            error = true;
            $('.guide_mail_error').show();
        }
        else {
            $('.guide_mail_error').hide();
        }
        if (error !== true) {
            $.ajax({
                url: prefix + "ajax.php",
                type: 'get',
                data: "guide_id=" + guide_id + "&name=" + name + "&email=" + email + "&comment=" + review
            }).done(function (data) {
                var data_arr = data.split('|');
                var real_data = data_arr[0];
                var count = data_arr[1];
                var name = data_arr[6];
                var date = data_arr[7];
                var comment = data_arr[8];
                $('.comment_div').html('');
                $(real_data).hide().appendTo(".comments_holder").fadeIn(1000);
                $('.dungeons-rating').children().removeClass();
                $('.dungeons-rating').children().addClass(score_class);
                $('.score_place').html(score);
                $('.comments-count').html(count + ' COMMENTS');
                $('.comment_amount').html(count);
                $('.votes_amount').html(count);
                $('#name_comment').val('');
                $('#mail_comment').val('');
                $('.cke_editable ').html('');
                $('.comments-login').html(name);
                $('.comments-time').html(date);
                $('.commnet_place').html(comment);
                $('.comment_div').remove();
                var gold_class_remove = $('.scale_gold').attr('class').split(' ')[2];
                $('.scale_gold').removeClass(gold_class_remove);
                var silver_class_remove = $('.scale_silver').attr('class').split(' ')[2];
                $('.scale_silver').removeClass(silver_class_remove);
                var bronze_class_remove = $('.scale_bronze').attr('class').split(' ')[2];
                $('.scale_bronze').removeClass(bronze_class_remove);
                var black_class_remove = $('.scale_blank').attr('class').split(' ')[2];
                $('.scale_blank').removeClass(black_class_remove);
                $('.scale_gold').addClass(gold_class);
                $('.scale_silver').addClass(silver_class);
                $('.scale_bronze').addClass(bronze_class);
                $('.scale_blank').addClass(black_class);
                $('.gold_votes_place').html(gold_votes);
                $('.silver_votes_place').html(silver_votes);
                $('.bronze_votes_place').html(bronze_votes);
                $('.black_votes_place').html(black_votes);
                $('.span_empty').hide();
                $('.add-your__rating').html(rank_medals);
                $('.medal_points').bind('click', function () {
                    $(this).addClass('selected');
                });
            });
        }
    });
    $(document).click(function (e) {
        if (e.target.class != 'dis_click' && !$('.dis_click').find(e.target).length) {
            $('.dis_click').remove();
        }
    });
    $('.add_guide').click(function (e) {
        var error = check_form();
        if (error === true) {
            e.preventDefault();
        }
    });
    $('.refresh').click(function () {
        var span = $('.f_screen');
        var name = $('.game-name_span')[0].innerHTML;
        var frame = $('.iframe');
        var id = $('.iframe').attr('id');
        $('.iframe').attr('src', '');
        $('.iframe').attr('src', prefix + 'gameplay.php?game=' + name + '&width=690&height=518&show=true');
    })
    $('.all_prog_games').click(function () {
        var elem = $('.all_prog_games');
        var classes = elem[0]['className'];
        var arr = classes.split(' ');
        var item = arr[1];
        var subItem = item.split('_');
        var className = subItem[1];
        $.ajax({url: prefix + "ajax.php", type: 'get', data: "software=" + className + "&type="}).done(function (data) {
            $('.main_wrapper').html(data);
            className = className.replace(/-/g, ' ');
            $('.program_span').html(className);
            bind_filter_li_click();
            bind_hover();
            unbind_hover();
        });
    });
    $('.more_games').click(function () {
        var elem = $('.all_prog_games');
        var classes = elem[0]['className'];
        var arr = classes.split(' ');
        var item = arr[1];
        var subItem = item.split('_');
        var className = subItem[1];
        $.ajax({url: prefix + "ajax.php", type: 'get', data: "software=" + className + "&type="}).done(function (data) {
            $('.main_wrapper').html(data);
            className = className.replace(/-/g, ' ');
            $('.program_span').html(className);
            bind_filter_li_click();
            bind_hover();
            unbind_hover();
        });
    });
    $('.review_more_games').click(function () {
        var elem = $('.review_more_games');
        var classes = elem[0]['className'];
        var arr = classes.split(' ');
        var item = arr[1];
        var subItem = item.split('_');
        var className = subItem[1];
        $.ajax({url: prefix + "ajax.php", type: 'get', data: "software=" + className + "&type="}).done(function (data) {
            $('.main_wrapper').html(data);
            className = className.replace(/-/g, ' ');
            $('.program_span').html(className);
            bind_filter_li_click();
            bind_hover();
            unbind_hover();
        });
    });
    $('.f_screen').click(function () {
        $('body').css('overflow', 'hidden');
        var height = window.innerHeight;
        var width = window.innerWidth;
        var frame = $('.iframe');
        var span = $('.f_screen');
        var program_id = span[0]['id'];
        var arr = program_id.split('_');
        var program = arr[0];
        program = program.replace(/ /g, '-');
        var id = frame[0]['id'];
        frame[0]['src'] = '';
        $('body').append('<div class="full_frame"></div>');
        $('.full_frame').css('width', width);
        $('.full_frame').css('height', height);
        var name = $('.game-name_span')[0].innerHTML;
        frame[0]['src'] = prefix + 'gameplay.php?game=' + name + '&width=' + width + '&height=' + height + '&show=true';
        frame.css('width', width);
        frame.css('height', height);
        $('.full_frame').append(frame);
        $('.full_frame').append('<span class="close" id="close_btn" onclick="close_f_screen()"">X</span>');
        $('.full_frame').append('<span class="ref" id="ref_btn" onclick="ref_screen()">&#x21bb</span>');
    });
    $('.filter_span').click(function () {
        if ($('.scrollbar').is(":visible")) {
            $('.scrollbar').hide();
        }
        else {
            $('.scrollbar').fadeIn();
        }
    });
    $('html').click(function () {
        if ($('.scrollbar').is(":visible")) {
            $('.scrollbar').hide();
            $('.filter_span').removeClass('filter_span_click');
        }
        bind_hover();
        unbind_hover();
    });
    $('.filter_span').click(function (event) {
        event.stopPropagation();
        bind_hover();
        unbind_hover();
    });
    $('.ex_program').hover(function () {
    });
    $('.add_iamge_btn').bind('click', function (event) {
        var id = $(this).attr('id');
        var location_arr = id.split('_');
        var location = parseInt(location_arr[2]);
        location += 1;
        par_clicks += 1;
        var parent = $('#' + id).parent();
        var count = $("[class~='p_order']").length;
        var amount = count + 1;
        var index = location + 1;
        $('<br><div class="par_div" id="pr_div_' + amount + '"><div class="par_border"><label class="lable_wrap">Order:</label><input type="text" class="input_wrap p_order" name="p_order[' + amount + '][order]" id="p_order" value="' + amount + '"><br><label class="lable_wrap">Type:</label><input type="text" class="input_wrap" name="p_order[' + amount + '][type]" id="p_type" value="1"><br><fieldset class="legend"><input type="file" name="wiki_image" id="wiki_image"></fieldset><br><div><br><input type="button" value="x" id="close_par_row_' + amount + '"  onclick="close_par_div(pr_div_' + amount + ')"/><label class="big_label">Delete Image</label><input class="add_par" id="add_par_' + amount + '" type="button" value="+"/><label class="label_admin">Add Paragraph</label><input class="add_iamge" id="add_iamge_' + amount + '" type="button" value="+" /><label class="lable_wrap">Add Image</label></div><div class="cb"></div><br>').insertAfter(parent);
        var order_arr = $("[class~='p_order']");
        for (var i = 0; i < order_arr.length; i++) {
            var item = i + 1;
            $(order_arr[i]).val('' + item);
        }
        bind_add_image();
        bind_add_par();
    });
    $('.filter_li').click(function () {
        var program = $(this).text();
        $('.program_span').text(program);
        $('.scrollbar').hide();
        var elem = $('.bg_span');
        var classes = elem[0]['className'];
        var arr = classes.split(' ');
        var item = arr[1];
        var subItem = item.split('_');
        var className = subItem[0];
        $('.filter_span').removeClass('filter_span_click');
        $.ajax({
            url: prefix + "ajax.php",
            type: 'get',
            data: "program=" + program + "&type=" + className
        }).done(function (data) {
            $('.games_ul').html(data);
            bind_hover();
            unbind_hover();
            bind_error();
            var pager = $('.num_ul');
            if (program != 'All Programs') {
                $('.num_ul').hide();
            }
            else {
                $('.num_ul').show();
            }
        });
    });
    $(window).one('mousemove', function () {
        for (var i = 0; i < arr.length; i++) {
            var img_name = arr[i];
            var img = new Image();
            img.src = prefix + "files/images/hover/" + img_name + ".png";
        }
    });
    $('.searchbox').keypress(function (e) {
        var search_class = 'searchbox';
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            search(search_class);
        }
    });
    $('.header_searchbox').keypress(function (e) {
        var search_class = 'header_searchbox';
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code === 13) {
            search(search_class);
            if ($('.header_searchbox').hasClass('place_holder_search')) {
                $('.site__header').css('height', 'inherit');
                $('.site__header').css('overflow-y', 'visible');
                $('.nav').slideUp('500');
                $('.back2top').css('z-index', '9999');
                $('.header__search').attr('style', '');
                $('.header_searchbox').attr('style', '');
                $('.header_searchbox').attr('style', '');
                $('.open-menu').append('<style>.open-menu:before{border-top: 2px solid #fff !important;}</style>');
                $('.open-menu').append('<style>.open-menu:after{border-top: 2px solid #fff !important;}</style>');
                $('.open-menu').append('<style>.open-menu span{border-top: 2px solid #fff !important;}</style>');
                $('.open-menu').css('top', '17px');
                $('.open-menu').css('right', '10px');
                $('body').css('overflow-y', 'scroll');
            }
            $('.open-menu').removeClass('close-menu');
            $('.header__menu').slideUp(500);
            $('.site__header').css('height', 'inherit');
            $('.site__header').css('overflow-y', 'visible');
            jQuery('html, body').animate({scrollTop: 0}, duration);
        }
    });
    $('.searchbtn').click(function () {
        search();
    });
    $('.game_li').bind('mouseenter', function () {
        var e = $(this).children().children();
        var elem_id = e[2]['id'];
        elem_id = elem_id.replace('&', '%26');
        $('#' + elem_id).css('background', '#e500a7');
        var arr = $(this).children().children();
        var id = arr[3]['id'];
        id = id.split(' ');
        var final_id = id[0];
        $('#' + final_id).show();
    });
    $('.game_li').bind('mouseleave', function () {
        var e = $(this).children().children();
        var elem_id = e[2]['id'];
        $('#' + elem_id).css('background', '#F2F2F2');
        var arr = $(this).children().children();
        var id = arr[3]['id'];
        id = id.split(' ');
        var final_id = id[0];
        $('#' + final_id).hide();
    });
    $('.main_links').hover(function () {
        if ($(this).children().text() != 'Home') {
            $(this).attr('is_hover', 1);
            var arr = this.childNodes.item(1);
            var className = arr['classList'][1];
            $(this).css('background', '#FFFFFF');
            $(this).children().css('color', '#666666');
            $(this).children().css('text-decoration', 'none');
            $('.' + className).show();
        }
        else {
            $(this).attr('is_hover', 1);
            $(this).css('background', '#FFFFFF');
            $(this).children().css('color', '#666666');
            $(this).children().css('text-decoration', 'none');
        }
    });
    $('.main_links').mouseleave(function () {
        $('.menu_div').hide();
        $('.main_links').attr('is_hover', 0);
        $("[is_hover='0']").css('background', '#c1008d');
        $("[is_hover='0']").css('color', '#FFFFFF');
        $("[is_hover='0']").children().css('color', '#FFFFFF');
    });
    $('.list_li').hover(function () {
        var text = $(this).children().text();
        var className = text.replace(/ /g, '_');
        var arr = $(this).parent().parent();
        var elem = arr[0]['classList'][1];
        $('.' + elem).attr('id', className);
    });
    $('.bonus_menu_li').hover(function () {
        var text = $(this).children().text();
        var className = text.replace(/ /g, '_');
        var arr = $(this).parent().parent();
        var elem = arr[0]['classList'][1];
        $('.' + elem).attr('id', className);
    });
    $('.list_li').mouseleave(function () {
        var arr = $(this).parent().parent();
        var elem = arr[0]['classList'][1];
        $('.' + elem).removeAttr('id');
    });
    $('.game_list_li').hover(function () {
        var text = $(this).children().text();
        var className = text.replace(/ /g, '_');
        var arr = $(this).parent().parent();
        var elem = arr[0]['classList'][1];
        $('.' + elem).attr('id', className);
    });
    $('.game_list_li').mouseleave(function () {
        var arr = $(this).parent().parent();
        var elem = arr[0]['classList'][1];
        $('.' + elem).removeAttr('id');
    });
    $('.bonus_menu_li').mouseleave(function () {
        var arr = $(this).parent().parent();
        var elem = arr[0]['classList'][1];
        $('.' + elem).removeAttr('id');
    });
    $('.best_uk').hover(function () {
        $('.best').attr('id', 'best_uk');
    });
    $('.best_uk').mouseleave(function () {
        $('.best').removeAttr('id');
    });
    $('.best_usa').hover(function () {
        $('.best').attr('id', 'best_usa');
    });
    $('.best_usa').mouseleave(function () {
        $('.best').removeAttr('id');
    });
    $('.best_au').hover(function () {
        $('.best').attr('id', 'best_au');
    });
    $('.best_au').mouseleave(function () {
        $('.best').removeAttr('id');
    });
    $('.add_term').click(function () {
        var arr = new Array();
        var del_arr = new Array();
        var term_cb = $("[name='update_term_cb']:not(:checked)");
        var delete_cb = $("[name='delete_term_cb']:not(:checked)");
        var terms = $("[class~='new_inner_div']");
        var error = false;
        for (var i = 0; i < terms.length; i++) {
            var curr_term = $('#term_new_id_' + i).val();
            var select = $('#select_new_id_' + i + ' option:selected').val();
            if (curr_term !== "" && (select === "0" || select === 0)) {
                error = true;
                $('#cat_err_' + i).show();
            }
        }
        if (error === false) {
            for (var i = 0; i < term_cb.length; i++) {
                var id = $(term_cb[i]).attr('id');
                var id_arr = id.split('_');
                var real_id = id_arr[3];
                if ($('#delete_term_cb_' + real_id).is(':checked') === false) {
                    $(term_cb[i]).parent().remove();
                }
            }
            var deleted_terms = $("[name='delete_term_cb']:checked");
            var new_terms = $("[name='new_term_cb']:checked");
            var checked_term_cb = $("[name='update_term_cb']:checked,[name='delete_term_cb']:checked");
            var str = '';
            for (var i = 0; i < checked_term_cb.length; i++) {
                var id = $(checked_term_cb[i]).attr('id');
                var term_arr = id.split('_');
                var term_id = parseInt(term_arr[3]);
                var category = $("[id~='select_" + term_id + "']");
                var term_name = $("[id~='term_name_" + term_id + "']");
                var term_text = $("[id~='term_text_" + term_id + "']");
                var term_link = $("[id~='term_link_" + term_id + "']");
                var value = $(category[0]).val();
                var term_name_val = $(term_name[0]).val();
                var term_text_val = $(term_text[0]).val();
                var term_link_val = $(term_link[0]).val();
                arr.push(i);
                var ass_arr = {};
                for (var j = 0; j < deleted_terms.length; j++) {
                    var id = $(deleted_terms[j]).attr('id');
                    var term_arr = id.split('_');
                    var del_term_id = parseInt(term_arr[3]);
                    if (del_term_id === term_id) {
                        ass_arr['delete'] = del_term_id;
                    }
                }
                ass_arr['term_id'] = term_id;
                ass_arr['cat_id'] = value;
                ass_arr['term'] = term_name_val;
                ass_arr['meaning'] = term_text_val;
                ass_arr['link'] = term_link_val;
                arr[i] = {};
                arr[i] = ass_arr;
            }
            for (var k = 0; k < new_terms.length; k++) {
                var id = $(new_terms[k]).attr('id');
                var term_arr = id.split('_');
                var new_term_id = parseInt(term_arr[3]);
                var new_cat_id = $('#select_new_id_' + k).val();
                var new_term_name = $('#term_new_id_' + k).val();
                var new_term_text = $('#text_new_id_' + k).val();
                var new_term_link = $('#link_new_id_' + k).val();
                var ass_arr = {};
                ass_arr['cat_id'] = new_cat_id;
                ass_arr['term'] = new_term_name;
                ass_arr['meaning'] = new_term_text;
                ass_arr['link'] = new_term_link;
                arr[i + k] = {};
                arr[i + k] = ass_arr;
                ass_arr['insert'] = new_term_id;
            }
            $.ajax({
                url: prefix + 'terms-receive.php',
                cache: false,
                type: 'post',
                data: {cat_name: arr},
                success: function () {
                    window.location.replace(prefix + 'terms_admin.php');
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    $('.green').html('Invalid input!');
                    $('.green').show();
                    $(window).scrollTop();
                }
            });
        }
    });
    $('.best_ca').hover(function () {
        $('.best').attr('id', 'best_ca');
    });
    $('.best_ca').mouseleave(function () {
        $('.best').removeAttr('id');
    });
    $('.best_sa').hover(function () {
        $('.best').attr('id', 'best_sa');
    });
    $('.best_sa').mouseleave(function () {
        $('.best').removeAttr('id');
    });
    $('.best_ge').hover(function () {
        $('.best').attr('id', 'best_ge');
    });
    $('.best_ge').mouseleave(function () {
        $('.best').removeAttr('id');
    });
    $('.ios_menu').hover(function () {
        $('.mobile').attr('id', 'ios_menu');
    });
    $('.ios_menu').mouseleave(function () {
        $('.mobile').removeAttr('id');
    });
    $('.android_menu').hover(function () {
        $('.mobile').attr('id', 'android_menu');
    });
    $('.android_menu').mouseleave(function () {
        $('.mobile').removeAttr('id');
    });
    $('.all_review_menu').hover(function () {
        $('.review').attr('id', 'all_review_menu');
    });
    $('.all_review_menu').mouseleave(function () {
        $('.review').removeAttr('id');
    });
    $('.rec_review_menu').hover(function () {
        $('.review').attr('id', 'rec_review_menu');
    });
    $('.rec_review_menu').mouseleave(function () {
        $('.review').removeAttr('id');
    });
    $('.new_review_menu').hover(function () {
        $('.review').attr('id', 'new_review_menu');
    });
    $('.new_review_menu').mouseleave(function () {
        $('.review').removeAttr('id');
    });
    $('.pop_review_menu').hover(function () {
        $('.review').attr('id', 'pop_review_menu');
    });
    $('.pop_review_menu').mouseleave(function () {
        $('.review').removeAttr('id');
    });
    $('.flash_type').hover(function () {
        $('.type').attr('id', 'flash_type');
    });
    $('.flash_type').mouseleave(function () {
        $('.type').removeAttr('id');
    });
    $('.ecogra_type').hover(function () {
        $('.type').attr('id', 'ecogra_type');
    });
    $('.ecogra_type').mouseleave(function () {
        $('.type').removeAttr('id');
    });
    $('.live_dealer_type').hover(function () {
        $('.type').attr('id', 'live_dealer_type');
    });
    $('.live_dealer_type').mouseleave(function () {
        $('.type').removeAttr('id');
    });
    $('.safe_review_menu').hover(function () {
        $('.review').attr('id', 'safe_review_menu');
    });
    $('.safe_review_menu').mouseleave(function () {
        $('.review').removeAttr('id');
    });
    $('.mac_type').hover(function () {
        $('.type').attr('id', 'ios_menu');
    });
    $('.mac_type').mouseleave(function () {
        $('.type').removeAttr('id');
    });
    $('.paypal_type').hover(function () {
        $('.type').attr('id', 'paypal_type');
    });
    $('.paypal_type').mouseleave(function () {
        $('.type').removeAttr('id');
    });
    $('.linux_type').hover(function () {
        $('.type').attr('id', 'linux_type');
    });
    $('.linux_type').mouseleave(function () {
        $('.type').removeAttr('id');
    });
    var offset = 190;
    var duration = 370;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back2top').fadeIn(500);
            $('.nav').addClass('fixed');
            $('.logo').addClass('fixed_logo');
            $('.site__header').addClass('active');
            $('.site_logo').addClass('min_logo');
            $('.coins_logo').addClass('min_cheaps');
            $('.logo_link').css('height', '43px');
        } else {
            jQuery('.back2top').fadeOut(500);
            $('.nav').removeClass('fixed');
            $('.logo').removeClass('fixed_logo');
            $('.site__header').removeClass('active');
            $('.site_logo').removeClass('min_logo');
            $('.coins_logo').removeClass('min_cheaps');
            $('.logo_link').css('height', '120px');
        }
    });
    jQuery('.back2top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
    function truncateTopPicksSoftware() {
        if ($(window).width() <= 900) {
            $('p.top-picks-box-software-p > span:nth-of-type(2) > a').each(function () {
                var text = $(this).text();
                if (text.length > 9) {
                    if (/\s\.$/.test(text)) {
                        $(this).text(text.substr(0, 8) + '.');
                    } else {
                        $(this).text(text.substr(0, 9) + '.');
                    }
                }
            });
        }
    }

    truncateTopPicksSoftware();
    truncateTopPicksSoftware();
    $(window).on('resize', truncateTopPicksSoftware);
    $('#review-info-submit-comment').on('click', function () {
        $('#tooltip-casino-review-submit-info').show();
        if ($(window).width() < 374) {
            $('#tooltip-casino-review-submit-info').css({'margin-left': ($('.add_comment').width() - 110) + 'px'});
            $('.tag-tooltip-arrow').css('left', '79%');
        } else {
            $('#tooltip-casino-review-submit-info').css({'margin-left': ($('.add_comment').width() - 56) + 'px'});
        }
    });
    $('#tooltip-casino-review-submit-info').find('.tag-tooltip-close').on('click', function () {
        $('#tooltip-casino-review-submit-info').hide();
    });
    $('body').on('click', '#casino-review-load-more-comments', function () {
        var casinoId = $(this).data('casino-id');
        var offset = parseInt($(this).attr('data-offset'));
        $.ajax({
            'cache': false,
            'method': 'GET',
            'url': prefix + 'ajax.php',
            'data': {'method': 'getCasinoReviewComments', 'casinoId': casinoId, 'offset': offset}
        }).done(function (serverResponse) {
            var count = 0;
            $(serverResponse).find('.comments').each(function (index, element) {
                $('.comments').last().after(element);
                count++;
            });
            if (count > 0) {
                offset += count;
                $('#casino-review-load-more-comments').attr('data-offset', offset);
                $('.site__content-wrap').css('height', 'auto');
            }
            if ($(serverResponse).find('#casino-review-load-more-comments').length == 0) {
                $('#casino-review-load-more-comments').remove();
            } else {
                $('#casino-review-load-more-comments').find('span').html($(serverResponse).find('#casino-review-load-more-comments').find('span').html());
            }
        });
    });
    $('#review-bonus-wrapper > .review-pink-deposit').on('click', function () {
        var offsetTop = parseInt($('#casino-review-section-bonuses').offset().top);
        if ($(window).width() > 768) {
            offsetTop -= 190;
        } else {
            offsetTop -= 90;
        }
        $('html, body').animate({scrollTop: offsetTop}, 1000);
    });
    function patchCasinoReviewGeneralInfo() {
        $('#casino-review-general-info-details').css('height', 'auto');
        $('#casino-review-general-info-software').css('height', 'auto');
        $('#casino-review-general-info-mobile').css('height', 'auto');
        $('#casino-review-info-withdrawal').css('height', 'auto');
        var detailsHeight = $('#casino-review-general-info-details').height();
        var softwareHeight = $('#casino-review-general-info-software').height();
        var mobileHeight = $('#casino-review-general-info-mobile').height();
        var bankingHeight = $('#casino-review-general-info-banking').height();
        var withdrawalHeight = $('#casino-review-info-withdrawal').height();
        var supportHeight = $('#casino-review-info-support').height();
        var maxTopSection = Math.max(detailsHeight, softwareHeight);
        var maxBottomSection = Math.max(bankingHeight, withdrawalHeight);
        if ($(window).width() >= 768) {
            $('#casino-review-general-info-details').height(maxTopSection);
            $('#casino-review-general-info-software').height(maxTopSection);
            $('#casino-review-general-info-mobile').height(maxTopSection);
            $('#casino-review-general-info-banking').height(maxBottomSection);
            $('#casino-review-info-withdrawal').height(maxBottomSection);
        } else {
            $('#casino-review-general-info-details').height(maxTopSection);
            $('#casino-review-general-info-software').height(maxTopSection);
            $('#casino-review-general-info-mobile').height(maxBottomSection);
        }
    }

    patchCasinoReviewGeneralInfo();
    $(window).on('resize', patchCasinoReviewGeneralInfo);
    $('#casino-review-extra-soft-expand').on('click', function () {
        $('#casino-review-extra-soft-expand').hide();
        $('#casino-review-extra-soft-container').show();
        patchCasinoReviewGeneralInfo();
    });
    $('#casino-review-expand-banking').on('click', function () {
        $('#casino-review-expand-banking').hide();
        $('#casino-review-banking-container').show();
        patchCasinoReviewGeneralInfo();
    });
    if ($(window).width() <= 320) {
        $('.casino-list-row-new').css('padding-left', '13px');
    }
    window.bindLoadMoreCasinos = function () {
        $('#casino-list-load-more').on('click', function () {
            FilterCasinos.userOptions.offset = parseInt($('#casino-list-load-more').data('offset')) + 100;
            FilterCasinos.doRequestAfterClick();
        });
    };
    bindLoadMoreCasinos();
    window.getFilterCasinosDefaultOptions = function () {
        return {
            'country': false,
            'medals': {'gold': false, 'silver': false, 'bronze': false, 'black': false},
            'freeBonus': false,
            'software': [],
            'tags': {'BST': false, 'POP': false, 'NEW': false, 'WRN': false, 'BLC': false, 'EXC': false},
            'sortBy': false,
            'offset': 0
        };
    };

    window.FilterCasinos = {
        'userOptions': {}, 'isUserOptionsLikeDefault': function () {
            return (this.userOptions.country == false && this.userOptions.medals.gold == false && this.userOptions.medals.silver == false && this.userOptions.medals.bronze == false && this.userOptions.medals.black == false && this.userOptions.freeBonus == false && this.userOptions.software.length == 0 && this.userOptions.tags.BST == false && this.userOptions.tags.POP == false && this.userOptions.tags.NEW == false && this.userOptions.tags.WRN == false && this.userOptions.tags.BLC == false && this.userOptions.tags.EXC == false && this.userOptions.sortBy == false) ? true : false;
        }, 'bindEvents': function () {
            var that = this;
            var bindDropDownEvents = function (event) {
                if ($(event.target).closest('.filter-casinos-scrollbar-wrapper').length == 0) {
                    if ($(event.target).closest('.filter-casinos-expand-button').length == 1) {
                        var button = $(event.target).parents('.filter-casinos-expand-button')[0] || $(event.target).parents('.filter-casinos-expand-button').context;
                        if ($(button).hasClass('filter-casinos-expand-button-pressed') || $(event.target).attr('id') == 'filter-casinos-software-reset' || $(event.target).attr('id') == 'filter-casinos-tags-reset' || $(event.target).attr('id') == 'filter-casinos-sort-reset') {
                            $('.filter-casinos-expand-button-pressed').next().hide();
                            $('.filter-casinos-expand-button-pressed').removeClass('filter-casinos-expand-button-pressed');
                        } else {
                            $(button).addClass('filter-casinos-expand-button-pressed');
                            setTimeout(function () {
                                $(button).next().show();
                            }, 400);
                            var id = $(button).attr('id');
                            $('.filter-casinos-expand-button-pressed').not('#' + id).next().hide();
                            $('.filter-casinos-expand-button-pressed').not('#' + id).removeClass('filter-casinos-expand-button-pressed');
                        }
                    } else {
                        $('.filter-casinos-expand-button-pressed').next().hide();
                        $('.filter-casinos-expand-button-pressed').removeClass('filter-casinos-expand-button-pressed');
                    }
                }
            };
            if ($(window).width() <= 768) {
                $('body').on('touchstart', function (event) {
                    bindDropDownEvents(event);
                });
            } else {
                $('body').on('click', function (event) {
                    bindDropDownEvents(event);
                });
            }

            $('.filter-casinos-trigger').on('click', function () {

                var nodeType = $(this).data('node-type');
                var nodeSubtype = $(this).data('node-subtype');

                if (nodeType == 'country') {
                    if (that.userOptions.country == false) {
                        that.userOptions.country = true;
                        $(this).addClass('filter-casinos-element-pressed active');
                    } else {
                        that.userOptions.country = false;
                        $(this).removeClass('filter-casinos-element-pressed active');
                    }
                }
                if (nodeType == 'medals') {

                    if (that.userOptions.medals[nodeSubtype] == true) {
                        that.userOptions.medals[nodeSubtype] = false;
                        $(this).removeClass('filter-casinos-element-pressed active');

                    } else {

                        that.userOptions.medals[nodeSubtype] = true;
                        $(this).addClass('filter-casinos-element-pressed active');
                    }
                }
                if (nodeType == 'freeBonus') {
                    if (that.userOptions.freeBonus == true) {
                        that.userOptions.freeBonus = false;
                        $(this).removeClass('filter-casinos-free-bonus-pressed active');
                    } else {
                        that.userOptions.freeBonus = true;
                        $(this).addClass('filter-casinos-free-bonus-pressed active');
                    }
                }
                if (nodeType == 'software') {
                    var softwareName = $.trim($(this).text());
                    console.log(nodeSubtype);
                    if ($(this).hasClass('filter-casinos-scrollbar-element-pressed active')) {
                        var indexSoftware = that.userOptions.software.indexOf(softwareName);
                        if (indexSoftware != -1) {
                            $(this).removeClass('filter-casinos-scrollbar-element-pressed active');
                            that.userOptions.software.splice(indexSoftware, 1);
                        }
                    } else {
                        $(this).addClass('filter-casinos-scrollbar-element-pressed active');
                        that.userOptions.software.push(softwareName);
                    }
                    if (that.userOptions.software.length > 0) {
                        $('#filter-casinos-software-reset').show();
                    } else {
                        $('#filter-casinos-software-reset').hide();
                    }
                }
                if (nodeType == 'tags') {
                    var tagName = nodeSubtype;
                    if ($(this).hasClass('filter-casinos-scrollbar-element-pressed active')) {
                        $(this).removeClass('filter-casinos-scrollbar-element-pressed active');
                        that.userOptions.tags[tagName] = false;
                    } else {
                        $(this).addClass('filter-casinos-scrollbar-element-pressed active');
                        that.userOptions.tags[tagName] = true;
                    }
                    var hasTags = false;
                    for (var key in that.userOptions.tags) {
                        if (that.userOptions.tags[key] == true) {
                            hasTags = true;
                        }
                    }
                    if (hasTags == true) {
                        $('#filter-casinos-tags-reset').show();
                    } else {
                        $('#filter-casinos-tags-reset').hide();
                    }
                }
                if (nodeType == 'sortBy') {
                    var sortBy = nodeSubtype;
                    if ($(this).hasClass('filter-casinos-scrollbar-element-pressed active')) {
                        $(this).removeClass('filter-casinos-scrollbar-element-pressed active');
                        that.userOptions.sortBy = getFilterCasinosDefaultOptions()['sortBy'];
                        $('#filter-casinos-sort-reset').hide();
                    } else {
                        $('#filter-casinos-sort-scrollbar .filter-casinos-scrollbar-element-pressed').removeClass('filter-casinos-scrollbar-element-pressed active');
                        $(this).addClass('filter-casinos-scrollbar-element-pressed active');
                        that.userOptions.sortBy = sortBy;
                        $('#filter-casinos-sort-reset').show();
                    }
                }

                FilterCasinos.userOptions.offset = 0;

                that.doRequestAfterClick();

            });

            $('#filter-casinos-software-reset').on('click', function () {
                that.resetSoftware();
            });

            $('#filter-casinos-tags-reset').on('click', function () {
                that.resetTags();
            });

            $('#filter-casinos-sort-reset').on('click', function () {
                that.resetSort();
            });

            $('#filter-casinos-reset').on('click', function () {
                if ($(window).width() <= 768) {
                    if (that.isUserOptionsLikeDefault()) {
                        $('#filter-casinos-wrapper-inner').hide();
                        $('#filter-casinos-mobile-open-filter').show();
                    } else {
                        that.resetGlobal();
                    }
                } else {
                    that.resetGlobal();
                }
            });

            $('#filter-casinos-mobile-open-filter').on('click', function () {
                $(this).hide();
                $('#filter-casinos-wrapper-inner').show();
            });
        }, 'cssPatch': function () {
            $('#filter-casinos-software-scrollbar .filter-casinos-scrollbar-scrollbar').css('height', '332px');
            $('#filter-casinos-tags-scrollbar .filter-casinos-scrollbar-scrollbar').css('height', '152px');
            $('#filter-casinos-sort-scrollbar .filter-casinos-scrollbar-scrollbar').css('height', '152px');
        }, 'restart': function () {
            this.userOptions = getFilterCasinosDefaultOptions();
            this.bindEvents();
            this.cssPatch();
        }, 'doRequestAfterClick': function () {
            var that = this;
            if (this.isUserOptionsLikeDefault()) {
                if ($(window).width() <= 768) {
                    $('#filter-casinos-reset').addClass('filter-casinos-mobile-collapse-bar');
                    $('#filter-casinos-reset').css('visibility', 'visible !important');
                } else {
                    $('#filter-casinos-reset').css('visibility', 'hidden');
                }
            } else {
                if ($(window).width() <= 768) {
                    $('#filter-casinos-reset').removeClass('filter-casinos-mobile-collapse-bar');
                }
                $('#filter-casinos-reset').css('visibility', 'visible');
            }
            $('#casino-list-load-more-wrapper').remove();

            $.ajax({
                'url': prefix + 'classes/FilterCasinosAjax.php',
                'method': 'GET',
                'data': {
                    'method': 'FilterCasinos',
                    'FilterCasinosParams': {
                        'resultsType': $('#filter-casinos-results-type').data('node-type'),
                        'resultsSubtype': $('#filter-casinos-results-type').data('node-subtype'),
                        'userOptions': that.userOptions
                    }
                },
                'beforeSend': function () {
                    if (FilterCasinos.userOptions.offset == 0) {
                        $('.content__item.content__item_table').css('opacity', '0.2');
                        $('#ajax-response-casinos-list').html('');
                    }
                    that.updateContainerHeight();
                }
            }).done(function (serverResponse) {
                if (FilterCasinos.userOptions.offset == 0) {
                    $('.content__item.content__item_table').css('opacity', '1');
                    serverResponse = JSON.parse(serverResponse);
                    $('#ajax-response-casinos-list').html(serverResponse.html);
                    $('#filter-casinos-ajax-count').text(serverResponse.count);
                } else {
                    $('#ajax-response-casinos-list > p.clear-both').last().after(serverResponse);
                    $('.casino-list-row-number').each(function (index, element) {
                        $(this).text((index + 1) + '.');
                    });
                }
                that.updateContainerHeight();
                bindTooltipForCasinoTags();
                bindTooltipForMoreSoftware();
                bindCasinoListRowExpand();
                bindLoadMoreCasinos();
            });
        }, 'updateContainerHeight': function () {
            /*if ($(window).width() > 768) {
                $('div.site__content-wrap').css('height', 'auto');
                if ($('div.site__content-wrap').height() < $('aside.site__aside').height()) {
                    var containerHeight = $('aside.site__aside').height();
                    $('div.site__content-wrap').css('height', containerHeight + 'px');
                }
            }*/
        }, 'resetGlobal': function () {
            this.userOptions = getFilterCasinosDefaultOptions();
            $('.filter-casinos-trigger').removeClass('filter-casinos-element-pressed');
            $('.filter-casinos-trigger').removeClass('filter-casinos-free-bonus-pressed');
            $('#filter-casinos-software-scrollbar').find('.filter-casinos-scrollbar-element-pressed').each(function () {
                $(this).removeClass('filter-casinos-scrollbar-element-pressed');
            });
            $('#filter-casinos-software-reset').hide();
            $('#filter-casinos-tags-scrollbar').find('.filter-casinos-scrollbar-element-pressed').each(function () {
                $(this).removeClass('filter-casinos-scrollbar-element-pressed');
            });
            $('#filter-casinos-tags-reset').hide();
            $('#filter-casinos-sort-scrollbar .filter-casinos-scrollbar-element-pressed').removeClass('filter-casinos-scrollbar-element-pressed');
            $('#filter-casinos-sort-reset').hide();
            FilterCasinos.userOptions.offset = 0;
            this.doRequestAfterClick();
        }, 'resetSoftware': function () {
            this.userOptions.software = getFilterCasinosDefaultOptions()['software'];
            $('#filter-casinos-software-scrollbar').find('.filter-casinos-scrollbar-element-pressed').each(function () {
                $(this).removeClass('filter-casinos-scrollbar-element-pressed');
            });
            $('#filter-casinos-software-reset').hide();
            FilterCasinos.userOptions.offset = 0;
            this.doRequestAfterClick();
        }, 'resetTags': function () {
            this.userOptions.tags = getFilterCasinosDefaultOptions()['tags'];
            $('#filter-casinos-tags-scrollbar').find('.filter-casinos-scrollbar-element-pressed').each(function () {
                $(this).removeClass('filter-casinos-scrollbar-element-pressed');
            });
            $('#filter-casinos-tags-reset').hide();
            FilterCasinos.userOptions.offset = 0;
            this.doRequestAfterClick();
        }, 'resetSort': function () {
            this.userOptions.sortBy = getFilterCasinosDefaultOptions()['sortBy'];
            $('#filter-casinos-sort-scrollbar .filter-casinos-scrollbar-element-pressed').removeClass('filter-casinos-scrollbar-element-pressed');
            $('#filter-casinos-sort-reset').hide();
            FilterCasinos.userOptions.offset = 0;
            this.doRequestAfterClick();
        }
    };
    FilterCasinos.restart();
    window.bindTooltipForMoreSoftware = function () {
        $('.casino-extra-soft-tooltip').tooltip({
            position: {
                my: "center bottom-8",
                at: "center top",
                using: function (position, feedback) {
                    $(this).css(position);
                    $("<div>").addClass("tag-tooltip-arrow").addClass(feedback.vertical).addClass(feedback.horizontal).appendTo(this);
                }
            },
            classes: {'ui-tooltip': 'top-picks-wrapper-baloon-extra-software tag-tooltip-full-note top-picks-extra-software-tooltip-baloon'}
        }).on('mouseleave', function (event) {
            event.stopImmediatePropagation();
        }).off('mouseover').on('click', function () {
            $(this).tooltip('option', 'content', $(this).next('.popup-software__content').find('.content-item').html());
            $(this).tooltip('open');
            var that = this;
            setTimeout(function () {
                $('body').one('click', function () {
                    $(that).tooltip('close');
                });
            }, 100);
        }).attr('title', '');
    };
    bindTooltipForMoreSoftware();
    /*$('html').on('click', function (event) {
        if (CurrentTooltipForTags != null) {
            try {
                $(CurrentTooltipForTags).tooltip('close');
            } catch (error) {
                if (typeof console == 'object' && typeof console.log == 'function') {
                    console.log(error);
                }
            }
            $('.tag-tooltip-wrapper').remove();
        }
        bindTooltipForMoreSoftware();
    });*/
    $('html').on('click', '.tag-tooltip-wrapper, .system-message', function (event) {
        if ($(event.target).parents('.tag-tooltip-close').length != 0) {
            try {
                $(CurrentTooltipForTags).tooltip('close');
            } catch (error) {
                if (typeof console == 'object' && typeof console.log == 'function') {
                    console.log(error);
                }
            }
            $('.tag-tooltip-wrapper').remove();
        }
        event.stopPropagation();
    });
    window.CurrentTooltipForTags = null;
    window.bindTooltipForCasinoTags = function () {
        window.CurrentTooltipForTags = null;
        $('.trigger-tag-tooltip').tooltip({
            position: {
                my: "center bottom-9", at: "center top", using: function (position, feedback) {
                    var that = this;
                    var hasBadPosition = false;
                    var windowWidth = $(window).width();
                    var isMobileIssue = false;
                    if (windowWidth <= 768) {
                        isMobileIssue = true;
                    }
                    if (/\/casino\-reviews\//.test(window.location.href) && windowWidth < 420) {
                        hasBadPosition = true;
                    }
                    function moveArrowPosition() {
                        $(that).css(position);
                        var customStyle = '';
                        if (hasBadPosition && typeof LastTagClicked != 'undefined' && LastTagClicked.position().left < 80) {
                            if (!LastTagClicked.parent().prev().hasClass('tag_span')) {
                                var leftPosition = (windowWidth / 8.8).toFixed(8);
                                customStyle = 'left:' + leftPosition + '%;';
                            }
                        }
                        $("<div>").addClass("tag-tooltip-arrow").addClass(feedback.vertical).addClass(feedback.horizontal).attr('style', customStyle).appendTo(that);
                    }

                    if (hasBadPosition) {
                        setTimeout(function () {
                            moveArrowPosition();
                        }, 800);
                    } else {
                        if (isMobileIssue) {
                            setTimeout(function () {
                                $(that).css(position);
                                var customStyle = '';
                                if (LastTagClicked.offset().left < 80) {
                                    var leftBugFactor = 42;
                                    if (windowWidth <= 320) {
                                        leftBugFactor = 37;
                                    } else if (windowWidth > 320 && windowWidth <= 375) {
                                        leftBugFactor = 43;
                                    } else if (windowWidth > 375 && windowWidth <= 520) {
                                        leftBugFactor = 46;
                                    } else if (windowWidth > 520 && windowWidth <= 768) {
                                        leftBugFactor = 57;
                                    }
                                    var leftPosition = ((LastTagClicked.offset().left / windowWidth) * 100).toFixed(8);
                                    customStyle = 'left:calc(' + leftPosition + '% + ' + leftBugFactor + 'px);';
                                }
                                if (LastTagClicked.offset().left + 100 > windowWidth) {
                                    var rightBugFactor = 50;
                                    switch (LastTagClicked.parent().index()) {
                                        case 2:
                                            if (windowWidth <= 320) {
                                                rightBugFactor = 53;
                                            } else if (windowWidth > 320 && windowWidth <= 375) {
                                                rightBugFactor = (windowWidth < 375) ? 46 + (parseInt(375 / windowWidth) * 2) : 46;
                                            } else if (windowWidth > 375 && windowWidth <= 414) {
                                                rightBugFactor = 38;
                                            } else {
                                                rightBugFactor = 21;
                                            }
                                            break;
                                        case 1:
                                            if (windowWidth <= 320) {
                                                rightBugFactor = 50;
                                            } else if (windowWidth > 320 && windowWidth <= 375) {
                                                rightBugFactor = (windowWidth < 375) ? 39 + (parseInt(375 / windowWidth) * 2) : 39;
                                            } else if (windowWidth > 375 && windowWidth <= 414) {
                                                rightBugFactor = 21;
                                            }
                                            break;
                                        case 0:
                                            if (windowWidth <= 320) {
                                                rightBugFactor = 42;
                                            } else if (windowWidth > 320 && windowWidth <= 375) {
                                                rightBugFactor = 46;
                                            } else if (windowWidth > 375 && windowWidth <= 414) {
                                                rightBugFactor = 21;
                                            }
                                            break;
                                    }
                                    var leftPosition = parseFloat(((LastTagClicked.offset().left / (windowWidth - LastTagClicked.offset().left)) * 4.8).toFixed(8));
                                    customStyle = 'left:' + (leftPosition + rightBugFactor) + '%';
                                }
                                $("<div>").addClass("tag-tooltip-arrow").addClass(feedback.vertical).addClass(feedback.horizontal).attr('style', customStyle).appendTo(that);
                            }, 800);
                        } else {
                            moveArrowPosition();
                        }
                    }
                }
            }, classes: {'ui-tooltip': 'tag-tooltip-wrapper tag-tooltip-full-note'}
        }).on('mouseleave', function (event) {
            event.stopImmediatePropagation();
        }).on('focusout', function (event) {
        }).off('mouseover').on('click', function (event) {
            var that = this;
            if (CurrentTooltipForTags != null) {
                $(CurrentTooltipForTags).tooltip('close');
            }
            $.ajax({
                'method': 'GET',
                'url': prefix + 'ajax.php',
                'data': {
                    'method': 'getCasinoTagTooltip',
                    'casinoId': $(this).data('casino-id'),
                    'tagCode': $(this).data('tag-code')
                }
            }).done(function (serverResponse) {
                var responseObject = $(serverResponse);
                var tagCode = $(that).data('tag-code');
                switch (tagCode) {
                    case'BLC':
                    case'WRN':
                    case'POP':
                    case'NEW':
                    case'EXC':
                        responseObject.find('.tag-tooltip-body-top').css({'height': 'auto', 'paddingBottom': '10px'});
                        break;
                }
                $('.trigger-tag-tooltip').each(function () {
                    if (/\/casino\-reviews\//.test(window.location.href) && $(this).attr('data-tag-code') == tagCode) {
                        LastTagClicked = $(this);
                    }
                });
                LastTagClicked = $(that);
                $(that).tooltip('option', 'content', responseObject.html());
                $(that).tooltip('open');
            });
            CurrentTooltipForTags = that;
            return false;
        }).attr('title', '');
    };
    bindTooltipForCasinoTags();
});
function bindCasinoListRowExpand() {
    $('.casino-list-row-expand').on('click', function () {
        var element = $(this).next().next();
        if (element.css('display') == 'none') {
            element.css('display', 'block');
            $(this).css('background', "url('../files/img/casino-list-row-expand-up.png')");
        } else {
            element.css('display', 'none');
            $(this).css('background', "url('../files/img/casino-list-row-expand-down.png')");
        }
    });
}
bindCasinoListRowExpand();
$('body').on('click', '.add_comment', function () {
    var casino_id = $(this).attr('id');
    var name = $('#name_comment').val();
    var email = $('#mail_comment').val();
    var review = $('.cke_editable_inline').html();
    var error = false;
    var mood = 0;
    if ($('#gold_score').hasClass('selected') == true) {
        mood = 1;
    } else if ($('#silver_score').hasClass('selected') == true) {
        mood = 2;
    } else if ($('#bronze_score').hasClass('selected') == true) {
        mood = 3;
    } else if ($('#black_score').hasClass('selected') == true) {
        mood = 4;
    }
    if (mood == 0) {
        error = true;
        $('#tooltip-casino-review-submit-error').show();
    } else {
        $('#tooltip-casino-review-submit-error').hide();
    }
    if (name == '') {
        error = true;
        $('.name_error').show();
    } else {
        $('.name_error').hide();
    }
    if (email.indexOf('.') == -1 || email.indexOf('@') == -1) {
        error = true;
        $('.mail_error').show();
    } else {
        $('.mail_error').hide();
    }
    if (error !== true) {
        $.ajax({
            url: prefix + "ajax.php",
            type: 'get',
            data: "id=" + casino_id + "&name=" + name + "&email=" + email + "&comment=" + review + "&mood=" + mood
        }).done(function (data) {
            var data_arr = data.split('|');
            var real_data = data_arr[0];
            var count = data_arr[1];
            var name = data_arr[6];
            var date = data_arr[7];
            var comment = data_arr[8];
            $(real_data).hide().appendTo(".comments_holder").fadeIn(1000);
            $('.comments-count').html(count + ' COMMENTS');
            $('.comment_amount').html(count);
            $('#name_comment').val('');
            $('#mail_comment').val('');
            $('.cke_editable ').html('');
            $('.comments').last().find('.comments-login').html(name);
            $('.comments').last().find('.comments-time').html(date);
            $('.comments').last().find('.commnet_place').html(comment);
            $('.comment_div').remove();
            $('.span_empty').hide();
            $('#tooltip-casino-review-submit-ok').show();
        });
    } else {
        if ($(window).width() > 768) {
            $('#review-second-left, #review-second-right').css('height', '296px');
        } else {
            $('#review-second-right, #review-second-right-wrap').css('height', 'auto');
        }
    }
});
$('#tooltip-casino-review-submit-ok, #tooltip-casino-review-submit-error').find('.tag-tooltip-close').on('click', function () {
    $('#tooltip-casino-review-submit-ok').hide();
    $('#tooltip-casino-review-submit-error').hide();
});
function handlepaste(elem, e) {
    $(elem).val(e.clipboardData.getData('Text'));
    var val = $(elem).val();
    var str = val.toString();
    var clipText = e.clipboardData.getData('Text');
    var arr = clipText.split(String.fromCharCode(13));
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i].split('\t');
        for (var j = 0; j < item.length; j++) {
            var subitem = item[j];
            var toc_tag = $("[name='toc_tag']");
            for (var k = 0; k < toc_tag.length; k++) {
                $(toc_tag[k]).val(subitem);
            }
        }
    }
}
function bind_hover_li() {
    $('.hover_li').bind('click', function () {
        var content = $(this).children().eq(2);
        if (document.body.offsetWidth < 900) {
            if ($(this).children().eq(1).hasClass('triangle_arrow_up')) {
                console.dir('here');
                var copy = $(this).next();
                $(this).css('background', '#C1008D');
                $(this).children().eq(1).css('background-repeat', 'no-repeat');
                $(this).next().remove();
                console.dir(content);
                $(copy).insertAfter($(this).children().eq(1));
                $(this).children().eq(1).removeClass('triangle_arrow_up');
                $(this).children().eq(1).addClass('triangle_arrow_down');
                $(this).children().eq(2).hide();
            } else {
                $(this).children().eq(2).show();
                $(this).children().eq(1).removeClass('triangle_arrow_down');
                $(this).children().eq(1).addClass('triangle_arrow_up');
                $(this).css('background', '#920071');
                $(this).children().eq(1).css('background-repeat', 'no-repeat');
                $(content).insertAfter($(this));
            }
        }
    });
}
function waitforpastedata(elem, savedcontent) {
    if (elem.childNodes && elem.childNodes.length > 0) {
        processpaste(elem, savedcontent);
    }
    else {
        that = {e: elem, s: savedcontent}
        that.callself = function () {
            waitforpastedata(that.e, that.s)
        }
        setTimeout(that.callself, 20);
    }
}
function bind_sb_new(term_click) {
    $('#btn_sb_new').bind('click', function () {
        term_click += 1;
        var html = $('#select_new_id_0').html();
        $('.cat_div_new').append('<div class="term_inner_div new_inner_div"><select name="new_cat_name[' + term_click + '][name]" class="cat_sb category_select pos_select" id="select_new_id_' + term_click + '">' + html + '</select><input class="cat_post term_post cat_sb term_name" type="text" name="new_cat_name[' + term_click + '][term]" id="term_new_id_' + term_click + '" value="" onclick="bind_add_new_term(' + term_click + ');"><textarea class="cat_post term_post cat_sb term_text" name="new_cat_name[' + term_click + '][meaning]" id="text_new_id_' + term_click + '" value="" onclick="bind_add_new_term(' + term_click + ');"></textarea><input class="cat_post term_post cat_sb term_link" id="link_new_id_' + term_click + '" type="text" name="new_cat_name[' + term_click + '][link]" value=""><input class="term_cb" type="checkbox" name="new_term_cb" id="new_term_cb_' + term_click + '"/><br><span class="error pos_err" id="cat_err_' + term_click + '">Term must have an associated category!</span></div>');
    });
}
function scrollToAnchor(aid) {
    var aTag = $('#' + aid);
    $('html,body').animate({scrollTop: aTag.offset().top - 100}, 'slow');
}
function logout() {
    var id = $('.logout').attr('id');
    $.ajax({url: prefix + 'ajax.php?logout', cache: false, type: 'get'}).done(function (data) {
        window.location.replace(prefix + id);
    });
}
function bind_image_btn() {
    $('.add_iamge_btn').bind('click', function (event) {
        var id = $(this).attr('id');
        var location_arr = id.split('_');
        var location = parseInt(location_arr[2]);
        location += 1;
        par_clicks += 1;
        var parent = $('#' + id).parent();
        var count = $("[class~='p_order']").length;
        var amount = count + 1;
        var index = location + 1;
        $('<br><div class="par_div" id="pr_div_' + amount + '"><label class="lable_wrap">Order:</label><input type="text" class="input_wrap p_order" name="p_order[' + amount + '][order]" id="p_order" value="' + amount + '"><br><label class="lable_wrap">Type:</label><input type="text" class="input_wrap" name="p_order[' + amount + '][type]" id="p_type" value="1"><br><fieldset class="legend"><input type="file" name="wiki_image" id="wiki_image"></fieldset><br><br><input type="button" value="x" id="close_par_row_' + amount + '"  onclick="close_par_div(pr_div_' + amount + ')"/><label class="big_label">Delete Image</label><input class="add_par" id="add_par_' + amount + '" type="button" value="+"/><label class="label_admin">Add Paragraph</label><input class="add_iamge" id="add_iamge_' + amount + '" type="button" value="+" /><label class="lable_wrap">Add Image</label></div><div class="cb"></div><br>').insertAfter(parent);
        var order_arr = $("[class~='p_order']");
        for (var i = 0; i < order_arr.length; i++) {
            var item = i + 1;
            $(order_arr[i]).val('' + item);
        }
        bind_add_image();
        bind_add_par();
    });
}
function processpaste(elem, savedcontent) {
    pasteddata = elem.innerHTML;
    elem.innerHTML = savedcontent;
}
function ref_screen() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    var span = $('.f_screen');
    var name = $('.game-name_span')[0].innerHTML;
    var program_id = span[0]['id'];
    var arr = program_id.split('_');
    var program = arr[0];
    program = program.replace(/ /g, '-');
    var frame = $('.iframe');
    var id = frame[0]['id'];
    frame[0]['src'] = '';
    frame[0]['src'] = prefix + 'gameplay.php?game=' + name + '&width=' + width + '&height=' + height + '&show=true';
}
function check_mail(mail) {
    var error = false;
    if (mail.indexOf('.') == -1) {
        error = true;
    }
    if (mail.indexOf('@') == -1) {
        error = true;
    }
    return error;
}
function close_toc_div(id) {
    var real_id = $(id).attr('id');
    $('#' + real_id).remove();
    toc_clicks -= 1;
}
function close_par_div(id) {
    var real_id = $(id).attr('id');
    if (typeof real_id == 'undefined') {
        real_id = id;
    }
    $('#' + real_id).remove();
    par_clicks -= 1;
    var order_arr = $("[class~='p_order']");
    for (var i = 0; i < order_arr.length; i++) {
        var item = i + 1;
        $(order_arr[i]).val('' + item);
    }
}
function delete_cat_ok_btn(pop_id, delete_id) {
    $('#' + pop_id).show();
    $('#' + delete_id).remove();
}
function delete_ok_btn(pop_id, delete_id) {
    $('#' + pop_id).show();
    $('#' + delete_id).remove();
    var order_arr = $("[class~='p_order']");
    for (var i = 0; i < order_arr.length; i++) {
        var item = i + 1;
        $(order_arr[i]).val('' + item);
    }
}
function delete_cancle_btn(id) {
    $('#' + id).hide();
}
function popup_div(id) {
    $('#' + id).show();
}
function remove_category(id) {
    $('#' + id).parent().remove();
}
function remove_term(id) {
    $('#' + id).parent().hide();
    $('#delete_term_cb_' + id).attr('checked', true);
}
function expand_category(id) {
    $.ajax({url: prefix + 'ajax.php?expand=' + id, cache: false, type: 'get'}).done(function (data) {
        $('#terms_div_' + id).hide();
        $('#terms_div_' + id).html(data);
        $('#terms_div_' + id).slideDown('slow');
        $('#btn_sb_' + id.toString()).val('-');
        $('#btn_sb_' + id.toString()).attr('onclick', 'callapse_category(' + id + ');');
    });
}
function expand_empty_phrases() {
    $.ajax({url: prefix + 'ajax.php?empty_phrases', cache: false, type: 'get'}).done(function (data) {
        $('#empty_phrases_div').hide();
        $('#empty_phrases_div').html(data);
        $('#empty_phrases_div').slideDown('slow');
        $('#empty_phrases'.toString()).val('Callapse all empty phrases');
        $('#empty_phrases'.toString()).attr('onclick', 'callapse_empty_phrases();');
    });
}
function callapse_empty_phrases() {
    $('#empty_phrases_div').slideUp('slow');
    $('#empty_phrases'.toString()).val('Get all empty phrases');
    $('#empty_phrases'.toString()).attr('onclick', 'expand_phrase();');
}
function expand_phrase() {
    $('#empty_phrases_div').slideDown('slow');
    $('#empty_phrases'.toString()).val('Callapse all empty phrases');
    $('#empty_phrases'.toString()).attr('onclick', 'callapse_empty_phrases();');
}
function expand_term(id) {
    $('#terms_div_' + id).slideDown('slow');
    $('#btn_sb_' + id.toString()).val('-');
    $('#btn_sb_' + id.toString()).attr('onclick', 'callapse_category(' + id + ');');
}
function callapse_category(id) {
    var new_id = parseInt(id) + 1;
    $('#terms_div_' + id).slideUp('slow');
    $('#btn_sb_' + id.toString()).val('+');
    $('#btn_sb_' + id.toString()).attr('onclick', 'expand_term(' + id + ');');
}
function close_kw_div(id) {
    var real_id = $(id).attr('id');
    $('#' + real_id).remove();
    kw_clicks -= 1;
}
function close_f_screen() {
    $('body').css('overflow', 'auto');
    var span = $('.f_screen');
    var program_id = span[0]['id'];
    var arr = program_id.split('_');
    var program = arr[0];
    program = program.replace(/ /g, '-');
    var frame = $('.iframe');
    var name = $('.game-name_span')[0].innerHTML;
    var id = frame[0]['id'];
    frame[0]['src'] = '';
    $('.full_frame').remove();
    $('body').css('overflow', 'auto');
    frame[0]['src'] = prefix + 'gameplay.php?game=' + name + '&width=690&height=518&show=true';
    var div = $('.dragons');
    $('<iframe class="iframe" id=' + id + ' src="' + prefix + 'gameplay.php?game=' + name + '&width=690&height=518"></iframe>').insertBefore(div);
}
function handle_img() {
    var page = 'games';
    if (page === 'games') {
        if (arr_blanks !== 0) {
            if (lock_img === 0) {
                lock_img = 1;
                get_blanks();
                add_images();
                lock_img = 0;
            }
        }
    }
}
function get_blanks() {
    arr_blanks = $('.' + block_classname + ':not(:has(img))');
}
function add_images() {
    for (var i = 0; i < arr_blanks.length; i++) {
        var img_name = $(arr_blanks[i]).attr('name');
        var onerror = '';
        var img = '';
        onerror = "this.src = '" + prefix + "hlis/api/image-repository/image-repo-source-images/img_dest/default_game_ss_freak/176x135/gameGeneric.jpg'";
        img = '<img class="game_img" src="' + prefix + 'hlis/api/image-repository/image-repo-source-images/img_dest/game_ss/176x135/' + img_name + '_ss.jpg" width="141" height="105" onerror="' + onerror + '">';
        $(arr_blanks[i]).prepend(img);
        $('.game_img').each(function () {
            $(this).animate({opacity: '1'}, 1500);
        });
    }
}
function add_h2_text() {
    $('.add_h2_text').bind('click', function () {
        var val = $(this).prev().val();
        if (val != '') {
            var final_val = '<h2 class="content__item-title_guide content__item-title guide_comments item_guide-related">' + val + '</h2>';
            $('.text_area').val($('.text_area').val() + final_val);
        }
        $('.h2_div').html('');
    });
}
function add_h3_text() {
    $('.add_h3_text').bind('click', function () {
        var val = $(this).prev().val();
        if (val != '') {
            var final_val = '<h3 class="mobile-none">' + val + '</h3>';
            $('.text_area').val($('.text_area').val() + final_val);
        }
        $('.h3_div').html('');
    });
}
function add_p_text() {
    $('.add_p_text').bind('click', function () {
        var val = $(this).prev().val();
        if (val != '') {
            var final_val = '<p>' + val + '</p>';
            $('.text_area').val($('.text_area').val() + final_val);
        }
        $('.p_div').html('');
    });
}
function add_list_text() {
}
function mark_guide_helpful(id) {
    $.ajax({url: prefix + 'ajax.php?guide_helpful=' + id, type: 'get'}).done(function (data) {
        if (data != '') {
            $('.meter_holder').html(data);
        }
    });
}
function mark_guide_not_helpful(id) {
    $.ajax({url: prefix + 'ajax.php?guide_not_helpful=' + id, type: 'get'}).done(function (data) {
        if (data != '') {
            $('.meter_holder').html(data);
        }
    });
}
function bind_delete_guide() {
    $('#popup_par').show();
}
function bind_cancle_btn() {
    $('#popup_par').hide();
}
function bind_ok_btn() {
    $('#delete_guide_cb').attr('checked', true);
    var id = $('.guide_ids option:selected').val();
    var text = $('.guide_ids option:selected').text();
    $('#delete_guide_cb').attr('value', id);
    $.ajax({url: prefix + 'ajax.php?delete_guide=' + id + '|' + text, type: 'get'}).done(function (data) {
        window.location.replace(prefix + 'guides_admin.php');
    });
}
function bind_hover() {
    $('.game_li').bind('mouseenter', function () {
        var e = $(this).children().children();
        var elem_id = e[2]['id'];
        elem_id = elem_id.replace('&', '%26');
        $('#' + elem_id).css('background', '#e500a7');
        var arr = $(this).children().children();
        var id = arr[3]['id'];
        $('#' + id).show();
    });
}
function bind_less() {
    $('.less').bind('click', function () {
        $('.text-more').hide();
        $(this).removeClass('less');
        $('.arrow_text').removeClass('arrow_mobile_up');
        $(this).addClass('more');
        $('.arrow_text').addClass('arrow_mobile');
        $('.holder').css('height', '90px');
        $('.holder').append('<style>.holder:after{display:inline-block !important;}</style>');
        $('.medal_panel').hide();
        $('.read_more_text').html('READ MORE');
        bind_more();
    });
}
function bind_more() {
    $('.more').bind('click', function () {
        $('.text-more').show();
        $(this).removeClass('more');
        $('.arrow_text').removeClass('arrow_mobile');
        $(this).addClass('less');
        $('.arrow_text').addClass('arrow_mobile_up');
        $('.holder').css('height', 'auto');
        $('.holder').append('<style>.holder:after{display:none !important;}</style>');
        $('.medal_panel').show();
        $('.read_more_text').html('READ LESS');
        bind_less();
    });
}
function unbind_hover() {
    $('.game_li').bind('mouseleave', function () {
        var e = $(this).children().children();
        var elem_id = e[2]['id'];
        $('#' + elem_id).css('background', '#F2F2F2');
        var arr = $(this).children().children();
        var id = arr[3]['id'];
        $('#' + id).hide();
    });
}
function check_form() {
    var error = false;
    var categories = $("[class='rb_input']:checked");
    var length = categories.length;
    var other_cat = $('#cat_other').val();
    var divs_arr = $("[class='par_div']");
    if (length === 0 && other_cat === '') {
        error = true;
        $('#c_cat_error').show();
    } else if (length != 0 && other_cat != '') {
        error = true;
        $('#dup_cat_error').show();
    } else {
        $('#dup_cat_error').hide();
        $('#c_cat_error').hide();
    }
    var g_title = $('#g_title').val();
    if (g_title === '') {
        error = true;
        $('#g_title_error').show();
    } else {
        $('#g_title_error').hide();
    }
    var image = $('#guide_image').val();
    if (image == '' && $('#guide_main_image').attr('alt') === '') {
        error = true;
        $('#image_error').show();
    } else {
        $('#image_error').hide();
    }
    return error;
}
function bind_mobile_filter(program) {
    $('#mobile_fr').bind('click', function () {
        $.ajax({url: prefix + 'ajax.php?filter=friendly&soft=' + program, type: 'get'}).done(function (data) {
            $('.list_holder').html(data);
        });
    });
    $('#all_li').bind('click', function () {
        $.ajax({url: prefix + 'ajax.php?filter=all&soft=' + program, type: 'get'}).done(function (data) {
            $('.list_holder').html(data);
            bind_mobile_filter(program);
        });
    });
}
function bind_error() {
    $('img').error(function () {
        this.src = prefix + 'hlis/api/image-repository/image-repo-source-images/img_dest/default_game_ss_freak/176x135/gameGeneric.jpg';
    });
}
function bind_filter_click() {
    $('.filter_span').bind('click', function () {
        if ($('.scrollbar').is(":visible")) {
            $('.scrollbar').hide();
        }
        else {
            $('.scrollbar').fadeIn(500);
        }
    });
}
function bind_filter_li_click() {
    $('.filter_li').click(function () {
        var program = $(this).text();
        $('.program_span').text(program);
        $('.scrollbar').hide();
        var elem = $('.bg_span');
        var classes = elem[0]['className'];
        var arr = classes.split(' ');
        var item = arr[1];
        var subItem = item.split('_');
        var className = subItem[0];
        $('.filter_span').removeClass('filter_span_click');
        $.ajax({
            url: prefix + "ajax.php",
            type: 'get',
            data: "program=" + program + "&type=" + className
        }).done(function (data) {
            $('.games_ul').html(data);
            bind_hover();
            unbind_hover();
            bind_error();
            var pager = $('.num_ul');
            if (program != 'All Programs') {
                $('.num_ul').hide();
            }
            else {
                $('.num_ul').show();
            }
        });
    });
}
function bind_click_rb_input(id) {
    $.ajax({url: prefix + 'ajax.php?cat_click=' + id, type: 'get', cache: false,}).done(function (data) {
        $('.related_terms_div').html(data);
    });
}
function bind_rb_input(id) {
    $('#' + id).attr('checked', false);
    var categories = $("[class='rb_input']:checked");
    if (categories.length === 0) {
        $('.related_terms_div').html('');
    }
}
window.searchRequestParams = {'phrase': '', 'section': '', 'offsetCasinos': 0, 'offsetGames': 0, 'offsetArticles': 0};
$(document).on('click', '.ajax-load-more-results', function () {
    var section = $(this).data('section');
    searchRequestParams.section = section;
    switch (searchRequestParams.section) {
        case'casinos':
            if (searchRequestParams.offsetCasinos == 0) {
                searchRequestParams.offsetCasinos = 5;
            } else {
                searchRequestParams.offsetCasinos += 20;
            }
            break;
        case'games':
            if (searchRequestParams.offsetGames == 0) {
                searchRequestParams.offsetGames = 4;
            } else {
                searchRequestParams.offsetGames += 20;
            }
            break;
        case'articles':
            if (searchRequestParams.offsetArticles == 0) {
                searchRequestParams.offsetArticles = 4;
            } else {
                searchRequestParams.offsetArticles += 20;
            }
            break;
    }
    $(this).remove();
    displaySearchResults();
});
function displaySearchResults() {
    $.ajax({
        'method': 'GET',
        'url': prefix + 'ajax.php',
        'data': {'searchRequestParams': searchRequestParams}
    }).done(function (serverResponse) {
        switch (searchRequestParams.section) {
            case'all':
                $('.site__content-wrap').html(serverResponse);
                break;
            case'casinos':
                if (searchRequestParams.offsetCasinos == 0) {
                    $('.site__content-wrap').html(serverResponse);
                }
                if (searchRequestParams.offsetCasinos > 0) {
                    $('.content__item.content__item_table').last().after(serverResponse);
                    $('.casino-list-row-number').each(function (index, element) {
                        $(element).text((index + 1) + '.');
                    });
                    $('section.content__item.content__item_table').each(function (index, element) {
                        if (index != 0) {
                            $(element).addClass('ajax-search-casinos-table-patch-top');
                        }
                    });
                }
                break;
            case'games':
                if (searchRequestParams.offsetGames == 0) {
                    $('.site__content-wrap').html(serverResponse);
                }
                if (searchRequestParams.offsetGames > 0) {
                    $('#ajax-games-response-body').find('.related__game').last().after(serverResponse);
                }
                break;
            case'articles':
                if (searchRequestParams.offsetArticles == 0) {
                    $('.site__content-wrap').html(serverResponse);
                }
                if (searchRequestParams.offsetArticles > 0) {
                    serverResponse = '<div>' + serverResponse + '</div>';
                    $(serverResponse).find('.related__game').each(function (index, element) {
                        $('#ajax-articles-response-wrapper').find('.related__game').last().after(element);
                    });
                    $('#ajax-articles-response-wrapper').after($(serverResponse).find('.wrapper-ajax-load-more-results').html());
                }
                break;
        }
        if (document.body.offsetWidth >= 900) {
            $('html, body').height($('.site__aside').height() + 700);
        }
        $('.site__content-wrap').css('height', 'auto');
        $('.site__content-wrap').css('opacity', '1');
        bindTooltipForCasinoTags();
        bindTooltipForMoreSoftware();
        bindCasinoListRowExpand();
    });
}
$('body').on('click', '#ajax-search-tab-casinos', function () {
    searchRequestParams.section = 'casinos';
    searchRequestParams.offsetCasinos = 0;
    $('.site__content-wrap').css('opacity', '0.2');
    displaySearchResults();
});
$('body').on('click', '#ajax-search-tab-games', function () {
    searchRequestParams.section = 'games';
    searchRequestParams.offsetGames = 0;
    $('.site__content-wrap').css('opacity', '0.2');
    displaySearchResults();
});
$('body').on('click', '#ajax-search-tab-articles', function () {
    searchRequestParams.section = 'articles';
    searchRequestParams.offsetArticles = 0;
    $('.site__content-wrap').css('opacity', '0.2');
    displaySearchResults();
});
$('body').on('click', '#ajax-search-tab-all', function () {
    searchRequestParams.section = 'all';
    searchRequestParams.offsetCasinos = 0;
    searchRequestParams.offsetGames = 0;
    searchRequestParams.offsetArticles = 0;
    $('.site__content-wrap').css('opacity', '0.2');
    displaySearchResults();
});
$('body').on('click', '#ajax-close-search-results', function () {
    $('.site__content-wrap').html(contentBeforeSearch);
    bindTooltipForCasinoTags();
});
window.contentBeforeSearch = $('.site__content-wrap').html();
function search(searchClass) {
    var userPhrase = $.trim($('.' + searchClass).val());
    if (userPhrase == '') {
        return;
    }
    searchRequestParams = {'phrase': '', 'section': 'all', 'offsetCasinos': 0, 'offsetGames': 0, 'offsetArticles': 0};
    searchRequestParams.phrase = userPhrase;
    displaySearchResults();
}
$('body').on('click', function (event) {
    if (!$(event.target).closest('.search-suggestions').length) {
        $('.search-suggestions').html('');
        $('.search-suggestions').css('display', 'none');
    }
});
$('.searchbox, .header_searchbox').on('keyup', function (event) {
    var that = this;
    keyCode = event.which || event.keyCode;
    if (keyCode == 13) {
        $('.search-suggestions').html('');
        $('.search-suggestions').css('display', 'none');
        return;
    }
    if (!$('.search-suggestions').length) {
        $(this).after('<div class="search-suggestions"></div>');
    }
    var userPhrase = $(this).val();
    if (userPhrase != '') {
        $.ajax({
            'method': 'GET',
            'url': prefix + 'ajax.php',
            'data': {'searchSuggestionPhrase': userPhrase}
        }).done(function (serverResponse) {
            if ($.trim(serverResponse) != '' && $(that).val() != '') {
                $('.search-suggestions').html(serverResponse);
                $('.search-suggestions').css('display', 'block');
                switch ($(that).attr('class')) {
                    case'searchbox':
                        $('.search-suggestions-show-all').addClass('search-suggestions-show-all-desktop');
                        break;
                    case'header_searchbox':
                        $('.search-suggestions-show-all').addClass('search-suggestions-show-all-mobile');
                        break;
                }
            } else {
                $('.search-suggestions').html('');
                $('.search-suggestions').css('display', 'none');
            }
        });
    } else {
        $('.search-suggestions').html('');
        $('.search-suggestions').css('display', 'none');
    }
});
$('body').on('click', '.search-suggestions-show-all', function () {
    $('.search-suggestions').html('');
    $('.search-suggestions').css('display', 'none');
    if ($(this).hasClass('search-suggestions-show-all-desktop')) {
        search('searchbox');
    } else {
        search('header_searchbox');
    }
});
function check_contact_form() {
    var name = $('.contact_name').val();
    var email = $('.contact_mail').val();
    var subject = $('.contact_subject').val();
    var message = $('.contact_msg').val();
    var error = false
    if (name == '') {
        $('.contact_name_error').show();
        error = true;
    }
    else {
        $('.contact_name_error').hide();
    }
    if ((email.indexOf('.') == -1) || (email.indexOf('@') == -1)) {
        $('.contact_mail_error').show();
        error = true;
    }
    else {
        $('.contact_mail_error').hide();
    }
    if (subject == '') {
        $('.sub_error').show();
        error = true;
    }
    else {
        $('.sub_error').hide();
    }
    if (message.length < 2) {
        $('.msg_error').show();
        error = true;
    }
    else {
        $('.msg_error').hide();
    }
    return error;
}
function check_capcha() {
    var capcha = $('.capcha').val();
    var error = false;
    if (capcha != '8') {
        $('.cap_error').show();
        error = true;
    }
    else {
        $('.cap_error').hide();
    }
    return error;
}
function send_form() {
    $('form').submit(function (e) {
        var error = check_contact_form();
        var robot = check_capcha();
        if (error == true || robot == true) {
            e.preventDefault();
        }
    });
}
function update_comment_helpful(id, helpful_id, total_id, type) {
    $.ajax({url: prefix + 'ajax.php?helpful=' + id + '&type=' + type, type: 'get'}).done(function (data) {
        if (data != '') {
            var data_arr = data.split('|');
            var helpful = data_arr[0];
            var total = data_arr[1];
            $('#' + helpful_id).html(helpful);
            $('#' + total_id).html(total);
            var id_arr = id.split('_');
            var real_id = id_arr[0];
            $('#thanx_' + real_id).show();
        }
    });
}
function add_par_btn(id) {
    var amount = $("[class~='p_order']").length;
    amount += 1;
    var real_id = $(id).attr('id');
    var location_arr = real_id.split('_');
    var location = parseInt(location_arr[2]);
    location += 1;
    par_clicks += 1;
    var parent = $('#' + real_id).parent();
    var index = location + 1;
    $('<br><div class="par_div" id="pr_div_' + amount + '"><label class="lable_wrap">Order:</label><input type="text" class="input_wrap p_order" name="p_order[' + amount + '][order]" id="p_order" value="' + index + '"><br><label class="lable_wrap">Type:</label><input type="text" class="input_wrap" name="p_order[' + amount + '][type]" id="p_type" value="-1"><br><label class="lable_wrap">Inner:</label><input type="text" class="input_wrap" name="p_order[' + amount + '][inner]" id="p_inner" value="0"><br><label class="lable_wrap">Title:</label><input type="text" class="input_wrap p_title" name="p_order[' + amount + '][title]" id="p_title"><textarea rows="4" cols="50" name="p_order[' + amount + '][content]" id="g_par_' + amount + '" class="comments__form-message" required=""></textarea><script>	CKEDITOR.replace("g_par_' + amount + '",{height: "300",width: "100%"});</script><br><input type="button" value="x" id="close_par_row_' + amount + '"  onclick="close_par_div(pr_div_' + amount + ')"/><label class="big_label">Delete Paragraph</label><input class="add_par" id="add_par_' + amount + '" type="button" value="+"/><label class="label_admin">Add Paragraph</label><input class="add_iamge" type="button" value="+" /><label class="lable_wrap">Add Image</label></div><div class="cb"></div><br>').insertAfter(parent);
    var order_arr = $("[class~='p_order']");
    var order_arr = $("[class~='p_order']");
    for (var i = 0; i < order_arr.length; i++) {
        var item = i + 1;
        $(order_arr[i]).val('' + item);
    }
}
function add_image_btn(id) {
    var real_id = $(id).attr('id');
    var parent = $('#' + real_id).parent();
    var amount = $("[class~='p_order']").length;
    amount += 1;
    $('<br><div class="par_div" id="pr_div_' + amount + '"><label class="lable_wrap">Order:</label><input type="text" class="input_wrap p_order" name="p_order[' + par_clicks + '][order]" id="p_order" value="' + amount + '"><br><label class="lable_wrap">Type:</label><input type="text" class="input_wrap" name="p_order[' + amount + '][type]" id="p_type" value="1"><br><fieldset class="legend"><input type="file" name="wiki_image" id="wiki_image"></fieldset><br><input type="button" value="x" id="close_par_row_' + amount + '"  onclick="close_par_div(pr_div_' + amount + ')"/><label class="label_admin">Delete Image</label><input class="add_par" id="add_par_' + amount + '" type="button" value="+" /><label class="label_admin">Add Paragraph</label><input class="add_iamge" type="button" value="+" onclick="add_image_btn(' + real_id + ');"/><label class="lable_wrap">Add Image</label></div><div class="cb"></div><br>').insertAfter(parent);
}
function edit_term(term_id) {
    $('#update_term_cb_' + term_id).attr('checked', true);
}
function add_new_term() {
    $('#new_term_cb_0').attr('checked', true);
}
function bind_add_new_term(id) {
    $('#new_term_cb_' + id).attr('checked', true);
}
function bind_add_par() {
    $('.add_par').bind('click', function (event) {
        var amount = $("[class~='p_order']").length;
        amount += 1;
        var id = $(this).attr('id');
        var location_arr = id.split('_');
        var location = parseInt(location_arr[2]);
        location += 1;
        par_clicks += 1;
        var parent = $('#' + id).parent();
        var index = location + 1;
        $('<br><div class="par_div" id="pr_div_' + amount + '"><div class="par_border"><label class="lable_wrap">Order:</label><input type="text" class="input_wrap p_order" name="p_order[' + amount + '][order]" id="p_order" value="' + index + '"><br><label class="lable_wrap">Type:</label><input type="text" class="input_wrap" name="p_order[' + amount + '][type]" id="p_type" value="-1"><br><label class="lable_wrap">Inner:</label><input type="text" class="input_wrap" name="p_order[' + amount + '][inner]" id="p_inner" value="0"><br><label class="lable_wrap">Title:</label><input type="text" class="input_wrap p_title" name="p_order[' + amount + '][title]" id="p_title"><textarea rows="4" cols="50" name="p_order[' + amount + '][content]" id="g_par_' + amount + '" class="comments__form-message" required=""></textarea><script>	CKEDITOR.replace("g_par_' + amount + '",{height: "300",width: "100%"});</script><br></div><br><input type="button" value="x" id="close_par_row_' + amount + '"  onclick="close_par_div(pr_div_' + amount + ')"/><label class="big_label">Delete Paragraph</label><input class="add_par" id="add_par_' + amount + '" type="button" value="+" /><label class="label_admin">Add Paragraph</label><input class="add_iamge" id="add_iamge_' + amount + '" type="button" value="+"/><label class="lable_wrap">Add Image</label></div><div class="cb"></div><br>').insertAfter(parent);
        var order_arr = $("[class~='p_order']");
        for (var i = 0; i < order_arr.length; i++) {
            var item = i + 1;
            $(order_arr[i]).val('' + item);
        }
        $('.add_iamge').unbind('click');
        bind_add_image();
        $('.add_par').unbind('click');
        bind_add_par();
    });
}
function bind_add_image() {
    $('.add_iamge').bind('click', function () {
        var id = $(this).attr('id');
        var parent = $('#' + id).parent();
        var amount = $("[class~='p_order']").length;
        amount += 1;
        $('<br><div class="par_div" id="pr_div_' + amount + '"><div class="par_border"><label class="lable_wrap">Order:</label><input type="text" class="input_wrap p_order" name="p_order[' + amount + '][order]" id="p_order" value="' + amount + '"><br><label class="lable_wrap">Type:</label><input type="text" class="input_wrap" name="p_order[' + amount + '][type]" id="p_type" value="1"><br><fieldset class="legend"><input type="file" name="wiki_image_' + amount + '" id="wiki_image_' + amount + '"></fieldset><br></div><br><input type="button" value="x" id="close_par_row_' + amount + '"  onclick="close_par_div(pr_div_' + amount + ')"/><label class="big_label">Delete Image</label><input class="add_par" id="add_par_' + amount + '" type="button" value="+" /><label class="label_admin">Add Paragraph</label><input class="add_iamge" type="button" id="add_iamge_' + amount + '" value="+"/><label class="lable_wrap">Add Image</label></div><div class="cb"></div><br>').insertAfter(parent);
        var order_arr = $("[class~='p_order']");
        for (var i = 0; i < order_arr.length; i++) {
            var item = i + 1;
            $(order_arr[i]).val('' + item);
        }
        $('.add_iamge').unbind('click');
        bind_add_image();
        $('.add_par').unbind('click');
        bind_add_par();
    });
}
function bind_add_par_btn() {
    $('.add_par_btn').bind('click', function (event) {
        var id = $(this).attr('id');
        var parent = $('#' + id).parent();
        var amount_count = $("[class~='p_order']").length;
        var amount = amount_count + 1;
        $('<br><div class="par_div" id="pr_div_' + amount + '"><div class="par_border"><label class="lable_wrap">Order:</label><input type="text" class="input_wrap p_order" name="p_order[' + par_clicks + '][order]" id="p_order" value="' + amount + '"><br><label class="lable_wrap">Type:</label><input type="text" class="input_wrap" name="p_order[' + par_clicks + '][type]" id="p_type" value="-1"><br><br><label class="lable_wrap">Inner:</label><input type="text" class="input_wrap" name="p_order[' + par_clicks + '][inner]" id="p_inner" value="0"><br><label class="lable_wrap">Title:</label><input type="text" class="input_wrap p_title" name="p_order[' + par_clicks + '][title]" id="p_title"><textarea rows="4" cols="50" name="p_order[' + par_clicks + '][content]" id="g_par_' + amount + '" class="comments__form-message" required=""></textarea><script>	CKEDITOR.replace("g_par_' + amount + '",{height: "300",width: "100%"});</script><br></div><br><input type="button" value="x" id="close_par_row_' + amount + '"  onclick="close_par_div(pr_div_' + amount + ')"/><label class="big_label">Delete Paragraph</label><input class="add_par" id="add_par_' + amount_count + '" type="button" value="+"><label class="label_admin">Add Paragraph</label><input class="add_iamge" id="add_image_' + amount_count + '" type="button" value="+"><label class="lable_wrap">Add Image</label></div><div class="cb"></div><br>').insertAfter(parent);
        $('.cke_dialog_ui_input_text').val('#');
        var order_arr = $("[class~='p_order']");
        for (var i = 0; i < order_arr.length; i++) {
            var item = i + 1;
            $(order_arr[i]).val('' + item);
        }
        par_clicks += 1;
        bind_add_par();
        bind_add_image();
    });
}
function update_comment_not_helpful(id, helpful_id, total_id, type) {
    $.ajax({url: prefix + 'ajax.php?not_helpful=' + id + '&type=' + type, type: 'get'}).done(function (data) {
        if (data != '') {
            $('#' + total_id).html(data);
            var id_arr = id.split('_');
            var real_id = id_arr[0];
            $('#thanx_' + real_id).show();
        }
    });
}

