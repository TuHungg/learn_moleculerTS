import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CompanyCommandDocument = CompanyCommand & Document;

@Schema()
export class CompanyCommand {
	// @Prop()
	// companyId: string;

	@Prop()
	name: string;

	@Prop()
	address: string;

	@Prop()
	employees: number;
}

export const CompanyCommandSchema =
	SchemaFactory.createForClass(CompanyCommand);
