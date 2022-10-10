import { Company } from "./schemas/company.schema";
import mongoose from "mongoose";
export interface CompanyRepository {
	create(name: string, address: string, employees: number): Promise<string>;

	findAll(): Promise<Company[]>;
	update(
		_id: mongoose.Types.ObjectId,
		name: string,
		address: string,
		employees: number
	): Promise<string>;
	delete(_id: mongoose.Types.ObjectId): Promise<string>;
	findById(_id: mongoose.Types.ObjectId): Promise<Company>;
}
