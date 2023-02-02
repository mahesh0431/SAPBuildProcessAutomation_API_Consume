/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'WorkflowDefinitionJob' schema.
 */
export type WorkflowDefinitionJob =
  | {
      /**
       * The job ID. The ID is at least 36 characters long.
       * Max Length: 255.
       * Min Length: 36.
       */
      id?: string;
      /**
       * The purpose of the job.
       */
      purpose?: 'delete';
    }
  | Record<string, any>;
