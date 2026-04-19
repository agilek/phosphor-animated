import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM144.56,173.66l-21.45,21.45a44,44,0,0,1-62.22-62.22l21.45-21.46a8,8,0,0,1,11.32,11.31L72.2,144.2a28,28,0,0,0,39.6,39.6l21.45-21.46a8,8,0,0,1,11.31,11.32Zm50.55-50.55-21.45,21.45a8,8,0,0,1-11.32-11.31L183.8,111.8a28,28,0,0,0-39.6-39.6L122.74,93.66a8,8,0,0,1-11.31-11.32l21.46-21.45a44,44,0,0,1,62.22,62.22Z" fill="currentColor"/></>,
  duotone: <><path d="M113.94,209.94a48,48,0,0,1-67.88-67.88l96-96a48,48,0,0,1,67.88,67.88Z" opacity="0.2" fill="currentColor"/><path d="M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const LinkSimpleBreakIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
