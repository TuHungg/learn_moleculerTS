import { CompanySchema } from "../company/schemas/company.schema";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

// export const CompanyModelCommand = mongoose.model(
// 	"companys_command",
// 	CompanySchema
// );
// export const CompanyModelQuery = mongoose.model(
// 	"companys_query",
// 	CompanySchema
// );
