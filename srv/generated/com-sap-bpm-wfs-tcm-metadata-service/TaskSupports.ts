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
export class TaskSupportsField<
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
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
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
  > = this._fieldBuilder.buildEdmTypeField('Description', 'Edm.Boolean', true);
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
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomAttributeData',
    'Edm.Boolean',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField(
    'UIExecutionLink',
    'Edm.Boolean',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField('WorkflowLog', 'Edm.Boolean', true);
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
  > = this._fieldBuilder.buildEdmTypeField('Claim', 'Edm.Boolean', true);
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
  > = this._fieldBuilder.buildEdmTypeField('Release', 'Edm.Boolean', true);
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
  > = this._fieldBuilder.buildEdmTypeField('Forward', 'Edm.Boolean', true);

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
  ) {
    super(fieldName, fieldOf, deSerializers, TaskSupports, fieldOptions);
  }
}

export namespace TaskSupports {
  /**
   * Metadata information on all properties of the `TaskSupports` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaskSupports>[] = [
    {
      originalName: 'Description',
      name: 'description',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'CustomAttributeData',
      name: 'customAttributeData',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'UIExecutionLink',
      name: 'uiExecutionLink',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'WorkflowLog',
      name: 'workflowLog',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'Claim',
      name: 'claim',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'Release',
      name: 'release',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'Forward',
      name: 'forward',
      type: 'Edm.Boolean',
      isCollection: false
    }
  ];
}
