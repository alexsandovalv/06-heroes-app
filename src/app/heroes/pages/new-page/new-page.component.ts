import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { filter, switchMap } from "rxjs";
import { ConfirmDialogComponent } from "../../components/confirm-dialog/confirm-dialog.component";

import { Hero, Publisher } from "../../interfaces/hero.interface";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit{

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable:true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
    ) {
  }

  get currentHero(): Hero {
    return this.heroForm.value as Hero;
  }

  onSubmit():void {
    if( this.heroForm.invalid ) return;

    if( this.currentHero.id ){
      this.heroService.updatedHero(this.currentHero)
        .subscribe( hero => {
          //TODO: mostrar snackbar
          this.showSnackbar(`${ hero.superhero} updated!`);
        } );
    }

    this.heroService.addHero( this.currentHero )
      .subscribe( hero => {
        //TODO: mostrar snackbar y redireccionar
        this.router.navigate(['/heroes/edit', hero.id]);
        this.showSnackbar(`${ hero.superhero} created!`);
      });

    return;
  }

  ngOnInit(): void {
    if( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroService.getHeroById( id ) ),
      ).subscribe( hero => {
        if( !hero ) return this.router.navigateByUrl('/');

        this.heroForm.reset(hero);
        return;
    });
  }

  onDeleteHero(){
    if( !this.currentHero.id ) throw Error('Here id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
             .pipe(
               filter( (result: boolean) => result ), //pasa solamente los resultados con estado true
               switchMap( () => this.heroService.deleteHeroById( this.currentHero.id ) ),
               filter( (wasDeleted) => wasDeleted )
             )
             .subscribe( () => {
               this.router.navigate(['/heroes']);
        });

    /*dialogRef.afterClosed().subscribe( result => {

      if( !result ) return;
      console.log('Deleted');

      this.heroService.deleteHeroById( this.currentHero.id )
        .subscribe( wasDeleted => {
          if( wasDeleted )
            this.router.navigate(['/heroes']).then(r => true);
        } );

    });*/

  }
  showSnackbar( message: string){
    this.snackBar.open( message, 'done', {
      duration: 500
    } )
  }

}
