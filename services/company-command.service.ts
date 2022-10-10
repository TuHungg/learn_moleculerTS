import { CompanyCommandHandler } from "../src/company/commands/handlers/company-command.handler";

import type { ServiceSchema } from "moleculer";
const companyCommandService: ServiceSchema = {
	name: "company_commnad",

	settings: {},

	dependencies: [],

	actions: {
		createCompany: {
			rest: "POST /company-command",

			params: {
				name: "string",
				address: "string",
				employees: "number",
			},

			async handler(req: any): Promise<string> {
				const { name, address, employees } = req.params;

				const company = new CompanyCommandHandler();

				await company.create(name, address, employees);

				return `Created company "${name}" successfully`;
			},
		},
	},
};

export default companyCommandService;
