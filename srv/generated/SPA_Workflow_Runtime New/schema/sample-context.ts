/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'SampleContext' schema.
 */
export type SampleContext =
  | {
      /**
       * The ID of the default start context. The ID is at most 255 characters long.
       * Max Length: 255.
       */
      id?: string;
      /**
       * The default start context configured in the start event.
       */
      content?: Record<string, any>;
      /**
       * The ID of the start event for which the default start context is configured. The ID is at most 255 characters long.
       * Max Length: 255.
       */
      modelElementId?: string;
    }
  | Record<string, any>;
