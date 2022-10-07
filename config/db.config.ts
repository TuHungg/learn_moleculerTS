import mongoose from "mongoose";
// import { Db } from "mongodb";

// TODO: make singelton
export default class MongoDb {
	private _dbName: String;

	constructor(dbName: String) {
		this._dbName = dbName;
	}

	public async connect(): Promise<void> {
		const uri = "mongodb://localhost:27017/" + this._dbName;
		await mongoose.connect(uri);
	}
}
