"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubstitutionRule = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "SubstitutionRuleCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
class SubstitutionRule extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SubstitutionRule = SubstitutionRule;
/**
 * Technical entity name for SubstitutionRule.
 */
SubstitutionRule._entityName = 'SubstitutionRuleCollection';
/**
 * Default url path for the according service.
 */
SubstitutionRule._defaultServicePath = 'VALUE_IS_UNDEFINED';
/**
 * All key fields of the SubstitutionRule entity
 */
SubstitutionRule._keys = ['SAP__Origin', 'SubstitutionRuleID'];
//# sourceMappingURL=SubstitutionRule.js.map