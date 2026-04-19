import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" strokeWidth="8" className="draw-line"/><circle cx="92" cy="108" r="8" fill="currentColor"/><circle cx="164" cy="108" r="8" fill="currentColor"/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" strokeWidth="12" className="draw-line"/><circle cx="92" cy="108" r="10" fill="currentColor"/><circle cx="164" cy="108" r="10" fill="currentColor"/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" strokeWidth="16" className="draw-line"/><path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" strokeWidth="16" className="draw-line"/><circle cx="92" cy="108" r="12" fill="currentColor"/><circle cx="164" cy="108" r="12" fill="currentColor"/></>,
  bold: <><path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" strokeWidth="24" className="draw-line"/><circle cx="92" cy="108" r="16" fill="currentColor"/><circle cx="164" cy="108" r="16" fill="currentColor"/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,24a104,104,0,1,0,30.57,203.43,7.9,7.9,0,0,0,3.3-2l63.57-63.57a8,8,0,0,0,2-3.31A104.09,104.09,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm82.92,60c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z" fill="currentColor"/></>,
  duotone: <><path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" opacity="0.2" fill="currentColor"/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" strokeWidth="16" className="draw-line"/><path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" strokeWidth="16" className="draw-line"/><circle cx="92" cy="108" r="12" fill="currentColor"/><circle cx="164" cy="108" r="12" fill="currentColor"/></>,
};

export const SmileyStickerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
