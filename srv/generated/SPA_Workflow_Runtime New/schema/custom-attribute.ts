/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'CustomAttribute' schema.
 */
export type CustomAttribute =
  | {
      /**
       * The ID of the attribute.
       * Max Length: 255.
       */
      id?: string;
      /**
       * The label which represents how the attribute should be presented to end users.
       * Max Length: 255.
       */
      label?: string;
      /**
       * The value of the attribute.
       * Max Length: 4000.
       */
      value?: string;
      /**
       * The type of the attribute.
       */
      type?: 'string';
    }
  | Record<string, any>;
