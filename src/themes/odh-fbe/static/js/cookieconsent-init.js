// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

var cc = initCookieConsent();

// Set it as property of window to access it in iframes
var frame = document.querySelector("iframe");
frame.contentWindow.cc = cc;

// run plugin with config object
cc.run({
    current_lang : "en",
    autoclear_cookies : true,
    cookie_expiration : 365,
    page_scripts: true,

    gui_options: {
        consent_modal: {
            layout: 'box',
            position: 'bottom right',
            transition: 'slide'
        },
        settings_modal: {
            layout: 'box',
            transition: 'slide'
        }
    },

    onFirstAction: function() {},

    onAccept: function (cookie) {},

    onChange: function (cookie, changed_preferences) {},

    languages: {
        'en': {
            consent_modal: {
                title:'We use cookies!',
                description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary'
                }
            },
            settings_modal: {
                title: "Cookie settings",
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'}
                ],
                blocks: [
                    {
                        description: 'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="https://noi.bz.it/en/privacy" class="cc-link">privacy policy</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true
                        }
                    }, {
                        title: 'Advertisement and Targeting cookies',
                        description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Other cookies',
                        description: 'These cookies allow the website to use extended functionality like playing videos via Vimeo or Youtube',
                        toggle: {
                            value: 'other',
                            enabled: false,
                            readonly: false
                        },
                        // cookie_table: [
                        //     {
                        //         col1: '__cf_bm',
                        //         col2: 'vimeo.com',
                        //         col3: '',
                        //     },
                        //     {
                        //         col1: 'vuid',
                        //         col2: 'vimeo.com',
                        //         col3: '1 Month',
                        //     },
                        //     {
                        //         col1: 'player',
                        //         col2: 'vimeo.com',
                        //         col3: '',
                        //     },
                        // ]
                    },
                    {
                        title: 'More information',
                        description: 'For any questions in relation to our policy on cookies and your choices, please contact us at info@opendatahub.com',
                    }
                ]
            }
        }
    }
});