import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M229.66,98.34a8,8,0,0,0,0-11.31L169,26.34a8,8,0,0,0-11.31,0L100.39,83.8S72.64,69.93,43,93.85a8,8,0,0,0-.65,11.91l107.9,107.89a8,8,0,0,0,12-.83c8.39-11.16,21.57-34.09,10.11-57Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M229.66,98.34a8,8,0,0,0,0-11.31L169,26.34a8,8,0,0,0-11.31,0L100.39,83.8S72.64,69.93,43,93.85a8,8,0,0,0-.65,11.91l107.9,107.89a8,8,0,0,0,12-.83c8.39-11.16,21.57-34.09,10.11-57Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M229.66,98.34a8,8,0,0,0,0-11.31L169,26.34a8,8,0,0,0-11.31,0L100.39,83.8S72.64,69.93,43,93.85a8,8,0,0,0-.65,11.91l107.9,107.89a8,8,0,0,0,12-.83c8.39-11.16,21.57-34.09,10.11-57Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M229.66,98.34a8,8,0,0,0,0-11.31L169,26.34a8,8,0,0,0-11.31,0L100.39,83.8S72.64,69.93,43,93.85a8,8,0,0,0-.65,11.91l107.9,107.89a8,8,0,0,0,12-.83c8.39-11.16,21.57-34.09,10.11-57Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M235.33,104l-53.47,53.65c4.56,12.67,6.45,33.89-13.19,60A15.93,15.93,0,0,1,157,224c-.38,0-.75,0-1.13,0a16,16,0,0,1-11.32-4.69L96.29,171,53.66,213.66a8,8,0,0,1-11.32-11.32L85,159.71l-48.3-48.3A16,16,0,0,1,38,87.63c25.42-20.51,49.75-16.48,60.4-13.14L152,20.7a16,16,0,0,1,22.63,0l60.69,60.68A16,16,0,0,1,235.33,104Z" fill="currentColor"/></>,
  duotone: <><path d="M229.66,98.34a8,8,0,0,0,0-11.31L169,26.34a8,8,0,0,0-11.31,0L100.39,83.8S72.64,69.93,43,93.85a8,8,0,0,0-.65,11.91l107.9,107.89a8,8,0,0,0,12-.83c8.39-11.16,21.57-34.09,10.11-57Z" opacity="0.2" fill="currentColor"/><path d="M229.66,98.34a8,8,0,0,0,0-11.31L169,26.34a8,8,0,0,0-11.31,0L100.39,83.8S72.64,69.93,43,93.85a8,8,0,0,0-.65,11.91l107.9,107.89a8,8,0,0,0,12-.83c8.39-11.16,21.57-34.09,10.11-57Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const PushPinIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
