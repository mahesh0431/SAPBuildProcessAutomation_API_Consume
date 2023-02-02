/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'WorkflowInstanceUpdatePayload' schema.
 */
export type WorkflowInstanceUpdatePayload =
  | {
      /**
       * The new status of the workflow instance.
       */
      status?: 'CANCELED' | 'RUNNING' | 'SUSPENDED';
      /**
       * Indicate whether the statuses of the whole cascade of workflow instances are changed, including the workflow instance given in the API request as well as its subflow instances, or only of the given workflow instance. By default, no cascade to subflow instances happens.
       */
      cascade?: boolean;
    }
  | Record<string, any>;
