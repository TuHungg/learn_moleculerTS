import mongoose from "mongoose";
import { CompanyCommandSchema } from "../../schemas/company-command.schema";

export interface CompanyCommandRepository {
	create(name: string, address: string, employees: number): Promise<string>;

	update(
		_id: mongoose.Types.ObjectId,
		name: string,
		address: string,
		employees: number
	): Promise<string>;

	delete(_id: mongoose.Types.ObjectId): Promise<string>;
}
