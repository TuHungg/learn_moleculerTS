import { ConnectionMongoDb } from "config/db.config";
import type { ServiceSchema } from "moleculer";
import { Model } from "mongoose";
import { Company, CompanySchema } from "../src/company/schemas/company.schema";
import { CompanyModel } from "../src/model/company.model";
// import { Company } from "../src/interfaces/company.inteface";
import mongoose from "mongoose";
import { CompanyHandler } from "../src/company/companys.handler";

interface ICompany {
	name: string;
	address: string;
	employees: number;
}

const companyService: ServiceSchema = {
	name: "company",
	/**
	 * Settings
	 */
	settings: {},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		// getAll: {
		// 	rest: "GET /",
		// 	async handler(): Promise<void> {
		// 		const CompanyModel = await CompanybySchema.find();

		// 		return CompanyModel;
		// 	},
		// },

		// create: {
		// 	rest: "POST /create",
		// 	params: {
		// 		name: "string",
		// 		address: "string",
		// 		employees: "number",
		// 	},
		// 	async handler(req: any): Promise<void> {
		// 		const { name, address, employees } = req.params;

		// 		const companyDoc = new CompanybySchema({
		// 			name,
		// 			address,
		// 			employees,
		// 		});

		// 		const saveCompanyModel = await companyDoc.save();

		// 		return saveCompanyModel;
		// 	},
		// },

		createbyNest: {
			rest: "POST /createbyNest",
			params: {
				name: "string",
				address: "string",
				employees: "number",
			},
			async handler(req: any): Promise<void> {
				const { name, address, employees } = req.params;
				const companyDoc = await CompanyModel.create({
					name,
					address,
					employees,
				});

				const result = await companyDoc.save();

				return result;
			},
		},

		getAllbyNest: {
			rest: "GET /getbyNest",

			async handler(): Promise<Company[]> {
				// const getCompany = await CompanyModel.find();
				// return getCompany;

				const company = new CompanyHandler();
				const result = await company.findAll();

				return result;
			},
		},

		findbyId: {
			rest: "POST /findcompany",
			params: {
				id: "string",
			},
			async handler(req: any): Promise<Company> {
				const company = new CompanyHandler();
				const result = await company.findById(req.params.id);

				return result;
			},
		},

		// welcome: {
		// 	rest: "/welcome",
		// 	params: {
		// 		username: { type: "string", min: 3, max: 25 },
		// 	},
		// 	/** @param {req} ctx  */
		// 	async handler(
		// 		ctx: req<{
		// 			username: string;
		// 		}>
		// 	) {
		// 		return `Welcome, ${ctx.params.username}`;
		// 	},
		// },
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	// async getCompanyModel() {
	// 	const db = await ConnectionMongoDb.connect();

	// 	const companyModel = mongoose.Model<Company>;

	// 	companyModel = db.model('company', CompanybySchema)

	// },

	/**
	 * Service created lifecycle event handler
	 */

	created() {
		this.logger.info("[greeter] The service was created");
	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {
		this.logger.info("[greeter] The service was started");
	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {
		this.logger.info("[greeter] The service was stopped");
	},
};

export default companyService;
