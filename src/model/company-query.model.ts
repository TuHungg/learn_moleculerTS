import { CompanyQuerySchema } from "../company/schemas/company-query.schema";
import mongoose from "mongoose";

export const CompanyModelQuery = mongoose.model(
	"companys_query",
	CompanyQuerySchema
);
