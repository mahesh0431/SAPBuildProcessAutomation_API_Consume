/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ConflictError' schema.
 */
export type ConflictError =
  | {
      error?:
        | {
            /**
             * The error message.
             */
            message: string;
            /**
             * The log ID referring to the error.
             */
            logId?: string;
          }
        | Record<string, any>;
    }
  | Record<string, any>;
