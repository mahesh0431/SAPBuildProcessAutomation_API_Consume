"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecisionOption = exports.DecisionOptionField = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * DecisionOptionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class DecisionOptionField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of DecisionOptionField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, DecisionOption, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
    }
}
exports.DecisionOptionField = DecisionOptionField;
var DecisionOption;
(function (DecisionOption) {
    /**
     * Metadata information on all properties of the `DecisionOption` complex type.
     */
    DecisionOption._propertyMetadata = [];
})(DecisionOption = exports.DecisionOption || (exports.DecisionOption = {}));
//# sourceMappingURL=DecisionOption.js.map