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
  Entity,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';
/**
 * TaskSupports
 */
export interface TaskSupports<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Custom Attribute Data.
   * @nullable
   */
  customAttributeData?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Ui Execution Link.
   * @nullable
   */
  uiExecutionLink?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Workflow Log.
   * @nullable
   */
  workflowLog?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Claim.
   * @nullable
   */
  claim?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Release.
   * @nullable
   */
  release?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Forward.
   * @nullable
   */
  forward?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
}
/**
 * TaskSupportsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaskSupportsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TaskSupports,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Representation of the {@link TaskSupports.description} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link TaskSupports.customAttributeData} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customAttributeData: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link TaskSupports.uiExecutionLink} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uiExecutionLink: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link TaskSupports.workflowLog} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workflowLog: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link TaskSupports.claim} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  claim: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link TaskSupports.release} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  release: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link TaskSupports.forward} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  forward: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Creates an instance of TaskSupportsField.
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
export declare namespace TaskSupports {
  /**
   * Metadata information on all properties of the `TaskSupports` complex type.
   */
  const _propertyMetadata: PropertyMetadata<TaskSupports>[];
}
//# sourceMappingURL=TaskSupports.d.ts.map
