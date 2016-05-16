import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
	// See the "Take it slow" appendix
	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(() => resolve(HEROES), 2000) // 2 seconds
		);
	}
}