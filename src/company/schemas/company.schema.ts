import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
	// @Prop()
	// companyId: string;

	@Prop()
	name: string;

	@Prop()
	address: string;

	@Prop()
	employees: number;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
