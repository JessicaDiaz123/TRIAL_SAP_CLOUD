export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/RisksMobile/Services/RISKService.service').isDraftEnabled('RISK')) {
        return clientAPI.executeAction({
            'Name': '/RisksMobile/Actions/RISKService/RISK/RISK_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/RisksMobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'RISK'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/RisksMobile/Actions/RISKService/RISK/RISK_UpdateEntity.action');
    }
}