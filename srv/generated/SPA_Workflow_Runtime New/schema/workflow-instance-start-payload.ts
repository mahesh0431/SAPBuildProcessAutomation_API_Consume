/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'WorkflowInstanceStartPayload' schema.
 */
export type WorkflowInstanceStartPayload =
  | {
      /**
       * Specify the ID of the workflow definition for which an instance should be started. The ID is at most 64 characters long.
       * Max Length: 64.
       * Min Length: 1.
       */
      definitionId: string;
      /**
       * Specify the initial context of the workflow instance.
       */
      context?: Record<string, any>;
    }
  | Record<string, any>;
