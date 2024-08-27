import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ApiChimp {
    @Prop({
        unique: true,
    })
    name: string;

    @Prop()
    type: string;

    @Prop()
    price: number;
}
export const ApiChimpSchema = SchemaFactory.createForClass(ApiChimp);
