"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributeDefinition = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "CustomAttributeDefinitionCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
class CustomAttributeDefinition extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustomAttributeDefinition = CustomAttributeDefinition;
/**
 * Technical entity name for CustomAttributeDefinition.
 */
CustomAttributeDefinition._entityName = 'CustomAttributeDefinitionCollection';
/**
 * Default url path for the according service.
 */
CustomAttributeDefinition._defaultServicePath = 'VALUE_IS_UNDEFINED';
/**
 * All key fields of the CustomAttributeDefinition entity
 */
CustomAttributeDefinition._keys = ['SAP__Origin', 'TaskDefinitionID', 'Name'];
//# sourceMappingURL=CustomAttributeDefinition.js.map