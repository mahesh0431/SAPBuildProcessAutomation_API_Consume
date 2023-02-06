"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubstitutesRule = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "SubstitutesRuleCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
class SubstitutesRule extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SubstitutesRule = SubstitutesRule;
/**
 * Technical entity name for SubstitutesRule.
 */
SubstitutesRule._entityName = 'SubstitutesRuleCollection';
/**
 * Default url path for the according service.
 */
SubstitutesRule._defaultServicePath = 'VALUE_IS_UNDEFINED';
/**
 * All key fields of the SubstitutesRule entity
 */
SubstitutesRule._keys = ['SAP__Origin', 'SubstitutionRuleID'];
//# sourceMappingURL=SubstitutesRule.js.map