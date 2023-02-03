import cds from "@sap/cds";
import oauth from "axios-oauth-client";
import axios from "axios";
import { UserTaskInstancesApi } from "./generated/SPA_Workflow_Runtime New";
import { executeHttpRequest, HttpResponse } from "@sap-cloud-sdk/http-client";
// @ts-ignore
import * as xssec from "@sap/xssec"
import {
  Service,
  ServiceBindingTransformFunction,
  Destination,
} from "@sap-cloud-sdk/connectivity";

module.exports = class sapCloudSDKBuildTS extends cds.ApplicationService {
  async init() {
    const getTaskInstances = async function () {
      const serviceBindingTransformFn: ServiceBindingTransformFunction = async (
        service: Service
      ): Promise<Destination> => {
        // Type 1: OAuth token using SAP Cloud SDK
        // Fetch OAuth Token
        const data = new URLSearchParams({
          grant_type: "client_credentials",
          client_id: service.credentials.uaa.clientid,
          client_secret: service.credentials.uaa.clientsecret,
        });
        // Execute Request
        const tokenResp:HttpResponse = await executeHttpRequest(
          { url: service.credentials.uaa.url + "/oauth/token" },
          {
            method: "post",
            data: data,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          },
          { fetchCsrfToken: false }
        );
        // // Type 2: OAuth token using Axios OAuth Client
        // const getClientCredentials = oauth.clientCredentials(
        //   axios.create(),
        //   service.credentials.uaa.url + "/oauth/token",
        //   service.credentials.uaa.clientid,
        //   service.credentials.uaa.clientsecret
        // );
        // const auth = await getClientCredentials( null );

        // Transform the service binding
        return {
          authTokens: [
            {
              type: "",
              value: "",
              expiresIn: "",
              error: "",
              http_header: {
                value: "Bearer " + tokenResp.data.access_token,
                key: "Authorization",
              },
            },
          ],
          url: service.credentials.endpoints.api + "/public/workflow/rest/",
          authentication: "OAuth2ClientCredentials",
        };
      };
      const responseData = await UserTaskInstancesApi.getV1TaskInstances({
        definitionId:
          "form_simpleapprovalp_1@eu10.sap-process-automation-tfe.testworkflow.simpleapproval",
        status: "READY",
      }).execute({
        destinationName: "process-automation",
        serviceBindingTransformFn,
      });
      return responseData;
    };
    this.on("getTaskInstances", async function () {
      return await getTaskInstances();
    });
    await super.init();
  }
};
