/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';

/**
 * Address
 */
export interface Address<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Street Number.
   * @nullable
   */
  streetNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Postal Code.
   * @nullable
   */
  postalCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * AddressField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AddressField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  Address,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link Address.street} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  street: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true);
  /**
   * Representation of the {@link Address.streetNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  streetNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StreetNumber', 'Edm.String', true);
  /**
   * Representation of the {@link Address.city} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('City', 'Edm.String', true);
  /**
   * Representation of the {@link Address.postalCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postalCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true);
  /**
   * Representation of the {@link Address.state} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('State', 'Edm.String', true);
  /**
   * Representation of the {@link Address.country} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);

  /**
   * Creates an instance of AddressField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, Address, fieldOptions);
  }
}

export namespace Address {
  /**
   * Metadata information on all properties of the `Address` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Address>[] = [
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
}
