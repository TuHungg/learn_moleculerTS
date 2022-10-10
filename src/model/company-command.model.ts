import { CompanyCommandSchema } from "../company/schemas/company-command.schema";
import mongoose from "mongoose";

export const CompanyCommandModel = mongoose.model(
	"companys_command",
	CompanyCommandSchema
);
