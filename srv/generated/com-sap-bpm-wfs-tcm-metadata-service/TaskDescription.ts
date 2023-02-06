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
export class TaskDescription<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaskDescriptionType<T>
{
  /**
   * Technical entity name for TaskDescription.
   */
  static _entityName = 'TaskDescriptionCollection';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the TaskDescription entity
   */
  static _keys = ['SAP__Origin', 'InstanceID'];
  /**
   * Sap Origin.
   * Maximum length: 16.
   */
  sapOrigin!: DeserializedType<T, 'Edm.String'>;
  /**
   * Instance Id.
   */
  instanceId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   */
  description!: DeserializedType<T, 'Edm.String'>;

  constructor(readonly _entityApi: TaskDescriptionApi<T>) {
    super(_entityApi);
  }
}

export interface TaskDescriptionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  instanceId: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
}
