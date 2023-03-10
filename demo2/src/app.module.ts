import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'demo_nestjs',
      autoLoadEntities: true,
      synchronize: true
    }),
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    UserModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
  
})
export class AppModule {}
