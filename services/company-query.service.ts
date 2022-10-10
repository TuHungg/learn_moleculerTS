import { CompanyQueryHandler } from "../src/company/querys/handlers/company-query.handler";
import { CompanyQuery } from "../src/company/schemas/company-query.schema";

import type { ServiceSchema } from "moleculer";
const companyQuerySerice: ServiceSchema = {
	name: "company_query",

	settings: [],

	dependencies: [],

	actions: {
		getAllCompany: {
			rest: "GET /companyquery",

			async handler(): Promise<CompanyQuery[]> {
				const company = new CompanyQueryHandler();

				const result = await company.findAll();

				return result;
			},
		},

		getbyId: {
			rest: "POST /companyquery",
			params: {
				id: "string",
			},
			async handler(req: any): Promise<CompanyQuery> {
				const company = new CompanyQueryHandler();

				const result = await company.findById(req.params.id);

				return result;
			},
		},
	},
};

export default companyQuerySerice;
