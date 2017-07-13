( function() {
    
    var filterItem = $('.filter-click'),
        _loadItem = 0,
        _timer = setTimeout( function(){}, 1 ),
        _gride = $( '.grid' ),
        filterElem = _gride.find('.similar__link'),
        ItemLength = filterElem.length;

    $( function() {

        _gride.each( function() {
            $( this ).isotope({
                itemSelector: '.more__item',
                layoutMode: 'fitRows'
            });
        });

        $( '.tabs' ).each( function(){
            new Tabs( {
                obj: $( this ),
                showType: 0, // if "showType = 0" tabs will be without any animations
                activeIndex: function( index ){
                }
            } );
        } );

        $( '.swiper-container' ).each(function () {
            Slider( $( this ) );
        });

        $( '.game-load' ).each( function() {
            GameMore( $( this ) );
        });

        $( '.tooltip' ).each ( function() {
            new Tooltip( $( this ) );
        }) ;

        $( '.single__demo-btn' ).each( function() {
            DemoOpen( $( this ) );
        });

        $( '.mobile-href' ).each( function() {
            mobileHref( $( this ) );
        });

        $( '.no-ajax' ).each( function() {
           Filter( $( this ) );
        });

        _gride.each( function() {
            $(this).isotope({ filter: '*' });
        });

        $('.perbar').each( function() {

            $( this ).perfectScrollbar({
                    suppressScrollX : 'true'
                }
            );

            $( this ).removeClass( 'ps-active-y' );

        });

        $( '.popup' ).each(function(){

            new Popup($(this));

        });

        $( '.learn__menu' ).each(function() {
            MenuDown($(this));
        });

    } );

    var Tabs = function( params ) {

        //private properties
        var _self = this,
            _obj = params.obj,
            _showType = params.showType,
            _callbackActiveIndex = params.activeIndex,
            _window = $( window ),
            _tabsBtn = _obj.find( 'dt'),
            _tabsContent = _obj.find( 'dd'),
            _mobileScreen = true,
            _globalWidth = 0;

        //private methods
        var _addClassForAnimation = function() {

                if( _showType == 1 ){

                    _obj.addClass( 'tabs_animated1' );

                } else if( _showType == 2 ){

                    _obj.addClass( 'tabs_animated2' );

                }

            },
            _onEvents = function()  {

                _tabsBtn.on( {
                    click: function() {

                        _slideContent( $( this) );
                        _changeActiveTab( $( this) );

                    }
                } );

                _window.on( {
                    load: function () {

                        _setFirstActive();

                    }
                } );

            },

            _init = function() {

                _obj[ 0 ].obj = _self;
                _onEvents();
                _addClassForAnimation();

            },
            _changeActiveTab = function( elem ) {

                var curItem = elem,
                    nextContent = curItem.next(),
                    nextContentInner = nextContent.find( '.tabs__content' );

                if( !curItem.hasClass( 'active' ) ) {

                    _tabsBtn.removeClass( 'active' );
                    _tabsContent.height( 0 );
                    curItem.addClass( 'active' );
                    nextContent.innerHeight( nextContentInner.innerHeight() );
                }

                _callbackActiveIndex( curItem.index() / 2 );

            },
            _setFirstActive = function() {

                if( _mobileScreen ) {

                    _tabsBtn.eq( 0 ).addClass( 'active' );
                    _tabsBtn.eq( 0 ).next().height( _tabsBtn.eq( 0 ).next().find('.tabs__content').outerHeight(true) );

                }

            },
            _slideContent = function( elem ) {

                var curItem = elem,
                    nextContent = curItem.next(),
                    nextContentInner = nextContent.find( '.tabs__content' );

                if( !curItem.hasClass( 'active' ) ) {

                    _tabsBtn.removeClass( 'active' );
                    _tabsContent.removeAttr( 'style' );
                    curItem.addClass( 'active' );
                    nextContent.height( nextContentInner.outerHeight(true) );

                } else {

                    curItem.removeClass( 'active' );
                    nextContent.removeAttr( 'style' );
                }

            };

        _init();
    };

    var Slider = function (obj) {

        //private properties
        var _self = this,
            _obj = obj,
            _next = _obj.find( '.similar-next' ),
            _prev = _obj.find( '.similar-prev' ),
            _pagination = _obj.find( '.similar-pagination'),
            _thisLoad = true,
            _thisLoadTop = true,
            swiper,
            _swiper;

        //private methods
        var _addEvents = function () {

                $( window ).on({
                    resize: function () {

                        if( $( window ).width() < 768) {

                            if(_thisLoad){
                                if (_obj.hasClass( 'similar-wrap' )) {
                                    _swiper = new Swiper( _obj, {
                                        nextButton: _next,
                                        prevButton: _prev,
                                        pagination: _pagination,
                                        paginationClickable: true,
                                        slidesPerView: 1
                                    });
                                }
                                _thisLoad = false;
                            }

                        } else {

                            if(!_thisLoad){

                                _thisLoad = true;

                                if (typeof(_swiper) !== "undefined" ) {
                                    _swiper.destroy(true, true);
                                }

                            }
                        }

                        if( $( window ).width() < 1024) {

                            if(_thisLoadTop){

                                if (_obj.hasClass( 'menu-slider__wrap' )) {
                                    //  swiper = new Swiper( _obj, {
                                    //      slidesPerView: 'auto',
                                    //      centeredSlides: false,
                                    //      spaceBetween: 0,
                                    //     // touchMoveStopPropagation: false,
                                    //     // simulateTouch: false,
                                    //     freeMode: true,
                                    //     loop: false
                                    // });

                                    swiper.update();
                                }
                                _thisLoadTop = false;
                            }

                        } else {

                            if(!_thisLoadTop){

                                _thisLoadTop = true;

                                if (typeof(swiper) !== "undefined" ) {
                                    swiper.destroy(true, true);
                                }

                            }
                        }

                    },
                    load: function () {
                        _loadSlider();
                    }
                });

            },
            _loadSlider = function () {

                if( $(window).width() < 768 ){

                    if (_obj.hasClass( 'similar-wrap' )) {
                        _swiper = new Swiper( _obj, {
                            nextButton: _next,
                            prevButton: _prev,
                            pagination: _pagination,
                            paginationClickable: true,
                            slidesPerView: 1
                        });

                    }
                    _thisLoad = false;
                }

                if( $(window).width() < 1024 ){

                    if (_obj.hasClass( 'menu-slider__wrap' )) {
                        swiper = new Swiper( _obj, {
                            slidesPerView: 'auto',
                            centeredSlides: false,
                            spaceBetween: 0,
                            // touchMoveStopPropagation: false,
                            // simulateTouch: false,
                            freeMode: true,
                            loop: false,
                            onInit: function (sw) {
                                swiper.updateContainerSize();
                                swiper.updateSlidesSize();
                            }
                        });
                    }
                    _thisLoadTop = false;

                }
            },
            _init = function () {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var GameMore = function(obj) {

        //private properties
        var _obj = obj,
            curShowItem = _obj.find('.more__item'),
            curShowItemLength = curShowItem.length,
            curShowDataStart = 0,
            _btnMore = _obj.find('.game__load-more'),
            _btnMoreNumber = _btnMore.data('load'),
            curShowData = _btnMore.data('show'),
            _request = new XMLHttpRequest();

        curShowItem.slice(curShowDataStart,ItemLength).addClass('hidden');

        curShowItem.slice(curShowDataStart,curShowData).addClass('already-load-start');

        if( _btnMoreNumber > curShowData ){
            curShowDataStart = curShowData - _btnMoreNumber;
        }

        //private methods
        var _addEvents = function() {

                _btnMore.on({
                    click: function(){

                        if(!$('.game-load').hasClass('filter-no')){
                            $('.game-load').addClass('grid-active');

                            _ajaxPopupRequest();

                        }

                        if($(this).hasClass('game-filter-active')){

                            $(this).removeClass('game-filter-active');
                            filterElem.removeClass('game-filter-active');
                            $(this).addClass('game-results-active-btn');

                            $('.game-load').addClass('grid-active');

                        } else{

                            curShowData = curShowData + _btnMoreNumber;
                            curShowDataStart = curShowDataStart + _btnMoreNumber;

                            curShowItem.slice(curShowDataStart,curShowData).addClass('already-load');

                            if ( curShowData >= curShowItemLength ){

                                $(this).addClass('game-results-all');

                            }
                            _loadItem = curShowData;
                            _obj.attr('data-already', curShowData);
                            _obj.attr('data-show', curShowItemLength);
                        }

                        return false;
                    }
                });

            },
            _init = function() {

                _addEvents();

            },
            _ajaxPopupRequest = function( element ){

                var curElement = element;

                _request = $.ajax( {
                    url: 'http://demo.websters.com.ua/casino-freake/php/article-list.php',
                    data: {
                        loadedCount: 20
                    },
                    dataType: 'html',
                    type: 'GET',
                    success: function ( data ) {

                        _obj.find( '.learn' ).append( data );
                        _obj.find( '.learn__item' ).filter( '.new' ).addClass( 'already-load-start' ).removeClass( 'new' );
                        return false;

                    },
                    error: function ( XMLHttpRequest ) {
                        if ( XMLHttpRequest.statusText != "abort" ) {
                            console.log( 'err' );
                            return false;
                        }
                    }
                } );

            };

        //public properties

        //public methods

        _init();
    };

    var Tooltip = function( obj ) {

        //private properties
        var _obj = obj,
            _site = $( '.site' ),
            _request = new XMLHttpRequest();

        //private methods
        var _addEvents = function() {

                var _allTooltips = $( '.tooltip' );

                _obj.on(
                    'click', function () {

                        var curElement = $( this ),
                            curElementTooltip = curElement.find( '.tooltip__wrap' );

                        if ( curElement.hasClass( 'active' ) ) {

                            curElement.removeClass( 'active' );
                            curElementTooltip.remove();

                        } else {

                            _ajaxPopupRequest( curElement );
                            _allTooltips.removeClass( 'active' );
                            _allTooltips.find( '.tooltip__wrap' ).remove();
                            curElement.addClass( 'active' );

                        }

                        return false;

                    }

                );

                _site.on(
                    'click', function ( e ) {

                        var tooltipWrap = _obj.find( '.tooltip__wrap' );

                        if ( tooltipWrap.length > 0 && $( e.target ).closest( tooltipWrap ).length == 0 ){

                            _obj.removeClass( 'active' );
                            tooltipWrap.remove();

                        }

                    }
                );

            },
            _ajaxPopupRequest = function( element ){

                var curElement = element;

                _request = $.ajax( {
                    url: 'http://demo.websters.com.ua/casino-freake/php/tooltip__wrap.php',
                    data: {
                        tooltipId: curElement.data( 'id' ),
                        tooltipTag:  curElement.data( 'tag' )
                    },
                    dataType: 'html',
                    type: 'GET',
                    success: function ( data ) {

                        curElement.append( data );
                        return false;

                    },
                    error: function ( XMLHttpRequest ) {
                        if ( XMLHttpRequest.statusText != "abort" ) {
                            console.log( 'err' );
                            return false;
                        }
                    }
                } );

            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var DemoOpen = function(obj) {

        //private properties
        var _obj = obj,
            _curElem = _obj.parent(),
            curMenu = _curElem.find('.single__demo-wrap'),
            curMenuWarning = _curElem.find('.warning__expand'),
            _next = _curElem.find( '.similar-next' ),
            _prev = _curElem.find( '.similar-prev' ),
            _pagination = _curElem.find( '.similar-pagination'),
            _slider = _curElem.find('.single__demo-wrap .swiper-container');


        if( $(window).width() > 767 && $(window).width() < 1024 ){

            if ( ! _slider.hasClass( 'swiper-container-horizontal' )) {
                var swiper2 = new Swiper(_slider, {
                    nextButton: _next,
                    prevButton: _prev,
                    pagination: _pagination,
                    paginationClickable: true,
                    slidesPerView: 1
                });
            }
        }

        //private methods
        var _addEvents = function() {

                if( $(window).width() < 767 ){

                    _obj.on( {
                        click: function() {

                            if (_curElem.hasClass( 'active' )) {
                                _curElem.removeClass( 'active' );
                            } else {
                                _curElem.addClass( 'active' );
                            }

                            if(curMenu.is(':visible')){
                                curMenu.slideUp(300);
                            }
                            else{
                                curMenu.slideDown(300);
                            }

                            if(curMenuWarning.is(':visible')){
                                curMenuWarning.slideUp(300);
                            }
                            else{
                                curMenuWarning.slideDown(300);
                            }

                            if ( ! _slider.hasClass( 'swiper-container-horizontal' )) {
                                var swiper2 = new Swiper(_slider, {
                                    nextButton: _next,
                                    prevButton: _prev,
                                    pagination: _pagination,
                                    paginationClickable: true,
                                    slidesPerView: 1
                                });
                            }

                            return false;
                        }
                    });
                }


            },
            _init = function() {

                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var mobileHref = function (obj) {

        //private properties
        var _obj = obj,
            objData = _obj.data('href');


        //private methods
        var _addEvents = function () {
                if($( window ).width() < 1023){
                    _obj.attr('href', objData);
                }
            },
            _init = function () {

                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var Filter = function (obj) {

        //private properties
        var _obj = obj,
            resetBtn = $('#filter-reset-all'),
            software = $('#filter-casinos-software-button-wrapper'),
            tags = $('#filter-casinos-tags-button-wrapper'),
            sortBy = $('#filter-casinos-sort-button-wrapper');

        //private methods
        var _addEvents = function () {

                filterItem.on('click', function () {

                    var nodeType = $(this).data('node-type'),
                        _active = false,
                        _ItemDataMas = '';

                    if (nodeType == 'medals') {

                        if ( $(this).hasClass( 'active' )) {

                            $(this).removeClass('active');

                        } else {

                            $(this).addClass('active');
                        }
                    }
                    if (nodeType == 'freeBonus') {

                        if ( $(this).hasClass( 'active' )) {

                            $(this).removeClass('active');

                        } else {

                            $(this).addClass('active');
                        }
                    }
                    if (nodeType == 'software') {

                        if ( $(this).hasClass( 'active' )) {
                            $(this).removeClass('active');
                        } else {
                            $(this).addClass('active');
                        }

                        var softwareItem = software.find('.active');

                        if (softwareItem.length > 0) {

                            $('#filter-software-reset').show();

                         } else {

                            $('#filter-software-reset').hide();

                         }
                    }
                    if (nodeType == 'tags') {

                        if ( $(this).hasClass( 'active' )) {

                            $(this).removeClass('active');

                        } else {

                            $(this).addClass('active');

                        }

                        var tagsItem = tags.find('.active');

                        if (tagsItem.length > 0) {

                            $('#filter-tags-reset').show();

                        } else {

                            $('#filter-tags-reset').hide();

                        }
                    }
                    if (nodeType == 'sortBy') {

                        var sortByItem = sortBy.find('.active');

                        if ( $(this).hasClass( 'active' )) {

                            $(this).removeClass('active');

                            $('#filter-sort-reset').hide();

                        } else {

                            if (sortByItem.length > 0) {

                                sortByItem.removeClass('active');
                            }

                            $(this).addClass('active');

                            $('#filter-sort-reset').show();
                        }
                    }

                    if( !$(this).hasClass('filter-click-sort')){

                        filterItem.each( function() {

                            if ($(this).hasClass('active')) {

                                var ItemData = $(this).data('node-subtype');

                                _ItemDataMas = _ItemDataMas + '.' + ItemData + ', ';

                                _active = true;
                            }
                        });

                        if(_active){

                            filterElem.addClass('filter-reset-on');

                            filterElem.removeClass('hidden');

                            $(this).addClass('filter-reset-on');

                            resetBtn.css('visibility', 'visible');

                            resetBtn.removeClass('filter-casinos-mobile-collapse-bar');

                        } else{

                            resetBtn.css('visibility', 'hidden');

                            resetBtn.addClass('filter-casinos-mobile-collapse-bar');

                            filterElem.removeClass('filter-reset-on');

                            filterElem.addClass('hidden');

                            $('.game__load-more').removeClass('game-results-active-btn game-filter-active');

                        }

                        _ItemDataMas = _ItemDataMas.substring(0, _ItemDataMas.length - 2);

                        _gride.each( function() {
                            $( this ).isotope({ filter: _ItemDataMas });
                        });


                        /*_timer = setTimeout( function(){

                         if ($( '.grid' ).height() == 0) {

                         /!*$('.game-results').addClass('game-results-active');*!/

                         $('.game__load-more').addClass('game-results-active');

                         } else{

                         /!*$('.game-results').removeClass('game-results-active');*!/

                         $('.game__load-more').removeClass('game-results-active');
                         }

                         },500);*/

                        _timer = setTimeout( function(){

                            if(_active) {

                                filterElem.removeClass('game-filter-active');

                                var i = 0;

                                filterElem.each(function () {

                                    if ($(this).is(':visible')) {

                                        i = i + 1;

                                        if (i > 15) {

                                            $(this).addClass('game-filter-active');

                                            $('.game__load-more').removeClass('game-results-active-btn');

                                            $('.game__load-more').addClass('game-filter-active');

                                        } else {

                                            $('.game__load-more').addClass('game-results-active-btn');

                                        }
                                    }
                                });

                                $('.game-load').addClass('grid-active');

                            }

                        },600);

                    }

                });

                $('#filter-software-reset').on('click', function () {

                    var softwareItem = software.find('.active'),
                        first = softwareItem.first();

                        softwareItem.removeClass('active');

                        $('#filter-software-reset').hide();

                        first.addClass('active');
                        first.trigger( 'click' );

                });

                $('#filter-tags-reset').on('click', function () {

                    var tagsItem = tags.find('.active'),
                        first = tagsItem.first();

                        tagsItem.removeClass('active');

                        $('#filter-tags-reset').hide();
                        first.addClass('active');
                        first.trigger( 'click' );

                });

                $('#filter-sort-reset').on('click', function () {

                    var sortItem = sortBy.find('.active'),
                        first = sortItem.first();

                        sortItem.removeClass('active');

                        $('#filter-sort-reset').hide();

                        first.addClass('active');
                        first.trigger( 'click' );
                });

                resetBtn.on({

                    'click': function() {
                        if($(this).hasClass('filter-casinos-mobile-collapse-bar') && $(window).width() < 768){

                            $('#filter-casinos-wrapper-inner').hide();
                            $('#filter-casinos-mobile-open-filter').show();
                        } else {
                            _reset();
                        }
                    }

                });
            },
            _reset = function() {

                    resetBtn.css('visibility', 'hidden');

                    if ($(window).width() < 1024){
                        resetBtn.addClass('filter-casinos-mobile-collapse-bar');
                    }

                    $('#filter-tags-reset').hide();
                    $('#filter-sort-reset').hide();
                    $('#filter-software-reset').hide();

                    filterItem.removeClass('active');

                    filterElem.removeClass('filter-reset-on game-filter-active');

                    $('.game__load-more').removeClass('game-results-active');

                    $('.game__load-more').removeClass('game-results-active-btn');

                    _gride.isotope({ filter: '*' });

                    $('.game-load').addClass('grid-active');

                    _timer = setTimeout( function(){

                        $('.game__load-more').removeClass('game-filter-active');

                        if ( _loadItem >= ItemLength ){

                            $('.game__load-more').addClass('game-results-active-btn');
                        }

                    },700);

                    return false;

            },
            _init = function () {

                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var Popup = function( obj ){

        //private properties
        var _self = this,
            _popupPadding = 40,
            _btnShow =  $( '.popup__open' ),
            _obj = obj,
            _btnClose = _obj.find( '.popup__close, .popup__cancel' ),
            _wrap = _obj.find( '.popup__wrap' ),
            _contents = _obj.find( '.popup__content' ),
            _scrollConteiner = $( 'html' ),
            _window = $( window ),
            _timer = setTimeout( function(){}, 1 );

        //private methods
        var _centerWrap = function(){
                if ( _window.height() - ( _popupPadding * 2 ) - _wrap.height() > 0 ) {
                    _wrap.css( { top: ( ( _window.height() - ( _popupPadding * 2 ) ) - _wrap.height() ) / 2 } );
                } else {
                    _wrap.css( { top: 0 } );
                }
            },
            _getScrollWidth = function (){
                var scrollDiv = document.createElement( 'div'),
                    scrollBarWidth;

                scrollDiv.className = 'popup__scrollbar-measure';

                document.body.appendChild( scrollDiv );

                scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

                document.body.removeChild(scrollDiv);

                return scrollBarWidth;
            },
            _hide = function(){
                _obj.css( {
                    overflowY: 'hidden'
                } );
                _scrollConteiner.css( {
                    overflowY: 'auto',
                    paddingRight: 0
                } );

                _obj.removeClass( 'popup_opened' );
                _obj.addClass( 'popup_hide' );

                _timer = setTimeout( function(){

                    _obj.css ({
                        overflowY: 'auto'
                    });

                    _obj.removeClass( 'popup_hide' );
                }, 0 );

            },
            _init = function(){
                _obj[ 0 ].obj = _self;
                _onEvents();
            },
            _onEvents = function(){
                _window.on( {
                    resize: function(){
                        _centerWrap();
                    }
                } );
                _btnShow.on( {
                    click: function(){
                        _show( $( this ).attr( 'data-popup' ) );
                        return false;
                    }
                } );
                _wrap.on( {
                    click: function( e ){
                        e.stopPropagation();
                    }
                } );
                _obj.on( {
                    click: function(){
                        _hide();
                        return false;
                    }
                } );
                _btnClose.on( {
                    click: function(){
                        _hide();
                        return false;
                    }
                } );
            },
            _show = function( className ){
                _setPopupContent( className );

                _scrollConteiner.css( {
                    overflowY: 'hidden',
                    paddingRight: _getScrollWidth()
                } );
                _obj.addClass( 'popup_opened' );
                _centerWrap();

            },
            _setPopupContent = function( className ){
                var curContent = _contents.filter( '.popup__' + className );
                _contents.css( { display: 'none' } );
                curContent.css( { display: 'block' } );
            }

        //public properties

        //public methods


        _init();
    };

    var MenuDown = function(obj) {

        //private properties
        var _obj = obj,
            _items = _obj.find( '>li>span' ),
            _itemsHref = _obj.find( '.learn__menu-link' );

        //private methods
        var _addEvents = function() {

                _items.on({
                    click: function(){

                        var curElem = $(this),
                            curParent = curElem.parent(),
                            curMenu= curParent.find('ul');

                        if (curParent.hasClass( 'active' )) {
                            curParent.removeClass( 'active' );
                        } else {
                            curParent.addClass( 'active' );

                        }

                        if(curMenu.is(':visible')){

                            curMenu.slideDown(300);
                        }
                        else{
                            curMenu.slideUp(300);
                        }

                    if($(window).width() > 1024){
                        $('.perbar').perfectScrollbar('update');
                    }

                    }
                });

                _itemsHref.on({

                    click: function(){

                        var curElem = $(this),
                            curClass = curElem.attr('href');
                            curClass = curClass.slice(1);

                        $('html, body').animate({
                            scrollTop: $('.top' + curClass).offset().top - 100

                        }, 1000);

                        return false;
                    }
                });

            },
            _init = function() {


                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

} )();


