import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroesComponent } from "./heroes.component"
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "../hero/hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('HeroesComponent (Deep tests)', () => {

    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;   

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'SpiderDude', strenght: 8 },
            {id: 2, name: 'Wonderful Woman', strenght: 24 },
            {id: 3, name: 'SuperDude', strenght: 55 }
        ];
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                HeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
        
    });

    it('should render each hero as a HeroComponent', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));

        // run ngOnInit
        fixture.detectChanges();
        
        const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));
        expect(heroComponentDEs.length).toEqual(3);

        for (let i = 0; i < heroComponentDEs.length; i++) {
            expect(heroComponentDEs[i].componentInstance.hero).toEqual(HEROES[i]);
        }
    })
})