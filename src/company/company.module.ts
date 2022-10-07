// import { Module } from "@nestjs/common";
// import { MongooseModule } from "@nestjs/mongoose";
// import { CompanySchema, Compnay } from "./schemas/company.schema";

// // @Module({
// // 	imports: [
// // 		MongooseModule.forFeature([
// // 			{ name: Compnay.name, schema: CompanySchema },
// // 		]),
// // 	],
// // 	controllers: [],
// // 	providers: [],
// // })
// // export class UsersModule {}

// export class CompanyModule {
// 	private static instance: CompanyModule;

// 	private constructor() {}

// 	public static getInstance(): CompanyModule {
// 		if (!CompanyModule.instance) {
// 			CompanyModule.instance = MongooseModule.forFeature([
// 				{ name: Compnay.name, schema: CompanySchema },
// 			]);
// 		}

// 		return CompanyModule.instance;
// 	}
// }
