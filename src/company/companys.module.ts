import { Module } from "@nestjs/common";
import { CompanyCommandHandler } from "./commands/handlers/company-command.handler";
import { CompanyQueryHandler } from "./querys/handlers/company-query.handler";
import { MongooseModule } from "@nestjs/mongoose";
import { Company, CompanySchema } from "./schemas/company.schema";

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Company.name, schema: CompanySchema },
		]),
	],
	providers: [CompanyCommandHandler, CompanyQueryHandler],
})
export class CompanyModule {}
