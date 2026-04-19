import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM160,176a8,8,0,0,1,0,16H96a8,8,0,0,1-5.79-13.52L145.9,120a24,24,0,0,0-35.73-32A23.33,23.33,0,0,0,107,92.38a8,8,0,0,1-14-7.77,40.22,40.22,0,0,1,5.28-7.38,40,40,0,0,1,59.45,53.54l-.16.16L114.66,176Z" fill="currentColor"/></>,
  duotone: <><path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2" fill="currentColor"/><path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const NumberTwoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
