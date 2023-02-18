import { Module } from "@nestjs/common";
import { FeedbackModule } from "./feedback/feedback.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { Feedback } from "./feedback/feedback.entity";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Feedback],
      synchronize: true,
    }),
    FeedbackModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
