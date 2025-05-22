sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'risk/risk/test/integration/FirstJourney',
		'risk/risk/test/integration/pages/RISKList',
		'risk/risk/test/integration/pages/RISKObjectPage'
    ],
    function(JourneyRunner, opaJourney, RISKList, RISKObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('risk/risk') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRISKList: RISKList,
					onTheRISKObjectPage: RISKObjectPage
                }
            },
            opaJourney.run
        );
    }
);