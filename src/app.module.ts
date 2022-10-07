import { MongooseModule } from "@nestjs/mongoose";

export class AppModule {
	private static instance: AppModule;

	private constructor() {}

	public static getInstance(): AppModule {
		if (!AppModule.instance) {
			AppModule.instance = MongooseModule.forRoot(
				"mongodb://localhost:27017/learn_moleculer"
			);
		}

		return AppModule.instance;
	}
}
