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
import type { TaskDescriptionApi } from './TaskDescriptionApi';
/**
 * This class represents the entity "TaskDescriptionCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
export declare class TaskDescription<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaskDescriptionType<T>
{
  readonly _entityApi: TaskDescriptionApi<T>;
  /**
   * Technical entity name for TaskDescription.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the TaskDescription entity
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
   * Description.
   */
  description: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: TaskDescriptionApi<T>);
}
export interface TaskDescriptionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  instanceId: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
}
//# sourceMappingURL=TaskDescription.d.ts.map
