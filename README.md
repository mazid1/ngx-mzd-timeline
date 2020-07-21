# ngx-mzd-timeline

Angular material theme supported minimalist's vertical timeline library for Angular applications. 

## Live Demo

Live demo is available at [github pages](https://mazid1.github.io/ngx-mzd-timeline).

## Getting Started

1) run `npm install --save ngx-mzd-timeline`
2) import `MzdTimelineModule` in your app module

```typescript
...
import { MzdTimelineModule } from 'ngx-mzd-timeline';

@NgModule({
  ...
  imports: [
    ...
    MzdTimelineModule
  ]
})
export class AppModule { }
```

## Usage

### Minimal Setup

```xml
<mzd-timeline>
  <mzd-timeline-content>
      Your HTML code or any angular component can be placed here.
      Content will be displayed in a card.
  </mzd-timeline-content>
</mzd-timeline>
```

### Icon

`mzd-icon` supports [fontawesome](https://fontawesome.com/icons) icons.

```xml
<mzd-timeline>
  <mzd-icon><fa-icon icon="briefcase"></fa-icon></mzd-icon>
  <mzd-timeline-content>
      Your HTML code or any angular component can be placed here.
      Content will be displayed in a card.
  </mzd-timeline-content>
</mzd-timeline>
```

### Border

Border around the content

```xml
<mzd-timeline>
  <mzd-icon><fa-icon icon="briefcase"></fa-icon></mzd-icon>
  <mzd-timeline-content [border]="true">
      Your HTML code or any angular component can be placed here.
      Content will be displayed in a card.
  </mzd-timeline-content>
</mzd-timeline>
```

### Other Examples

Other examples can be found in the [app.component.html](https://github.com/mazid1/ngx-mzd-timeline/blob/master/src/app/app.component.html) file.

## Angular Material Theme

The package supports angular material theme. In your own angular material theme:

```typescript
@import '~@angular/material/theming';
@import "~ngx-mzd-timeline/src/mzd-timeline.theme.scss";

...

@include angular-material-theme($your-theme);
@include mzd-timeline-theme($your-theme);
```

## Components

### MzdTimeline

#### Content
| tag                      | number |
| ------------------------ | ------ |
| `<mzd-timeline-content>` |     n  |

#### Inputs
| property           | type    | default | impact                                                                                                                                                                                                                                                                             |
| ------------------ | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `alternateSide`    | boolean | true    | If set to true, entries will be displayed alternately (`'left'` / `'right'`). In XS devices, if set ture, contents will be placed at `'right'` side of the vertical line; if set false, content will be placed at `'left'`/`'right'` depending on the value of `firstContentSide`. |
| `firstContentSide` | string  | 'left'  | Changes side (`'left'` / `'right'`) of the first content is shown on. If `alternateSide` is `false`, all the contents will follow the side of the first content, otherwise contents will take side alternately. No effect in XS devices if `alternateSide` is `true`.              |

### MzdTimelineContent

#### Content
| tag                          | number |
| ---------------------------- | ------ |
| `<mzd-icon>`                 |   0/1  |
| any html / angular component |     n  |

> `mat-card` can also be used. An example can be found in [app.component.html](https://github.com/mazid1/ngx-mzd-timeline/blob/master/src/app/app.component.html) file.

#### Inputs
| property | type    | default | impact                                                        |
| -------- | ------- | ------- | ------------------------------------------------------------- |
| `card`   | boolean | true    | Creates box shadow around the content, similar to `mat-card`. |
| `border` | boolean | false   | Creates border around the content.                            |

### MzdIcon

#### Content
Supports [fontawesome](https://fontawesome.com/icons) icon as content.
| tag                          | number |
| ---------------------------- | ------ |
| `<fa-icon>`                  |   0/1  |

Single English letter can also be used as icon. For example:
```xml
<mzd-icon><strong>X<strong></mzd-icon>
```

#### Inputs
No input for this component.

# About

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

# For Devlopers Who Want To Contribute

## Code scaffolding

Run `ng generate component component-name --project ngx-mzd-timeline` to generate a new component inside the library. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-mzd-timeline`.
> Note: Don't forget to add `--project ngx-mzd-timeline` or else it will be added to the default demo app. 

## Build

Run `ng build ngx-mzd-timeline --prod` to build the library project. The build artifacts will be stored in the `dist/` directory.
Run `ng build` to build the demo app. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test ngx-mzd-timeline` to execute the unit tests of the library via [Karma](https://karma-runner.github.io).
Run `ng test` to execute the unit tests of the demo app via [Karma](https://karma-runner.github.io).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
