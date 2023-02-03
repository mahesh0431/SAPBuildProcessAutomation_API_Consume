/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'WorkflowInstanceErrorMessage' schema.
 */
export type WorkflowInstanceErrorMessage =
  | {
      /**
       * The ID of the model element where the error occurred. The ID is at most 255 characters long.
       * Max Length: 255.
       */
      activityId?: string;
      /**
       * The name of the model element where the error occurred. The name is at most 255 characters long.
       * Max Length: 255.
       */
      activityName?: string;
      /**
       * The error category.
       */
      errorCode?: string;
      /**
       * The log ID referring to the error.
       */
      logId?: string;
      /**
       * The error message.
       */
      message?: string;
      /**
       * The time when the error occurred.
       * Format: "date-time".
       */
      timestamp?: string;
    }
  | Record<string, any>;
