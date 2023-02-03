/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CustomAttribute } from './custom-attribute';
/**
 * Representation of the 'TaskInstanceList' schema.
 */
export type TaskInstanceList =
  | {
      /**
       * The definition ID of the user task instance. The ID is at most 255 characters long.
       * Max Length: 255.
       */
      activityId: string;
      /**
       * The time when the user task instance was claimed and its status changed to RESERVED.
       * Format: "date-time".
       */
      claimedAt?: string;
      /**
       * The time when the user task instance status changed to COMPLETED.
       * Format: "date-time".
       */
      completedAt?: string;
      /**
       * The time when the user task instance was created.
       * Format: "date-time".
       */
      createdAt: string;
      /**
       * The user who created the user task instance. The user ID is at most 255 characters long.
       * Max Length: 255.
       */
      createdBy?: string;
      /**
       * The last time the user task instance was changed.
       * Format: "date-time".
       */
      lastChangedAt?: string;
      /**
       * The description of the user task instance.
       */
      description?: string;
      /**
       * The ID of the user task instance. The ID is at least 36 characters long.
       * Max Length: 255.
       * Min Length: 36.
       */
      id: string;
      /**
       * The priority of the user task instance.
       */
      priority: 'VERY_HIGH' | 'HIGH' | 'MEDIUM' | 'LOW';
      /**
       * The time when the user task instance is or was due to be COMPLETED.
       * Format: "date-time".
       */
      dueDate?: string;
      /**
       * The user who is processing (has claimed) the user task instance. The user ID is at most 255 characters long.
       * Max Length: 255.
       */
      processor?: string;
      /**
       * The recipient users of the user task instance.
       */
      recipientUsers?: Set<string>;
      /**
       * The recipient groups of the user task instance.
       */
      recipientGroups?: Set<string>;
      /**
       * The status of the user task instance.
       */
      status: 'READY' | 'RESERVED' | 'CANCELED' | 'COMPLETED';
      /**
       * The subject of the user task instance. The subject is at most 255 characters long.
       * Max Length: 255.
       */
      subject?: string;
      /**
       * The definition ID of the workflow the user task instance belongs to. The ID is at most 64 characters long.
       * Max Length: 64.
       */
      workflowDefinitionId: string;
      /**
       * The instance ID of the workflow the user task instance belongs to. The ID is at least 36 characters long.
       * Max Length: 255.
       * Min Length: 36.
       */
      workflowInstanceId: string;
      /**
       * Attributes of the user task instance. Present only if the $expand parameter in the query has the value "attributes".
       */
      attributes?: CustomAttribute[];
      /**
       * The definition ID of the user task.
       * It consists of the ID of the task defined in the workflow definition (task definition ID) as well as the workflow definition ID delimited by an '@' sign.
       *
       * Max Length: 511.
       * Pattern: "^.*@.*$".
       */
      definitionId?: string;
      /**
       * The scope to which the definition belongs. Either "own", "shared" or a named scope.
       */
      applicationScope: string;
    }
  | Record<string, any>[];
