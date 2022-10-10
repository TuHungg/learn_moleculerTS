import mongoose from "mongoose";
import { CompanyQuery } from "../../schemas/company-query.schema";

export interface CompanyQueryRepository {
	findAll(): Promise<CompanyQuery[]>;
	findById(_id: mongoose.Types.ObjectId): Promise<CompanyQuery>;
}
