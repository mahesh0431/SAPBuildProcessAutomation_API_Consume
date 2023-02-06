"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttribute = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "CustomAttributeCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
class CustomAttribute extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustomAttribute = CustomAttribute;
/**
 * Technical entity name for CustomAttribute.
 */
CustomAttribute._entityName = 'CustomAttributeCollection';
/**
 * Default url path for the according service.
 */
CustomAttribute._defaultServicePath = 'VALUE_IS_UNDEFINED';
/**
 * All key fields of the CustomAttribute entity
 */
CustomAttribute._keys = ['SAP__Origin', 'InstanceID', 'Name'];
//# sourceMappingURL=CustomAttribute.js.map