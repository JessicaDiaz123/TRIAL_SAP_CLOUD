using { RISK as my } from '../db/schema.cds';

@path : '/service/RISKService'
service RISKService
{
    annotate Mitigations with @restrict :
    [
        { grant : [ '*' ], to : [ 'RiskManager' ] },
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] }
    ];

    annotate RISK with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];

    @odata.draft.enabled
    entity RISK as
        projection on my.RISK;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;
}

annotate RISKService with @requires :
[
    'authenticated-user',
    'RiskViewer',
    'RiskManager'
];
