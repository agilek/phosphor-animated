import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M30.93,198.72C47.39,181.19,90.6,144,152,144v48l80-80L152,32V80C99.2,80,31.51,130.45,24,195.54A4,4,0,0,0,30.93,198.72Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M30.93,198.72C47.39,181.19,90.6,144,152,144v48l80-80L152,32V80C99.2,80,31.51,130.45,24,195.54A4,4,0,0,0,30.93,198.72Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M30.93,198.72C47.39,181.19,90.6,144,152,144v48l80-80L152,32V80C99.2,80,31.51,130.45,24,195.54A4,4,0,0,0,30.93,198.72Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M30.93,198.72C47.39,181.19,90.6,144,152,144v48l80-80L152,32V80C99.2,80,31.51,130.45,24,195.54A4,4,0,0,0,30.93,198.72Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M237.66,117.66l-80,80A8,8,0,0,1,144,192V152.23c-57.1,3.24-96.25,40.27-107.24,52h0a12,12,0,0,1-20.68-9.58c3.71-32.26,21.38-63.29,49.76-87.37,23.57-20,52.22-32.69,78.16-34.91V32a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,237.66,117.66Z" fill="currentColor"/></>,
  duotone: <><path d="M30.93,198.72C47.39,181.19,90.6,144,152,144v48l80-80L152,32V80C99.2,80,31.51,130.45,24,195.54A4,4,0,0,0,30.93,198.72Z" opacity="0.2" fill="currentColor"/><path d="M30.93,198.72C47.39,181.19,90.6,144,152,144v48l80-80L152,32V80C99.2,80,31.51,130.45,24,195.54A4,4,0,0,0,30.93,198.72Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const ShareFatIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
