import * as React from 'react'
import {useEffect, useState} from 'react'

interface IHero {
    id: number
    name:string
    enemyList:IEnemy[]
}

interface IEnemy {
    id: number,
    name:string,
}

const HeroApiGeneratorResults = () => {
    const [hero, setUser] = useState<IHero>();

    const getHero = async () => {
        let response = await fetch("http://localhost:9001/api/test/hero?name=Batman");
        let hero = await response.json();
        setUser(hero);
        console.log(hero.enemyList)
    };

    useEffect(() => {
        getHero();
    }, []);

    return (
        <div>
            {hero?.name} {hero?.id}
            <div>
                {hero?.enemyList.map((enemy)=> <div>{enemy.name}</div>)}
            </div>
        </div>
    )
};

export default HeroApiGeneratorResults;
