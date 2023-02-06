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
import type { TaskDefinitionApi } from './TaskDefinitionApi';
import {
  CustomAttributeDefinition,
  CustomAttributeDefinitionType
} from './CustomAttributeDefinition';
/**
 * This class represents the entity "TaskDefinitionCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
export declare class TaskDefinition<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaskDefinitionType<T>
{
  readonly _entityApi: TaskDefinitionApi<T>;
  /**
   * Technical entity name for TaskDefinition.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the TaskDefinition entity
   */
  static _keys: string[];
  /**
   * Sap Origin.
   * Maximum length: 16.
   */
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  /**
   * Task Definition Id.
   */
  taskDefinitionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Task Name.
   * @nullable
   */
  taskName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * @nullable
   */
  category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CustomAttributeDefinition} entity.
   */
  customAttributeDefinitionData: CustomAttributeDefinition<T>[];
  constructor(_entityApi: TaskDefinitionApi<T>);
}
export interface TaskDefinitionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  taskDefinitionId: DeserializedType<T, 'Edm.String'>;
  taskName?: DeserializedType<T, 'Edm.String'> | null;
  category?: DeserializedType<T, 'Edm.String'> | null;
  customAttributeDefinitionData: CustomAttributeDefinitionType<T>[];
}
//# sourceMappingURL=TaskDefinition.d.ts.map
