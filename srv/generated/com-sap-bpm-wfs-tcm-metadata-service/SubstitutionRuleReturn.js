"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubstitutionRuleReturn = exports.SubstitutionRuleReturnField = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * SubstitutionRuleReturnField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class SubstitutionRuleReturnField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of SubstitutionRuleReturnField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, SubstitutionRuleReturn, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link SubstitutionRuleReturn.deleted} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.deleted = this._fieldBuilder.buildEdmTypeField('Deleted', 'Edm.Boolean', false);
    }
}
exports.SubstitutionRuleReturnField = SubstitutionRuleReturnField;
var SubstitutionRuleReturn;
(function (SubstitutionRuleReturn) {
    /**
     * Metadata information on all properties of the `SubstitutionRuleReturn` complex type.
     */
    SubstitutionRuleReturn._propertyMetadata = [
        {
            originalName: 'Deleted',
            name: 'deleted',
            type: 'Edm.Boolean',
            isCollection: false
        }
    ];
})(SubstitutionRuleReturn = exports.SubstitutionRuleReturn || (exports.SubstitutionRuleReturn = {}));
//# sourceMappingURL=SubstitutionRuleReturn.js.map