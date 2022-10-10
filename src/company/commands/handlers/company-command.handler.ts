import { CompanyCommandRepository } from "../impl/company.command";
import mongoose from "mongoose";
import {
	CompanyCommand,
	CompanyCommandSchema,
} from "../../schemas/company-command.schema";

export class CompanyCommandHandler implements CompanyCommandRepository {
	private static companyCommandModel: mongoose.Model<CompanyCommand>;

	constructor() {}

	public static async getCompanyModel() {
		if (!CompanyCommandHandler.companyCommandModel) {
			// const db = await ConnectionMongoDb.connect();
			CompanyCommandHandler.companyCommandModel = mongoose.model(
				"companys_command",
				CompanyCommandSchema
			);
		}
		return CompanyCommandHandler.companyCommandModel;
	}

	public async create(
		name: string,
		address: string,
		employees: number
	): Promise<string> {
		const model = await CompanyCommandHandler.getCompanyModel();
		const createCompany = await model.create({
			name,
			address,
			employees,
		});

		await createCompany.save();

		return `Created company ${name} successfully`;
	}

	public async delete(_id: mongoose.Types.ObjectId): Promise<string> {
		const model = await CompanyCommandHandler.getCompanyModel();

		await model.deleteOne({ _id });

		return `Delete Company have id ${_id} successfully`;
	}

	public async update(
		_id: mongoose.Types.ObjectId,
		name: string,
		address: string,
		employees: number
	): Promise<string> {
		const model = await CompanyCommandHandler.getCompanyModel();
		await model.updateOne({ _id }, { name, address, employees });

		return `Update company have value {${name}, ${address}, ${employees} }`;
	}
}
