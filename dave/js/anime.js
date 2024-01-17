$(function () {

    var EASE = Power4.easeOut;

    var Engine = {
        ui: {
            initBtn: function () {
                var card = $('.card, .btn');
                var body = $('body');
                var btn = $('.btn');

                card.on('click', function () {

                    if (body.hasClass('is-open')) {
                        body.removeClass('is-open');
                        btn.html('View');

                        // Masquer la section lorsque vous fermez la carte
                        $('.my-self').css('visibility', 'hidden');
                    } else {
                        body.addClass('is-open');
                        btn.html('close');
                        TweenMax.set('.card', { clearProps: 'all' });

                        // Attendez la fin de l'animation de la carte avant de rendre la section visible
                        var cardAnimation = new TimelineMax({ onComplete: Engine.ui.showMySelfSection });
                        cardAnimation.to('.card', 1.25, { scale: 1, ease: EASE });
                    }
                })
            },
            initHover: function () {
                $(document).on("mousemove", ".card", function (e) {
                    // ... Votre code actuel pour le survol de la carte
                }).on("mouseout", ".card", function () {
                    // ... Votre code actuel pour le survol de la carte
                });
            },
            showMySelfSection: function () {
                // Fonction pour rendre la section avec la classe 'my-self' visible
                $('.my-self').css('visibility', 'visible');
            }
        }
    };

    Engine.ui.initBtn();
    Engine.ui.initHover();

});
