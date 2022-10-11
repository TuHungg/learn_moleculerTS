import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyModule } from "./company/companys.module";

@Module({
	imports: [
		MongooseModule.forRoot("mongodb://localhost:27017/neox"),
		CompanyModule,
	],
})
export class AppModule {}
