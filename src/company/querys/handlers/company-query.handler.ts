import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";
import { CompanyQueryRepository } from "../impl/company.query";
import {
	CompanyQuery,
	CompanyQuerySchema,
} from "../../schemas/company-query.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Company } from "src/company/schemas/company.schema";
@Injectable()
export class CompanyQueryHandler {
	// private static companyQueryModel: mongoose.Model<CompanyQuery>;

	constructor(
		@InjectModel(Company.name)
		private companyQueryModel: mongoose.Model<CompanyQuery>
	) {}

	public async finAll(): Promise<Company[]> {
		return this.companyQueryModel.find({});
	}

	// public static async getCompanyModel() {
	// 	if (!CompanyQueryHandler.companyQueryModel) {
	// 		// const db = await ConnectionMongoDb.connect();
	// 		CompanyQueryHandler.companyQueryModel = mongoose.model(
	// 			"companys_query",
	// 			CompanyQuerySchema
	// 		);
	// 	}
	// 	return CompanyQueryHandler.companyQueryModel;
	// }

	// public async findAll(): Promise<CompanyQuery[]> {
	// 	const model = await CompanyQueryHandler.getCompanyModel();
	// 	const companys = await model.find();
	// 	return companys;
	// }

	// public async findById(_id: mongoose.Types.ObjectId): Promise<CompanyQuery> {
	// 	const model = await CompanyQueryHandler.getCompanyModel();
	// 	const company = await model.findById(_id);

	// 	return company;
	// }
}
