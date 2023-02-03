/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CustomAttribute } from './custom-attribute';
/**
 * Representation of the 'WorkflowInstance' schema.
 */
export type WorkflowInstance =
  | {
      /**
       * The ID of the workflow definition for which the instance was started. The ID is at most 64 characters long.
       * Max Length: 64.
       */
      definitionId?: string;
      /**
       * The version of the workflow definition for which the instance was started.
       */
      definitionVersion?: string;
      /**
       * The workflow instance ID. The ID is at least 36 characters long.
       * Max Length: 255.
       * Min Length: 36.
       */
      id?: string;
      /**
       * The time when the workflow instance started.
       * Format: "date-time".
       */
      startedAt?: string;
      /**
       * The user who started the workflow instance. The user ID is at most 255 characters long.
       * Max Length: 255.
       */
      startedBy?: string;
      /**
       * The time when the workflow instance status changed to COMPLETED.
       * Format: "date-time".
       */
      completedAt?: string;
      /**
       * The status of the workflow instance.
       */
      status?: 'RUNNING' | 'ERRONEOUS' | 'SUSPENDED' | 'CANCELED' | 'COMPLETED';
      /**
       * The business key of the workflow instance. The business key of a workflow instance is limited to 255 characters.
       * Max Length: 255.
       */
      businessKey?: string;
      /**
       * The subject of the workflow instance. The subject of a workflow instance is limited to 255 characters.
       * Max Length: 255.
       */
      subject?: string;
      /**
       * The workflow root instance ID. The root ID is at least 36 characters long.
       * Max Length: 255.
       * Min Length: 36.
       */
      rootInstanceId?: string;
      /**
       * The workflow parent instance ID. The parent ID can be null or at least 36 characters long.
       * Max Length: 255.
       */
      parentInstanceId?: string;
      /**
       * The scope to which the workflow instance belongs. Either "own", "shared", or a named scope.
       */
      applicationScope?: string;
      /**
       * The project ID  of the SAP Build Process Automation project to which workflowinstance belongs to. It has the format of region.subaccount.projectName. The projectid is limited to 255 characters.
       * Max Length: 255.
       */
      projectId?: string;
      /**
       * The project version of SAP Build Process Automation project to which workflowinstance belongs to. The projectversion is limited to 64 characters.
       * Max Length: 64.
       */
      projectVersion?: string;
      /**
       * Attributes of the workflow instance. Present only if the $expand parameter in the query has the value "attributes".
       */
      attributes?: CustomAttribute[];
    }
  | Record<string, any>;
