var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        var errorElement = parentElement.querySelector('.error');

        if (navigator.onLine) {
            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');

            window.location = "https://socservice.kyivcity.gov.ua/";

        } else {
            listeningElement.setAttribute('style', 'display:none;');
            errorElement.setAttribute('style', 'display:block;');
        }

        console.log('Received Event: ' + id);
    }
};
