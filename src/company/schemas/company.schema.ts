import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CompanyDocument = Compnay & Document;

@Schema()
export class Compnay {
	@Prop
	companyId: string;

	@Prop
	name: string;

	@Prop
	address: string;

	@Prop
	employees: number;
}

export const CompanySchema = SchemaFactory.createForClass(Compnay);
