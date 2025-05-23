export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/RisksMobile/Services/RISKService.service').isDraftEnabled('RISK')) {
        return clientAPI.executeAction({
            'Name': '/RisksMobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'RISK'
                },
                'OnSuccess': '/RisksMobile/Actions/RISKService/RISK/NavToRISK_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RisksMobile/Actions/RISKService/RISK/NavToRISK_Edit.action');
    }
}