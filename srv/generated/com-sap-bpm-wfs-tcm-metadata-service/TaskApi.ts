/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Task } from './Task';
import { TaskRequestBuilder } from './TaskRequestBuilder';
import { TaskDescriptionApi } from './TaskDescriptionApi';
import { TaskDefinitionApi } from './TaskDefinitionApi';
import { CustomAttributeApi } from './CustomAttributeApi';
import { WorkflowLogApi } from './WorkflowLogApi';
import { TaskSupports, TaskSupportsField } from './TaskSupports';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class TaskApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Task<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link description} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DESCRIPTION: OneToOneLink<
      Task<DeSerializersT>,
      DeSerializersT,
      TaskDescriptionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taskDefinitionData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TASK_DEFINITION_DATA: OneToOneLink<
      Task<DeSerializersT>,
      DeSerializersT,
      TaskDefinitionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customAttributeData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_ATTRIBUTE_DATA: Link<
      Task<DeSerializersT>,
      DeSerializersT,
      CustomAttributeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workflowLogs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKFLOW_LOGS: Link<
      Task<DeSerializersT>,
      DeSerializersT,
      WorkflowLogApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TaskDescriptionApi<DeSerializersT>,
      TaskDefinitionApi<DeSerializersT>,
      CustomAttributeApi<DeSerializersT>,
      WorkflowLogApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DESCRIPTION: new OneToOneLink('Description', this, linkedApis[0]),
      TASK_DEFINITION_DATA: new OneToOneLink(
        'TaskDefinitionData',
        this,
        linkedApis[1]
      ),
      CUSTOM_ATTRIBUTE_DATA: new Link(
        'CustomAttributeData',
        this,
        linkedApis[2]
      ),
      WORKFLOW_LOGS: new Link('WorkflowLogs', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = Task;

  requestBuilder(): TaskRequestBuilder<DeSerializersT> {
    return new TaskRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Task<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Task<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Task<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Task, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Task, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SAP_ORIGIN: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INSTANCE_ID: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TASK_DEFINITION_ID: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_DEFINITION_NAME: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_TITLE: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_COMMENTS: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    HAS_ATTACHMENTS: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    HAS_POTENTIAL_OWNERS: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SUPPORTS_CLAIM: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SUPPORTS_RELEASE: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SUPPORTS_FORWARD: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SUPPORTS_COMMENTS: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SUPPORTS_ATTACHMENTS: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY_NAME: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSOR: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETION_DEAD_LINE: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    SUBSTITUTED_USER_NAME: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITY_NUMBER: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TASK_SUPPORTS: TaskSupportsField<
      Task<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    GUI_LINK: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIDENCE_LEVEL: OrderableEdmTypeField<
      Task<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link description} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DESCRIPTION: OneToOneLink<
      Task<DeSerializersT>,
      DeSerializersT,
      TaskDescriptionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taskDefinitionData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TASK_DEFINITION_DATA: OneToOneLink<
      Task<DeSerializersT>,
      DeSerializersT,
      TaskDefinitionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customAttributeData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_ATTRIBUTE_DATA: Link<
      Task<DeSerializersT>,
      DeSerializersT,
      CustomAttributeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workflowLogs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKFLOW_LOGS: Link<
      Task<DeSerializersT>,
      DeSerializersT,
      WorkflowLogApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Task<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sapOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_ORIGIN: fieldBuilder.buildEdmTypeField(
          'SAP__Origin',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link instanceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE_ID: fieldBuilder.buildEdmTypeField(
          'InstanceID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taskDefinitionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_DEFINITION_ID: fieldBuilder.buildEdmTypeField(
          'TaskDefinitionID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taskDefinitionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_DEFINITION_NAME: fieldBuilder.buildEdmTypeField(
          'TaskDefinitionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
        /**
         * Static representation of the {@link taskTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_TITLE: fieldBuilder.buildEdmTypeField(
          'TaskTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_COMMENTS: fieldBuilder.buildEdmTypeField(
          'HasComments',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link hasAttachments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_ATTACHMENTS: fieldBuilder.buildEdmTypeField(
          'HasAttachments',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link hasPotentialOwners} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_POTENTIAL_OWNERS: fieldBuilder.buildEdmTypeField(
          'HasPotentialOwners',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link supportsClaim} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORTS_CLAIM: fieldBuilder.buildEdmTypeField(
          'SupportsClaim',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link supportsRelease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORTS_RELEASE: fieldBuilder.buildEdmTypeField(
          'SupportsRelease',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link supportsForward} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORTS_FORWARD: fieldBuilder.buildEdmTypeField(
          'SupportsForward',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link supportsComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORTS_COMMENTS: fieldBuilder.buildEdmTypeField(
          'SupportsComments',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link supportsAttachments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORTS_ATTACHMENTS: fieldBuilder.buildEdmTypeField(
          'SupportsAttachments',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'CreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdByName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_NAME: fieldBuilder.buildEdmTypeField(
          'CreatedByName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSOR: fieldBuilder.buildEdmTypeField(
          'Processor',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link completionDeadLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETION_DEAD_LINE: fieldBuilder.buildEdmTypeField(
          'CompletionDeadLine',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link substitutedUserName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSTITUTED_USER_NAME: fieldBuilder.buildEdmTypeField(
          'SubstitutedUserName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priorityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PriorityNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link taskSupports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_SUPPORTS: fieldBuilder.buildComplexTypeField(
          'TaskSupports',
          TaskSupportsField,
          true
        ),
        /**
         * Static representation of the {@link guiLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUI_LINK: fieldBuilder.buildEdmTypeField(
          'GUI_Link',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confidenceLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIDENCE_LEVEL: fieldBuilder.buildEdmTypeField(
          'ConfidenceLevel',
          'Edm.Decimal',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Task)
      };
    }

    return this._schema;
  }
}
