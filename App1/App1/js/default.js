// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
				// TODO: This application has been newly launched. Initialize your application here.
			} else {
				// TODO: This application was suspended and then terminated.
				// To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
			}
			args.setPromise(WinJS.UI.processAll());
		}
	};

	app.oncheckpoint = function (args) {
		// TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
		// You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
		// If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
	};

	app.start();
})();
(function () {
    "use strict";

    WinJS.UI.Pages.define("default.html", {
        ready: function (element, options) {
            var audio = new Audio();
            var synth = new Windows.Media.SpeechSynthesis.SpeechSynthesizer();
            say("Welcome to the text to speech demo");

            sayit.onclick = function () {
                say(textToSpeak.value);
            };

            function say(msg) {
                synth.synthesizeTextToStreamAsync(msg).then(function (s) {
                    var blob = MSApp.createBlobFromRandomAccessStream(s.ContentType, s);
                    audio.src = URL.createObjectURL(blob, { oneTimeOnly: true });
                    audio.play();
                });
            }
        }
    });
})();
///////////////////////////////
