import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HiddenMenuComponent } from '../../../../shared/components/hidden-menu/hidden-menu.component';

@Component({
  selector: 'app-chapters',
  imports: [CommonModule, RouterModule, HiddenMenuComponent],
  templateUrl: './chapters.component.html',
  styleUrl: './chapters.component.scss',
})
export class ChaptersComponent {
  //protected store = inject(ContentStore);

  protected menuPositions = [{ label: 'usuń rozdział', key: 'delete' }];

  protected chapters = [
    { id: 1, name: 'Rozdział 1' },
    { id: 2, name: 'Rozdział 2' },
    { id: 3, name: 'Rozdział 3' },
    { id: 4, name: 'Rozdział 4' },
    { id: 5, name: 'Rozdział 5' },
  ];

  protected addChapter() {
    // this.store.addChapter({ name: 'Nowy rozdział' });
  }

  protected onMenuAction(action: string, id: number) {
    switch (action) {
      case 'delete':
        this.removeChapter(id);
        break;
    }
  }

  protected removeChapter(id: number) {
    // this.store.removeChapter(id);
  }
}
