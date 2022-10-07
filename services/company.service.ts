"use strict";

import { Service, ServiceBroker, Context } from "moleculer";

interface Company {
	name: string;
	address: string;
	employees: number;
}

export default class CompanyService extends Service {
	public constructor(public broker: ServiceBroker) {
		super(broker);
		this.parseServiceSchema({
			name: "company",

			settings: {
				// Available fields in the responses
				fields: ["_id", "name", "address", "employees"],

				// Validator for the `create` & `insert` actions.
				entityValidator: {
					name: "string|min:3",
					price: "number|positive",
				},
			},

			actions: {
				/**
				 * Say a 'Hello' action.
				 *
				 */

				createCompany: {
					rest: "POST /",
					params: {
						name: "string",
						address: "string",
						employees: "number",
					},

					async handler(ctx: Context<Company>): Promise<Company> {
						const json: Company = ctx.params;
						return json;
					},
				},
			},
		});
	}

	// // Action
	// public ActionHello(): string {
	// 	return "Hello Moleculer";
	// }

	// public ActionWelcome(name: string): string {
	// 	return `Welcome, ${name}`;
	// }
}
