/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'UpdateTaskInstancePayload' schema.
 */
export type UpdateTaskInstancePayload =
  | {
      /**
       * The changes to the context of the workflow instance the user task belongs to.
       */
      context?: Record<string, any>;
      /**
       * Specify the new status of the task instance.
       */
      status?: 'COMPLETED';
      /**
       * Specify the decision taken by the user when the task status is set to 'COMPLETED'.
       * The decision can be evaluated with a respective expression to adapt the control flow accordingly.
       * Max Length: 255.
       */
      decision?: string;
      /**
       * Specify the new subject of the task instance.
       * The subject can be at most 255 characters long.
       *
       * Note that patching a translated subject is not supported, i.e. GET requests executed on a translated user task do not display the patched text.
       * Max Length: 255.
       */
      subject?: string;
      /**
       * Specify the new description of the task instance.
       * The description can be at most 4000 characters long.
       *
       * Note that patching a translated description is not supported, i.e. GET requests executed on a translated user task do not display the patched text.
       * Max Length: 4000.
       */
      description?: string;
      /**
       * Specify the new recipient users of the task instance as a comma-separated list.
       * Specify at most 100 recipient users.
       * The ID of a recipient user can be at most 255 characters long.
       * Pattern: "^(.{0,255},){0,99}.{0,255}$".
       */
      recipientUsers?: string;
      /**
       * Specify the new recipient groups of the task instance, as a comma-separated list.
       * Specify at most 100 recipient groups.
       * The ID of a recipient group can be at most 255 characters long.
       * Pattern: "^(.{0,255},){0,99}.{0,255}$".
       */
      recipientGroups?: string;
      /**
       * Specify the new processor of the task instance.
       * The ID of the processor can be at most 255 characters long and must not contain commas.
       * Max Length: 255.
       * Pattern: "^[^,]{0,255}$".
       */
      processor?: string;
      /**
       * Specify the new due date of the task instance.
       * Format: "date-time".
       */
      dueDate?: string;
      /**
       * Specify the new priority of the task instance.
       */
      priority?: 'VERY_HIGH' | 'HIGH' | 'MEDIUM' | 'LOW';
      /**
       * Specify the confidenceLevel for a task instance. The value must be between 0.0 and 1.0. To delete the confidenceLevel, specify a value of -1.0.
       * Format: "double".
       */
      confidenceLevel?: number;
    }
  | Record<string, any>;
