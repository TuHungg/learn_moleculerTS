const mongoose = require("mongoose");
const Schema = mongoose.Schema;

import { Company, CompanySchema } from "../company/schemas/company.schema";

// export const CompanybySchema = mongoose.model(
// 	"companys",
// 	new Schema({
// 		name: {
// 			type: String,
// 		},
// 		address: {
// 			type: String,
// 		},
// 		eployees: {
// 			type: Number,
// 		},
// 	})
// );

export const CompanyModel = mongoose.model("companys", CompanySchema);
