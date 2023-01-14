import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreatePetInput } from './dto/CretaePetInput';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {

    constructor(
        @InjectRepository(Pet)
        private petRepository: Repository<Pet>)
    {}

    createPet(createPetInput: CreatePetInput): Promise<Pet>{
     
        const newPet = this.petRepository.create(createPetInput);
        
        return this.petRepository.save(newPet);

    }
    async findAll(): Promise<Pet[]> {

        const pet = new Pet();
        pet.Id = 1;
        pet.name = "Mambo";

        return this.petRepository.find();
    }   

       async findOne(id: number): Promise<Pet>{
            return this.petRepository.findOneOrFail({
                where: {
                    Id:id,
                },
            })
        }
}
