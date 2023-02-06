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
 * SubstitutionRuleReturn
 */
export interface SubstitutionRuleReturn<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Deleted.
   */
  deleted: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
}

/**
 * SubstitutionRuleReturnField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SubstitutionRuleReturnField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SubstitutionRuleReturn,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SubstitutionRuleReturn.deleted} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deleted: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField('Deleted', 'Edm.Boolean', false);

  /**
   * Creates an instance of SubstitutionRuleReturnField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      SubstitutionRuleReturn,
      fieldOptions
    );
  }
}

export namespace SubstitutionRuleReturn {
  /**
   * Metadata information on all properties of the `SubstitutionRuleReturn` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SubstitutionRuleReturn>[] = [
    {
      originalName: 'Deleted',
      name: 'deleted',
      type: 'Edm.Boolean',
      isCollection: false
    }
  ];
}
