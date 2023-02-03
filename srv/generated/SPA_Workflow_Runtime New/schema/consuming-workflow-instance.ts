/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ConsumingWorkflowInstance' schema.
 */
export type ConsumingWorkflowInstance =
  | {
      /**
       * The ID of the workflow instance, which consumed the message. The ID is at least 36 characters long.
       * Max Length: 255.
       * Min Length: 36.
       */
      id?: string;
    }
  | Record<string, any>;
