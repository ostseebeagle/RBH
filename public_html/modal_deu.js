/* 
 * Frank Neumann
 * am 01.06.2015
 */

// Initialisieren
function init_modal() {
    
    // Ist das Element vorhanden?
    if (!$('a.modal').length) {
        
        // Wenn nicht, beenden.
        return;
    }
    
    // IE6 erkennen (Boolean).
    var IE6 = typeof document.addEventListener() !== 'function' && !window.XMLHttpRequest();
    
    // Ein wenig rechnen
    function sizeModal() {
        
        // Dimension des Fensters
        var $modal = $('#modal_window');
        var $modal_width =$modal.outerWidth();
        var $modal_height = $modal.outerHeight();
        var $modal_top = '-' + Math.floor($modal_height / 2) + 'px';
        var $modal_left = '-' + Math.floor($modal_width / 2) + 'px';
        
        // Modales Fenster anzeigen
        $('#modal_window').css('margin-top', $modal_top)
                          .css('margin-left', $modal_left);
    }
    
    /* Für den IE6 */
    function positionModal() {
        // Position erzwingen
        $('#modal_wrapper').css('top', $(document).scrollTop() + 'px');
    }
    
    // Fenster anzeigen
    function showModal() {
        if ($IE6) {
            positionModal();
        }
        
        // Wrapper anzeigen
        $('#modal_wrapper').show();
        
        // Größe anpassen
        sizeModal();
        
        // Modales Fenster anzeigen
        $('#modal_window').css('visibility', 'visible').show();
        
        // Größe nach dem Laden des Bildes anpassen
        $('#modal_content img').each(function() {
            $(this).load(function() {
                $(this).removeClass('modal_placeholder').show();
                sizeModal();
            });
        });
    }
    
    // Modales Fenster vor </body> einfügen
    $('body').append('<div id="modal_wrapper">\n\
                        <!--[if IE6]>\n\
                            <iframe id="modal_iframe"></iframe>\n\
                        <![endif]-->\n\
                        <div id="modal_overlay"></div>\n\
                        <div id="modal_window">\n\
                            <div id="modal_bar">\n\
                                <strong>Modales Fenster</strong>\n\
                                <a href="#" id="modal_close">Schließen</a>\n\
                            </div>\n\
                            <div id="modal_content"></div>\n\
                        </div>');
    
    // Modale Links selektieren
    $('a modal').click(function() {
        
        // href="..." auswerten
        var $the_link = $(this).attr('href');
        
        // Link-Target bestimmen
        if ($the_link.match(/^./)) {
            
            // Anker-Inhalt
            $('#modal_content').html($($(this).attr('href')).html());
            showModal();
            
        } else if ($the_link.match(/.jpg$/) ||
                   $the_link.match(/.png$/) ||
                   $the_link.match(/.gif$/)) {
               
          // Bild
          $('#modal_content').html('\n\
                <p id="modal_image_wrapper">\n\
                    <img src="' + $the_link + '" class="modal_placeholder" />\n\
                </p>');
          showModal();
          
        } else {
            
            // externer Ajax-Inhalt
            $('#modal_content').load($(this).attr('href')
                    .replace('#', ' #'), '', showModal);
        }
        
        // Modalen Titel bestimmen
        if ($(this).attr('title')) {
            
            // Titel einfügen
            $('#modal_bar strong').html($(this).attr('title'));
            
        } else if ($(this).html() !== '') {
            
            // Link Text einfügen
            $('#modal_bar strong').html($(this).html());
        }
        
        // Nicht folgen
        this.blur();
        return false;
    });
    
    // Modale Elemente verbergen
    $('#modal_overlay, #modal_close').click(function() {
        
        // Modales Fenster verbergen
        $('#modal_wrapper').hide();
        
        // Verbergen, weil Bilder später geladen werden können
        $('#modal_window').css('visibility', 'hidden');
        
        // Bild-Listener lösen
        $('#modal_content img').each(function() {
            $(this).unbind();
        });
        
        // Modale Inhalte zerstören
        $('#modal_content').html('');
        
        // Modalen Titel zurücksetzen
        $('#modal_bar strong').html('Modal window');
        
        // Nicht folgen
        this.blur();
        return false;
    });
    
    // Auf Scrollen im IE6 lauschen
    if($IE6) {
        $(window).scroll(function() {
            if ($('#modal_wrapper').is(':visible')) {
                positionModal();
            }
        });
    }
}

// Los geht's
$(document).ready(function() {
    init_modal();
});