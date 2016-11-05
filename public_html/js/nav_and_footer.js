/* Frank Neumann, erzeugt 2016 */
/* 
 * Es wird die Navigationsleiste erzeugt.
 */

jQuery('nav').html('\
            <!-- Mobiles Menu ein- und ausblenden-->\n\
            <input id="main-menu-state" type="checkbox" />\n\
            <label class="main-menu-btn" for="main-menu-state">\n\
                <span class="main-menu-btn-icon"></span>\n\
                <p>Menu</p>\n\
            </label>\n\
            <ul id="main-menu" class="sm sm-blue">\n\
                <li><a href="index.html">Startseite</a></li>\n\
                <li><a href="unser_buro.html">Unser Büro</a>\n\
                    <ul>\n\
                        <li><a href="unser_team.html">Unser Team</a></li>\n\
                    </ul>\n\
                </li>\n\
                <li><a href="aktuelles.html">Aktuelles</a>\n\
                    <ul>\n\
                        <li><a href="gruppenreise.html">Gruppenreise</a></li>\n\
                        <li><a href="stellenangebot.html">Stellenangebote</a></li>\n\
                    </ul>\n\
                </li>\n\
                <li><a href="online.html">Online buchen</a>\n\
                    <ul>\n\
                        <li><a href="kreuzfahrten.html">Kreuzfahrten</a></li>\n\
                        <li><a href="mdt.html">Gut versichert</a></li>\n\
                        <li><a href="latainamerika.html">Latainamerika</a></li>\n\
                        <li><a href="ferienhauser.html">Ferienhäuser</a></li>\n\
                        <li><a target="_blank" href="http://www.fitreisen.de/guenstig/?wl=1&amp;agenturnr=10008212">Wellness und mehr</a></li>\n\
                        <li><a target="_blank" href="http://www.schauinsland-reisen.de/pauschalsuche?&amp;agentur=123866&amp;ibe_template=slrinfo">Schauinsland</a></li>\n\
                        <li><a target="_blank" href="http://www.derhotel.com/43489NEU">DER-Hotelportal</a></li>\n\
                    </ul>\n\
                </li>\n\
                <li> <a href="unterwegs_fur_sie.html">Unterwegs für Sie</a>\n\
                    <ul>\n\
                        <li><a href="agypten.html">Ägypten</a></li>\n\
                        <li><a href="aidaprima.html">AIDAprima</a></li>\n\
                        <li><a href="australien.html">Australien</a>\n\
                            <ul>\n\
                                <li><a href="nothing_like_australia.html">Nothing Like Australia</a></li>\n\
                                <li><a href="northern_territory.html">Northern Territory</a></li>\n\
                                <li><a href="queensland.html">Queensland</a></li>\n\
                                <li><a href="tasmanien.html">Tasmanien</a></li>\n\
                                <li><a href="western_australia.html">Westaustralien</a></li>\n\
                            </ul>\n\
                        </li>\n\
                        <li><a href="bahamas.html">Bahamas</a></li>\n\
                        <li><a href="deutschland.html">Deutschland</a>\n\
                            <ul>\n\
                                <li><a href="berchtesgarden.html">Berchtesgarden</a></li>\n\
                                <li><a href="land_fleesensee.html">Land Fleesensee</a></li>\n\
                                <li><a href="ruegen.html">Rügen</a></li>\n\
                            </ul>\n\
                        </li>\n\
                        <li><a href="hurtigruten.html">Hurtigruten</a></li>\n\
                        <li><a href="istanbul.html">Istanbul</a></li>\n\
                        <li><a href="kanaren.html">Kanarische Inseln</a>\n\
                            <ul>\n\
                                <li><a href="gran_canaria.html">Gran Canaria</a></li>\n\
                                <li><a href="teneriffa.html">Teneriffa</a></li>\n\
                            </ul>\n\
                        </li>\n\
                        <li><a href="kos.html">Kos</a></li>\n\
                        <li><a href="malaysia.html">Malaysia</a></li>\n\
                        <li><a href="malediven.html">Malediven</a>\n\
                            <ul>\n\
                                <li><a href="inselwelt.html">Inselwelt</a></li>\n\
                                <li><a href="wasserwelt.html">Wasserwelt</a></li>\n\
                            </ul>\n\
                        </li>\n\
                        <li><a href="mallorca.html">Mallorca</a></li>\n\
                        <li><a href="portugal.html">Portugal</a></li>\n\
                        <li><a href="sardinien.html">Sardinien</a>\n\
                        <li><a href="seychellen.html">Seychellen</a>\n\
                            <ul>\n\
                                <li><a href="praslin.html">Praslin</a></li>\n\
                                <li><a href="la_digue.html">La Digue</a></li>\n\
                                <li><a href="mahe.html">Mah&#233;</a></li>\n\
                            </ul>\n\
                        </li>\n\
                        <li><a href="mein_schiff.html">TUI - Mein Schiff</a></li>\n\
                        <li><a href="usa.html">USA</a>\n\
                            <ul>\n\
                                <li><a href="florida.html">Florida</a></li>\n\
                                <li><a href="nevada.html">Nevada</a></li>\n\
                            </ul>\n\
                        </li>\n\
                    </ul>\n\
                </li>\n\
                <li> <a href="nutzliche_reisetips.html">Nützliche Reisetipps</a></li>\n\
            </ul>');

/* 
 *Es erscheint das Copyright in der Fußzeile und
 *ein Button, um an den Seitenanfang zurückkehren zu können.
 */

jQuery('footer').html('<p>© Reisebüro Horneburg (2016)</p>\n\
<a href="impressum.html"><button id="button">Impressum</button></a>');

/* Animation des Schalters "Seitenanfang" im footer */

$( "#button" ).button();



