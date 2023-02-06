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
import type { WorkflowLogApi } from './WorkflowLogApi';
import { UserInfo, UserInfoType } from './UserInfo';
/**
 * This class represents the entity "WorkflowLogCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
export declare class WorkflowLog<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkflowLogType<T>
{
  readonly _entityApi: WorkflowLogApi<T>;
  /**
   * Technical entity name for WorkflowLog.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the WorkflowLog entity
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
   * Event Order.
   */
  eventOrder: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reference Instance Id.
   */
  referenceInstanceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Performed By.
   * @nullable
   */
  performedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Performed By Name.
   * @nullable
   */
  performedByName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   */
  status: DeserializedType<T, 'Edm.String'>;
  /**
   * Timestamp.
   * @nullable
   */
  timestamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supports Navigation.
   * @nullable
   */
  supportsNavigation?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Result.
   * @nullable
   */
  result?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Result Type.
   * @nullable
   */
  resultType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Timestamp.
   * @nullable
   */
  creationTimestamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End Timestamp.
   * @nullable
   */
  endTimestamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link UserInfo} entity.
   */
  performedByDetails?: UserInfo<T> | null;
  constructor(_entityApi: WorkflowLogApi<T>);
}
export interface WorkflowLogType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  instanceId: DeserializedType<T, 'Edm.String'>;
  eventOrder: DeserializedType<T, 'Edm.Int32'>;
  referenceInstanceId: DeserializedType<T, 'Edm.String'>;
  performedBy?: DeserializedType<T, 'Edm.String'> | null;
  performedByName?: DeserializedType<T, 'Edm.String'> | null;
  status: DeserializedType<T, 'Edm.String'>;
  timestamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  supportsNavigation?: DeserializedType<T, 'Edm.Boolean'> | null;
  result?: DeserializedType<T, 'Edm.String'> | null;
  resultType?: DeserializedType<T, 'Edm.String'> | null;
  creationTimestamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  endTimestamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  performedByDetails?: UserInfoType<T> | null;
}
//# sourceMappingURL=WorkflowLog.d.ts.map
