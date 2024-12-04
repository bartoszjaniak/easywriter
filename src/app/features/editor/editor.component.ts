import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';

@Component({
  selector: 'app-editor',
  imports: [CommonModule],
  host: {
    class: 'evert-styles',
  },
  template: `<div #editorjs></div> `,
  styleUrl: './editor.component.scss',
})
export class EditorComponent implements AfterViewInit {
  private editor?: EditorJS;

  private containerRef = inject(ElementRef);

  @ViewChild('editorjs') editorContainer!: ElementRef;
  ngAfterViewInit(): void {
    if (!this.editor) {
      this.editor = new EditorJS({
        holder: this.editorContainer.nativeElement,
        placeholder: 'Let`s write an awesome story!',
        autofocus: true,
        tools: {
          header: Header,
        },
        inlineToolbar: true,
        onChange: (api, event) => this.onSave(),
        onReady: () => this.onEditorReady(),
      });
    }

    // this.editor.isReady.then(() => {
    //   const styles = document
    //     .querySelector('#editor-js-styles')
    //     ?.cloneNode(true)!;

    //   const shadowRoot =
    //     this.editorContainer.nativeElement.getRootNode() as ShadowRoot;

    //   const firstChild = shadowRoot.firstChild;
    //   shadowRoot.insertBefore(styles, firstChild);
    // });
  }

  protected title = '';

  private currentLoadedId: number | null = null;
  private onEditorReady = () => {
    // effect(
    //   () => {
    //     const content = this.contentStore.loadedChapter();
    //     const data = content.data;
    //     if (
    //       content.state === 'loaded' &&
    //       data &&
    //       data.id != this.currentLoadedId &&
    //       this.editor?.blocks
    //     ) {
    //       this.currentLoadedId = data.id;
    //       if (data) {
    //         if (data.content) this.editor.render(data.content);
    //         else this.editor.clear();
    //         this.title = data.name || '';
    //       } else {
    //         this.title = '';
    //         this.editor.clear();
    //       }
    //     }
    //   },
    //   { injector: this.injector }
    // );
  };

  private onSave = () =>
    this.editor!.save()
      .then((outputData) => {
        console.log('Saving succeeded: ', outputData);
        // const loaded = this.loadedContent();

        // if (loaded) {
        //   this.contentStore.updateChapter({
        //     ...loaded,
        //     name: this.title,
        //     content: outputData,
        //   });
        // }
      })
      .catch((error: any) => {
        console.log('Saving failed: ', error);
      });

  onChange(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.title = (event.target as HTMLInputElement).value;
    this.onSave();
  }
}
