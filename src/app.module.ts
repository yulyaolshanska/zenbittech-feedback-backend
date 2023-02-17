import { Module } from "@nestjs/common";
import { FeedbackModule } from "./feedback/feedback.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Feedback } from "./feedback/feedback.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: 5433,
      username: "postgres",
      password: "",
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
