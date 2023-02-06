/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import { TaskSupports } from './TaskSupports';
import type { TaskApi } from './TaskApi';
import { TaskDescription, TaskDescriptionType } from './TaskDescription';
import { TaskDefinition, TaskDefinitionType } from './TaskDefinition';
import { CustomAttribute, CustomAttributeType } from './CustomAttribute';
import { WorkflowLog, WorkflowLogType } from './WorkflowLog';
/**
 * This class represents the entity "TaskCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
export declare class Task<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaskType<T>
{
  readonly _entityApi: TaskApi<T>;
  /**
   * Technical entity name for Task.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the Task entity
   */
  static _keys: string[];
  /**
   * Sap Origin.
   * Maximum length: 16.
   */
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  /**
   * Instance Id.
   */
  instanceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Task Definition Id.
   * @nullable
   */
  taskDefinitionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Definition Name.
   * @nullable
   */
  taskDefinitionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Title.
   * @nullable
   */
  taskTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Has Comments.
   * @nullable
   */
  hasComments?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Has Attachments.
   * @nullable
   */
  hasAttachments?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Has Potential Owners.
   * @nullable
   */
  hasPotentialOwners?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Supports Claim.
   * @nullable
   */
  supportsClaim?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Supports Release.
   * @nullable
   */
  supportsRelease?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Supports Forward.
   * @nullable
   */
  supportsForward?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Supports Comments.
   * @nullable
   */
  supportsComments?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Supports Attachments.
   * @nullable
   */
  supportsAttachments?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Created By.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created By Name.
   * @nullable
   */
  createdByName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processor.
   * @nullable
   */
  processor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Completion Dead Line.
   * @nullable
   */
  completionDeadLine?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Substituted User Name.
   * @nullable
   */
  substitutedUserName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Priority.
   * @nullable
   */
  priority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Priority Number.
   * @nullable
   */
  priorityNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Task Supports.
   * @nullable
   */
  taskSupports?: TaskSupports<T> | null;
  /**
   * Gui Link.
   * @nullable
   */
  guiLink?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confidence Level.
   * @nullable
   */
  confidenceLevel?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * One-to-one navigation property to the {@link TaskDescription} entity.
   */
  description?: TaskDescription<T> | null;
  /**
   * One-to-one navigation property to the {@link TaskDefinition} entity.
   */
  taskDefinitionData?: TaskDefinition<T> | null;
  /**
   * One-to-many navigation property to the {@link CustomAttribute} entity.
   */
  customAttributeData: CustomAttribute<T>[];
  /**
   * One-to-many navigation property to the {@link WorkflowLog} entity.
   */
  workflowLogs: WorkflowLog<T>[];
  constructor(_entityApi: TaskApi<T>);
}
export interface TaskType<T extends DeSerializers = DefaultDeSerializers> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  instanceId: DeserializedType<T, 'Edm.String'>;
  taskDefinitionId?: DeserializedType<T, 'Edm.String'> | null;
  taskDefinitionName?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  taskTitle?: DeserializedType<T, 'Edm.String'> | null;
  hasComments?: DeserializedType<T, 'Edm.Boolean'> | null;
  hasAttachments?: DeserializedType<T, 'Edm.Boolean'> | null;
  hasPotentialOwners?: DeserializedType<T, 'Edm.Boolean'> | null;
  supportsClaim?: DeserializedType<T, 'Edm.Boolean'> | null;
  supportsRelease?: DeserializedType<T, 'Edm.Boolean'> | null;
  supportsForward?: DeserializedType<T, 'Edm.Boolean'> | null;
  supportsComments?: DeserializedType<T, 'Edm.Boolean'> | null;
  supportsAttachments?: DeserializedType<T, 'Edm.Boolean'> | null;
  createdOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdByName?: DeserializedType<T, 'Edm.String'> | null;
  processor?: DeserializedType<T, 'Edm.String'> | null;
  completionDeadLine?: DeserializedType<T, 'Edm.DateTime'> | null;
  substitutedUserName?: DeserializedType<T, 'Edm.String'> | null;
  priority?: DeserializedType<T, 'Edm.String'> | null;
  priorityNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  taskSupports?: TaskSupports<T> | null;
  guiLink?: DeserializedType<T, 'Edm.String'> | null;
  confidenceLevel?: DeserializedType<T, 'Edm.Decimal'> | null;
  description?: TaskDescriptionType<T> | null;
  taskDefinitionData?: TaskDefinitionType<T> | null;
  customAttributeData: CustomAttributeType<T>[];
  workflowLogs: WorkflowLogType<T>[];
}
//# sourceMappingURL=Task.d.ts.map
