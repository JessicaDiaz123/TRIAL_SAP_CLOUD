export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/RisksMobile/Services/RISKService.service').isDraftEnabled('RISK')) {
        return clientAPI.executeAction({
            'Name': '/RisksMobile/Actions/RISKService/RISK/RISK_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/RisksMobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'RISK',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/RisksMobile/Actions/RISKService/RISK/RISK_CreateEntity.action');
    }
}