"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.AddressField = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * AddressField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class AddressField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of AddressField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, Address, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link Address.street} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.street = this._fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true);
        /**
         * Representation of the {@link Address.streetNumber} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.streetNumber = this._fieldBuilder.buildEdmTypeField('StreetNumber', 'Edm.String', true);
        /**
         * Representation of the {@link Address.city} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.city = this._fieldBuilder.buildEdmTypeField('City', 'Edm.String', true);
        /**
         * Representation of the {@link Address.postalCode} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.postalCode = this._fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true);
        /**
         * Representation of the {@link Address.state} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.state = this._fieldBuilder.buildEdmTypeField('State', 'Edm.String', true);
        /**
         * Representation of the {@link Address.country} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.country = this._fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
    }
}
exports.AddressField = AddressField;
var Address;
(function (Address) {
    /**
     * Metadata information on all properties of the `Address` complex type.
     */
    Address._propertyMetadata = [
        {
            originalName: 'Street',
            name: 'street',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'StreetNumber',
            name: 'streetNumber',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'City',
            name: 'city',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'PostalCode',
            name: 'postalCode',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'State',
            name: 'state',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'Country',
            name: 'country',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(Address = exports.Address || (exports.Address = {}));
//# sourceMappingURL=Address.js.map