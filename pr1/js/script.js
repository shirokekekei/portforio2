$(function () {
    // jQuery(function () {
    //smoothscroll
    //#から始まるURLがクリックされた時
    jQuery('a[href^="#"]').click(function () {
        // .headerクラスがついた要素の高さを取得
        let header = jQuery(".header").innerHeight();
        //移動速度を指定（ミリ秒）
        let speed = 300;
        //hrefで指定されたidを取得
        let id = jQuery(this).attr("href");
        //idの値が＃のみだったらターゲットをhtmlタグにしてトップに戻るようにする
        let target = jQuery("#" == id ? "html" : id);
        // let target = jQuery(href == "#" || href == "" ? 'html' : href);
        // トップからの距離からヘッダー分の高さを引く
        let position = jQuery(target).offset().top - header;
        $('body,html').animate({scrollTop:position}, speed, 'swing'); //スルスルッと移動してね
        // その分だけ移動すればヘッダーと被りません
        jQuery('body,html').animate({
            scrollTop: position
        },
            speed
        );
        return false;
    });
        
    // // スクロール検知
    jQuery(window).on("scroll", function ($) {
        // トップから150px以上スクロールしたら
        if (jQuery(this).scrollTop() > 150) {
            // is-showクラスをつける
            jQuery('.totop').show('is-show');
        } else {
            // 100pxを下回ったらis-showクラスを削除
            jQuery('.totop').hide('is-show');
        }
    });
    
    jQuery('.header-main a').click(function () {
        jQuery('.header-main a').removeClass('is-active');
        jQuery(this).addClass('is-active');
        return false;
    });
// })();
    //アコーディオン
    jQuery('.accordion-bar').click(function () {
        jQuery(this).next().slideToggle();
        jQuery(this).children('.accordion-head').children('.accordion-icon').toggleClass('is-open');
    });
    // 
        
    //wow.js
    new WOW().init();
 
    $(document).ready(function() {
        $('.drawer').drawer();
      });
        
    // results
    new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 40,
        width: 400,
        loop: true,
        loopedSlides: 6,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            768: {
                spaceBetween: 20,
                width: 274,
                loopedSlides: 2,
            }
        }
    });
    
    
    //googleform
    let $form = $('#js-form')
    $form.submit(function (e) {
        $.ajax({
            url: $form.attr('action'),
            data: $form.serialize(),
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理 
                    $form.slideUp()
                    $('#js-success').slideDown()
                },
                200: function () {
                    //送信に失敗したときの処理 
                    $form.slideUp()
                    $('#js-error').slideDown()
                }
            }
        });
        return false;
    });
    //formの入力確認
    let $submit = $('#js-submit')
    $('#js-form input, #js-form textarea').on('change', function () {
        if (
            $('#js-form input[type="text"]').val() !== "" &&
            $('#js-form input[type="email"]').val() !== "" &&
            $('#js-form input[name="entry.552147599"]').prop('checked') === true
        ) {
            //全て入力された時
            $submit.prop('disabled', false)
            $submit.addClass('-active')
        } else {
            //全て入力されていなかった時
            $submit.prop('disabled', true)
            $submit.removeClass('-active')
                
        }
    })
})