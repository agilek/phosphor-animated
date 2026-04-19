import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M200,112v88.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33a8,8,0,0,1,4.8,1.6L120,104h72A8,8,0,0,1,200,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,80V56a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L152,72h72a8,8,0,0,1,8,8v88.89a7.11,7.11,0,0,1-7.11,7.11H200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M200,112v88.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33a8,8,0,0,1,4.8,1.6L120,104h72A8,8,0,0,1,200,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,80V56a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L152,72h72a8,8,0,0,1,8,8v88.89a7.11,7.11,0,0,1-7.11,7.11H200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M200,112v88.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33a8,8,0,0,1,4.8,1.6L120,104h72A8,8,0,0,1,200,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,112v88.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33a8,8,0,0,1,4.8,1.6L120,104h72A8,8,0,0,1,200,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M64,80V56a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L152,72h72a8,8,0,0,1,8,8v88.89a7.11,7.11,0,0,1-7.11,7.11H200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M196,116v88.89a7.11,7.11,0,0,1-7.11,7.11H36a8,8,0,0,1-8-8V92a8,8,0,0,1,8-8H81.33a8,8,0,0,1,4.8,1.6L116,108h72A8,8,0,0,1,196,116Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M68,84V52a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L156,68h72a8,8,0,0,1,8,8v88.89a7.11,7.11,0,0,1-7.11,7.11H196" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M200,112v88.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33a8,8,0,0,1,4.8,1.6L120,104h72A8,8,0,0,1,200,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,80V56a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L152,72h72a8,8,0,0,1,8,8v88.89a7.11,7.11,0,0,1-7.11,7.11H200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FoldersIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
