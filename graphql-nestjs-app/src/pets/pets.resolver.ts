import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePetInput } from './dto/CretaePetInput';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver(of=>Pet)
export class PetsResolver {

    constructor(public petService: PetsService){}

   @Query(returns => Pet)
   findOne(@Args('id', {type: ()=> Int}) id: number): Promise<Pet>{
      return this.petService.findOne(id);
   }
    @Query(returns => [Pet])
    pets(): Promise<Pet[]>{
        return this.petService.findAll();
    }  
    @Mutation(returns => Pet)
    createPet(@Args('createPetInput') createPetInput: CreatePetInput): Promise<Pet>{
        return this.petService.createPet(createPetInput);
    }
}
