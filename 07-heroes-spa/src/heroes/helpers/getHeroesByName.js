import { heroes } from "../Data/heroes"

export const getHeroesByName=(name)=>{
    name=name.toLowerCase().trim();
    if(name.length===0) return [];

    return heroes.filter(
        hero=>hero.superhero.toLowerCase().includes(name)
    );
}