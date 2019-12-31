import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroesComponent } from "./heroes.component"
import { HeroService } from "../hero.service";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { of } from "rxjs";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";

describe('HeroesComponent (Shallow tests)', () => {

    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    //Create a mock hero component that is a child component of the heroes component

    @Component({
        selector: 'app-hero',
        template: '<div></div>'
    })
    class MockHeroComponent {
        @Input() hero: Hero;
        // @Output() delete = new EventEmitter();
    }      

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
                MockHeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ],
            // schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should set heroes correctly from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
    });

    it('should create one li for each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    })
})