import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMensagemDto } from './dto/create-mensagem-dto';
import { Mensagem } from './entities/mensagem.entity';

@Injectable()
export class MensagemService {

    constructor(
        @InjectRepository(Mensagem)
        private readonly MensagemRepository: Repository<Mensagem>,
      ) {}

      async getAll(): Promise<Mensagem []>{
          return await this.MensagemRepository.find();
      }

      async createMensagem(mensagemnNova: CreateMensagemDto): Promise<Mensagem>{
            const nova = new Mensagem();
            nova.mensagem = mensagemnNova.mensagem;
            nova.nick = mensagemnNova.nick;

            return this.MensagemRepository.save(nova);
      }

      async updateMensagem(idMensagem:number, mensagemAtualizar: CreateMensagemDto): Promise<Mensagem>{
            const mensagemUpdate = await this.MensagemRepository.findOne(idMensagem);
            mensagemUpdate.nick = mensagemAtualizar.nick;
            mensagemUpdate.mensagem = mensagemAtualizar.mensagem;

            return await this.MensagemRepository.save(mensagemUpdate);
      }

      async deleteMensagem(idMensagem:number): Promise<any>{
          return await this.MensagemRepository.delete(idMensagem);
      }

}
