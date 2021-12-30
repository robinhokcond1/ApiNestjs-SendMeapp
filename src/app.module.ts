import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensagemController } from './mensagem/mensagem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensagemService } from './mensagem/mensagem.service';
import { Mensagem } from './mensagem/entities/mensagem.entity';

@Module({
  imports: [   
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'sendmeapp',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([Mensagem])
],
  controllers: [AppController, MensagemController],
  providers: [AppService, MensagemService],
})
export class AppModule {}
