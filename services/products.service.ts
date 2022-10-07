"use strict";
import { Context, Service, ServiceBroker, ServiceSchema } from "moleculer";

export default class ProductsService extends Service {
	// @ts-ignore
	public constructor(public broker: ServiceBroker) {
		super(broker);
		this.parseServiceSchema({
			name: "products",
			settings: {
				// Available fields in the responses
				fields: ["_id", "name", "quantity", "price"],

				// Validator for the `create` & `insert` actions.
				entityValidator: {
					name: "string|min:3",
					price: "number|positive",
				},
			},

			actions: {},
			methods: {},
			/**
			 * Loading sample data to the collection.
			async afterConnected() {
			 await this.adapter.collection.createIndex({ name: 1 });
			},
			 */
		});
	}
}
