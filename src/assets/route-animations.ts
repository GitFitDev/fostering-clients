import { trigger, transition, style, query, group, animate, keyframes, AnimationMetadataType} from '@angular/animations';

const optional = { optional: true };
// const Animation_STEPS: AnimationMetadata[] = [];
// const Animations_STEPS_IE: AnimationMetadata[] = [ // subset of all steps
//   ANIMATION_STEPS[1], 
//   ANIMATION_STEPS[3]
// ];
// if (isIEorEdge()) {
//   ANIMATION_STEPS.splice(0, 1); // remove first animation step
// }

let toTheRight = [
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: '0',
      right: 0,
      width: '100%',
    })
  ], optional),
  query(':enter', [
    style({ right: '-100%',  })
  ]),
  group([
    query(':leave', [
      animate('300ms ease', style({ right: '100%', }))
    ], optional),
    query(':enter', [
      animate('300ms ease', style({ right: '0%'}))
    ])
  ]),
];
let toTheLeft = [
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: '0',
      left: 0,
      width: '100%',
    })
  ], optional),
  query(':enter', [
    style({ right: '-100%',  })
  ]),
  group([
    query(':leave', [
      animate('300ms ease', style({ left: '100%', }))
    ], optional),
    query(':enter', [
      animate('300ms ease', style({ left: '0%'}))
    ])
  ]),
]
 
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => isLeft', toTheLeft),
    transition('* => isRight', toTheRight),
    transition('isRight => *', toTheLeft),
    transition('isLeft => *', toTheRight),
  ]);