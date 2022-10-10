import { CompanyRepository } from "./companys.repository";
import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";
import { Company, CompanySchema } from "./schemas/company.schema";
import { ConnectionMongoDb } from "../../config/db.config";

@Injectable()
export class CompanyHandler implements CompanyRepository {
	private static companyModel: mongoose.Model<Company>;

	constructor() {}

	public static async getCompanyModel() {
		if (!CompanyHandler.companyModel) {
			// const db = await ConnectionMongoDb.connect();
			CompanyHandler.companyModel = mongoose.model(
				"companys",
				CompanySchema
			);
		}
		return CompanyHandler.companyModel;
	}

	public async findAll(): Promise<Company[]> {
		const model = await CompanyHandler.getCompanyModel();
		const companys = await model.find();
		return companys;
	}

	public async create(
		name: string,
		address: string,
		employees: number
	): Promise<string> {
		const model = await CompanyHandler.getCompanyModel();
		const createCompany = await model.create({
			name,
			address,
			employees,
		});

		await createCompany.save();

		return `Created company ${name} successfully`;
	}

	public async findById(_id: mongoose.Types.ObjectId): Promise<Company> {
		const model = await CompanyHandler.getCompanyModel();
		const company = await model.findById(_id);

		return company;
	}

	public async delete(_id: mongoose.Types.ObjectId): Promise<string> {
		const model = await CompanyHandler.getCompanyModel();

		await model.deleteOne({ _id });

		return `Delete Company have id ${_id} successfully`;
	}

	public async update(
		_id: mongoose.Types.ObjectId,
		name: string,
		address: string,
		employees: number
	): Promise<string> {
		const model = await CompanyHandler.getCompanyModel();
		await model.updateOne({ _id }, { name, address, employees });

		return `Update company have value {${name}, ${address}, ${employees} }`;
	}
}
