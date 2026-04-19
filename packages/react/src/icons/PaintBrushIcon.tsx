import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M16,216H92a52,52,0,1,0-52-52C40,200,16,216,16,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112.41,116.16C131.6,90.29,179.46,32,224,32c0,44.54-58.29,92.4-84.16,111.59" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M133,90.64a84.39,84.39,0,0,1,32.41,32.41" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M16,216H92a52,52,0,1,0-52-52C40,200,16,216,16,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112.41,116.16C131.6,90.29,179.46,32,224,32c0,44.54-58.29,92.4-84.16,111.59" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M133,90.64a84.39,84.39,0,0,1,32.41,32.41" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M16,216H92a52,52,0,1,0-52-52C40,200,16,216,16,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112.41,116.16C131.6,90.29,179.46,32,224,32c0,44.54-58.29,92.4-84.16,111.59" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M133,90.64a84.39,84.39,0,0,1,32.41,32.41" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M16,216H92a52,52,0,1,0-52-52C40,200,16,216,16,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112.41,116.16C131.6,90.29,179.46,32,224,32c0,44.54-58.29,92.4-84.16,111.59" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M138.4,84.54a92.55,92.55,0,0,1,33,33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M16,216H92a52,52,0,1,0-52-52C40,200,16,216,16,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112.41,116.16C131.6,90.29,179.46,32,224,32c0,44.54-58.29,92.4-84.16,111.59" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M133,90.64a84.39,84.39,0,0,1,32.41,32.41" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const PaintBrushIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
