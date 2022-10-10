import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CompanyQueryDocument = CompanyQuery & Document;

@Schema()
export class CompanyQuery {
	// @Prop()
	// companyId: string;

	@Prop()
	name: string;

	@Prop()
	address: string;

	@Prop()
	employees: number;
}

export const CompanyQuerySchema = SchemaFactory.createForClass(CompanyQuery);
