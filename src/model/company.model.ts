import { Module } from "@nestjs/common";
import { CompanySchema, Company } from "../company/schemas/company.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyCommandHandler } from "../company/commands/handlers/company-command.handler";
import { CompanyQueryHandler } from "../company/querys/handlers/company-query.handler";

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
