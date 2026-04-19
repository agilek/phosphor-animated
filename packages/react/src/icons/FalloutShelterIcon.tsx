import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><polygon points="96 80 160 80 128 128 96 80" strokeWidth="8" className="draw-line"/><polygon points="128 128 192 128 160 176 128 128" strokeWidth="8" className="draw-line"/><polygon points="64 128 128 128 96 176 64 128" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><polygon points="96 80 160 80 128 128 96 80" strokeWidth="12" className="draw-line"/><polygon points="128 128 192 128 160 176 128 128" strokeWidth="12" className="draw-line"/><polygon points="64 128 128 128 96 176 64 128" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polygon points="96 80 160 80 128 128 96 80" strokeWidth="16" className="draw-line"/><polygon points="128 128 192 128 160 176 128 128" strokeWidth="16" className="draw-line"/><polygon points="64 128 128 128 96 176 64 128" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><path d="M162.58,78.34A12,12,0,0,0,152,72H104A12,12,0,0,0,94,90.66l24,36a12,12,0,0,0,20,0l24-36A12,12,0,0,0,162.58,78.34Z" fill="currentColor"/><path d="M194.58,126.34A12,12,0,0,0,184,120H136a12,12,0,0,0-10,18.66l24,36a12,12,0,0,0,20,0l24-36A12,12,0,0,0,194.58,126.34Z" fill="currentColor"/><path d="M130.58,126.34A12,12,0,0,0,120,120H72a12,12,0,0,0-10,18.66l24,36a12,12,0,0,0,20,0l24-36A12,12,0,0,0,130.58,126.34Z" fill="currentColor"/></>,
  fill: <><path d="M231.94,124.55c-1.77-54.49-46-98.72-100.49-100.49A104.09,104.09,0,0,0,24.06,131.45c1.77,54.49,46,98.72,100.49,100.49A104.09,104.09,0,0,0,231.94,124.55Zm-33.56,16.92L174.93,174.3a8.52,8.52,0,0,1-13.86,0L128,128,94.93,174.3a8.52,8.52,0,0,1-13.86,0L57.62,141.47A8.52,8.52,0,0,1,64.55,128H128L97.62,85.47A8.52,8.52,0,0,1,104.55,72h46.9a8.52,8.52,0,0,1,6.93,13.47L128,128h63.45A8.52,8.52,0,0,1,198.38,141.47Z" fill="currentColor"/></>,
  duotone: <><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm32,144-32-48L96,176,64,128h64L96,80h64l-32,48h64Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polygon points="96 80 160 80 128 128 96 80" strokeWidth="16" className="draw-line"/><polygon points="128 128 192 128 160 176 128 128" strokeWidth="16" className="draw-line"/><polygon points="64 128 128 128 96 176 64 128" strokeWidth="16" className="draw-line"/></>,
};

export const FalloutShelterIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
