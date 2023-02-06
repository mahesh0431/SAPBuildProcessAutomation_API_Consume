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
  Entity,
  FieldOptions,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';
/**
 * DecisionOption
 */
export interface DecisionOption<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {}
/**
 * DecisionOptionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DecisionOptionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DecisionOption,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Creates an instance of DecisionOptionField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  );
}
export declare namespace DecisionOption {
  /**
   * Metadata information on all properties of the `DecisionOption` complex type.
   */
  const _propertyMetadata: PropertyMetadata<DecisionOption>[];
}
//# sourceMappingURL=DecisionOption.d.ts.map
